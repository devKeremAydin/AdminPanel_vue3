<template>
    <div class="dashboard">
      <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
        <h3>Dashboard</h3>
        <v-btn color="success">View Orders</v-btn>
      </v-subheader>
      <br />
      <v-row>
        <div id="vuechart-example-1">
          <apexchart width="500" type="bar" :options="options1" :series="series1"></apexchart>
        </div>
        <div id="vuechart-example-2" style="margin-left: 130px;">
          <apexchart type="pie" width="380" :options="pieChartOptions" :series="pieSeries"></apexchart>
        </div>
      </v-row>
      <div id="vuechart-example-3">
        <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
    </div>
  </template>
  
  <script>
  import VueApexCharts from "vue3-apexcharts";
  
  export default {
    name: "Dashboard",
    components: {
      apexchart: VueApexCharts,
    },
    data() {
      return {
        options1: {
          chart: {
            id: "vuechart-example-1",
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          },
        },
        series1: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
        ],
        pieChartOptions: {
          chart: {
            width: 380,
            type: "pie",
          },
          labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        },
        pieSeries: [44, 55, 13, 43, 22],
        options2: {
          chart: {
            id: "vuechart-example-3",
          },
          xaxis: {
            categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008],
          },
        },
        series2: [
          {
            name: "series-3",
            data: [20, 35, 55, 42, 67, 74, 82, 95],
          },
        ],
        series: [
          {
            name: "PRODUCT A",
            data: [44, 55, 41, 67, 22, 43],
          },
          {
            name: "PRODUCT B",
            data: [13, 23, 20, 8, 13, 27],
          },
          {
            name: "PRODUCT C",
            data: [11, 17, 15, 15, 21, 14],
          },
          {
            name: "PRODUCT D",
            data: [21, 7, 25, 13, 22, 8],
          },
        ],
        chartOptions: {
          chart: {
            type: "bar",
            height: 350,
            stacked: true,
            toolbar: {
              show: true,
            },
            zoom: {
              enabled: true,
            },
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  position: "bottom",
                  offsetX: -10,
                  offsetY: 0,
                },
              },
            },
          ],
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 10,
              dataLabels: {
                total: {
                  enabled: true,
                  style: {
                    fontSize: "13px",
                    fontWeight: 900,
                  },
                },
              },
            },
          },
          xaxis: {
            type: "datetime",
            categories: [
              "01/01/2011 GMT",
              "01/02/2011 GMT",
              "01/03/2011 GMT",
              "01/04/2011 GMT",
              "01/05/2011 GMT",
              "01/06/2011 GMT",
            ],
          },
          legend: {
            position: "right",
            offsetY: 40,
          },
          fill: {
            opacity: 1,
          },
        },
      };
    },
  };
  </script>
  
  <style scoped>
  /* Bu kısmı ihtiyaca göre düzenleyin */
  </style>
  