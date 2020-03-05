'use strict'

const AccountLog = {
  deposits: 0.00,
  withdrawals: 0.00
}

const account = {
  balance: 0.00
}

const updateLog = function (log, amount, transaction) {
  if (transaction.includes('deposit') === true) log.deposits += amount
  if (transaction.includes('withdrawal') === true) log.withdrawals += amount
}

const deposit = function (amount, acc, log) {
  acc.balance += amount
  updateLog(log, amount, 'deposit')
}

const withdraw = function (amount, acc, log) {
  acc.balance -= amount
  updateLog(log, amount, 'withdrawal')
}

const getSummary = function (acc, log) {
  console.log(`This account has a balance of R${acc.balance}.  
  There have been deposits totalling R${log.deposits} and withdrawals totalling R${log.withdrawals}`)
}

console.log(account)
deposit(50.00, account, AccountLog)
getSummary(account, AccountLog)
deposit(50.00, account, AccountLog)
withdraw(20.00, account, AccountLog)
console.log(account.balance)
getSummary(account, AccountLog)
