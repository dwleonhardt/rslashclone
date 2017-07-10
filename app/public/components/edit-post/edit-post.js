(function(){
  angular.module('app')
  .component('edit', {
    controller: Controller,
    templateUrl: 'components/edit-post/edit-post.html'
  });

  Controller.$inject = ['$stateParams', 'editService'];


  function Controller($stateParams, editService) {
    const vm = this;

    vm.editPost = editService.editPost;

    vm.$onInit = function(){
      var postId = $stateParams.id;
      editService.fillForm(postId).then(function(post){
        vm.post = post;
      });

    };
  }
})();
