(function(){
  angular.module('app')
  .service('postService', service);

  service.$inject = ['$http'];

  function service($http) {

    this.getPosts = function(){
      return $http.get('/api/posts/').then(function (response) {
        var posts = response.data;
        return posts;
      });
    };

    this.newPost = function() {
      var post = this.post;
      var posts = this.posts;
      this.postForm = false;
      return $http.post('/api/posts/', this.post).then(function(res){
        for (var key in post) {
          post[key] = '';
        }
        var newPost = res.data;
        newPost.comments = [];
        newPost.vote_count = 0;
        return posts.push(newPost);
      });
    };
  }

})();
