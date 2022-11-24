    
    function Carregar(){
        var cont = document.getElementById("cont_i");
        var final = document.getElementById("cont_f");
        var incremento = document.getElementById("salto");
        var res = document.getElementById("res");
        
        if(cont.value.length == 0 || final.value.length == 0 || incremento.value.length == 0){
            res.innerHTML = "Impossivel Contar";
        }else{
            res.innerHTML =`Contando: <br>`;
            if(Number(incremento.value <= 0)){
                window.alert("Passo Invalido!Considera passo 1");
                incremento = 1;
            }
            if(Number(cont) < Number(final)){
                    for(var x=Number(cont.value);x<=Number(final.value); x+=Number(incremento.value)){
                        res.innerHTML+=`${x}`;
                        res.innerHTML+=` 👉 `;
                    }
            } else{
                    for(var x=Number(cont.value);x>=Number(final.value); x-=Number(incremento.value)){
                        res.innerHTML+=`${x}`;
                        res.innerHTML+=` 👉 `;
                    }
            }
            res.innerHTML+=` 🎬 `;
            
        }
        
        

    }