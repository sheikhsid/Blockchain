//Import Fine

const Blockchain = require ('./blockchain');

// Insert function into variable 

const sdcoin = new Blockchain ();

// Assign Value in Block

sdcoin.createNewBlock (1234, '7tg47qefyvb67tg47q3rgb', '7834tgq67rofbeqfv7e3fy6qv');

// Assign Value in Transaction

sdcoin.createNewTransaction (3654, '7tg47qe45y6e4q3rgb', '7834tb454fv7e3fy6qv');
sdcoin.createNewTransaction (3764, '7tg47qe4567e4q3rgb', '7834tb4678e3fy6qv');

// Assign Value in Block

sdcoin.createNewBlock (2654, '7tg47q4356tg47q3rgb', '7834tgq62456eqfv7e3fy6qv');

//console.log (sdcoin);

console.log (sdcoin.chain[1]);