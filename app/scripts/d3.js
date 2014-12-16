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
