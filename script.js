/*USDC*/

//API USDC
const apiUsdcPrice = "https://api.binance.com/api/v3/ticker/24hr?symbol=USDCUSDT"


async function fetchUsdc(){

  //PERCENTAGE

  try{

    const response = await fetch(apiUsdcPrice)
    const date = await response.json()

    document.getElementById('usdcPercentage').innerHTML =  parseFloat(date.priceChangePercent).toFixed(2) + '% ' + ' (24h)'

    //PERCENTAGE COLOR
    if(date.priceChangePercent >= 0.00){
      
      //GREEN
      const red = document.getElementById('usdcPercentage')
      red.style.color = '#10CB81'

    }else{

      //RED
      const red = document.getElementById('usdcPercentage')
      red.style.color = '#F6465D'

    }

  }catch(error){

  }

   //PRICE

  try{

    const response = await fetch(apiUsdcPrice)
    const date = await response.json()

    document.getElementById('priceUsdc').innerHTML = '$ ' + parseFloat(date.askPrice).toFixed(2)

  }catch(error){

  }


}

setInterval(fetchUsdc, 1000)

fetchUsdc()


//BTC

//API BTC
const apiBtc = "https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT"

async function fetchBitcoin(){
  
  //PERCENTAGE

  try{
    const response = await fetch(apiBtc)
    const date = await response.json()

    document.getElementById('btcPercentage').innerHTML =  parseFloat(date.priceChangePercent).toFixed(2) + '% ' + ' (24h)'

    //PERCENTAGE COLOR
    if(date.priceChangePercent >= 0.00){
      
      //GREEN
      const red = document.getElementById('btcPercentage')
      red.style.color = '#10CB81'

    }else{

      //RED
      const red = document.getElementById('btcPercentage')
      red.style.color = '#F6465D'

    }

  }catch(error){

  }

  //PRICE

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

//API ETH 
const apiEth = "https://api.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT"

async function fetchEth(){

  //PERCENTAGE

  try{
    const response = await fetch(apiEth)
    const date = await response.json()

    document.getElementById('ethPercentage').innerHTML =  parseFloat(date.priceChangePercent).toFixed(2) + '% ' + ' (24h)'

    //PERCENTAGE COLOR
    if(date.priceChangePercent >= 0.00){
      
      //GREEN
      const red = document.getElementById('ethPercentage')
      red.style.color = '#10CB81'

    }else{

      //RED
      const red = document.getElementById('ethPercentage')
      red.style.color = '#F6465D'

    }
  }catch(error){

  }

  //PRICE

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

//API XRP
const apiXrp = "https://api.binance.com/api/v3/ticker/24hr?symbol=XRPUSDT"

async function fetchXrp(){

  //PERCENTAGE

  try{
    const response = await fetch(apiXrp)
    const date = await response.json()

    document.getElementById('xrpPercentage').innerHTML =  parseFloat(date.priceChangePercent).toFixed(2) + '% ' + ' (24h)'

    //PERCENTAGE COLOR
    if(date.priceChangePercent >= 0.00){
      
      //GREEN
      const red = document.getElementById('xrpPercentage')
      red.style.color = '#10CB81'

    }else{

      //RED
      const red = document.getElementById('xrpPercentage')
      red.style.color = '#F6465D'

    }

  }catch(error){

  }  

  //PRICE

  try{
    const response = await fetch(apiXrp)
    const date = await response.json()


    document.getElementById('priceXrp').innerHTML = '$ ' + parseFloat(date.askPrice).toFixed(2)

  }catch(error){

  }
}

setInterval(fetchXrp, 1000)

fetchXrp()  