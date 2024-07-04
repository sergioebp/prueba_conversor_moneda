async function indicadorEconomicoDolar() {
    try {
        const res = await fetch("https://165.227.94.139/api/dolar");
        const data = await res.json();
        //console.log(data.serie.slice(0,10));
        return data.serie.slice(0,10)
    } catch (error) {
        alert(error.message + ' Usando valores guardados previamente');
        const res = await fetch("./assets/js/mindicador.json");
        const data = await res.json();
        //console.log([data.dolar]);
        return [data.dolar]
    }
}

async function indicadorEconomicoEuro() {
    try {
        const res = await fetch("https://165.227.94.139/api/euro");
        const data = await res.json();
        //console.log(data.serie.slice(0,10));
        return data.serie.slice(0,10)
    } catch (error) {
        alert(error.message + ' Usando valores guardados previamente');
        const res = await fetch("./assets/js/mindicador.json");
        const data = await res.json();
        //console.log([data.euro]);
        return [data.euro]
    }
}

//indicadorEconomicoDolar()
//indicadorEconomicoEuro()

let input = document.getElementById("input")
let select = document.getElementById("select")
let button = document.getElementById("button")
let resultado = document.getElementById("resultado")

button.addEventListener("click", function() {
    if (input.value == '') {
        resultado.innerHTML = 'ingresa un valor válido'
    }else if (select.value  == 'dolar') {
        indicadorEconomicoDolar().then(function(result) {
            resultado.innerHTML = `Resultado: $${((input.value)/(result[0].valor)).toFixed(2)}`
          })
    }else if (select.value  == 'euro') {
        indicadorEconomicoEuro().then(function(result) {
            resultado.innerHTML = `Resultado: €${((input.value)/(result[0].valor)).toFixed(2)}`
          })
    }
});



