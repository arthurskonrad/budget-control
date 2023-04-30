db.users.insertOne({
  id: 1,
  name: "Jhon Doe",
  email: "jhon@doe.doesnot.exist",
  password: "123",
  createdAt: new Date(),
  updatedAt: new Date(),
});

db.users.insertOne({
  id: 2,
  name: "Maria Doe",
  email: "maria@doe.doesnot.exist",
  password: "123",
  createdAt: new Date(),
  updatedAt: new Date(),
});

db.transactions.insertOne({
  id: 1,
  userId: 1,
  description: "Description",
  amount: 100.5,
  type: "expense",
  category: "Category",
  date: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
});

db.transactions.insertOne({
  id: 2,
  userId: 1,
  description: "Description",
  amount: 300.5,
  type: "income",
  category: "Category",
  date: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
});

db.balances.insertOne({
  id: 1,
  userId: 1,
  balance: 200,
  createdAt: new Date(),
  updatedAt: new Date(),
});
