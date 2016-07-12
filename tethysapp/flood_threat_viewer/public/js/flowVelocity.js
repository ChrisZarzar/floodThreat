//Here we are declaring the projection object for Web Mercator
var projection = ol.proj.get('EPSG:3857');

//Define Basemap
//Here we are declaring the raster layer as a separate object to put in the map later
var baseLayer = new ol.layer.Tile({
    source: new ol.source.BingMaps({layer: 'osm'})
});

//Define all WMS Sources:
var velocity_1 =  new ol.source.TileWMS({
        url:'http://geoserver.byu.edu/arcgis/services/HyEFIUM/Nayc2D_test/MapServer/WmsServer?',

        params:{
            LAYERS:"11",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

var velocity_2 =  new ol.source.TileWMS({
        url:'http://geoserver.byu.edu/arcgis/services/HyEFIUM/Nayc2D_test/MapServer/WmsServer?',

        params:{
            LAYERS:"20",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

//Define all WMS layers
//The gauge layers can be changed to layer.Image instead of layer.Tile (and .ImageWMS instead of .TileWMS) for a single tile
var speed_1 = new ol.layer.Tile({
    source:velocity_1
    });

var speed_2 = new ol.layer.Tile({
    source:velocity_2
    });

sources = [velocity_1, velocity_2];
layers = [baseLayer, speed_1, speed_2];

//Establish the view area. Note the reprojection from lat long (EPSG:4326) to Web Mercator (EPSG:3857)
var view = new ol.View({
        center: [-8380000, 4850000],
        projection: projection,
        zoom: 13,
    })

//Declare the map object itself.
var map = new ol.Map({
    target: document.getElementById("map"),
    layers: layers,
    view: view,
});

map.addControl(new ol.control.ZoomSlider());

//This function is ran to set a listener to update the map size when the navigation pane is opened or closed
(function () {
    var target, observer, config;
    // select the target node
    target = $('#app-content-wrapper')[0];

    observer = new MutationObserver(function () {
        window.setTimeout(function () {
            map.updateSize();
        }, 350);
    });

    config = {attributes: true};

    observer.observe(target, config);
}());
