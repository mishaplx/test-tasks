//{ ETH: 4, TRON: 5, MATIC: 1 },  ["ETH", "ETH", "ETH/TRON", "TRON/ETH", "TRON/MATIC", "TRON", "MATIC"]
checkCoins({ ETH: 1, TRON: 5, MATIC: 1 },  ["ETH/TRON", "ETH/MATIC","ETH/MATIC"])
function checkCoins(coinAvailable,personRequested){
    const resultArr = []
//if(!isNotReal(coinAvailable,personRequested)) return null;
    for (let i = 0; i < personRequested.length; i++) {
        let coin = personRequested[i]
        coin = checkMoreCoins(coin)
        if(typeof coin === 'string'){
            const check =  minusCoin(coin, coinAvailable,i,personRequested)
            if(check === null){
                return null
            }
            else{
                coinAvailable = check
            }
        }
        else{
            for (let j = 0; j < coin.length; j++) {
                const check =  minusCoin(coin[j], coinAvailable,i,personRequested)
                if(check === null){
                    console.log('IS NOT REAL')
                    return null
                }
                else{
                    coinAvailable = check
                }
            }
        }

    }
}
function minusCoin(key,coinAvailable, indexArr,personRequested){
    if(coinAvailable[key] == 0){
        for (let i = indexArr; i < personRequested.length ; i++) { //проверка на наличие в остатке массива одиночной манеты
            if (key === personRequested[i]){
                return null
            }
        }
        return coinAvailable
    }
    coinAvailable[key] = coinAvailable[key] - 1
    console.log(coinAvailable,'i---')


    if(coinAvailable[key] == -1){
        console.log('IS NOT REAL')
        return null
    }
    return coinAvailable;
}
function checkMoreCoins(strCoins){
    const arrCoin =strCoins.split('/')
    return arrCoin.length > 1 ? arrCoin : strCoins
}

function isNotReal(coinAvailable,personRequested){

}



