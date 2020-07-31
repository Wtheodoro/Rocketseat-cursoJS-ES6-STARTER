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

/********2.1MAP********/

//let ages = users.map(function(index) {
//    return users.idade
//})
// por algum motivo nao conseguir fazer funcionar sem usar uma arrow function

let ages = users.map(users => users.idade)

//console.log(users)
console.log(ages)

/********2.2FILTER********/
