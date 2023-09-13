import React from "react";
import ReactApexChart from "react-apexcharts";
class PopChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      options: {
        colors: ["#1FAA59", "#38CC77", "#02B290"],
        chart: {
          height: 350,
          type: "area",
          toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: true,
              selection: false,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true | '<img src="/static/icons/reset.png" width="20">',
              customIcons: [],
            },
            export: {
              csv: {
                filename: undefined,
                columnDelimiter: ",",
                headerCategory: "category",
                headerValue: "value",
                dateFormatter(timestamp) {
                  return new Date(timestamp).toDateString();
                },
              },
              svg: {
                filename: undefined,
              },
              png: {
                filename: undefined,
              },
            },
            autoSelected: "zoom",
          },
        },
        dataLabel: {
          enable: true,
        },
        plotOptions: {
          bar: {
            borderRadias: 50,
            startAngle: 0,
            endAngle: 270,
            distributed: false,
            endingShape: "rounded",
          },
          polarArea: {
            rings: {
              strokeWidth: 50,
              strokeColor: "#e8e8e8",
            },
            spokes: {
              strokeWidth: 50,
              connectorColors: "#e8e8e8",
            },
          },
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
        />
      </div>
    );
  }
}

// const icon = (icon) => {
//   return `<img src="${icon}" width="20" />`;
// };

export default PopChart;
