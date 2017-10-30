VelocityMeetings.survey = function (params) {

    var errorMessage = ko.observable("");
    var currentIndex = ko.observable(0);

    var viewModel = {
        surveyLength: ko.computed(function () { return SurveyQuestions.length; }),
        surveyFontSize: ko.computed(function () {
            return (18.5 - (SurveyQuestions.length * 1.5)) + "px";
        }),
        currentIndex: currentIndex,
        answer: ko.observable(""),
        errorMessage: errorMessage,
        errorVisible: ko.computed(function () {
            return errorMessage().length != 0;
        }),
        hideError: function () {
            errorMessage("");
        },
        resultsItemClick: function (item) {
            //VelocityMeetings.customerData.push({ name: "test" });
            alert(this.surveyFontSize());
            alert(item.answer());
        },
        submitQuestionsClick: function () {
            //alert(params.id);

            var Answer = [];
            for (var i = 0; i < SurveyQuestions.length; i++) {
                Answer.push({ QuestionId: SurveyQuestions[i].id, Answer: SurveyQuestions[i].answer() })
            }

            LocalData.addCustomer({ BarcodeId: params.id, Answers: Answer });
            VelocityMeetings.app.navigate("scan/", { root: true });

        }

    };

    return viewModel;
};