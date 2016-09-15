//Here we are declaring the projection object for Web Mercator
var projection = ol.proj.get('EPSG:3857');

//Define Basemap
//Here we are declaring the raster layer as a separate object to put in the map later
var baseLayer = new ol.layer.Tile({
    source: new ol.source.BingMaps({
        key: 'mTB47n9L0MFOGRhhqhSQ~2-nugTc2D3pR_xCQaIkkkA~AvZJMfE0fC2v73sNZHG_BMFpMdKO3UEIBREgkfW04yRiVelD9RLCiipXI4DMlfwf',
        imagerySet: 'AerialWithLabels' //Options 'Aerial', 'AerialWithLabels", 'Road'
        })
    });

var servDir = 'http://geoserver.byu.edu/arcgis/services/Flood_Threat/floodThreat/MapServer/WmsServer?'

//Define all WMS Sources:
var velocity_1 =  new ol.source.TileWMS({
        url:servDir,

        params:{
            LAYERS:"8",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

var velocity_2 =  new ol.source.TileWMS({
        url:servDir,

        params:{
            LAYERS:"9",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

var velocity_3 =  new ol.source.TileWMS({
        url:servDir,

        params:{
            LAYERS:"10",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

var velocity_4 =  new ol.source.TileWMS({
        url:servDir,

        params:{
            LAYERS:"11",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

var velocity_5 =  new ol.source.TileWMS({
        url:servDir,

        params:{
            LAYERS:"12",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

//Define all WMS layers
//The gauge layers can be changed to layer.Image instead of layer.Tile (and .ImageWMS instead of .TileWMS) for a single tile
var speed_1 = new ol.layer.Tile({
    source:velocity_1,
    visible: false
    });

var speed_2 = new ol.layer.Tile({
    source:velocity_2,
    visible: false
    });

var speed_3 = new ol.layer.Tile({
    source:velocity_3,
    visible: false
    });

var speed_4 = new ol.layer.Tile({
    source:velocity_4,
    visible: false
    });

var speed_5 = new ol.layer.Tile({
    source:velocity_5,
    visible: false
    });

//Set opacity of layers
speed_1.setOpacity(0.75);
speed_2.setOpacity(0.75);
speed_3.setOpacity(0.75);
speed_4.setOpacity(0.75);
speed_5.setOpacity(0.75);

sources = [velocity_1, velocity_2, velocity_3, velocity_4, velocity_5];
layers = [baseLayer, speed_1, speed_2, speed_3, speed_4, speed_5];
toggleLayers = [speed_1, speed_2, speed_3, speed_4, speed_5];

function onClickToggleLayers(showLayer){
    toggleLayers.forEach(function(layer){
    layer.setVisible(layer==showLayer);
    });
    }

//Establish the view area. Note the reprojection from lat long (EPSG:4326) to Web Mercator (EPSG:3857)
var view = new ol.View({
        center: [-8378000, 4851000],
        projection: projection,
        zoom: 13,
    });

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
});
