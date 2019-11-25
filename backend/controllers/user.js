import express from 'express';

export default (models) => {
  const app = express.Router();

  app.get('/get-user', (req, res) => {
    
    res.send("Got a user");
  });

  //Below we inserting a product into the database
  app.get('/get-photos', (req, res) => {
    res.send("Got user");
  });

  //Below we inserting a product into the database
  app.post('/create-user', async (req, res) => {
    const { id, username, email, password } = req.body;
    console.log("req.body", req.body);
    const [user, isNew] = await models.UserModel.findOrCreate({
      where: {username: username},
      defaults: {
        username: username,
        email: email,
        password: password
      }

    });
    console.log("user", user);
    res.send(user);
  });
  
  return app;
};