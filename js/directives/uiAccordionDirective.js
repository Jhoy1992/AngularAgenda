angular.module("listaTelefonica").directive("uiAccordions", function() {
  return {
    controller: function($scope, $element, $attrs) {
      const accordions = [];

      this.registerAccordion = function(accordion) {
        accordions.push(accordion);
      };

      this.closeAll = function() {
        accordions.forEach(function(accordion) {
          accordion.isOpened = false;
        });
      };
    }
  };
});

angular.module("listaTelefonica").directive("uiAccordion", function() {
  return {
    templateUrl: "view/accordion.html",
    transclude: true,
    scope: {
      title: "@"
    },
    require: "^uiAccordions", // ^ utilizado pois uiAccordions está em outro escope
    link: function(scope, element, attrs, controller) {
      controller.registerAccordion(scope);
      scope.open = function() {
        const isOpened = scope.isOpened;
        controller.closeAll();
        scope.isOpened = !isOpened;
      };
    }
  };
});
