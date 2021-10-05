
const mult =  (a,b, add, substraction) => {
    
    if(b === 1){
        return a;
    }

    return add(a, mult(a, substraction(b, 1)));
}

export default mult;