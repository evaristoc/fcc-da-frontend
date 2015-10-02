angular.module('fccDaFrontEndApp')
  .directive('helpZiplines', ['$resource', 'd3Service', function($resource, d3Service) {
    return {
      restrict: 'EA',
      scope: {},
      link: function(scope, elem, attrs) {
        d3Service.d3().then(function(d3) {

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

          var Resource = $resource('/api/v1/data', {}, {
            isArray: true
          });
          Resource.query().$promise.then(function(totaldata) {
            // success handler
            var predata = totaldata[0];

            var data = [];
            var k_objects = Object.keys(predata);
            for (var k = 0; k < k_objects.length; k++) {
              if (Object.prototype.hasOwnProperty.call(predata, k_objects[k])) {

                data.push({
                  day: k_objects[k],
                  hum: predata[k_objects[k]].hum,
                  bot: predata[k_objects[k]].bot
                })
              }
            }

            // Set the ranges
            var minDate = getDate(data[0].day),
              maxDate = getDate(data[data.length - 1].day);
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
                return x(getDate(d.day));
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
            // day
            data.forEach(function(e, i, a) {
              d = parseDate(e.day);
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
              .attr("d", valueline(data));

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
  }]).directive('helpBonfires', ['$resource', 'd3Service', function($resource, d3Service) {
    return {
      restrict: 'EA',
      scope: {},
      link: function(scope, elem, attrs) {
        d3Service.d3().then(function(d3) {

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

          var Resource = $resource('/api/v1/data', {}, {
            isArray: true
          });
          Resource.query().$promise.then(function(totaldata) {
            // success handler
            var predata = totaldata[1];
            console.log(predata)
            var data = [];
            var k_objects = Object.keys(predata);
            for (var k = 0; k < k_objects.length; k++) {
              if (Object.prototype.hasOwnProperty.call(predata, k_objects[k])) {

                data.push({
                  day: k_objects[k],
                  hum: predata[k_objects[k]].hum,
                  bot: predata[k_objects[k]].bot
                })
              }
            }

            // Set the ranges
            var minDate = getDate(data[0].day),
              maxDate = getDate(data[data.length - 1].day);
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
                return x(getDate(d.day));
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
            // day
            data.forEach(function(e, i, a) {
              d = parseDate(e.day);
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
              .attr("d", valueline(data));

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
  }]).directive('letsPair', ['$resource', 'd3Service', function($resource, d3Service) {
    return {
      restrict: 'EA',
      scope: {},
      link: function(scope, elem, attrs) {
        d3Service.d3().then(function(d3) {

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

          var Resource = $resource('/api/v1/data', {}, {
            isArray: true
          });
          Resource.query().$promise.then(function(totaldata) {
            // success handler
            var predata = totaldata[2];
            console.log(predata)
            var data = [];
            var k_objects = Object.keys(predata);
            for (var k = 0; k < k_objects.length; k++) {
              if (Object.prototype.hasOwnProperty.call(predata, k_objects[k])) {

                data.push({
                  day: k_objects[k],
                  hum: predata[k_objects[k]].hum,
                  bot: predata[k_objects[k]].bot
                })
              }
            }

            // Set the ranges
            var minDate = getDate(data[0].day),
              maxDate = getDate(data[data.length - 1].day);
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
                return x(getDate(d.day));
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
            // day
            data.forEach(function(e, i, a) {
              d = parseDate(e.day);
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
              .attr("d", valueline(data));

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
  }])
