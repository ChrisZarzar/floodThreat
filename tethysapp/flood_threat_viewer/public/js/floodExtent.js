//Here we are declaring the projection object for Web Mercator
var projection = ol.proj.get('EPSG:3857');

//Define Basemap
//Here we are declaring the raster layer as a separate object to put in the map later at https://www.bingmapsportal.com/
//Need to get personal

var baseLayer = new ol.layer.Tile({
    source: new ol.source.BingMaps({
        key: 'mTB47n9L0MFOGRhhqhSQ~2-nugTc2D3pR_xCQaIkkkA~AvZJMfE0fC2v73sNZHG_BMFpMdKO3UEIBREgkfW04yRiVelD9RLCiipXI4DMlfwf',
        imagerySet: 'AerialWithLabels' //Options 'Aerial', 'AerialWithLabels", 'Road'
        })
    });

var servDir = 'http://geoserver.byu.edu/arcgis/services/Flood_Threat/floodThreat/MapServer/WmsServer?'



//Define all WMS Sources:
var off =  new ol.source.TileWMS({
        url:servDir,

        params:{
            LAYERS:"",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

var flood =  new ol.source.TileWMS({
        url:servDir,

        params:{
            LAYERS:"0",
//            FORMAT:"image/png", //Not a necessary line, but maybe useful if needed later
        },
        crossOrigin: 'Anonymous' //This is necessary for CORS security in the browser
        });

//Define all WMS layers
//The gauge layers can be changed to layer.Image instead of layer.Tile (and .ImageWMS instead of .TileWMS) for a single tile
var offLyr = new ol.layer.Tile({
    source:off,
    visible: false
    });

var fldextLyr = new ol.layer.Tile({
    source:flood,
    visible:false
    });

//Set opacity of layers
fldextLyr.setOpacity(0.75);

sources = [off, flood];
layers = [baseLayer, offLyr, fldextLyr];
toggleLayers = [offLyr, fldextLyr];

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

