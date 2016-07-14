from tethys_sdk.base import TethysAppBase, url_map_maker


class FloodThreatViewer(TethysAppBase):
    """
    Tethys app class for Flood Threat Viewer.
    """

    name = 'Flood Threat Viewer'
    index = 'flood_threat_viewer:home'
    icon = 'flood_threat_viewer/images/flood2.jpeg'
    critLeg = 'flood_threat_viewer/images/wms.png'
    fvLeg = 'flood_threat_viewer/images/fvLeg.gif'
    wdLeg = 'flood_threat_viewer/images/wdLeg.gif'
    fldextLeg = 'flood_threat_viewer/images/fldextLeg.gif'
    package = 'flood_threat_viewer'
    root_url = 'flood-threat-viewer'
    color = '#003C77'
    description = 'Place a brief description of your app here.'
    enable_feedback = False
    feedback_emails = []

        
    def url_maps(self):
        """
        Add controllers
        """
        UrlMap = url_map_maker(self.root_url)

        url_maps = (UrlMap(name='home',
                           url='flood-threat-viewer',
                           controller='flood_threat_viewer.controllers.home'),
                    UrlMap(name='Instructions',
                           url='Instructions',
                           controller='flood_threat_viewer.controllers.Instructions'),
                    UrlMap(name='floodExtent',
                           url='floodExtent',
                           controller='flood_threat_viewer.controllers.floodExtent'),
                    UrlMap(name='waterDepth',
                           url='waterDepth',
                           controller='flood_threat_viewer.controllers.waterDepth'),
                    UrlMap(name='flowVelocity',
                           url='flowVelocity',
                           controller='flood_threat_viewer.controllers.flowVelocity'),
                    UrlMap(name='critConditions',
                           url='critConditions',
                           controller='flood_threat_viewer.controllers.critConditions'),
        )

        return url_maps