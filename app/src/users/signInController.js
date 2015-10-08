(function(){

	angular
       .module('users')
       .controller('SignInController', [
          '$scope',
          SignInController
       ]);

	function SignInController($scope){
		// This flag we use to show or hide the button in our HTML.
		var $scope = this;
		$scope.signedIn = false;
	 
		// Here we do the authentication processing and error handling.
		// Note that authResult is a JSON object.
		$scope.processAuth = function(authResult) {
			// Do a check if authentication has been successful.
			if(authResult['access_token']) {
				// Successful sign in.
				$scope.signedIn = true;
	 
				alert('We signed in');
			} else if(authResult['error']) {
				// Error while signing in.
				$scope.signedIn = false;
	 
				alert('Error occured');
			}
		};
	 
		// When callback is received, we need to process authentication.
		$scope.signInCallback = function(authResult) {
			$scope.$apply(function() {
				$scope.processAuth(authResult);
			});
		};
	 
		// Render the sign in button.
		$scope.renderSignInButton = function() {
			var signInButton = document.getElementById('signInButton');
			gapi.signin.render(signInButton,
				{
					'callback': $scope.signInCallback, // Function handling the callback.
					'clientid': '986912621824-lt2r53hd6j04bdfvlos9uv1mrdm8644a.apps.googleusercontent.com', // CLIENT_ID from developer console which has been explained earlier.
					'requestvisibleactions': 'http://schemas.google.com/AddActivity', // Visible actions, scope and cookie policy wont be described now,
																					  // as their explanation is available in Google+ API Documentation.
					'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email',
					'cookiepolicy': 'single_host_origin'
				}
			);
		}
	 
		// Start function in this example only renders the sign in button.
		$scope.start = function() {
			$scope.renderSignInButton();
		};
	 
		// Call start function on load.
		$scope.start();
	}	
})();