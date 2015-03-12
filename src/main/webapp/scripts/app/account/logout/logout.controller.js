'use strict';

angular.module('springworksApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
