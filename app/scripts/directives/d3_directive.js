//http://cloudspace.com/blog/2014/03/25/creating-d3.js-charts-using-angularjs-directives/#.Vf04frylilM
angular.module('fccDaFrontEndApp')
  .directive('d3Directive', ['$resource','d3Service', function($resource, d3Service) {
    return {
      restrict: 'EA',
      scope: {},
      //http://www.sitepoint.com/creating-charting-directives-using-angularjs-d3-js/
      template:"<form> <label><input type='radio' name='mode' value='grouped'> Grouped</label><label><input type='radio' name='mode' value='stacked' checked> Stacked</label></form>",
      link: function(scope, elem, attrs) {
        d3Service.d3().then(function(d3) {
          // organising dates http://stackoverflow.com/questions/7114152/given-a-start-and-end-date-create-an-array-of-the-dates-between-the-two
          //http://stackoverflow.com/questions/3894048/what-is-the-best-way-to-initialize-a-javascript-date-to-midnight
          var startDate = new Date(2015,6,15);
          var endDate = new Date();
          
          function dateRange(sdate, edate) {
            var day;
            var daterange = [];
            var previousdate = sdate;
            var enddate = edate;
            while (previousdate <= enddate) {
              //console.log(day);
              day = previousdate.getDate();
              previousdate = new Date(previousdate.setDate(++day));
              //var formatteddate = previousdate.getFullYear()+'-'+previousdate.getMonth()+'-'+previousdate.getDate();
              daterange.push(previousdate.setHours(0,0,0,0));
              //console.log(daterange);
            }
            //resorting (!!) https://onpub.com/how-to-sort-an-array-of-dates-with-javascript-s7-a109
            var date_sort_asc = function (date1, date2) {
              // This is a comparison function that will result in dates being sorted in
              // ASCENDING order. As you can see, JavaScript's native comparison operators
              // can be used to compare dates. This was news to me.
              if (date1 > date2) return 1;
              if (date1 < date2) return -1;
              return 0;
            };
            return daterange.sort(date_sort_asc);
          };
          
          // based on http://bl.ocks.org/d3noob/b3ff6ae1c120eea654b5
          // based on http://stackoverflow.com/questions/8301531/dealing-with-dates-on-d3-js-axis
          // based on http://codepen.io/sandeepguggu/pen/bnwos
          // Set the dimensions of the canvas / graph

          // helper function
          function getDate(d) {
            return new Date(d);
          }

          // Parse the date / time
          var parseDate = d3.time.format("%y-%b-%d").parse;
          
          //dataService.data().then(function(data){console.log('IN ANGULAR ',data)});
          console.log('Before dataService call...');
          //http://stackoverflow.com/questions/20584367/how-to-handle-resource-service-errors-in-angularjs
          var Resource = $resource('/data',{},{isArray:true});
          Resource.query().$promise.then(function(totaldata) {
          // success handler
          
          var predata = [];
          
          for (var col = 0; col < totaldata.length; col++) {
            var k_objects = Object.keys(totaldata[col]);
            //console.log(k_objects);
            var subdata = [];
            for (var ks = 0; ks < k_objects.length; ks++) {
              if (Object.prototype.hasOwnProperty.call(totaldata[col], k_objects[ks])) {
                subdata.push({day:getDate(k_objects[ks]).setHours(0,0,0,0), hum:totaldata[col][k_objects[ks]].hum, bot:totaldata[col][k_objects[ks]].bot});
              };
            };
            predata.push(subdata);
          };
          
          console.log('predata ',predata);
          var ddata = [];
          var dater = dateRange(startDate, endDate);
          
          for (var ys = 0; ys < predata.length; ys++){
            var subdata = new Array();
            for (var pos = 0; pos < dater.length; pos++) {
              //subdata.push({x:pos,y:0});
              subdata.push({x:new Date(dater[pos]),y:0})
            };
            for (var k = 0; k < predata[ys].length; k++) {
              subdata[dater.indexOf(predata[ys][k].day)].y = predata[ys][k].hum;
            };
            
            ddata.push(subdata);
          };

          console.log('data ', ddata);

          var minDate = dater[0],
              maxDate = dater[dater.length - 1];
              
          //https://javadude.wordpress.com/2012/06/18/d3-js-most-simple-stack-layout-with-bars/
          //http://bl.ocks.org/mbostock/1134768
          //http://bl.ocks.org/mbostock/3943967
          //http://bl.ocks.org/mbostock/1166403
          //http://bl.ocks.org/mbostock/3808218
          //http://www.d3noob.org/2012/12/adding-axis-labels-to-d3js-graph.html
          //ddata.unshift(dater);
          var margin = {
              top: 30,
              right: 50,
              bottom: 30,
              left: 50
            };
          //width = 600 - margin.left - margin.right,
          //height = 270 - margin.top - margin.bottom;
          
          var width = 780;
          var height = 500;
          var p = [20, 50, 30, 50];
          
          var svg = d3.select(elem[0])
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
            //  "translate(" + p[3] + "," + (height - p[2]) + ")");          

          var n = ddata.length; 

          var stacked = d3.layout.stack()(ddata);
          //console.log('stacked ',stacked)
          
          var color_range = d3.scale.linear().domain([0, n - 1]).range(["#aad", "#556"]);
          
          //http://hdnrnzk.me/2012/07/04/creating-a-bar-graph-using-d3js/
          //http://www.ireneros.com/conf/nicar/introduction-to-d3.html#9
          //http://stackoverflow.com/questions/31816637/d3js-error-while-drawing-the-chart
          //http://www.d3noob.org/2013/01/format-date-time-axis-with-specified.html
          var format = d3.time.format("%d/%m/%Y");
          var x = d3.scale.ordinal().rangeRoundBands([0, width - margin.right - margin.left]);
          var xdate = d3.time.scale().range([0, width - margin.right - margin.left]);
          //xdate.domain(stacked[0].map(function(d) { console.log('in domain x', d); return d.x; }));
          xdate.domain([new Date(dater[0]), new Date(dater[dater.length-1])]);
          var xAxis = d3.svg.axis()
            .scale(xdate)
            .tickSize(0)
            .tickPadding(6)
            .orient("bottom")
            .ticks(5)
            .tickFormat(format);             
          x.domain(stacked[0].map(function(d) { return d.x; }));
          //07/201507/201507/201507/201507/201507/201507/201507/201507/201507/201507/201507/201507/201507/201507/201507/201508/201508/201508/201508/201508/201508/201508/201508/201508/201508/201508/201508/201508/201508/201508/201508/201508/201508/201508/201508/201508/201508/201508/201508/201508/201508/201508/201508/201508/201508/201508/201509/201509/201509/201509/201509/201509/201509/201509/201509/201509/201509/201509/201509/201509/201509/201509/201509/201509/201509/201509/2015
          
          
          var yGroupMax = d3.max(ddata, function(dd) { return d3.max(dd, function(d) { return d.y; }); });
          var yStackMax = d3.max(stacked, function(dd) { return d3.max(dd, function(d) { return d.y0 + d.y; }); });
          var y = d3.scale.linear().domain([0, yStackMax]).range([height, 0]);
          //yAxis (axis()) is a function, not an object per se...
          var yAxis = d3.svg.axis()
            .scale(y)
            .orient("right")
            .ticks(5);
          
          console.log(yGroupMax, yStackMax);
          
          //console.log("x.domain(): " + x.domain())
          //console.log("y.domain(): " + y.domain())
          //console.log("------------------------------------------------------------------");

          var valgroup = svg.selectAll("g.valgroup")
            .data(stacked)
            .enter().append("svg:g")
            .attr("class", "valgroup")
            .style("fill", function(d, i) { return color_range(i); })
            .style("stroke", function(d, i) { return d3.rgb(color_range(i)).darker(); });          
          
          var rect = valgroup.selectAll("rect")
           .data(function(d){return d;})
           .enter().append("svg:rect")
           .attr("x", function(d) { return x(d.x); })
           .attr("y", height)
           .attr("width", x.rangeBand())
           .attr("height", 0);
          
          //start as stacked...
          rect.transition()
            .delay(function(d, i) { return i * 10; })
            .attr("y", function(d) { return y(d.y0 + d.y); })
            .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); });
            
          svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
          
          //console.log(width - margin.left);
          var yaxis_pos = width - margin.left
          
          svg.append("g")
            .attr("class", "yaxis")
            .attr("transform", "translate(" + yaxis_pos + ",0)")
            .call(yAxis);
            //.remove();

          
          var legendRectSize = 20;
          var legendSpacing = 5;
          
          var legend = d3.select('svg')
            .append("g")
            .selectAll("g")
            .data(color_range.domain())
            .enter()
            .append('g')
              .attr('class', 'legend')
              .attr('transform', function(d, i) {
                var height = legendRectSize;
                var x = 0;
                //var y = i;
                var y = i * height;
                return 'translate(' + x + ',' + y + ')';
            });
              
          legend.append('rect')
            .attr('width', legendRectSize)
            .attr('height', legendRectSize)
            .style('fill', color_range)
            .style('stroke', color_range);
          
          var roomnames = ["HelpZiplines", "HelpBonfires"]
          legend.append('text')
              .attr('x', legendRectSize + legendSpacing)
              .attr('y', legendRectSize - legendSpacing)
              .text(function(d) { return roomnames[d]; });
          
          
          d3.selectAll("input").on("change", change);
          
          var timeout = setTimeout(function() {
            d3.select("input[value=\"grouped\"]").property("checked", true).each(change);
          }, 2000);
          
          // from stacked to automatically grouped
          function change() {
            clearTimeout(timeout);
            if (this.value === "grouped") transitionGrouped();
            else transitionStacked();
          };

          
        function rescale(yrange) {
            svg.select(".yaxis")
                    .transition().duration(1500).ease("sin-in-out")  // https://github.com/mbostock/d3/wiki/Transitions#wiki-d3_ease
                    .call(yrange);  
            svg.select(".yaxis label")
                .text("Rescaled Axis");
        }          
          
        function transitionGrouped() {
          y.domain([0, yGroupMax]);
          console.log(1, yAxis);
          yAxis.scale(y);
          console.log(1, yAxis);
          console.log(1, svg.selectAll(".yaxis"));
          rect.transition()
            .duration(500)
            .delay(function(d, i) { return i * 10; })
            .attr("x", function(d, i, j) { return x(d.x) + x.rangeBand() / n * j; })
            .attr("width", x.rangeBand() / n)
            .transition()
            .attr("y", function(d) { return y(d.y); })
            .attr("height", function(d) { return height - y(d.y); });
          
          rescale(yAxis);
        }
        
        function transitionStacked() {
          y.domain([0, yStackMax]);
          console.log(2, yAxis);
          yAxis.scale(y);
          console.log(2, yAxis);
          console.log(2, svg.selectAll(".yaxis"));
          console.log(2, d3.select(".yaxis"));
          svg.select(".y axis").remove();
          console.log(2, svg.selectAll(".yaxis"));
          console.log(2, d3.select(".yaxis"));
          rect.transition()
            .duration(500)
            .delay(function(d, i) { return i * 10; })
            .attr("y", function(d) { return y(d.y0 + d.y); })
            .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); })
            .transition()
            .attr("x", function(d) { return x(d.x); })
            .attr("width", x.rangeBand());
          
          rescale(yAxis);
          
        }
      });
    });
   }
  }
}]);
