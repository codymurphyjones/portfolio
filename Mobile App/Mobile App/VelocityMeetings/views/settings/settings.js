VelocityMeetings.settings = function (params) {

    var errorMessage = ko.observable(""),
        loadPanelVisible = ko.observable(false);

    var viewModel = {
        errorMessage: errorMessage,
        errorVisible: ko.computed(function () {
            return errorMessage().length != 0;
        }),
        hideError: function () {
            errorMessage("");
        },
        offlineModeStatus: ko.observable(Settings.OfflineMode),
        loadPanelVisible: loadPanelVisible,
        loadData: function () {
            
            this.UploadData();
            
        },
        deleteData: function () {
            if(confirm("Are you sure you want to wipe all leads that have not been uploaded to the server?"))
                LocalData.deleteData();
        },
        finishLoading: function() {
            loadPanelVisible(false);
        },
        statusChanged: function () {
            Settings.OfflineMode = offlineModeStatus();
        },
        changeShow: function () {
            if (LocalData.getString() != "[]") {
                if (confirm("Before changing to a new show you must upload the current shows leads, would you like to now?")) {
                    this.UploadData();

                    var val = Services.GetShows(Settings.LoginInfo.id);
                    alert(val);
                    if (val > 0)
                        VelocityMeetings.app.navigate("shows", { root: false });
                }
                
            }
            else
            {
                var val = Services.GetShows(Settings.LoginInfo.id);
                alert(val);
                if (val > 0)
                    VelocityMeetings.app.navigate("shows", { root: false });
            }
        },
        logout: function () {
            if (LocalData.getString() != "[]") {
                alert("You have leads that have not been uploaded to the server, please Syncronize Data before logging out");
            }
            else {
                Settings.LoginInfo = [];
                Settings.ShowID = 0;

                LocalData.deleteSettings();
                LocalData.deleteQuestions();
                VelocityMeetings.app.navigate("home", { root: true });
            }
            
        },
        UploadData: function () {
            loadPanelVisible(true);
            //Create data array to send to server.
            var customerdata = LocalData.customerData();
            if (JSON.stringify(customerdata) != "[]") {
                var dataarray = { Id: Settings.LoginInfo.id, ShowID: Settings.ShowID, Leads: customerdata }
                alert(JSON.stringify(dataarray));
                if (Services.Upload(dataarray))
                    LocalData.deleteData();
                else
                    alert("Upload failed, please check your connection to the server");
            }
            else
                alert("test");
        
            loadPanelVisible(false);
        }
        
    };

    return viewModel;
};