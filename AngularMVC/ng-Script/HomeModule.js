(function () {
    var app = angular.module("homeApp", []);
    var controller = function ($scope, $http, $filter) {
        $scope.selectedObject = {};
        //$scope.changeNameTo = function () {

        //}
        //var myInternalFunc = function() {

        //}
        var savePersonError = function (reason) {

        }
        var savePersonSuccess = function (response) {
            $scope.selectedObject = response.data;
        }
        $scope.savePerson = function () {
            $http.post('/Home/savePerson', $scope.selectedObject).then(savePersonSuccess, savePersonError)
        }
        $scope.selectPerson = function (objP) {
            $scope.selectedObject = objP;
        }
        $scope.persons = [
            { 'FirstName': 'John', 'LastName': 'Doe' },
            { 'FirstName': 'Jane', 'LastName': 'Doe' },
            { 'FirstName': 'David', 'LastName': 'Smith' }
        ];
    }
    app.controller('homeCtrl', controller);
})();