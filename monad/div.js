import range from "./range.js";

const div = (numerator ,denominator,add, mult) => {
    if(denominator === 0) {
        return `Deniminator must be different than 0`;
    }
    return range(1, Math.abs(numerator))
        .reduce((acum, num)=> {
            if(mult(num,Math.abs(denominator))<=Math.abs(numerator)) {
                return add(acum,1);
            };
            return acum;
        }, 0) * Math.sign(numerator) * Math.sign(denominator);
}

export default div;
