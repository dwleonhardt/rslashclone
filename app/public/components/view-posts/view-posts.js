(function(){
  angular.module('app')
  .component('viewPosts', {
    controller: Controller,
    templateUrl: 'components/view-posts/view-posts.html'
  });

  Controller.$inject = ['postService', 'commentService', 'voteService'];


  function Controller(postService, commentService, voteService) {
    const vm = this;


    vm.newPost = postService.newPost;

    vm.newComment = commentService.newComment;

    vm.posts = postService.posts;

    vm.upVote = voteService.upVote;

    vm.downVote = voteService.downVote;


    vm.$onInit = function(){
      postService.getPosts()
      .then(posts => {
        vm.posts = posts;
      });
    };
  }
})();
