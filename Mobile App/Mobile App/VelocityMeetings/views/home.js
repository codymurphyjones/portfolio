

VelocityMeetings.home = function (params) {
    
    var errorMessage = ko.observable("");
    loadPanelVisible = ko.observable(false);

    var viewModel = {

        errorMessage: errorMessage,
        rememberMe: ko.observable(true),
        username: ko.observable(Settings.LoginInfo.Username),
        password: ko.observable(Settings.LoginInfo.Password),
        isLoggedIn: function () {
            return (Settings.LoginInfo.Username != null && Settings.LoginInfo.Password != null)
        },
        login: function () {
            
            
            if (!this.username() || !this.password())
            {
                errorMessage("Please enter your username and password.");
                
                return;
            }
            else
            {
                
                var LoginVals = Services.GetLogin(this.username(), this.password());
                if (LoginVals == -1)
                    errorMessage("Incorrect username/password combination");
                else if(LoginVals == -2)
                {
                    errorMessage("Unable to connect to login server");
                }
                else {

                    Globals.LoadData(LoginVals.id);

                    Settings.LoginInfo = LoginVals;
                    if(this.rememberMe())
                        LocalData.setSettings();

                    this.username("");
                    this.password("");
                    VelocityMeetings.app.navigate("shows/");
                }
                    
                
                return;
            }
           
        },
        errorVisible: ko.computed(function() {
            return errorMessage().length != 0;
        }),
        hideError: function () {
            errorMessage("");
        },
    };

    if (viewModel.isLoggedIn())
    {
        viewModel.username("");
        viewModel.password("");
        if (Settings.ShowID != 0) {
            VelocityMeetings.app.navigate("scan/", { root: true });
        }
    }

    return viewModel;
};
