//Function for calculating range between tho numbers (Both included)
const range = (start, end) => {
    if(start === end) return [start];
    if(start < end)
        return [start, ...range(start + 1, end)];
    return [end, ...range(end + 1, start)];
}

export default range;