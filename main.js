/******************************* ex 1 *******************************/
class Usuario {
    constructor(email, senha)  {
        this.email = email
        this.senha = senha
    }

    isAdmin() {
        return this.admin === true
    }  
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha)

        this.admin = true
    }
}

const User1 = new Usuario('email@teste.com', 'senha123')
const Adm1 = new Admin('email@teste.com', 'senha123')

console.log(User1.isAdmin())
console.log(Adm1.isAdmin())





/******************************* ex 2 *******************************/
let users = [
    {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    {nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
    {nome: 'Lucas', idade: 30, empresa: 'Facebook'}
]


/********2.1 MAP********/

//let ages = users.map(function(index) {
//    return users.idade
//})
// por algum motivo nao conseguir fazer funcionar sem usar uma arrow function

let mapAges = users.map(users => users.idade)

//console.log(users)
console.log(mapAges)


/********2.2 FILTER********/

//function isBigEnough(users) {
//    return users.idade >= 18 && users.empresa === 'Rocketseat'
//}

//let filterAges = users.filter(isBigEnough)
// a cima está
let filterAges = users.filter(users => users.empresa === 'Rocketseat'&& users.idade > 18)

console.log(filterAges)


/********2.3 FIND********/

let findeCompany = users.find(users => users.empresa === 'Google')

console.log(findeCompany)


/********2.3 UNIÃO DE OPERAÇÕES********/

let mapAgesX2 = users.map(users => ({...users, idade: users.idade * 2})).filter(users => users.idade <= 50)

console.log(mapAgesX2)


/******************************* ex 3 *******************************/
/**** 3.1 ****/

const arr = [1, 2, 3, 4, 5]

/*arr.map(function (item) {
    return item + 10
}) */

let arrArrow = arr.map( arr => arr + 10 )
console.log(arrArrow)

/**** 3.2 ****/

const usuario = { nome: 'Diego', idade:23 }

/* function mostraIdade(usuario) {
    return usuario.idade
} */

let mostrarIdade = usuario => usuario.idade
console.log(mostrarIdade(usuario))


/**** 3.3 ****/