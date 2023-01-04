let Caixa_V = [];

function Checagem(vetor,numero){
    if(vetor.indexOf(numero) >=0)
        return true;
    else
        return false;
}

let Soma = function(vetor){
    let sum=0;
    for(let cont in vetor){
        sum+=vetor[cont];
    }
    return sum;
}

let Maior = function(vetor){
    max =0;
    for(let cont in vetor){
        if(vetor[cont] >=max )
            max=vetor[cont];
    }
    return max;
}

let Menor = function(vetor){
    min =Number.MAX_VALUE;
    for(let cont in vetor){
        if(vetor[cont]<= min)
            min=vetor[cont];
    }
    return min;
}

let Media = function(){
    return Soma(Caixa_V)/Caixa_V.length;
}

function Colocar(){
    let valores = document.getElementById('Nums_V');
    let Saida = document.getElementById('Output_Text');
    let Output_Text = document.getElementById('out');
    Output_Text.innerHTML="";

    if(valores.value.length == 0){
        window.alert("Nenhum Número Digitado");
    }else if(valores.value < 1 || valores.value > 100){
        window.alert("Insere de acordo ao Parametro...");
    }else if(Checagem(Caixa_V,Number(valores.value)) == true){
        window.alert("Já existe este Número no Vetor...");
    }else{
        Caixa_V.push(Number(valores.value));
        Saida.innerHTML += `Valor ${valores.value} Adicionado.\n`;
    }
    valores.innerText= "";
    valores.focus();
    
}

function OutputText(){
    let Output_Text = document.getElementById('out');
    Output_Text.innerHTML ="";
    Output_Text.innerHTML += `Ao Todo temos ${Caixa_V.length} elementos. <br><br>`;
    Output_Text.innerHTML += `A Soma de todos os elementos do Vetor é igual ${Soma(Caixa_V)} .<br><br>`;
    Output_Text.innerHTML += `O Maior valor de todos os elementos é ${Maior(Caixa_V)} .<br><br>`;
    Output_Text.innerHTML += `O Menor valor de todos os elementos é ${Menor(Caixa_V)} .<br><br>`;
    Output_Text.innerHTML += `A Media de todos valores do Vetor é ${Media().toFixed(2)} .`;
}