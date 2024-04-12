import { DioAccount } from "./DioAccount";
export class PremiumAccount extends DioAccount{

    constructor(name: string, accountNumber: number){
       super(name, accountNumber)
    }

    deposit = (value: number): void => {
        if(this.validateStatus()){
            let newBalance: number = this.getBalance() + value + value*0.1
            this.setBalance(newBalance);
            console.log("Valor depositado com sucesso!") 
        }
    }
}