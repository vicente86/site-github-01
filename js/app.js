// botão
const btn = document.querySelector('.btn')
const resetar = document.querySelector('.reset')

//inputs
let inpNome = document.querySelector('#nome')
let inpData = document.querySelector('#data')

//parágrafo resultado
let result = document.querySelector('.result')

//
let iDia, iMes, iAno;
let data = new Date;

let diaA = Number(data.getDate());
let mesA = Number(data.getMonth() + 1);
let anoA = Number(data.getFullYear());

let dN;

inpNome.addEventListener('focusout', () => {inpNome.value = inpNome.value.toUpperCase();})
//
inpData.addEventListener('keyup', () => {
    iDia = Number(inpData.value.slice(8,11))
    iMes = Number(inpData.value.slice(5,7))
    iAno = Number(inpData.value.slice(0,4))    

    dN = (30.416 * iMes) + iDia;
})

let dA = (30.416 * mesA) + diaA; 
let diaDef;
let reA;
let reM;
//ano = inpData.value.slice(0,4)  mes = inpData.value.slice(5,7)  dia = inpData.value.slice(8,11)


//operações

btn.addEventListener('click', () => {

    if(dA > dN){ diaDef = dA - dN; }else { diaDef = dN - dA; }

    reA = (anoA - iAno) - 1;
    reM = (365 - diaDef)/30.416;

    result.innerHTML = `${inpNome.value} <br><br> Você tem mais ou menos <br>${reA} anos e ${parseFloat(reM.toFixed(2))} meses`
})

resetar.addEventListener('click', () => {
    result.innerHTML = ""    
})