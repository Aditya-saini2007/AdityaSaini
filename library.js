class Library{
    constructor(LibraryName,LibraryAddress,owner,estYear){
        this.LibraryName = LibraryName;
        this.LibraryAddress = LibraryAddress;
        this.owner = owner;
        this.ListOfBooks = []
        this.estYear = estYear;
        this.ListOfUsers =[]
        this.borrowerDetail = []
        this.usercount = 0;
    }
    addstock(bTitle,bAuthor,bQty,bPrice,bYear,bType){
        this.ListOfBooks.push(new BookStock(bTitle,bAuthor,bQty,bPrice,bYear,bType))
    }
    issuebook(){

    }
    returnbook(){

    }
    adduser(name,){

    }
}


class BookStock{
    constructor(){

    }
}


class UserDetails{
    constructor(){
        
    }
}