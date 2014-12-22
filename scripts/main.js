$(document).ready(function(){
  var mouseX, mouseY;
  var ww = $( window ).width();
  var wh = $( window ).height();
  var traX, traY;
  $(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 570) + 40;
    traY = ((4 * mouseY) / 570) + 50;
    //console.log(traX);
    $(".title").css({"background-position": traX + "%" + traY + "%"});
  });

  $(".nav-bar").sticky({ topSpacing: 0 });
});


var $dts = $('dt');
$dts.on('click', function(){
  $(this).toggleClass('open');
  $(this).parent('section').toggleClass('expanded');
});

var chart = c3.generate({
    bindto: '#chart1',
    data: {
        columns: [
            ['Amount I love charts', 0.95],
            ['Amount I realise how useless they are here', 0.05]
        ],
        type: 'pie'
    },

    color: {
      pattern: ['#009688', '#FFD34E']
    },

    pie: {
        label: {
            format: function (value, ratio, id) {
                return d3.format('%')(value);
            }
        }
    }
});

var chart2 = c3.generate({
  bindto: '#chart2',
  data: {
    columns: [
    ['Ice Hockey Blogs', 0.25],
    ['Looking at Cool Stuff on Codepen', 0.20],
    ['Playing Scrabble', 0.20],
    ['Videos of Cats Falling', 0.05],
    ['Programming Documentation', 0.25],
    ['Watching The Simpsons', 0.05]
    ],
    type: 'pie'
  },

  color: {
    pattern: ['#004D40', '#00695C', '#00796B', '#00897B', '#009688', '#26A69A']
  },

  pie: {
    label: {
      format: function (value, ratio, id) {
        return d3.format('%')(value);
      }
    }
  }
});

var chart3 = c3.generate({
  bindto: '#chart3',
  data: {
    columns: [
     ['Ghostbusters', 0, 50, 100, 100, 100, 80, 60, 40, 30, 40, 45, 50, 55, 60, 65],
     ['Video Games', 0, 0, 50, 90, 100, 100, 100, 90, 80, 70, 75, 80, 80, 70, 60],
     ['Punk Music', 0, 0, 0, 0, 0, 50, 75, 100, 100, 100, 100, 95, 90, 95, 95],
     ['The Simpons', 0, 0, 0, 20, 40, 60, 60, 70, 80, 80, 80, 60, 90, 90, 90],
     ['Mathematics', 10, 30, 90, 90, 90, 90, 90, 95, 95, 90, 70, 60, 70, 80, 90],
     ['Programming', 0, 0, 0, 0, 0, 0, 0, 0, 70, 50, 10, 10, 0, 100, 100],

    ],
    type: 'area-spline'
  },

  axis: {
    x: {
      label: 'Age',
      type: 'category',
      categories: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30']
    },

    y: {
      label: '% of influence'
    }

  }
});

