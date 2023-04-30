const Balance = require("../models/balance");

const createBalanceRouter = (router) => {
  router.get("/balance", (req, res) => {
    res.send("balance");
  });

  router.get("/balance/:id", (req, res) => {
    Balance.findOne({ id: req.params.id })
      .then((balance) => {
        if (!balance) {
          res.status(404);
        } else {
          res.status(200).send(balance);
        }
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  });

  return router;
};

module.exports = createBalanceRouter;
