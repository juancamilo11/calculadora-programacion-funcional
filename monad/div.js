const div = (a, b, result, add, substract)=>{
    if(a < 0){
        return substract(result, 1);
    }
    return div(substract(a, b), b, add(result, 1), add, substract)
}

const numero = filter((num)=> num>=0);

export default div;