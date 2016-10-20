(function () {


    var mod = angular.module("custom-module");

    mod.directive('cuDirective', cuDirective);

    function cuDirective() {
        return {
            bindToController: true,
            controller: cuDirectiveController,
            controllerAs: 'cdc',
            scope: {
                inputUsername: '='
            },
            templateUrl: "js/directive/custom.html"
        };
        

    }
    function cuDirectiveController() {
        var that = this;
        console.log("user typed in" + that.inputUsername);
        that.inputname = that.inputUsername;
    }

})();