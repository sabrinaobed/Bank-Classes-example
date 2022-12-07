class Bank {
    constructor(balance){
      this.balance = balance
    }
    
    withdraw(amount){
      //guard clause
      if(this.balance-amount <= 0){
        console.log('You cannot withdraw more than what you have!')
        console.log({balance: this.balance})
        return
      }
      this.balance -= amount
      console.log('withdrew',`$${amount}`)
      console.log({balance: this.balance})
    }
    
    deposit(amount){
      this.balance += amount
      console.log('deposited',`$${amount}`)
      console.log({balance: this.balance})
    }
  }
  
  const obedChecking = new Bank(100)
  console.log(obedChecking.balance)
  obedChecking.deposit(10000)
  obedChecking.deposit(10000)
  obedChecking.deposit(10000)
  obedChecking.withdraw(1000)
  obedChecking.withdraw(20000)
  obedChecking.withdraw(5000)
  obedChecking.withdraw(5000)
  
  const depositButton = document.getElementById('deposit')
  const withdrawButton = document.getElementById('withdraw')
  const amountInput = document.getElementById('amount')
  const balanceDiv = document.getElementById('balance')
  
  
  depositButton.onclick = () => {
    const amount = Number(amountInput.value)
    obedChecking.deposit(amount)
    balanceDiv.innerText = `Balance : ${obedChecking.balance}`
  }
  
  withdrawButton.onclick = () => {
    const amount = Number(amountInput.value)
    obedChecking.withdraw(amount)
    balanceDiv.innerText = `Balance : ${obedChecking.balance}`
  }
  