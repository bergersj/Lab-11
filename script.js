// $.get('http://www.reddit.com/r/aww/.json').done(function(responseBody) {
//     console.log('Done', responseBody.data.children[0].data.title);
// }).fail(function() {
//     console.log('FAIL');
// }).always(function() {
//     console.log('ALWAYS');
// });

$.get('http://www.reddit.com/r/aww/.json').done(function(responseBody) {
  responseBody.data.children.forEach(function(post){
    var title = post.data.title;
    var author = post.data.author;
    var score = post.data.score;
    var thumbnail = post.data.thumbnail;
    var container = document.createElement("container")

    $('body').append(container)
    $(container).append('<h3>' + title + '</h3><h5>' + 'Author: ' + author + '</h5><p>' +'Posting score: ' + score + '</p><br><div>'+ thumbnail + '</div><hr>');
  });


});
