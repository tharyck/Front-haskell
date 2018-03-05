app.controller("submitCtrl", function ($scope) {
    var self = $scope;

    self.submit = function (arquivo) {
        console.log(arquivo);
        self.response = JSON.parse(arquivo); // Presumed content is a json string!
        self.response.style = {
            color: self.response.color,
            "font-weight": "bold"
        };

        // Clear form (reason for using the 'ng-model' directive on the input elements)
        $scope.fullname = '';
        $scope.gender = '';
        $scope.color = '';
        // Look for way to clear the input[type=file] element
    };
});
//
// app.controller('Example5Ctrl', function ($scope) {
//     $scope.uploadComplete = function (content) {
//         $scope.response = JSON.parse(content); // Presumed content is a json string!
//         $scope.response.style = {
//             color: $scope.response.color,
//             "font-weight": "bold"
//         };
//
//         // Clear form (reason for using the 'ng-model' directive on the input elements)
//         $scope.fullname = '';
//         $scope.gender = '';
//         $scope.color = '';
//         // Look for way to clear the input[type=file] element
//     };
// });