const express = require('express')

const router = express.Router()
const {Posts} = require("../models")
// const Post= require('../models/Posts')


  router.get("/",async(req,res)=>{
     const  listOfPosts =  await Posts.findAll();
     res.json(listOfPosts)
  })

router.post("/", async(req,res)=>{
     const  post = req.body
     await Posts.create(post)
     res.json(post)
})


router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Posts.findByPk(id); // Find post by primary key (ID)
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    await post.destroy(); // Delete the post
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post', error });
  }
});



 

  


module.exports= router