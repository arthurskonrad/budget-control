const Transaction = require("../models/transaction");

const createTransactionsRouter = (router) => {
  router.get("/transaction", (req, res) => {
    res.send("transaction");
  });

  router.get("/transaction/:id", (req, res) => {
    Transaction.findOne({ id: req.params.id })
      .then((transaction) => {
        if (!transaction) {
          res.status(404);
        } else {
          res.status(200).send(transaction);
        }
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  });

  return router;
};

module.exports = createTransactionsRouter;
