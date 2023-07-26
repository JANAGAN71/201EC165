const express = require('express');
const url = require('url');
const app = express();


const urlLinks = [
    {primes:'http://20.244.56.144/numbers/fibo'},
    {fibo:'http://20.244.56.144/numbers/fibo'},
    {odd:'http://20.244.56.144/numbers/odd'},
    {rand:'http://20.244.56.144/numbers/odd'}
]

const fiboNumbers = [
    { numbers: [1, 1, 2, 3, 5, 8, 13, 21] }
]
const oddNumber = [
    { numbers: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23] }
]
const primeNumber = [
    { numbers: [2, 3, 5, 7, 11, 13] }
]

const randomNumber = [
    { numbers: [5, 17, 3, 19, 76, 24, 1, 5, 10, 34, 8, 27, 7] }
]


function getUnion(a, b) {
    let s = new Set();
    for (let i = 0; i < a.length; i++)
        s.add(a[i]);
    for (let i = 0; i < b.length; i++)
        s.add(b[i]);    
    let arr = Array.from(s);
    arr.sort(function(a, b){return a - b});
    return arr;
}

app.get('/', (req, res) => {
    res.send('Home Page');
    res.end();
});


app.get('/number/primes', (req, res) => {
    res.send(primeNumber);
    res.end();
});

app.get('/number/rand', (req, res) => {
    res.send(randomNumber);
    res.end();
});

app.get('/number/odd', (req, res) => {
    res.send(oddNumber);
    res.end();
});

app.get('/number/fibo', (req, res) => {
    res.send(fiboNumbers);
    res.end();
});

app.get('/number/fibo&odd', (req, res) => {
    
    res.send(getUnion(fiboNumbers[0].numbers, oddNumber[0].numbers, randomNumber[0].numbers, primeNumber[0].numbers));
    res.end();
})


app.listen(3000, () => { console.log('Port running on 3000') });