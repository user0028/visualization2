var vg_1 = "choro_death.vg.json";
var vg_2 = "stream.vg.json";
var vg_3 = "slope.vg.json";
var vg_4 = "area.vg.json";
var vg_5 = "choro_vax.vg.json";
var vg_6 = "test3.vg.json";
var vg_7 = "gdp.vg.json";


vegaEmbed("#choropleth_death", vg_1).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#stream_graph', vg_2, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#heat_map', vg_3, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#slope_chart', vg_4, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#choropleth_vax', vg_5, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#waffle_chart', vg_6, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#multi_line', vg_7, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);