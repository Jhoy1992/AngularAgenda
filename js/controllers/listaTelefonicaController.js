angular
  .module("listaTelefonica")
  .controller(
    "listaTelefonicaController",
    ($scope, contatosApi, operadorasApi, serialGenerator) => {
      $scope.app = "Lista Telefônica"
      $scope.contatos = []
      $scope.operadoras = []

      const carregarContatos = () => {
        contatosApi.getContatos().then(response => {
          $scope.contatos = response.data
        })
      }

      const carregarOperadoras = () => {
        operadorasApi.getOperadoras().then(response => {
          $scope.operadoras = response.data
        })
      }

      $scope.adicionarContato = contato => {
        contato.serial = serialGenerator.generate()
        contato.data = new Date()

        contatosApi
          .saveContato(contato)
          .then(response => {
            delete $scope.contato
            $scope.contatoForm.$setPristine()
            carregarContatos()
          })
          .catch(response => {
            $scope.message = "Aconteceu um problema: " + response.data
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
    }
  )
