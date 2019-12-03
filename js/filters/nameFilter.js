angular.module("listaTelefonica").filter("name", function() {
  return function(input) {
    const listaDeNomes = input.split(" ");

    const listaDeNomeFormatada = listaDeNomes.map(nome => {
      if (/(da|de|do|das|des|dos)/i.test(nome)) return nome.toLowerCase();
      return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
    });

    return listaDeNomeFormatada.join(" ");
  };
});
