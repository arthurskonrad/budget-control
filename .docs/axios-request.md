Como fazer uma axios request com typescript no vue:

```typescript
import api from '@/api'
import { ActionContext } from 'vuex'
import { RootState } from '@/store/types'
import { Transaction } from '@/models/Transaction'

interface TransactionsState {
  transactions: Transaction[]
}

const state: TransactionsState = {
  transactions: []
}

const actions = {
  async fetchTransactions(context: ActionContext<TransactionsState, RootState>) {
    try {
      const response = await api.get('/transactions')
      context.commit('setTransactions', response.data)
    } catch (error) {
      console.error('Failed to fetch transactions:', error)
    }
  }
}

const mutations = {
  setTransactions(state: TransactionsState, transactions: Transaction[]) {
    state.transactions = transactions
  }
}

export default {
  state,
  actions,
  mutations
}
```
