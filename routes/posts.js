var express = require('express');
var router = express.Router();

var posts = [
  {title: 'title0', body: 'body0'},
  {title: 'title1', body: 'body1'},
  {title: 'title2', body: 'body2'}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { posts: posts });
});

router.get('/:id([0-9]+)', function(req, res, next) {
  res.render('show', { post: posts[req.params.id] });
});

router.get('/new', function(req, res, next) {
  res.render('new');
});

router.post('/create', function(req, res, next) {
  var post = {
    title: req.body.title,
    body: req.body.body
  };
  posts.push(post);
  res.redirect('/');
});

router.get('/:id/edit', function(req, res, next) {
  res.render('edit', { post: posts[req.params.id], id: req.params.id});
});

router.put('/:id', function(req, res, next) {
  console.log('this is router.post');
  posts[req.body.id] = {
    title: req.body.title,
    body: req.body.body
  };
  res.redirect('/');
});

router.delete('/:id', function(req, res, next) {
  console.log('this is router.delete');
  posts.splice(req.body.id, 1);
  res.redirect('/');
});

module.exports = router;