var pubs =
{
  "name": "Ollie Gill",
  "children": [
{
  "name": "Programming","children": [
{"name": "HTML", "children": [
{"name": "SVG"},
{"name": "Canvas"}
]},
{"name": "CSS", "children": [
{"name": "SASS"},
{"name": "Bourbon"},
{"name": "Neat"},
{"name": "Bitters"},
{"name": "Responsive Design"},
{"name": "Animations"},
{"name": "Parallax Scrolling"}
]},
{"name": "Frameworks","children": [
{"name": "Ember", "children": [
{"name": "Liquid-fire"}
]},
{"name": "Backbone"}
]},
{"name": "Backends","children": [
{"name": "Firebase"},
{"name": "Parse"},
{"name": "AJAX"},
{"name": "JSON"},
{"name": "API Integration"}
]},
{"name": "JavaScript", "children":[
  {"name": "JavaScript"},
{"name": "JQuery"},
{"name": "Underscore"},
{"name": "Data", "children":[
{"name": "D3"},
{"name": "Chart.js"},
{"name": "Chartist.js"},
{"name": "C3"},
{"name": "SVG"},
{"name": "Paper.js"}
]}
]}
]
},
{"name": "Fun Stuff", "children": [
{"name": "Sports", "children": [
{"name": "Ice Hockey", "children": [
{"name": "Pittsburgh"},
{"name": "Stats nerd"},
]},
{"name": "Basketball"},
{"name": "Soccer"},
{"name": "Football"},
]},
{"name": "Cool Music", "children":[
{"name": "Punk"},
{"name": "Emo"},
{"name": "Alternative Indie"},
{"name": "Hardcore"},
]},
{"name": "Video Games"},
{"name": "Nerf Guns"},
{"name": "Beer"},

]},
{"name": "Always Learning", "children":[
{"name": "PHP"},
{"name": "D3"},
{"name": "Angular"},
{"name": "HAML"},
{"name": "Stylus"},
{"name": "LESS"},
{"name": "French"}
]},
{
  "name": "People Skills","children": [
{"name": "Team Management"},
{"name": "Client Rapport"},
{"name": "Cool British Accent"},
{"name": "Team Organisation"},
{"name": "Team Player"},
]
},
{"name": "Design","children": [
{"name": "UX/UI"},
{"name": "Designer Rapport"},
{"name": "Pure CSS"},
]},
{
  "name": "Comedic Relief","children": [
{"name": "Dry Humour"},
{"name": "British Idioms"},
{"name": "Funny Gifs"},
]},
]
};

var diameter = 1000;

var margin = {top: 20, right: 120, bottom: 20, left: 120},
width = diameter,
height = diameter;

var i = 0,
duration = 350,
root;

var tree = d3.layout.tree()
.size([360, diameter / 2 - 80])
.separation(function(a, b) { return (a.parent == b.parent ? 1 : 10) / a.depth; });

var diagonal = d3.svg.diagonal.radial()
.projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

var svg = d3.select("#chart4").append("svg")
.attr("width", width )
.attr("height", height )
.append("g")
.attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

root = pubs;
root.x0 = height / 2;
root.y0 = 0;

//root.children.forEach(collapse); // start with all children collapsed
update(root);

d3.select(self.frameElement).style("height", "800px");

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root),
  links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 105; });

  // Update the nodes…
  var node = svg.selectAll("g.node")
  .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
  .attr("class", "node")
  //.attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
  .on("click", click);

  nodeEnter.append("circle")
  .attr("r", 1e-6)
  .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeEnter.append("text")
  .attr("x", 10)
  .attr("dy", ".35em")
  .attr("text-anchor", "start")
  //.attr("transform", function(d) { return d.x < 180 ? "translate(0)" : "rotate(180)translate(-" + (d.name.length * 8.5)  + ")"; })
  .text(function(d) { return d.name; })
  .style("fill-opacity", 1e-6);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
  .duration(duration)
  .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; });

  nodeUpdate.select("circle")
  .attr("r", 4.5)
  .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeUpdate.select("text")
  .style("fill-opacity", 1)
  .attr("transform", function(d) { return d.x < 180 ? "translate(0)" : "rotate(180)translate(-" + (d.name.length + 50)  + ")"; });

  // TODO: appropriate transform
  var nodeExit = node.exit().transition()
  .duration(duration)
  //.attr("transform", function(d) { return "diagonal(" + source.y + "," + source.x + ")"; })
  .remove();

  nodeExit.select("circle")
  .attr("r", 1e-6);

  nodeExit.select("text")
  .style("fill-opacity", 1e-6);

  // Update the links…
  var link = svg.selectAll("path.link")
  .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
  .attr("class", "link")
  .attr("d", function(d) {
    var o = {x: source.x0, y: source.y0};
    return diagonal({source: o, target: o});
  });

  // Transition links to their new position.
  link.transition()
  .duration(duration)
  .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
  .duration(duration)
  .attr("d", function(d) {
    var o = {x: source.x, y: source.y};
    return diagonal({source: o, target: o});
  })
  .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

// Toggle children on click.
function click(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }

  update(d);
}

// Collapse nodes
function collapse(d) {
  if (d.children) {
    d._children = d.children;
    d._children.forEach(collapse);
    d.children = null;
  }
}
