
switch (getDeviceByUserAgent()) {
    case "ios":
        document.write("<script src='cordova/cordova.ios.js'><\/script>");
        break;

    case "android":
        document.write("<script src='cordova/cordova.android.js'><\/script>");
        break;

    default:
        document.write("<script src='cordova/cordova.stub.js'><\/script>");
        break;
}

function getDeviceByUserAgent() {

    if (navigator.userAgent.indexOf("Android") > 0) {
        return "android";
    }

    if (navigator.userAgent.indexOf("iPhone") > 0 || navigator.userAgent.indexOf("iPad") > 0 || navigator.userAgent.indexOf("iPod") > 0) {
        return "ios";
    }

    return "unknown";
}
