function isBestFriend(friend1, friend2){
    if(typeof(friend1.name) == "string" && typeof(friend1.friend) == "string" && typeof(friend2.name) == "string" && typeof(friend2.friend) == "string"){
        if(friend1.name == friend2.friend && friend2.name == friend1.friend){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return 'invalid input';
    }    
}
let friend1 = {name: "abul", friend:"babul"}
let friend2 = {name:"babul", friend: "numan"}

let first = isBestFriend(friend1, friend2);
console.log(first);