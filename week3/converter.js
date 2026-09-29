function convert(start_curr, end_curr, value){
    if(isNaN(value)){
       throw new Error("Value entered is not a number")
    }

    if(start_curr===end_curr){
        println('No Conversion Needed')
        return value
    }

    switch(start_curr){
        case 'usd':
            if(end_curr==='cad'){
                return value*1.41
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
    throw new Error("Unsupported currency conversion")
}

function convertFromForm(){
    const amount = Number(document.getElementById('amount').value)
    const startCurrency = document.getElementById('scurrency').value
    const endCurrency = document.getElementById('ecurrency').value
    const result = convert(startCurrency, endCurrency, amount)

    document.getElementById('result').textContent =
        `${amount} ${startCurrency.toUpperCase()} = ${result.toFixed(2)} ${endCurrency.toUpperCase()}`
}