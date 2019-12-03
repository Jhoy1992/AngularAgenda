angular.module("listaTelefonica").factory("contatosApi", ($http, config) => {
  const _getContatos = () => {
    return $http.get(`${config.baseUrl}/contatos`)
  }

  const _saveContato = contato => {
    return $http.post(`${config.baseUrl}/contatos`, contato)
  }

  return {
    getContatos: _getContatos,
    saveContato: _saveContato
  }
})
