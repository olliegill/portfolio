var chart = c3.generate({
    bindto: '#chart1',
    data: {
        columns: [
            ['Amount I love charts', 0.95],
            ['Amount I realise how useless they are here', 0.05]
        ],
        type: 'pie'
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
  data: {}
});
