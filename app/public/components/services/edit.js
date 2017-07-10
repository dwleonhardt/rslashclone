(function(){
  angular.module('app')
  .service('editService', service);

  service.$inject = ['$http', '$state'];

  function service($http, $state) {

    this.editPost = function(post){
      return $http.patch(`api/posts/${post.id}`, post).then(function(res){
        $state.go('home');
      });
    };

    this.fillForm = function(postId){
      return $http.get(`api/posts/${postId}`).then(function(res){
        var post = res.data;
        return post;
      });
    };

  }
})();
