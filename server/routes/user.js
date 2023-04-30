const User = require("../models/user");

const createUserRouter = (router) => {
  router.get("/user", (req, res) => {
    res.send("user");
  });

  router.get("/user/:id", (req, res) => {
    User.findOne({ id: req.params.id })
      .then((user) => {
        if (!user) {
          res.status(404);
        } else {
          res.status(200).send(user);
        }
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  });

  return router;
};

module.exports = createUserRouter;
