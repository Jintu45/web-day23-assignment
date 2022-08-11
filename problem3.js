function oilPrice(diesel, petrol, unleaded){
    if (typeof(diesel) == "number" && typeof(petrol) == "number" && typeof(unleaded) == "number" && diesel >= 0 && petrol >= 0 && unleaded >= 0){
        const dieselPrice = diesel * 114;
        const petrolPrice = petrol * 130;
        const unleadedPrice = unleaded * 135;
        const totalPrice = dieselPrice + petrolPrice + unleadedPrice;
        return totalPrice;
    }
    else{
        return "please valid input"
    }  
}
const oil = oilPrice(0, 2, 3);
console.log(oil);