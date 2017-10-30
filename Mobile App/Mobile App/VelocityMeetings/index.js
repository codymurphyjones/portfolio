function findController(name, controllers) {
    var result = $.grep(controllers, function (item, index) {
        return item.controller.name == name;
    });
    return result.length ? result[0].controller : null;
}




window.VelocityMeetings = window.VelocityMeetings || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    var layoutSet = [];
    layoutSet.push.apply(layoutSet, DevExpress.framework.html.layoutSets["navbar"]);
    layoutSet.push.apply(layoutSet, DevExpress.framework.html.layoutSets["empty"]);

    VelocityMeetings.app = new DevExpress.framework.html.HtmlApplication({
        namespace: VelocityMeetings,
        layoutSet: layoutSet,
        navigation: VelocityMeetings.config.navigation
    });

    //LocalData.getSettings();


    VelocityMeetings.app.router.register(":view/:id/:type", { view: "home", id: undefined, type: undefined });

    VelocityMeetings.app.resolveLayoutController.add(function (args) {
        var viewName = args.viewInfo.viewName;
        if (viewName === "home" || viewName === "shows") {
            args.layoutController = findController('empty', args.availableLayoutControllers);
        }
        else
        {
            args.layoutController = findController('navbar', args.availableLayoutControllers);
        }
    });

    VelocityMeetings.app.navigate();
});



//VelocityMeetings.app.resolveLayoutController.add(function (args) {
//    var viewName = args.viewInfo.viewName;
//    if (viewName === "home") {
//        args.layoutController = findController('empty', args.availableLayoutControllers);
//    }
//});
