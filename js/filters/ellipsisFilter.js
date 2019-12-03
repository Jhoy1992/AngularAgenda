angular.module("listaTelefonica").filter("ellipsis", function() {
  return function(input, size) {
    if (!input) return input;

    if (input.length <= size) return input;

    const output = input.substring(0, size || 5) + "...";

    return output;
  };
});
