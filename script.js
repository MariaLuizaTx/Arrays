let animais = ["Ornintorrinco","Hipopótamo","Onça","Lobo-Guará","Pato"]
console.log(animais)




animais.unshift("Lobo-Guará")
console.log(animais)


animais.pop()
console.log(animais)


animais.push("Girafa","Elefante")
console.log(animais)


animais.shift()
console.log(animais)


let numbers = [7,5,6,3,8,9,2,1,4]
console.log(numbers.sort())


let SobreMim = {
    Caracteristica1: "Empática",
    Caracteristica2: "Paciênte",
    Caracteristica3: "Compreensiva"
};
console.log(SobreMim)


SobreMim.Caracteristica4 = "Feliz"
console.log(SobreMim)


delete
SobreMim.Caracteristica4
console.log(SobreMim)


let cadastro = [{
    nome: "Camila",
    idade: "19",  
    telefone: "99408-5513",
    amigos: ['Maria','Yara','Renata','Bruna']
},
{
    nome: "Bruno",
    idade: "19",  
    telefone: "98594-5913",
    amigos: ['Felipe','Kayk','Joás','Joabe']
},
{
    nome: "Maria",
    idade: "18",  
    telefone: "99422-5613",
    amigos: ['Rayna','Camila','Bia','Bruna']
},
{
    nome: "Jonata",
    idade: "17",  
    telefone: "99897-6413",
    amigos: ['Luciano','Hiago','Luan','Otavio']
},
{
    nome: "Jorge",
    idade: "29",  
    telefone: "99652-9413",
    amigos: ['Marcos','Gabriely','Laura','Flavio']
}];


console.log(cadastro[0].amigos[0])


console.log(cadastro[1].amigos[1])


console.log(cadastro[2].amigos[2])


console.log(cadastro[3].amigos[3])


console.log(cadastro[4].amigos[3])
