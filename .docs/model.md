Os modelos iniciais da aplicação serão:

```typescript
class User {
  id: ObjectId
  name: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date

  constructor(
    id: ObjectId,
    name: string,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}

class Transaction {
  id: ObjectId
  userId: ObjectId
  description: string
  amount: number
  type: 'income' | 'expense'
  category: string
  date: Date
  createdAt: Date
  updatedAt: Date

  constructor(
    id: ObjectId,
    userId: ObjectId,
    description: string,
    amount: number,
    type: 'income' | 'expense',
    category: string,
    date: Date,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id
    this.userId = userId
    this.description = description
    this.amount = amount
    this.type = type
    this.category = category
    this.date = date
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}

class Balance {
  id: ObjectId
  userId: ObjectId
  balance: number
  createdAt: Date
  updatedAt: Date

  constructor(id: ObjectId, userId: ObjectId, balance: number, createdAt: Date, updatedAt: Date) {
    this.id = id
    this.userId = userId
    this.balance = balance
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}

class Income {
  id: ObjectId
  userId: ObjectId
  description: string
  amount: number
  createdAt: Date
  updatedAt: Date

  constructor(
    id: ObjectId,
    userId: ObjectId,
    description: string,
    amount: number,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id
    this.userId = userId
    this.description = description
    this.amount = amount
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}
```
