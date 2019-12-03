angular.module("listaTelefonica").factory("operadorasApi", ($http, config) => {
  const _getOperadoras = () => {
    return $http.get(`${config.baseUrl}/operadorass`);
  };

  return {
    getOperadoras: _getOperadoras
  };
});
