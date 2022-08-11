function publicBusFare(member){
    if (typeof(member) == "number" && member >= 0){
        if(member >= 50){
            let peopleRemainAfterBus = member % 50;
            if(peopleRemainAfterBus % 11 >= 0 ){
                let peopleRemainAfterCar = peopleRemainAfterBus % 11;
                return peopleRemainAfterCar * 250;             
            }
            else{
                return peopleRemainAfterBus * 250;
            }
        }
        else{
            return member * 250;
        } 
    }
    else{
        return "Type valid input";
    }  
}
let first = publicBusFare(365);
console.log(first);