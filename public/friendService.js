angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {

    login: function( user ) {
      /* FIX ME */
      return $http.post('http://localhost:8999/api/login', user);
    },

    getFriends: function() {
    	/* FIX ME */
      return $http.get('http://localhost:8999/api/profiles').then(
        function(response){
          return response.data;
        }
      );
    }
  };
});
