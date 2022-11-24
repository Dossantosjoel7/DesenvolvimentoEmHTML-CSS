
    function Tabuada(){
        let numTab = document.getElementById('Tab');
        let resTab = document.getElementById('res');

        if(numTab.value.length == 0){
            window.alert('[Erro] Verifique Novamente...');
        }else{
            resTab.innerHTML = ``;
            for(let cont=1; cont <=10; cont++){
                let op = document.createElement('option');
                op.text = `${Number(numTab.value)} x ${cont} = ${cont * Number(numTab.value)}`;
                op.value = `resTab${cont}`;
                resTab.appendChild(op);

            }
        }
    }