(function () {
    var mod = angular.module("userdetails-module");

    mod.controller('UserDetailsController', UserDetailsController);

    function UserDetailsController(userFactory) {
        var that = this;
        that.searchUserByName = function () {
            console.log("user details controller : user search for " + that.userqueryByName);
            userFactory.getUser(that.userqueryByName).then(display);
        };

        function display(response) {
            console.log(response.data);
            that.person = response.data;

        }
    }

})();