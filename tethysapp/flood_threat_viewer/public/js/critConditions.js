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
var crit1 =  new ol.source.TileWMS({
        url:servDir,

        params:{
            LAYERS:"13",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

var crit2 =  new ol.source.TileWMS({
        url:servDir,

        params:{
            LAYERS:"14",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

var crit3 =  new ol.source.TileWMS({
        url:servDir,

        params:{
            LAYERS:"22",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

var crit4 =  new ol.source.TileWMS({
        url:servDir,

        params:{
            LAYERS:"21",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

var crit5 =  new ol.source.TileWMS({
        url:servDir,

        params:{
            LAYERS:"20",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

var crit6 =  new ol.source.TileWMS({
        url:servDir,

        params:{
            LAYERS:"19",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

var crit7 =  new ol.source.TileWMS({
        url:servDir,

        params:{
            LAYERS:"18",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

var crit8 =  new ol.source.TileWMS({
        url:servDir,

        params:{
            LAYERS:"17",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

var crit9 =  new ol.source.TileWMS({
        url:servDir,

        params:{
            LAYERS:"16",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

var crit10 =  new ol.source.TileWMS({
        url:servDir,

        params:{
            LAYERS:"15",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });


//Define all WMS layers
//The gauge layers can be changed to layer.Image instead of layer.Tile (and .ImageWMS instead of .TileWMS) for a single tile
var critLyr1 = new ol.layer.Tile({
    source:crit1,
    visible:false
    });

var critLyr2 = new ol.layer.Tile({
    source:crit2,
    visible:false
    });

var critLyr3 = new ol.layer.Tile({
    source:crit3,
    visible:false
    });

var critLyr4 = new ol.layer.Tile({
    source:crit4,
    visible:false
    });

var critLyr5 = new ol.layer.Tile({
    source:crit5,
    visible:false
    });

var critLyr6 = new ol.layer.Tile({
    source:crit6,
    visible:false
    });

var critLyr7 = new ol.layer.Tile({
    source:crit7,
    visible:false
    });

var critLyr8 = new ol.layer.Tile({
    source:crit8,
    visible:false
    });

var critLyr9 = new ol.layer.Tile({
    source:crit9,
    visible:false
    });

var critLyr10 = new ol.layer.Tile({
    source:crit10,
    visible:false
    });

//Set opacity of layers
critLyr1.setOpacity(0.75);
critLyr2.setOpacity(0.75);
critLyr3.setOpacity(0.75);
critLyr4.setOpacity(0.75);
critLyr5.setOpacity(0.75);
critLyr6.setOpacity(0.75);
critLyr7.setOpacity(0.75);
critLyr8.setOpacity(0.75);
critLyr9.setOpacity(0.75);
critLyr10.setOpacity(0.75);

sources = [crit1, crit2, crit3, crit4, crit5, crit6, crit7, crit8, crit9, crit10];
layers = [baseLayer, critLyr1, critLyr2, critLyr3, critLyr4, critLyr5, critLyr6, critLyr7, critLyr8, critLyr9, critLyr10];
toggleLayers = [critLyr1, critLyr2, critLyr3, critLyr4, critLyr5, critLyr6, critLyr7, critLyr8, critLyr9, critLyr10];

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
}());
