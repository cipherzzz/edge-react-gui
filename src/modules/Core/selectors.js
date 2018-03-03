// @flow

import type { AbcCurrencyWallet } from 'edge-login'

import type { State } from '../ReduxTypes'

const transactionListA = [
  {
    date: 1532050465,
    txid: '9ff7133b1b33d86d4c2a455b455d236b22c6ac70774a5ba617da761c9c843baa',
    nativeAmount: '491145',
    currencyCode: 'BTC'
  },
  {
    date: 1552050465,
    txid: '9gf7133b1b33d86d4c2a455b455d236b22c6ac70774a5ba617da761c9c843bab',
    nativeAmount: '591145',
    currencyCode: 'BTC'
  },
  {
    date: 1562050465,
    txid: '9hf7133b1b33d86d4c2a455b455d236b22c6ac70774a5ba617da761c9c843bac',
    nativeAmount: '691145',
    currencyCode: 'BTC'
  },
  {
    date: 1572050465,
    txid: '9if7133b1b33d86d4c2a455b455d236b22c6ac70774a5ba617da761c9c843bad',
    nativeAmount: '791145',
    currencyCode: 'BTC'
  },
  {
    date: 1582050465,
    txid: '9jf7133b1b33d86d4c2a455b455d236b22c6ac70774a5ba617da761c9c843bae',
    nativeAmount: '891145',
    currencyCode: 'BTC'
  },
  {
    date: 1592050465,
    txid: '9kf7133b1b33d86d4c2a455b455d236b22c6ac70774a5ba617da761c9c843baf',
    nativeAmount: '991145',
    currencyCode: 'BTC'
  },
  {
    date: 1602050465,
    txid: '9lf7133b1b33d86d4c2a455b455d236b22c6ac70774a5ba617da761c9c843bag',
    nativeAmount: '1091145',
    currencyCode: 'BTC'
  },
  {
    date: 1612050465,
    txid: '9mf7133b1b33d86d4c2a455b455d236b22c6ac70774a5ba617da761c9c843bah',
    nativeAmount: '1191145',
    currencyCode: 'BTC'
  },
  {
    date: 1612051465,
    txid: '9nf7133b1b33d86d4c2a455b455d236b22c6ac70774a5ba617da761c9c843bai',
    nativeAmount: '1291145',
    currencyCode: 'BTC'
  },
  {
    date: 1612052465,
    txid: '9of7133b1b33d86d4c2a455b455d236b22c6ac70774a5ba617da761c9c843baj',
    nativeAmount: '491145',
    currencyCode: 'BTC'
  }
]

const transactionListB = [
  {
    date: 1732050465,
    txid: '9mf7133b1b33d86d4c2a455b455d236b22c6ac70774a5ba617da761c9c843baa',
    nativeAmount: '491145',
    currencyCode: 'BTC'
  },
  {
    date: 1752050465,
    txid: '9nf7133b1b33d86d4c2a455b455d236b22c6ac70774a5ba617da761c9c843bab',
    nativeAmount: '591145',
    currencyCode: 'BTC'
  },
  {
    date: 1762050465,
    txid: '9hf7133b1b33d86d4c2a455b455d236b22c6ac70774a5ba617da761c9c843bac',
    nativeAmount: '691145',
    currencyCode: 'BTC'
  },
  {
    date: 1772050465,
    txid: '9pf7133b1b33d86d4c2a455b455d236b22c6ac70774a5ba617da761c9c843bad',
    nativeAmount: '791145',
    currencyCode: 'BTC'
  },
  {
    date: 1782050465,
    txid: '9qf7133b1b33d86d4c2a455b455d236b22c6ac70774a5ba617da761c9c843bae',
    nativeAmount: '891145',
    currencyCode: 'BTC'
  },
  {
    date: 1792050465,
    txid: '9rf7133b1b33d86d4c2a455b455d236b22c6ac70774a5ba617da761c9c843baf',
    nativeAmount: '991145',
    currencyCode: 'BTC'
  },
  {
    date: 1802050465,
    txid: '9sf7133b1b33d86d4c2a455b455d236b22c6ac70774a5ba617da761c9c843bag',
    nativeAmount: '1091145',
    currencyCode: 'BTC'
  },
  {
    date: 1812050465,
    txid: '9tf7133b1b33d86d4c2a455b455d236b22c6ac70774a5ba617da761c9c843bah',
    nativeAmount: '1191145',
    currencyCode: 'BTC'
  },
  {
    date: 1812051465,
    txid: '9uf7133b1b33d86d4c2a455b455d236b22c6ac70774a5ba617da761c9c843bai',
    nativeAmount: '1291145',
    currencyCode: 'BTC'
  },
  {
    date: 1812052465,
    txid: '9vf7133b1b33d86d4c2a455b455d236b22c6ac70774a5ba617da761c9c843baj',
    nativeAmount: '491145',
    currencyCode: 'BTC'
  }
]

export const getCore = (state: State) => state.core

// Context
export const getContext = (state: State) => {
  const core = getCore(state)
  const context = core.context.context
  return context
}

export const getUsernames = (state: State) => {
  const core = getCore(state)
  const usernames = core.context.usernames
  return usernames
}

export const getNextUsername = (state: State) => {
  const core = getCore(state)
  const nextUsername = core.context.nextUsername
  return nextUsername
}

export const getIO = (state: State) => {
  const context = getContext(state)
  const io = context.io
  return io
}

// Account
export const getAccount = (state: State) => {
  const core = getCore(state)
  const account = core.account
  return account
}

export const getUsername = (state: State) => {
  const account = getAccount(state)
  const username = account.username
  return username
}

export const getCurrencyConverter = (state: State) => {
  const account = getAccount(state)
  const currencyConverter = account.exchangeCache
  return currencyConverter
}

export const getExchangeRate = (state: State, fromCurrencyCode: string, toCurrencyCode: string) => {
  const currencyConverter = getCurrencyConverter(state)
  const exchangeRate = currencyConverter.convertCurrency(fromCurrencyCode, toCurrencyCode, 1)
  return exchangeRate
}

export const getFakeExchangeRate = (state: State, fromCurrencyCode: string, toCurrencyCode: string) => {
  const currencyConverter = getCurrencyConverter(state)
  const exchangeRate = currencyConverter.convertCurrency(fromCurrencyCode, toCurrencyCode, 1)
  return exchangeRate + Math.random() * 10
}

// Wallets
export const getWallets = (state: State): { [walletId: string]: AbcCurrencyWallet } => {
  const core = getCore(state)
  const wallets = core.wallets.byId
  return wallets
}

export const getWallet = (state: State, walletId: string): AbcCurrencyWallet => {
  const wallets = getWallets(state)
  const wallet = wallets[walletId]
  return wallet
}

export const getWalletName = (state: State, walletId: string): string => {
  const wallet = getWallet(state, walletId)
  return (wallet && wallet.name) || 'no wallet name'
}

export const fetchWalletTransactions = (state: State, walletId: string, currencyCode: string, options: object): Array<any> => {
  let transactions = []
  if (options.numIndex >= 10) {
    transactions = transactionListB
  } else {
    transactions = transactionListA
  }
  return transactions
}

export const getBalanceInCrypto = (state: State, walletId: string, currencyCode: string) => {
  const wallet = getWallet(state, walletId)
  const balance = wallet.getBalance(currencyCode)
  return balance
}
