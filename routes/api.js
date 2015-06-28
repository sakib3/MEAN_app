var express = require('express');
var router = express.Router();

router.use(function(req,res,next){
  if(req.method === "GET"){

    // continue to the next middleware or request handler
    return next();
  }
  if(!req.isAuthenticated()){
    // user not authenticated, redirect to login page
    return res.redirect('/#login');
  }
  //user authenticated continue to next middleware or handler
  return next();
});
router.route('/posts')
      //get all posts
      .get(function(req,res){
        res.send({message:  'TODO return all posts'});
      })
      // create a new post
      .post(function(req,res){
        res.send({message: 'TODO Create a new posts'});
      })

router.route('/posts/:id')
      //returns a particular post
      .get(function(req,res){
          res.send({message:  'TODO return post with ID: '+req.params.id});
      })
      // update existing post
      .put(function(req,res){
          res.send({message:  'TODO modify post with ID: '+req.params.id});
      })
      // delete existing post
      .delete(function(req,res){
          res.send({message:  'TODO delete post with ID: '+req.params.id});
      })

module.exports = router;
