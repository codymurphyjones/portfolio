function findController(name, controllers) {
    var result = $.grep(controllers, function (item, index) {
        return item.controller.name == name;
    });
    return result.length ? result[0].controller : null;
}


var barcodeNum = ko.observable("");
var errMessage = ko.observable("");

var isWorking = ko.observable(false);



VelocityMeetings.scan = function (params) {

    var errorMessage = ko.observable("");

    var viewModel = {
        loadPanelVisible: ko.computed(function() { return isWorking();},this),
        errorMessage: errorMessage,
        scannumber: ko.computed({ read: function () { return barcodeNum(); }, write: function (value) { barcodeNum(value) }},this),
        errorVisible: ko.computed(function () {
            return errorMessage().length != 0;
        }),
        hideError: function () {
            errorMessage("");
        },
        OpenScan: function () {
            isWorking(true);
            this.scanBarcode();
        },

        scanBarcode: function () {
            //Capture image with device and process into barcode
            
            try
            {
                var scanner = cordova.require("cordova/plugin/BarcodeScanner");

                scanner.scan(
                   function (result) {
                       
                       barcodeNum(result.text);
                       VelocityMeetings.app.navigate("survey/" + this.scannumber() + "/");
                   },
                   function (error) {
                       barcodeNum("");
                   }
                );
            }
            catch(err)
            {
                alert(err);
            }

            isWorking(false);
        },

        Enter: function () {
            if (!this.scannumber()) {
                errorMessage("Please enter a barcode.");
                return;
            }
            else {
                VelocityMeetings.app.navigate("survey/" + this.scannumber() + "/");
                return;
            }
        }
    };


    return viewModel;
};
