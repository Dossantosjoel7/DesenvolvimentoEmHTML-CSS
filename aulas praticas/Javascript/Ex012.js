var Agora = new Date();
var hora = Number(Agora.getHours());
console.log("Exatamente nesse Momento são "+hora+"h");
if(hora < 4)
    console.log("Boa Madrugada");
else if(hora <12)
    console.log("Bom dia");
else if(hora <18)
    console.log("Boa tarde");
else
    console.log("Boa Noite");