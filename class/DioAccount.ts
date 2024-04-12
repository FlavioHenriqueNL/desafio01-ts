export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }
  getAccountNumber = (): number => {
    return this.accountNumber
  }
  getBalance = (): number => {
    return this.balance
  }
  setBalance = (value: number) => {
    this.balance = value
  }

  setStatus = (): void =>{
    this.status = !this.status
  }
  // Pro meu escopo, não é necessário criar um getStatus visto a existencia do validadeStatus()
  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      let newBalance: number = this.getBalance() + value
      this.setBalance(newBalance);
      return console.log("Valor depositado com sucesso.")
    }
  }
  withdraw = (value: number): void => {
    if(this.validateStatus()){
      try{
        let newBalance: number = this.getBalance() - value
        if(newBalance < 0){
          throw new Error('Saldo insuficiente')
        }
        this.setBalance(newBalance);
        console.log('Valor retirado com sucesso!')
      }catch(err){
        console.log(`${err}`)
      }
    }
  }

  visualizeAccount = ():void =>{
    if(this.validateStatus()){
      return console.log(`
        Olá! ${this.getName()}, 
        Sua conta ${this.getAccountNumber()} possui o saldo de: R$${this.getBalance()}
      `)
    }
  }
}
