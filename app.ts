import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PremiumAccount } from './class/PremiumAccount'

const contaDeTeste1: CompanyAccount = new CompanyAccount('FHNL - Dev', 55478)
const contaDeTeste2: PeopleAccount = new PeopleAccount(15478968758547,'Flavio', 1)
const contaDeTeste3: PremiumAccount = new PremiumAccount('Sir. Flávio Henrique', 99)

console.log("============================")
console.log(contaDeTeste1.getName());
console.log(contaDeTeste1.getAccountNumber());
console.log(contaDeTeste1.getBalance());
contaDeTeste1.withdraw(500)
contaDeTeste1.getLoan(1500)
contaDeTeste1.deposit(850)
contaDeTeste1.withdraw(1200)
contaDeTeste1.visualizeAccount()
console.log("============================")
console.log(contaDeTeste2.getName());
console.log(contaDeTeste2.getAccountNumber());
console.log(contaDeTeste2.getDoc());
console.log(contaDeTeste2.getBalance());
contaDeTeste2.withdraw(500)
contaDeTeste2.deposit(850)
contaDeTeste2.withdraw(700)
contaDeTeste2.visualizeAccount()
console.log("============================")
console.log(contaDeTeste3.getName());
console.log(contaDeTeste3.getAccountNumber());
console.log(contaDeTeste3.getBalance());
contaDeTeste3.deposit(850)
console.log(contaDeTeste3.getBalance());
contaDeTeste3.withdraw(700)
contaDeTeste3.visualizeAccount()