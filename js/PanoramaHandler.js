
function PanoramaHandler(elementId) {
    //
    this.elementId= elementId;
    this.centerLtLn = {lat: 44.489623, lng: 11.309306};//"44.489623,11.309306","44.479385,11.296335"
    this.sv = new google.maps.StreetViewService();

    this.panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'));

    // Set up the map.
    this.map = new google.maps.Map(document.getElementById(this.elementId), {
      center: this.centerLtLn,
      zoom: 16,
      streetViewControl: false
    });

    // Set the initial Street View camera to the center of the map
    this.sv.getPanorama({location: this.centerLtLn, radius: 50}, this.processSVData);

}


// Look for a nearby Street View panorama when the map is clicked.
// getPanoramaByLocation will return the nearest pano when the
// given radius is 50 meters or less.
PanoramaHandler.prototype.newPanorama = function(latLng) {
    this.sv.getPanorama({location: event.latLng, radius: 50}, this.processSVData);
}

//
PanoramaHandler.prototype.processSVData = function(data, status) {
    if (status === 'OK') {
        var marker = new google.maps.Marker({
            position: data.location.latLng,
            map: map,
            title: data.location.description
        });

        this.panorama.setPano(data.location.pano);
        this.panorama.setPov({
            heading: 270,
            pitch: 0
        });
        this.panorama.setVisible(true);

        marker.addListener('click', function() {
            var markerPanoID = data.location.pano;
            // Set the Pano to use the passed panoID.
            ph.panorama.setPano(markerPanoID);
            ph.panorama.setPov({
                heading: 270,
                pitch: 0
            });
            ph.panorama.setVisible(true);
        });
    } else {
        console.error('Street View data not found for this location.');
    }
};

