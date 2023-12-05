const Blockchain = require('./blockchain')

let bitcoin = new Blockchain();

console.log(bitcoin);

bitcoin.createNewTransaction(
    '£1,000',
    'harsh_garg',
    'random_internet_pereson',
)

console.log(bitcoin);

bitcoin.createNewBlock()

console.log(bitcoin);
console.log(bitcoin.chain[1].transactions);