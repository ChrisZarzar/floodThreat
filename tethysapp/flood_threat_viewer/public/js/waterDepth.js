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

//Define all WMS Sources:
var depth1 =  new ol.source.TileWMS({
        url:'http://geoserver.byu.edu/arcgis/services/HyEFIUM/Nayc2D_test/MapServer/WmsServer?',

        params:{
            LAYERS:"18",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

var depth2 =  new ol.source.TileWMS({
        url:'http://geoserver.byu.edu/arcgis/services/HyEFIUM/Nayc2D_test/MapServer/WmsServer?',

        params:{
            LAYERS:"12",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

var depth3 =  new ol.source.TileWMS({
        url:'http://geoserver.byu.edu/arcgis/services/HyEFIUM/Nayc2D_test/MapServer/WmsServer?',

        params:{
            LAYERS:"7",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

var depth4 =  new ol.source.TileWMS({
        url:'http://geoserver.byu.edu/arcgis/services/HyEFIUM/Nayc2D_test/MapServer/WmsServer?',

        params:{
            LAYERS:"13",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

var depth5 =  new ol.source.TileWMS({
        url:'http://geoserver.byu.edu/arcgis/services/HyEFIUM/Nayc2D_test/MapServer/WmsServer?',

        params:{
            LAYERS:"17",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

var depth6 =  new ol.source.TileWMS({
        url:'http://geoserver.byu.edu/arcgis/services/HyEFIUM/Nayc2D_test/MapServer/WmsServer?',

        params:{
            LAYERS:"8",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

var depth7 =  new ol.source.TileWMS({
        url:'http://geoserver.byu.edu/arcgis/services/HyEFIUM/Nayc2D_test/MapServer/WmsServer?',

        params:{
            LAYERS:"4",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

//Define all WMS layers
//The gauge layers can be changed to layer.Image instead of layer.Tile (and .ImageWMS instead of .TileWMS) for a single tile
var depthLyr1 = new ol.layer.Tile({
    source:depth1,
    visible:false
    });

var depthLyr2 = new ol.layer.Tile({
    source:depth2,
    visible:false
    });

var depthLyr3 = new ol.layer.Tile({
    source:depth3,
    visible:false
    });

var depthLyr4 = new ol.layer.Tile({
    source:depth4,
    visible:false
    });

var depthLyr5 = new ol.layer.Tile({
    source:depth5,
    visible:false
    });

var depthLyr6 = new ol.layer.Tile({
    source:depth6,
    visible:false
    });

var depthLyr7 = new ol.layer.Tile({
    source:depth7,
    visible:false
    });

sources = [depth1, depth2, depth3, depth4, depth5, depth6, depth7];
layers = [baseLayer, depthLyr1, depthLyr2, depthLyr3, depthLyr4, depthLyr5, depthLyr6, depthLyr7];
toggleLayers = [depthLyr1, depthLyr2, depthLyr3, depthLyr4, depthLyr5, depthLyr6, depthLyr7];

function onClickToggleLayers(showLayer){
    toggleLayers.forEach(function(layer){
    layer.setVisible(layer==showLayer);
    });
    }
//Establish the view area. Note the reprojection from lat long (EPSG:4326) to Web Mercator (EPSG:3857)
var view = new ol.View({
        center: [-8380000, 4850000],
        projection: projection,
        zoom: 12.5
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
