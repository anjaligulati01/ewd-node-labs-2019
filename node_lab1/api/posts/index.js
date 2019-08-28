import express from 'express';
import Post from './postsModel';
import asyncHandler from 'express-async-handler';
import { pseudoRandomBytes } from 'crypto';

const router = express.Router();// eslint-disable-line

//Gets top 5 posts 
router.get('/', asyncHandler(async (req, res) => {
  const posts = await Post.find().sort('-posted').limit(5);
  return res.send(posts);
}));

// Add a post
router.post('/', asyncHandler(async (req, res) => {
    const newPost = req.body;
    newPost.user = req.user || 'anonymous';
    if (newPost) {
          const post = await Post.create(newPost);
          return res.status(201).send({post});
      } else {
         return handleError(res, err);
      }
}));

// upvote a post
router.post('/:id/upvotes', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const post = await Post.findById(id);
  post.upvotes++;
  await post.save();
  return res.status(201).send({post});
}));

// get post
router.get('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const post = await Post.findById(id);
    return res.send({post});
}));

// Add a comment
router.post('/:id/comments', asyncHandler(async (req, res) => {
    const newComment = req.body;
    const id = req.params.id;
    const post = await Post.findById(id); 
    post.comments.push(newComment);
    await post.save();
    return res.status(200).send({post});   
}));
///upvoting a comment
router.post('/:id/comments/:commentId/upvotes', asyncHandler(async(req, res) =>{
    const id = req.params.id;
    const post = await Post.findById(id);
    const commentid = req.params.commentId;
    console.log("post::>" + post);
    post.comments.id(commentid).upvotes++;
    await post.save();
    return res.status(200).send({post});
}));

router.delete('/:id/comments/:commentId', asyncHandler(async(req, res) =>{
    const postid = req.params.id;
    const commentId = req.params.commentId;
    const post = await Post.findById(postid);
    post.comments.id(commentId).remove();
    await post.save();
    return res.status(200).send({post});
}));

/**
 * Handle general errors.
 * @param {object} res The response object
 * @param {object} err The error object.
 * @return {object} The response object
 */
function handleError(res, err) {
  return res.status(500).send(err);
};

export default router;