 // "This" refer to the object of the  curent class  
class Bank {
    // private:
    balance = 0;
    getBalance( ){
        return this.balance;
    }
    setBalance(balance){
        this.balance = balance;
    }
    constructor(balance){
        this.balance = this.balance + balance;
    }
        // this.balance
        // this.credit( )
    // }  
    // getRef( ){
    //     return this;
    // }
 // setter
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

console.log(`Your balance is :  `+ user1.getBalance ( ) )

// const obj1= new Bank (500);
// const obj2 = obj1.getRef( );

// if( obj1 == obj2){
//     console.log("Yes");
// }
// else{
//     console.log("No")
// }
// }
// Guard class
// constructor
// this
//getter( p.variable sa value lina kiliya)
//setter( private var chaange krna kiliya)








