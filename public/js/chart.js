var width = 1500;
var height = 1500;
var heightScale = d3.scaleLinear()
  .domain([0, 1])
  .range([0, height]);

var color = d3.scaleLinear()
  .domain([0,1])
  .range(["orange","blue"]);

var canvas =  d3.select("main")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

var bars = canvas.selectAll("rect")
  .data(freedomlist)
  .enter()
    .append("rect")
    .attr("width", 10)
    .attr("height", function(d) { return d.Freedom * 1000; })
    .attr("fill", function(d){ return color(d.Freedom); })
    .attr("x", function(d, i){ return i * 5; });
