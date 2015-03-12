'use strict';

angular.module('springworksApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


