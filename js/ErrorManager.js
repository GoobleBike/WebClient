

function ErrorManager(logApi) {
    //array dei punti gooble
    this.logApi= logApi;
}

//gestisce msg di critical error
ErrorManager.prototype.critical = function(msg) {
    this.log(msg);
//    alert(msg);
};

//gestisce msg di debug
ErrorManager.prototype.debug = function(msg) {
    this.log(msg);
//    alert(msg);
};

ErrorManager.prototype.log = function(msg) {
    //chiama api
    console.log(msg);
};


