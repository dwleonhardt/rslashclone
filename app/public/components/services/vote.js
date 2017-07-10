(function(){
  angular.module('app')
  .service('voteService', service);

  service.$inject = ['$http'];

  function service($http) {
    this.upVote = function(post){
      return $http.post(`api/posts/${post.id}/votes`).then(function(data){
        return post.vote_count ++;
      });
    };
    this.downVote = function(post){
      return $http.delete(`api/posts/${post.id}/votes`).then(function(data){
        return post.vote_count --;
      });
    };
  }
})();
