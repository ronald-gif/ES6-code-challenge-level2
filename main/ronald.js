// will not. The property #secretMessage isn't "available" to outside scopes. So why is this a useful thing?
// This is a concept of encapsulation, where access is restricted to stuff outside the class,
// They are used for declaration of field names as well as for accessing a field's value
// prevents direct modification

class Twitter{
    #password;
    #tweetsArray = [];

    constructor(user,password){
        this.user = user;
        this.#password = "RoNzx"

    }

    checkPassword(str){
        if(str == this.#password){
            return true;
        }else{
            return "wrong password" ;
        }

    }

    get Password(){
        return "****";

    }

    set passwordd(myNewPassword){
        this.#password = myNewPassword;
    }
    
    set tweet(myStr){
        this.#tweetsArray.push(myStr);
        
    }

    get tweets(){
        return this.#tweetsArray.slice()
    }
}

let classInstance = new Twitter("ronnie")

console.log(classInstance.user)
console.log(classInstance.tweet);
console.log(classInstance.tweets);
console.log(classInstance.checkPassword("RoNzx"));
console.log(classInstance.Password);





