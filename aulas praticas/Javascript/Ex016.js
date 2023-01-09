let Amigo = {
    nome:"Joel",
    sexo:"M",
    peso:68.1,
    engordar(p=0){this.peso+=p;}
};

Amigo.engordar(5);
console.log("O seu nome "+Amigo.nome+" e seu Peso "+Amigo.peso+" Kg");