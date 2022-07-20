//Main Funtion

function Blockchain () {

    this.chain = [];
    this.pendingTransactions = [];
}

//Add Block in Function

Blockchain.prototype.createNewBlock = function (nonce, prevBlockHash, hash){

    const newBlock = {
        index : this.chain.length + 1,
        timestamp : Date.now(),
        transactions : this.pendingTransactions,
        nonce : nonce,
        prevBlockHash : prevBlockHash,
        hash : hash,
    };

    this.pendingTransactionn = [];
    this.chain.push(newBlock);

    return newBlock;
}

// Get Last Completed Block

Blockchain.prototype.getLastBlock = function(){
    return this.chain [this.chain.length -1];
}

// Add New Transactions Function




module.exports = Blockchain;