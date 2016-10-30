(function() {
    'use strict';
    angular
        .module('cos482App')
        .factory('DocumentoSistema', DocumentoSistema);

    DocumentoSistema.$inject = ['$resource', 'DateUtils'];

    function DocumentoSistema ($resource, DateUtils) {
        var resourceUrl =  'api/documento-sistemas/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.timestampEnvio = DateUtils.convertDateTimeFromServer(data.timestampEnvio);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
