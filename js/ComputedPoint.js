

function ComputedPoint(latLng,heading) {
    this.latLng= latLng;
    this.heading = heading;
}

//gestisce msg di critical error
ComputedPoint.prototype.compute = function(distance) {
    this.log(msg);
//    alert(msg);
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