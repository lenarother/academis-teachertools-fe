<template>

  <p> fkfge fhewgf fhoufoerg </p>

  <section class="section container is-fluid ">
  <div class="block ml-6 mr-6">

  <vue-highcharts
    type="chart"
    :options="chartOptions"
    :redrawOnUpdate="true"
    :oneToOneUpdate="false"
    :animateOnUpdate="true"
    @rendered="onRender"
  />

</div>
</section>

</template>
<script>
import { computed } from "vue";
import VueHighcharts from "vue3-highcharts";
import HighCharts from "highcharts";

export default {
  name: "SimpleChart",

  components: {
    VueHighcharts,
  },

  setup() {


    const fe2 = [
      {
        name: "Anuncio Facebook Anuncio Facebook Anuncio Facebook Anuncio Facebook Anuncio Facebook Anuncio Facebook",
        y: 5,
      },
      {
        name: "Anuncio Instagram Anuncio Instagram Anuncio Instagram Anuncio Instagram Anuncio Instagram ",
        y: 10,
      },
      {
        name: "Influencer X Influencer X Influencer X Influencer X Influencer X Influencer X Influencer X",
        y: 2,
      },
      {
        name: "Influencer Y",
        y: 8,
      },
    ];

    var totalClicks = 0;
    for (var doc of fe2) {
      totalClicks += doc.y;
    }

    console.log(totalClicks);

    const chartOptions = computed(() => ({
      chart: {
        type: "column",
      },
      title: {
        text: "Links mais acessados BeBrasil",
      },
      subtitle: {
        text: "Clique nas colunas para ver mais detalhes",
      },
      accessibility: {
        announceNewData: {
          enabled: true,
        },
      },
      /*
      xAxis: {
        type: "category",
      },
      */
      xAxis: [
        {
          id: 0,
          type: "category",
        },
        {
          id: 1,
          type: "datetime",
          //categories: data.categories
        },
      ],
      yAxis: {
        title: {
          text: "Votes",
        },
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            //format: '{point.y:.1f}%'
          },
        },
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        formatter: function () {
          var pcnt =
            (this.y /
              this.series.data.map((p) => p.y).reduce((a, b) => a + b, 0)) *
            100;
          return pcnt.toFixed(2) + "%";
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: "Browsers",
          colorByPoint: true,
          data: fe2,
        },
      ],
    }));

    const onRender = () => {
      console.log("Chart rendered");
    };

    return {
      chartOptions,
      onRender,
    };
  },
};
</script>