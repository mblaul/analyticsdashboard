function generateBarChart(){
  var countries =  freedomlist.map(function(f){
    return f.Country;
  });

  var margin = {top: 5, right: 5, bottom: 50, left: 50};
  var fullWidth = 600;
  var fullHeight = 400;
  // the width and height values will be used in the ranges of our scales

  var width = fullWidth - margin.right - margin.left;
  var height = fullHeight - margin.top - margin.bottom;

  var svg = d3.select('#holder').append('svg')
    .attr('width', fullWidth)
    .attr('height', fullHeight)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  var freedomScale = d3.scaleLinear()
    .domain([0, d3.max(freedomlist, function (d) { return d.Freedom; })])
    .range([height, 0])
    .nice();

  var countryScale = d3.scaleBand()
    .domain(countries)
    .range([0, width])
    .paddingInner(0.1);

  var bandwidth = countryScale.bandwidth();

  var barHolder = svg.append('g')
    .classed('bar-holder', true);

    barHolder.selectAll('rect.bar')
        .data(freedomlist)
      .enter().append('rect')
        .classed('bar', true)
        .attr('x', function(d, i) {
          return countryScale(d.Country);
        })
        .attr('width', bandwidth)
        .attr('fill', "#0375B4")
        .attr('y', function(d) {
          return freedomScale(d.Freedom);
        })
        .attr('height', function(d) {
          return height - freedomScale(d.Freedom);
        });

  var xaxis = d3.axisBottom(countryScale)
    .tickSizeOuter(0);
  var yaxis = d3.axisLeft(freedomScale);

  svg.append('g')
    .classed('x axis', true)
    .attr('transform', 'translate(0,' + height + ')')
    .call(xaxis);

  svg.append('g')
    .classed('y axis', true)
    .call(yaxis);
};

generateBarChart();
