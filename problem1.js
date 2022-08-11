//  problem 1 --------->
function radianToDegree(radian){
    if(0 < radian && typeof(radian) == "number"){
    const convert = Math.PI;
    const convertRadianToDegree = radian * (180 / convert);
    const convertValue = convertRadianToDegree.toFixed(2);
    return convertValue;
    }
    else{
        return "Type valid number"
    }
}

