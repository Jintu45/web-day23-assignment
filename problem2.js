function isJavaScriptFile(file){
    if(typeof(file) != "string"){
        return "type valid input"
    }
    else if( file.match(/(\w*)\.js$/) == undefined){
        return false;
    }
    else {
        return true;
    }
}
const secondName = isJavaScriptFile(55);
console.log(secondName);

