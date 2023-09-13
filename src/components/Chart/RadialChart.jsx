import React from "react";
import ReactApexChart from "react-apexcharts";
class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 20, 80],
      options: {
        colors: ["#1FAA59", "#38CC77", "#02B290"],
        chart: {
          type: "radialBar",
          height: 350,
          width: 380,
        },
        plotOptions: {
          radialBar: {
            size: undefined,
            inverseOrder: true,
            hollow: {
              margin: 0,
              size: "48%",
              background: "transparent",
            },
            // track: {
            //   show: false
            // },
            startAngle: 0,
            endAngle: 270,
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["June", "May", "April"],
        legend: {
          show: true,
          floating: true,
          position: "right",
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
          type="radialBar"
          height={350}
        />
      </div>
    );
  }
}

export default BarChart;
