/*USDC*/
/*USDC*/

const apiUsdc = "https://api.binance.com/api/v3/ticker/24hr?symbol=USDCUSDT"

async function fetchUsdc(){

  try{
    const response = await fetch(apiUsdc)
    const date = await response.json()

    document.getElementById('priceUsdc').innerHTML = '$ ' + parseFloat(date.askPrice).toFixed(2)

  }catch(error){

  }
}

setInterval(fetchBitcoin, 1000)

fetchUsdc()


/*BTC*/
/*BTC*/


const apiBtc = "https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT"

async function fetchBitcoin(){

  try{
    const response = await fetch(apiBtc)
    const date = await response.json()

    document.getElementById('priceBtc').innerHTML = '$ ' + parseFloat(date.askPrice).toFixed(2)


  }catch(error){

  }
}

setInterval(fetchBitcoin, 1000)

fetchBitcoin()


/*ETH*/
/*ETH*/


const apiEth = "https://api.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT"

async function fetchEth(){

  try{
    const response = await fetch(apiEth)
    const date = await response.json()

    document.getElementById('priceEth').innerHTML = '$ ' + parseFloat(date.askPrice).toFixed(2)


  }catch(error){

  }
}

setInterval(fetchEth, 1000)

fetchEth()


/*XRP*/
/*XRP*/


const apiXrp = "https://api.binance.com/api/v3/ticker/24hr?symbol=XRPUSDT"

async function fetchXrp(){

  try{
    const response = await fetch(apiXrp)
    const date = await response.json()


    document.getElementById('priceXrp').innerHTML = '$ ' + parseFloat(date.askPrice).toFixed(2)

  }catch(error){

  }
}

setInterval(fetchXrp, 1000)

fetchXrp()

