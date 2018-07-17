/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

//var frameModule = require("ui/frame");


var page;
var datetime;
var frameModule = require("ui/frame");

//This function binds the viewmodel(this file .js) to the view(xml)
exports.loaded = function(args) {
    page = args.object;
};


exports.submit = function() {
    //send datetime
    datetime = page.getViewById("datetime");
    console.log(datetime.text);
    //send temperature
    temperature = page.getViewById("temperature");
    console.log(temperature.text);
};

exports.selfdestruction = function() {
    console.log("Selbstzerstörung aktiviert. Wir werden alle sterben in 10,...9,...");
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
};



const HomeViewModel = require("./home-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
