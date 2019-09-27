class BankAccount {
    constructor(accname,accnum, accbal) {
        this.accname = accname
        this.accnum = accnum
        this.accbal = accbal
        this.debit = debit
        this.withdrawal = withdrawal
    }

    getBalance() {
        return this.accbal;
    }

    open() {
        console.log('Account holder: '+ this.accname + "<br>" + 'Account Number: ' + this.accnum + "<br>" + 'Balance: ' + this.accbal + "<br>" + "Account Opened.");
    }

    deposit() {
        console.log(this.accbal += debit);
    }

    withdraw() {
        console.log (this.accbal -= withdrawal);
    }

    close(){
         console.log('Account Closed')
    }
}