db.users.insertOne({
  id: 1,
  name: 'Jhon Doe',
  email: 'jhon@doe.doesnot.exist',
  password: '123',
  createdAt: new Date(),
  updatedAt: new Date()
})

db.users.insertOne({
  id: 2,
  name: 'Maria Doe',
  email: 'maria@doe.doesnot.exist',
  password: '123',
  createdAt: new Date(),
  updatedAt: new Date()
})
