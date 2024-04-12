import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if(this.validateStatus()){
      let newBalance: number = this.getBalance() + value
      this.setBalance(newBalance);
    }
    console.log('Voce pegou um empréstimo')
  }
}
