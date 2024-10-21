const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Obtener todos los posts
router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// Crear un nuevo post
router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  await newPost.save();
  res.status(201).json(newPost);
});

// Editar un post
router.put('/:id', async (req, res) => {
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedPost);
});

// Eliminar un post
router.delete('/:id', async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post eliminado' });
});

module.exports = router;