VelocityMeetings.lead = function (params) {

    var errorMessage = ko.observable(""),
        loadPanelVisible = ko.observable(false),
        title = ko.observable("Lead #5"),
        id = ko.observable("12345"),
        fname = ko.observable("Michael"),
        lname = ko.observable("Scott"),
        ptitle = ko.observable("Branch Manager"),
        company = ko.observable("Dunder Mifflin"),
        email = ko.observable("mscott@dundermifflin.com"),
        phone = ko.observable("555-555-5555"),
        address = ko.observable("123 Main Street, NY, NY 12345"),
        log = ko.observable("Lead Saves Aug 15th, 2014");

    var viewModel = {
        errorMessage: errorMessage,
        errorVisible: ko.computed(function () {
            return errorMessage().length != 0;
        }),
        hideError: function () {
            errorMessage("");
        },
        loadPanelVisible: loadPanelVisible,
        startLoading: function () {
            loadPanelVisible(true);
            //setTimeout($.proxy(this.finishLoading, this), 3000);
        },
        finishLoading: function () {
            loadPanelVisible(false);
        },
        title: title,
        id: id,
        fname: fname,
        lname: lname,
        ptitle: ptitle,
        company: company,
        email: email,
        phone: phone,
        address: address,
        log: log
    };

    return viewModel;
};