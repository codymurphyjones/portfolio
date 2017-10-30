var Services = {
    WEB_SERVICE_URL: 'http://velocitymeetings.com/webservicetest/',
    //WEB_SERVICE_URL: 'http://localhost:4911/',
    GetLogin : function(username, password)
    {
        var tempVal = -1;
        $.ajax({
            dataType: "json",
            url: this.WEB_SERVICE_URL + 'api/login/',
            type: 'POST',
            data: { Username: username, Password: password },
            async: false,
            success: function (data) {

                alert(JSON.stringify(data));
                tempVal = data;
                //callback(tempVal);
            },
            error: function () {

                    tempVal = -2;

            }
        });

       if (tempVal.Username == username && tempVal.Password == password)
            return tempVal;

        return tempVal;
    },

    GetShows : function(id)
    {
        var tempVal;
        $.ajax({
            dataType: "json",
            url: this.WEB_SERVICE_URL + 'api/shows/' + id,
            type: 'GET',
            async: false,
            success: function (data) {

                Shows = data;

            },
            error: function()
            {
                tempVal = -2;
            }
        });


        return 1;
    },

    GetQuestions : function(userid, eventid)
    {
        var tempVal;
        $.ajax({
            dataType: "json",
            url: this.WEB_SERVICE_URL + 'api/question/',
            type: 'POST',
            data: { UserId: userid, EventId: eventid },
            async: false,
            success: function (data) {

                SurveyQuestions = data;

                return 1;
            },
            error: function()
            {
                tempVal = -2;
            }
        });


        return -1;
    },

    Upload: function (userdata) {
        var tempVal = false;
        $.ajax({
            dataType: "json",
            url: this.WEB_SERVICE_URL + 'api/upload/',
            type: 'POST',
            data: userdata,
            async: false,
            success: function (data) {

                alert(JSON.stringify(data));
                data = true;
                tempVal = data;
            },
            error: function () {
                alert("failed");
                tempVal = false;
            }
        });


        return tempVal
    }
};

var localStorage = window.localStorage;


var Shows = [
    {
        id: 1,
        name: "Enk",
        image: "images/enk.png",
        date: "August 18-20 2014",
        location: "Mandallay Bay, LV"
    },
    {
        id: 1,
        name: "Club",
        image: "images/Club.png",
        date: "August 3-5 2014",
        location: "Pier 94, NYC"
    }
];


///We should pretend to be loading survey questions here.
var SurveyQuestions = [
    {
        index: 0,
        text: "Question 1",
        question: "When do you intend to purchase our product?",
        answer: ko.observable("")
    },
    {
        index: 1,
        text: "Question 2",
        question: "When do you intend to purchase our product?",
        answer: ko.observable("")
    }
];

////Declare functions to set up for storage. And To Reset
function ResetSurvey() {
    for (var i = 0; i < SurveyQuestions.length; i++) {
        SurveyQuestions[i].answer("");
    }
};

function CreateSurvey() {
    for (var i = 0; i < SurveyQuestions.length; i++) {
        SurveyQuestions[i].answer = ko.observable("");
    }
};


//Settings, loaded from settings file.
//Quick, someone learn how to save and load files.
var Settings = {
    ShowID: 0,
    LoginInfo: []
};

///Store Global Variables
var Globals = {

    LoadData: function(id) {
        Services.GetShows(id);
    },
    ///Experimentation Function
    SetSettings: function () {
        
    },

    Init: function () {
        if (LocalData.isEmpty()) {
            LocalData.createStructure();
            
        }
            
    },

};
var count = 0;
var LocalData = {
    DATA_STORAGE_KEY: 'velocity-customerdata',
    SETTING_STORAGE_KEY: 'velocity-userdata',
    QUESTION_STORAGE_KEY: 'velocity-questions',


    ///Client Data
    customerData: function () {
        return JSON.parse(localStorage.getItem(this.DATA_STORAGE_KEY));

    },

    getString: function() {
        return localStorage.getItem(this.DATA_STORAGE_KEY);
    },

    isEmpty: function () {
        try {
            count++;
            alert(count);
            alert(JSON.stringify(localStorage.getItem(this.DATA_STORAGE_KEY)));
            return (localStorage.getItem(this.DATA_STORAGE_KEY).length == 0);
        }
        catch(err)
        {
            return true;
        }
    },
    
    createStructure: function () {
        
        localStorage.setItem(this.DATA_STORAGE_KEY, "[]")
    },


    addCustomer: function (data) {
        
        var cData = this.customerData(),
            index = cData.length;


        cData[index] = data;

        localStorage.setItem(this.DATA_STORAGE_KEY, JSON.stringify(cData));
        ResetSurvey();
    },

    deleteData: function () {
        localStorage.setItem(this.DATA_STORAGE_KEY, "");
        this.createStructure();
    },

    ///Settings Data
    deleteSettings: function () {
        localStorage.setItem(this.SETTING_STORAGE_KEY, "");
        this.createStructure();
    },

    getSettings: function () {
        
        _settings = JSON.parse(localStorage.getItem(this.SETTING_STORAGE_KEY));

        if (_settings != null)
            Settings = _settings;

        
    },

    setSettings: function () {
        localStorage.setItem(this.SETTING_STORAGE_KEY, JSON.stringify(Settings));
    },

    getSettingString: function () {
    return JSON.stringify(Settings);
    },

    //Questions Data
    setQuestions: function () {
        alert("questions set");
        localStorage.setItem(this.QUESTION_STORAGE_KEY, JSON.stringify(SurveyQuestions));
    },

    getQuestions: function () {
        
        _questions = JSON.parse(localStorage.getItem(this.QUESTION_STORAGE_KEY));
        
        if (_settings != null)
            SurveyQuestions = _questions;
    },

    deleteQuestions: function () {
        alert("questions deleted")
        localStorage.setItem(this.QUESTION_STORAGE_KEY, JSON.stringify(SurveyQuestions));
    }
};


document.addEventListener("deviceready", ondeviceReady(), false);



// Cordova is ready to be used!
//
function ondeviceReady() {
    Globals.Init();
    LocalData.getSettings();
    LocalData.getQuestions();
    CreateSurvey();
    if (LocalData.isEmpty())
        LocalData.createStructure();
};