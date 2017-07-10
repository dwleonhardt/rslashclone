(function(){
  angular.module('app')
  .service('commentService', service);

  service.$inject = ['$http'];


  function service($http) {
    this.newComment = function(post) {
      return $http.post(`api/posts/${post.id}/comments`, {content: post.comment}).then(function (response) {
        delete post.comment;
        var comment = response.data;
        post.comments.push(comment);
        post.qty = post.comments.length;
        return (post.comments, post.qty);
      });
    };


  }
})();
