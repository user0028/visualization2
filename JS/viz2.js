var vg_1 = "choro_death.vg.json";
var vg_2 = "stream.vg.json";
vegaEmbed("#choropleth_death", vg_1).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#stream_graph', vg_2, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
