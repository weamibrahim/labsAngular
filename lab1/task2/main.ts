
class Account{
    Acc_no:number;
    Balance:number;
   constructor(Acc_no = 0, Balance = 0){
       this.Acc_no = Acc_no;
       this.Balance = Balance;
   }
   debitAmount(){
    throw new Error("Method not implemented.");
   }
   creditAmount(){
    throw new Error("Method not implemented.");
   }
   getBalanc(){
    throw new Error("Method not implemented.");
   }

}


interface IAccount{
   Date_of_opening:Date;
   addCustomer();
   removeCustomer();
}  

class Saving_Account extends Account implements IAccount{

   constructor(Acc_no = 0, Balance = 0, public Min_Balance = 0){
       super(Acc_no,Balance );
       this.Min_Balance = Min_Balance;
   }
   Date_of_opening:Date;

   addCustomer() {
       throw new Error("Method not implemented.");
   }
   removeCustomer() {
       throw new Error("Method not implemented.");
   }
}

class Current_Account extends Account implements IAccount{
   
   constructor(Acc_no = 0, Balance = 0, public insert_rate = 0){
       super(Acc_no,Balance );
       this.insert_rate = insert_rate;
   }
   Date_of_opening:Date;
   addCustomer() {
       throw new Error("Method not implemented.");
   }
   removeCustomer() {
       throw new Error("Method not implemented.");
   }
}
