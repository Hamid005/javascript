 // "This" refer to the object of the class  
class Bank {
    balance = 0;
    constructor(balance){
        this.balance = this.balance + balance;
    }
        // this.balance
        // this.credit( )
    // }
    // getRef( ){
    //     return this;
    // }

    credit(balance) {     //  +
         // Guard clause
         if(balance <= 0)return;
        
        this.balance = this.balance + balance
    }
    debit(balance) {    //  -
        if(balance<= 0 && balance>this.balance)return;
        
        this.balance = this.balance - balance
    }
    getBalance( ){
        return this.balance;
    }
}
const user1 = new Bank(500);
user1.credit(100);
user1.credit(100);
user1.credit(100);
user1.debit(500);
user1.debit(500);

console.log( ` Your balance is :  `+ user1.getBalance ())

// const obj1= new Bank (500);
// const obj2 = obj1.getRef( );

// if( obj1 == obj2){
//     console.log("Yes");
// }
// else{
//     console.log("No")
// }
// }










