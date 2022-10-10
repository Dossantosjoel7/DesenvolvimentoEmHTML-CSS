
    function Carregar(){
        var data = new Date();
        var dia = data.getHours();
        var msg = window.document.getElementById("msg");
        var img = window.document.getElementById("Limg");
        var base = document.body;

        if(dia >= 0 && dia < 12){
            msg.innerHTML = `Bom Dia! As horas são ${dia} horas.`;
            img.src="Dia.jpg";
            base.style.backgroundColor ="#9bd7ef";
        }else if(dia >=12 && dia < 18){
            msg.innerHTML = `Boa Tarde! As horas são ${dia} horas.`;
            img.src="Tarde.jpg";
            base.style.backgroundColor ="#d19e9a";
        }else{
            msg.innerHTML = `Boa Noite! As horas são ${dia} horas.`;
            img.src="Noite.jpg";
            base.style.backgroundColor ="#233a40";
        }
    }
    
