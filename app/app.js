(function() {
  'use strict';

  angular
    .module('toDoList', []);
})();

(function() {
  'use strict';

  angular
    .module('toDoList')
    .controller('ToDoController', ToDoController);

  ToDoController.$inject = [];

  /* @ngInject */
  function ToDoController() {
    var vm = this;

    vm.toDoArr = [];
    vm.toDo = [];

    vm.addNew = function() {
      vm.toDoArr.push({
        text: vm.toDo.text,
        priority: vm.toDo.priority
      });
      console.log(vm.toDoArr);
    };
  };
})();
