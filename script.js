/*USDC*/

//API USDC
const apiUsdcPrice = "https://api.binance.com/api/v3/ticker/24hr?symbol=USDCUSDT"

let lastPriceUsdc = null

async function fetchUsdc(){

  //PERCENTAGE

  try{

    const response = await fetch(apiUsdcPrice)
    const date = await response.json()

    document.getElementById('usdcPercentage').innerHTML =  parseFloat(date.priceChangePercent).toFixed(2) + '% ' + ' (24h)'

    //PERCENTAGE COLOR
    if(date.priceChangePercent >= 0.00){
      
      document.getElementById('usdcPercentage').innerHTML = '+' + parseFloat(date.priceChangePercent).toFixed(2) + '% ' + ' (24h)'

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

    let firstPrice = parseFloat(date.askPrice).toFixed(2)

    //PRICE COLOR

    if(lastPriceUsdc !== null){

      //RED
      if(firstPrice < lastPriceUsdc){

        let color = document.getElementById('priceUsdc')
        color.style.color = '#F6465D'
      
      //GREEN
      }else if(firstPrice > lastPriceUsdc){

        let color = document.getElementById('priceUsdc')
        color.style.color = '#16C784'
      
      //WHITE
      }else{

        let color = document.getElementById('priceUsdc')
        color.style.color = 'white'
      
      }
    }

    document.getElementById('priceUsdc').innerHTML = '$' + parseFloat(date.askPrice).toFixed(2)

    lastPriceUsdc = parseFloat(date.askPrice).toFixed(2)

  }catch(error){

  }


}

setInterval(fetchUsdc, 1500)

fetchUsdc()


//BTC

//API BTC
const apiBtc = "https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT"

let lastPriceBtc = null

async function fetchBitcoin(){
  
  //PERCENTAGE

  try{
    const response = await fetch(apiBtc)
    const date = await response.json()

    document.getElementById('btcPercentage').innerHTML =  parseFloat(date.priceChangePercent).toFixed(2) + '% ' + ' (24h)'

    //PERCENTAGE COLOR
    if(date.priceChangePercent >= 0.00){

      document.getElementById('btcPercentage').innerHTML = '+' + parseFloat(date.priceChangePercent).toFixed(2) + '% ' + ' (24h)'
      
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

    let firstPrice = parseFloat(date.askPrice).toFixed(2)

    //PRICE COLOR

    if(lastPriceBtc !== null){

      //RED
      if(firstPrice < lastPriceBtc){

        let color = document.getElementById('priceBtc')
        color.style.color = '#F6465D'
      
      //GREEN
      }else if(firstPrice > lastPriceBtc){

        let color = document.getElementById('priceBtc')
        color.style.color = '#16C784'
      
      //WHITE
      }else{

        let color = document.getElementById('priceBtc')
        color.style.color = 'white'
      
      }
    }

    document.getElementById('priceBtc').innerHTML = '$' + parseFloat(date.askPrice).toFixed(2)

    lastPriceBtc = parseFloat(date.askPrice).toFixed(2)

  }catch(error){

  }

}

setInterval(fetchBitcoin, 1500)

fetchBitcoin()


/*ETH*/

//API ETH 
const apiEth = "https://api.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT"

let lastPriceEth = null

async function fetchEth(){

  //PERCENTAGE

  try{
    const response = await fetch(apiEth)
    const date = await response.json()

    document.getElementById('ethPercentage').innerHTML =  parseFloat(date.priceChangePercent).toFixed(2) + '% ' + ' (24h)'

    //PERCENTAGE COLOR
    if(date.priceChangePercent >= 0.00){
      
      document.getElementById('ethPercentage').innerHTML = '+' + parseFloat(date.priceChangePercent).toFixed(2) + '% ' + ' (24h)'

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

    let firstPrice = parseFloat(date.askPrice).toFixed(2)

    //PRICE COLOR

    if(lastPriceEth !== null){

      //RED
      if(firstPrice < lastPriceEth){

        let color = document.getElementById('priceEth')
        color.style.color = '#F6465D'
      
      //GREEN
      }else if(firstPrice > lastPriceEth){

        let color = document.getElementById('priceEth')
        color.style.color = '#16C784'
      
      //WHITE
      }else{

        let color = document.getElementById('priceEth')
        color.style.color = 'white'
      
      }
    }

    document.getElementById('priceEth').innerHTML = '$' + parseFloat(date.askPrice).toFixed(2)

    lastPriceEth = parseFloat(date.askPrice).toFixed(2)

  }catch(error){

  }
}

setInterval(fetchEth, 1500)

fetchEth()


/*SOL*/

//API SOL
const apiSol = "https://api.binance.com/api/v3/ticker/24hr?symbol=SOLUSDT"

let lastPriceSol = null

async function fetchSol(){

  //PERCENTAGE

  try{
    const response = await fetch(apiSol)
    const date = await response.json()

    document.getElementById('solPercentage').innerHTML =  parseFloat(date.priceChangePercent).toFixed(2) + '% ' + ' (24h)'

    //PERCENTAGE COLOR
    if(date.priceChangePercent >= 0.00){
      
      document.getElementById('solPercentage').innerHTML = '+' + parseFloat(date.priceChangePercent).toFixed(2) + '% ' + ' (24h)'

      //GREEN
      const red = document.getElementById('solPercentage')
      red.style.color = '#10CB81'

    }else{

      //RED
      const red = document.getElementById('solPercentage')
      red.style.color = '#F6465D'

    }
  }catch(error){

  }

  //PRICE

  try{
    const response = await fetch(apiSol)
    const date = await response.json()

    let firstPrice = parseFloat(date.askPrice).toFixed(2)

    //PRICE COLOR

    if(lastPriceSol !== null){

      //RED
      if(firstPrice < lastPriceSol){

        let color = document.getElementById('priceSol')
        color.style.color = '#F6465D'
      
      //GREEN
      }else if(firstPrice > lastPriceSol){

        let color = document.getElementById('priceSol')
        color.style.color = '#16C784'
      
      //WHITE
      }else{

        let color = document.getElementById('priceSol')
        color.style.color = 'white'
      
      }
    }

    document.getElementById('priceSol').innerHTML = '$' + parseFloat(date.askPrice).toFixed(2)

    lastPriceSol = parseFloat(date.askPrice).toFixed(2)


  }catch(error){

  }
}

setInterval(fetchSol, 1500)

fetchSol()


/*XRP*/

//API XRP
const apiXrp = "https://api.binance.com/api/v3/ticker/24hr?symbol=XRPUSDT"

let lastPriceXrp = null

async function fetchXrp(){

  //PERCENTAGE

  try{
    const response = await fetch(apiXrp)
    const date = await response.json()

    document.getElementById('xrpPercentage').innerHTML =  parseFloat(date.priceChangePercent).toFixed(2) + '% ' + ' (24h)'

    //PERCENTAGE COLOR
    if(date.priceChangePercent >= 0.00){
      
      document.getElementById('xrpPercentage').innerHTML = '+' + parseFloat(date.priceChangePercent).toFixed(2) + '% ' + ' (24h)'

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

    let firstPrice = parseFloat(date.askPrice).toFixed(2)

    //PRICE COLOR

    if(lastPriceXrp !== null){

      //RED
      if(firstPrice < lastPriceXrp){

        let color = document.getElementById('priceXrp')
        color.style.color = '#F6465D'
      
      //GREEN
      }else if(firstPrice > lastPriceXrp){

        let color = document.getElementById('priceXrp')
        color.style.color = '#16C784'
      
      //WHITE
      }else{

        let color = document.getElementById('priceXrp')
        color.style.color = 'white'
      
      }
    }

    document.getElementById('priceXrp').innerHTML = '$' + parseFloat(date.askPrice).toFixed(2)

    lastPriceXrp = parseFloat(date.askPrice).toFixed(2)

  }catch(error){

  }
}

setInterval(fetchXrp, 1500)

fetchXrp()