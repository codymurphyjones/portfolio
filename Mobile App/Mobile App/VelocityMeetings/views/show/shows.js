VelocityMeetings.shows = function (params) {

    var errorMessage = ko.observable("");

    var viewModel = {
        errorMessage: errorMessage,
        errorVisible: ko.computed(function() {
            return errorMessage().length != 0;
        }),
        hideError: function () {
            errorMessage("");
        },
        resultsItemClick: function (item) {
            alert(item.id);
            Settings.ShowID = item.id;
            LocalData.setSettings();
            Services.GetQuestions(Settings.LoginInfo.id, item.id);
            LocalData.setQuestions();
            CreateSurvey();
            VelocityMeetings.app.navigate("scan/", { root: true });
            
        }
    };

    return viewModel;
};