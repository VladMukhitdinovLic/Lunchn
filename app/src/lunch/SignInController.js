(function(){

  angular
       .module('sign-in')
       .controller('SignInController', [
          'signInService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          UserController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function SignInController( signInService, $mdSidenav, $mdBottomSheet, $log, $q) {
    debugger;
    var self = this;

    self.selected     = null;
    self.users        = [ ];
    self.login   = signIn;

    // *********************************
    // Internal methods
    // *********************************
    function signIn(){
      signInService
            .attemptSignIn()
            .then( function( result ) {

            });
    };
  }

})();
