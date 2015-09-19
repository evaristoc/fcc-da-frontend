angular.module('fccDaFrontEndApp')
  .directive('d3Directive', ['$resource','d3Service', function($resource, d3Service) {
    return {
      restrict: 'EA',
      scope: {},
      link: function(scope, elem, attrs) {
        d3Service.d3().then(function(d3) {
          // organising dates http://stackoverflow.com/questions/7114152/given-a-start-and-end-date-create-an-array-of-the-dates-between-the-two
          http://stackoverflow.com/questions/3894048/what-is-the-best-way-to-initialize-a-javascript-date-to-midnight
          var startDate = new Date(2014,10,1);
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
              console.log(daterange);
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
          var margin = {
              top: 30,
              right: 20,
              bottom: 30,
              left: 50
            },
            width = 600 - margin.left - margin.right,
            height = 270 - margin.top - margin.bottom;

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
          console.log(totaldata);
          var predata = totaldata[0];
          console.log(typeof predata);
          
          var tempdata = [];
          var k_objects = Object.keys(predata);
          for (var k = 0; k < k_objects.length; k++){
            if (Object.prototype.hasOwnProperty.call(predata, k_objects[k])) {
        //    console.log(Object.prototype.hasOwnProperty.call(result_mapred, k_objects[k]))
        //    console.log({day:k_objects[k], hum:result_mapred[k_objects[k]].hum, bot:result_mapred[k_objects[k]].bot})
              tempdata.push({day:getDate(k_objects[k]).setHours(0,0,0,0), hum:predata[k_objects[k]].hum, bot:predata[k_objects[k]].bot})
            }
          }
          console.log(tempdata);
          console.log(startDate, endDate);
          var dater = dateRange(startDate, endDate);
          var data = [];
          for (var pos = 0; pos < dater.length; pos++) {
            data.push(0);
          }
          console.log('data: ', data);
          for (var kk = 0; kk < tempdata.length; kk++) {
           console.log(tempdata[kk].day);
           //http://stackoverflow.com/questions/3894048/what-is-the-best-way-to-initialize-a-javascript-date-to-midnight
           //console.log(getDate(tempdata[kk].day).setHours(0,0,0,0));
           data[dater.indexOf(tempdata[kk].day)] = tempdata[kk];
          }
          console.log('data: ', data);
          ////var days = data.keys;
          ////console.log(days);
          //// Set the ranges
          for (var kkk = 0; kkk < data.length; kkk++) {
            if (data[kkk] == 0) {
              data[kkk] = {day:dater[kkk], hum:0, bot:0};
            }
          };
          var minDate = tempdata[0].day,
            maxDate = data[data.length - 1].day;
          console.log(minDate, maxDate);
          //var x = d3.scale.linear().range([0, width]);
          var x = d3.time.scale().range([0, width]);
          var y = d3.scale.linear().range([height, 0]);
          
          // Define the axes
          var xAxis = d3.svg.axis().scale(x)
            .orient("bottom").ticks(5);
          
          var yAxis = d3.svg.axis().scale(y)
            .orient("left").ticks(5);
          
          // Define the line
          var valueline = d3.svg.line()
            .x(function(d) {
              return x(d.day);
            })
            .y(function(d) {
              return y(d.hum);
            });
          
          // Adds the svg canvas
          var svg = d3.select(elem[0]) //select where directive was added
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");
          
          var h = [];
          var useddata = [];
          for (var kkkk = 0; kkkk < data.length; kkkk++) {
            console.log(minDate, data[kkkk].day)
            if (minDate == data[kkkk].day) {
              var slicdata = data.indexOf(data[kkkk]);
              //for (kkkk; kkkk < data.length; kkkk++) {
              //  useddata.push(data[kkkk])
              //}
              var useddata = data.slice(slicdata, (data.length-1));
              break;
            }
          };
          console.log(useddata);
          
          useddata.forEach(function(e, i, a) {
            //d = parseDate(e.day);
            console.log(e.day);
            h.push(e.hum);
          });
          
          // Scale the range of the data
          
          x.domain([minDate, maxDate]).range([0, width]);
          y.domain([0, d3.max(h, function(d) {
            return d;
          })]);
          
          // Add the valueline path.
          svg.append("path")
            .attr("class", "line")
            .attr("d", valueline(useddata));
          
          // Add the X Axis
          svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
          
          // Add the Y Axis
          svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);
          }, function(error) {
          // error handler
          console.log("$resouce call got an ERROR");
          });

        });
      }
    }
  }]);
