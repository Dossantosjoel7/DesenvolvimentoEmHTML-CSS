
    function Verificar(){
        var data = new Date();
        var Ano_Actual = data.getFullYear();
        var Ano_nascimento = document.getElementById("Age_Born");
        var res = document.querySelector('div#Res');
        var img = document.createElement('img');
        img.setAttribute('id','foto');// visa dar um atributo ao elemento criado
        if(Ano_nascimento.value.length == 0 || Number(Ano_nascimento) > Ano_Actual){
            window.alert('[Erro] Digite Novamente...');
            res.innerHTML ="[Erro]";
        }else{
            var fsex = document.getElementsByName("Sex_Cheked");
            var idade = Ano_Actual - Number(Ano_nascimento.value);
            var genero ="";
            if(fsex[0].checked){
                genero = "Homem";
            }else if(fsex[1].checked){
                genero = "Mulher";
            }
            
            if(idade >= 0 && idade < 10){
                img.setAttribute('src',`../ModeloExAulaJS/${genero}/child.jpg`);
            }else if(idade < 21){
                img.setAttribute('src',`../ModeloExAulaJS/${genero}/young.jpg`);
            }else if(idade < 50){
                img.setAttribute('src',`../ModeloExAulaJS/${genero}/adult.jpg`);
            }else{
                img.setAttribute('src',`../ModeloExAulaJS/${genero}/old.jpg`);
                }

            /*if(fsex[0].checked){
                genero ="Homem";
                if(idade >= 0 && idade < 10){
                    img.setAttribute('src','childM.jpg');,.::...jpg');
                }else if(idade <50){
                    img.setAttribute('src','adultF.jpg');
                }else{
                    img.setAttribute('src','oldF.jpg');
                }
            }*/
            res.style.textAlign = "center";
            res.innerHTML = `Detactamos ${genero} com ${idade} anos`;
            res.appendChild(img); // adicionar o elemento na div com id res
        }

    }
