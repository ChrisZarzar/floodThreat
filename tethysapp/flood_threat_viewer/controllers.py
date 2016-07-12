from django.shortcuts import render
from django.contrib.auth.decorators import login_required
#from .model import SessionMaker
from tethys_gizmos.gizmo_options import MapView, MVLayer, MVView, TextInput
#from tethys_sdk.gizmos import SelectInput
#from tethys_sdk.gizmos import ToggleSwitch
#import urllib2



@login_required()
def home(request):
    """
    Controller for the app home page.
    """

    #Set up basemap
    # Define initial view for Map View
    # view_options = MVView(
    #     projection='EPSG:3857',
    #     center=[-8380000, 4845000],
    #     zoom=13,
    #     maxZoom=18,
    #     minZoom=2
    #     )

    # Configure the map
    # map_options = MapView(height='500px',
    #                       width='100%',
    # #                     layers=[geojson_layer],
    #                       view=view_options,
    #                       basemap='OpenStreetMap',
    #                       legend=True)

    # Pass variables to the template via the context dictionary
    #context = {"map_options": map_options}
    context=  {}


    return render(request, 'flood_threat_viewer/home.html', context)


def Instructions(request):
    context={}
    return render(request, 'flood_threat_viewer/Instructions.html',context)

def floodExtent(request):
     #Set up basemap
    # Define initial view for Map View
    # view_options = MVView(
    #     projection='EPSG:3857',
    #     center=[-8380000, 4847000],
    #     zoom=13,
    #     maxZoom=18,
    #     minZoom=2
    #     )

    # layer1 = MVLayer(source='ImageWMS',
    #                     options={'url': 'http://geoserver.byu.edu/arcgis/services/HyEFIUM/Nayc2D_test/MapServer/WmsServer?',
    #                             'params':{'LAYERS': '22'},
    #                              'serverType': 'geoserver'},
    #                     legend_title='Flood Extent',
    #                     legend_extent=[-83.8, 48.5, -80, 52]
    #                         )
    # layer2 = MVLayer(source='ImageWMS',
    #                     options={'url': 'http://geoserver.byu.edu/arcgis/services/HyEFIUM/Nayc2D_test/MapServer/WmsServer?',
    #                             'params':{'LAYERS': '21'},
    #                              'serverType': 'geoserver'},
    #                     legend_title='Flood Extent',
    #                     legend_extent=[-83.8, 48.5, -80, 52]
    #                  )
    #
    # layer3 = MVLayer(source='ImageWMS',
    #                     options={'url': 'http://geoserver.byu.edu/arcgis/services/HyEFIUM/Nayc2D_test/MapServer/WmsServer?',
    #                             'params':{'LAYERS': '20'},
    #                              'serverType': 'geoserver'},
    #                     legend_title='Flood Extent',
    #                     legend_extent=[-83.8, 48.5, -80, 52]
    #                  )

    # Configure the map
    # map_options = MapView(height='500px',
    #                       width='100%',
    #                       layers=[layer1, layer2, layer3],
    #                       view=view_options,
    #                       basemap='OpenStreetMap',
    #                       legend=True)

    # Pass variables to the template via the context dictionary
    #context = {"map_options": map_options}
    context=  {}
    return render(request, 'flood_threat_viewer/floodExtent.html',context)

def waterDepth(request):
    #Set up basemap
    # # Define initial view for Map View
    # view_options = MVView(
    #     projection='EPSG:3857',
    #     center=[-8379000, 4849000],
    #     zoom=13,
    #     maxZoom=18,
    #     minZoom=2
    #     )

    # # Configure the map
    # map_options = MapView(height='500px',
    #                       width='100%',
    # #                     layers=[geojson_layer],
    #                       view=view_options,
    #                       basemap='Bing',
    #                       legend=True)

    # Pass variables to the template via the context dictionary
    #context = {"map_options": map_options}
    context=  {}
    return render(request, 'flood_threat_viewer/waterDepth.html',context)

def flowVelocity(request):
    #Set up basemap
    # Define initial view for Map View
    # view_options = MVView(
    #     projection='EPSG:3857',
    #     center=[-8380000, 4849000],
    #     zoom=13,
    #     maxZoom=9,
    #     minZoom=2
    #     )

    # # Configure the map
    # map_options = MapView(height='500px',
    #                       width='100%',
    # #                     layers=[geojson_layer],
    #                       view=view_options,
    #                       basemap='OpenStreetMap',
    #                       legend=True)

    # Pass variables to the template via the context dictionary
    #context = {"map_options": map_options}
    context=  {}
    return render(request, 'flood_threat_viewer/flowVelocity.html',context)

def critConditions(request):
    #Set up basemap
    # Define initial view for Map View
    # view_options = MVView(
    #     projection='EPSG:3857',
    #     center=[-8380000, 4850000],
    #     zoom=13,
    #     maxZoom=18,
    #     minZoom=2
    #     )

    # Configure the map
    # map_options = MapView(height='500px',
    #                       width='100%',
    # #                     layers=[geojson_layer],
    #                       view=view_options,
    #                       basemap='OpenStreetMap',
    #                       legend=True)

#TEMPLATE
# #{% gizmo map_view map_options %}

    # Pass variables to the template via the context dictionary
    #context = {"map_options": map_options}
    context=  {}
    return render(request, 'flood_threat_viewer/critConditions.html',context)