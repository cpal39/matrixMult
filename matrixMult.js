const dotProduct = (a, b) => {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i] * b[i]
    }
    return sum;
}

const transpose = (a) => {
    let res = [];
    for (let i = 0; i < a[0].length; i++) {
        let row = [];
        for (let j = 0; j < a.length; j++) {
            row.push(a[j][i]);
        }
        res.push(row);
    }
    return res;
}

const printMatrix = (a) => {
    a.forEach(element =>
        console.log(element));
}

const matrixMult = (a, b) => {
    b = transpose(b);
    let aRows = a.length;
    let bRows = b.length;
    let res = [];
    for (let i = 0; i < aRows; i++) {
        let row = [];
        for (let j = 0; j < bRows; j++) {
            row.push(dotProduct(a[i], b[j]));
        }
        res.push(row);
    }
    return res;
}