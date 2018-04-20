d3.json(freedomlist, function (data) {
  var width = 500;
  var height = 500;
  var heightScale = d3.scaleLinear()
    .domain([0, 500])
    .range([0, height]);

  var color = d3.scaleLinear()
    .domain([0,500])
    .range(["red","blue"]);

  var canvas =  d3.select("main")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

  var bars = canvas.selectAll("rect")
    .data(dataArray)
    .enter()
    .append("rect")
    .attr("width", 45)
    .attr("height", function(d) { return freedomlist.Freedom; })
    .attr("fill", function(d){ return color(d); })
    .attr("x", function(d, i){ return i * 100; });
  });
 console.log(d3);
 console.log(data);
