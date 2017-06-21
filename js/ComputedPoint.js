
Number.prototype.toRad = function() {
    return this * Math.PI / 180;
}

Number.prototype.toDeg = function() {
    return this * 180 / Math.PI;
}

/**
 * Determina un punto in base a un altro, distanza e direzione
 * @param {type} radianti angolo in radianti
 * @param {type} dist distanza in m
 * @returns {google.maps.LatLng}
 */
google.maps.LatLng.prototype.destinationPoint = function(rad, dist) {
    dist = dist / 6371000;  

    var lat1 = this.lat().toRad(), lon1 = this.lng().toRad();

    var lat2 = Math.asin(Math.sin(lat1) * Math.cos(dist) + 
                        Math.cos(lat1) * Math.sin(dist) * Math.cos(rad));

    var lon2 = lon1 + Math.atan2(Math.sin(rad) * Math.sin(dist) *
                                Math.cos(lat1), 
                                Math.cos(dist) - Math.sin(lat1) *
                                Math.sin(lat2));

    if (isNaN(lat2) || isNaN(lon2)) return null;

    return new google.maps.LatLng(lat2.toDeg(), lon2.toDeg());
}



function ComputedPoint(latLng,heading) {
    this.latLng= latLng;
    this.heading = heading;
}

//gestisce msg di critical error
ComputedPoint.prototype.compute = function(distance) {
    this.latLng= this.latLng.destinationPoint(this.heading,distance);
};


//https://stackoverflow.com/questions/2637023/how-to-calculate-the-latlng-of-a-point-a-certain-distance-away-from-another


/*
public double CalculationByDistance(double initialLat, double initialLong,
                            double finalLat, double finalLong){
int R = 6371; // km
double dLat = toRadians(finalLat-initialLat);
double dLon = toRadians(finalLong-initialLong);
lat1 = toRadians(lat1);
lat2 = toRadians(lat2);

double a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
return R * c;
}

public double toRadians(deg) {
  return deg * (Math.PI/180)
}

*/