function convert( cotacao, quantidade){
    return cotacao * quantidade
}

function toMoney(value){
    return parseFloat(value).toFixed(2)
}

module.exports = {
    convert,
    toMoney
}