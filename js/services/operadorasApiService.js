angular.module("listaTelefonica").factory("operadorasApi", ($http, config) => {
  const _getOperadoras = () => {
    return $http.get(`${config.baseUrl}/operadoras`)
  }

  return {
    getOperadoras: _getOperadoras
  }
})
