import express from 'express';


export default (models) => {
  const app = express.Router();

  // Get specific post
  app.get('/get-post', async (req, res) => {
    const { id } = req.body;
    const posts = await models.PostModel.findByPk(id, {
      include: [{
        model: models.TagModel
      }]
    });
    res.send(posts);
  });

  //Below we inserting a product into the database
  app.get('/get-posts', async (req, res) => {
    const posts = await models.PostModel.findAll({
      include: [{
        model: models.TagModel
      }]
    });
    res.send(posts);
  });

  //Below we creating a post into the database
  app.post('/create-post', async (req, res) => {
    const { tags: requestTags, name, body } = req.body;

    // Create a new post
    const post = await models.PostModel.create({ name, body });

    // Find or create requestTags then set tags for this post
    let foundOrCreatedTags = [];
    for(const postTag of requestTags){
      const [tag] = await models.TagModel.findOrCreate({
        where: {name: postTag.name},
        name: postTag.name
      });
      foundOrCreatedTags.push(tag);
    }
    await post.setTags(foundOrCreatedTags)

    // Query the database to get the post with all it's joins included
    const postWithJoins = await models.PostModel.findOne({
      where: {id: post.id},
      include: [{
        model: models.TagModel
      }]
    });

    res.send(postWithJoins);
  });
  return app;
};