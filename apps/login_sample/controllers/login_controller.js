LoginSample.loginController = SC.ObjectController.create({
    username: '',
    password: '',
    errorMessage: '',
    isLoggingIn: NO,
    onLoginGoToPageName: 'mainPage.mainPane',
    beginLogin: function(){
        try{
            var username = this.get('username');
            var password = this.get('password');
            if (username ==  null || username == '')
                throw SC.Error.desc('Insira um username válido');
            if (password == null || password == '')
                throw SC.Error.desc('Insira um password válido')
            this.set('isLoggingIn', YES);
            setTimeout(function(){ LoginSample.loginController.endLogin(true)  }, 1000);
            return YES;
        }catch(err){
            this.set('errorMessage',err.message);
            this.set('isLoggingIn', NO);
            return NO;
        }
    },
    endLogin:function(response){
        this.set('isLoggingIn', NO);
        var pageName = LoginSample.loginController.get('onLoginGoToPageName');
        var pane;
        pane = LoginSample.getPath('loginPage.loginPane');
        pane.remove();
        pane = LoginSample.getPath(pageName);
        pane.append();
    }

});
