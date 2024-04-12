export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
      return console.log("Valor depositado com sucesso.")
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus()){
      try{
        let newBalance: number = this.balance -= value
        if(newBalance < 0){
          throw new Error('Saldo insuficiente')
        }
        this.balance = newBalance
        console.log('Valor retirado com sucesso!')
      }catch(err){
        console.log(err)
      }
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
