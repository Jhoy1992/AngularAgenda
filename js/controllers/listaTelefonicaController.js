angular
  .module("listaTelefonica")
  .controller("listaTelefonicaController", ($scope, $http) => {
    $scope.app = "Lista Telefônica"
    $scope.contatos = []
    $scope.operadoras = []

    const baseURL = "http://localhost:3001"

    const carregarContatos = () => {
      $http.get(`${baseURL}/contatos`).then(response => {
        $scope.contatos = response.data
      })
    }

    const carregarOperadoras = () => {
      $http.get(`${baseURL}/operadoras`).then(response => {
        $scope.operadoras = response.data
      })
    }

    $scope.adicionarContato = contato => {
      contato.data = new Date()
      $http
        .post(`${baseURL}/contatos`, contato)
        .then(response => {
          delete $scope.contato
          $scope.contatoForm.$setPristine()
          carregarContatos()
        })
        .catch(response => {
          $scope.message = "Acontece um problema: " + response.data
        })
    }

    $scope.apagarContatos = contatos => {
      $scope.contatos = contatos.filter(contato => {
        if (!contato.selecionado) return contato
      })
    }

    $scope.isContatoSelecionado = contatos => {
      return contatos.some(contato => {
        return contato.selecionado
      })
    }

    $scope.ordenarPor = campo => {
      $scope.criterioDeOrdenacao = campo
      $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao
    }

    carregarContatos()
    carregarOperadoras()
  })
