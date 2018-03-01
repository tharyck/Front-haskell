app.controller("navCtrl", function ($http, $scope, $state, $rootScope) {
    var self = $scope;

    // self.$on('LoginSuccessful', function() {
    //     self.user = AuthService.getUser();
    // });
    //
    // self.$on('LogoutSuccessful', function() {
    //     self.user = null;
    // });
    //
    // self.logout = function() {
    //     AuthService.setUser(null);
    //     $rootScope.$broadcast("LogoutSuccessful");
    //     $state.go("login");
    // };
})