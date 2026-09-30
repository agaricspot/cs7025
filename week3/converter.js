const RATE = {
    eur: 1,
    usd: 1.1353487, 
    cad: 1.61028513,
    gbp: 0.85564246,
    aud: 1.62971436
}

function convert(start_curr, end_curr, value){
    if(isNaN(value)){
       throw new Error("Value entered is not a number")
    }

    start_curr = start_curr.toLowerCase()
    end_curr = end_curr.toLowerCase()

    return value * RATE[end_curr] / RATE[start_curr]


    /*switch(start_curr){
        case 'usd':
            if(end_curr==='cad'){
                return value * RATE.cad / RATE.usd
            } 

            if(end_curr==='eur'){
                return value * .88
            }
            break
        case 'cad':
            if(end_curr==='usd'){
                return value * .7
            }

            if (end_curr==='eur'){
                return value * .62
            }
            break
        case 'eur':
            if (end_curr==='usd'){
                return value * 1.13
            }

            if(end_curr==='cad'){
                return value * 1.6
            }
            break
        
    }
    throw new Error("Unsupported currency conversion")*/
}

function convertFromForm(){
    const amount = Number(document.getElementById('amount').value)
    const start_currency = document.getElementById('scurrency').value
    const end_currency = document.getElementById('ecurrency').value
    const result = convert(start_currency, end_currency, amount)
    const stronger = RATE[start_currency] < RATE[end_currency] ? start_currency : end_currency

    document.getElementById('result').textContent =
        `${amount} ${start_currency.toUpperCase()} = ${result.toFixed(2)} 
        ${end_currency.toUpperCase()}. ${stronger.toUpperCase()} is a stronger currency.`
}

function listCurrencies(){
   const list = document.getElementById('currency-list'); 

   for(let i=1; i<Object.keys(RATE).length; i++){
        const li  = document.createElement('li');
        li.textContent = '1 EUR = ' + RATE[Object.keys(RATE)[i]].toFixed(2) + ' ' + Object.keys(RATE)[i].toUpperCase(); 
        list.appendChild(li);
    }
    list.hidden = false;
}