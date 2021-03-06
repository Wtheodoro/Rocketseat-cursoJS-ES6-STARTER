"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/******************************* ex 1 *******************************/
var Usuario = /*#__PURE__*/function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin === true;
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this, email, senha);
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin());
console.log(Adm1.isAdmin());
/******************************* ex 2 *******************************/

var users = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
/********2.1 MAP********/
//let ages = users.map(function(index) {
//    return users.idade
//})
// por algum motivo nao conseguir fazer funcionar sem usar uma arrow function

var mapAges = users.map(function (users) {
  return users.idade;
}); //console.log(users)

console.log(mapAges);
/********2.2 FILTER********/
//function isBigEnough(users) {
//    return users.idade >= 18 && users.empresa === 'Rocketseat'
//}
//let filterAges = users.filter(isBigEnough)
// a cima está

var filterAges = users.filter(function (users) {
  return users.empresa === 'Rocketseat' && users.idade > 18;
});
console.log(filterAges);
/********2.3 FIND********/

var findeCompany = users.find(function (users) {
  return users.empresa === 'Google';
});
console.log(findeCompany);
/********2.3 UNIÃO DE OPERAÇÕES********/

var mapAgesX2 = users.map(function (users) {
  return _objectSpread(_objectSpread({}, users), {}, {
    idade: users.idade * 2
  });
}).filter(function (users) {
  return users.idade <= 50;
});
console.log(mapAgesX2);
/******************************* ex 3 *******************************/

/**** 3.1 ****/

var arr = [1, 2, 3, 4, 5];
/*arr.map(function (item) {
    return item + 10
}) */

var arrArrow = arr.map(function (arr) {
  return arr + 10;
});
console.log(arrArrow);
/**** 3.2 ****/

var usuario = {
  nome: 'Diego',
  idade: 23
};
/* function mostraIdade(usuario) {
    return usuario.idade
} */

var mostrarIdade = function mostrarIdade(usuario) {
  return usuario.idade;
};

console.log(mostrarIdade(usuario));
/**** 3.3 ****/

var nome = "Diego";
var idade = 23;
/* function mostrarUsuario(nome = 'Diego', idade = 18) {
    return { nome, idade }
}

console.log(mostrarUsuario(nome, idade))
console.log(mostrarUsuario(nome))*/

var mostrarUsuario = function mostrarUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostrarUsuario(nome, idade));
console.log(mostrarUsuario(nome));
/**** 3.4 ****/

/* const promise = function () {
    return new promise(function(resolve, reject){
        return resolve
    })
} */

var promiseArrow = function promiseArrow() {
  return new promise(function (resolve, reject) {
    return resolve();
  });
};
/******************************* ex 4 *******************************/

/**** 4.1 ****/


var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
/* let { nome, endereco: {cidade, estado}} = empresa
console.log(nome)
console.log(cidade)
console.log(estado) 

Pra quem está usando esse material para comparar resultados,já aviso que
estou colocando todos os exercicios no mesmo arquivo js e por isso as variaveis tem o mesmo nome, a fim de rodar o codigo para testar é preciso trocar o nome das variaveis repetidas */

/**** 4.2 ****/

function mostrarInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos");
}

console.log(mostrarInfo({
  nome: 'Diego',
  idade: 23
}));
/******************************* ex 5 *******************************/

/**** 5.1 REST ****/

var arrRest = [1, 2, 3, 4, 5, 6];
var x = arrRest[0],
    y = arrRest.slice(1);
console.log(x);
console.log(y);

function somaRest() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(somaRest(1, 2, 3, 4, 5, 6));
console.log(somaRest(1, 2));
/**** 5.2 SPREAD ****/

var usuarioSpread = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuarioSpread2 = _objectSpread(_objectSpread({}, usuarioSpread), {}, {
  nome: 'Gabriel'
});

var usuarioSpread3 = _objectSpread(_objectSpread({}, usuarioSpread), {}, {
  endereco: {
    cidade: 'Lontras'
  }
});

console.log(usuarioSpread2);
console.log(usuarioSpread3);
/******************************* ex 6 *******************************/

var usuarioEx6 = 'Diego';
var idadeEx6 = 23;
console.log('O usuário ' + usuarioEx6 + ' possui ' + idadeEx6 + ' anos');
console.log("O usu\xE1rio ".concat(usuarioEx6, " possui ").concat(idadeEx6, " anos"));
/******************************* ex 7 *******************************/

var nomeEx7 = 'Diego';
var idadeEx7 = 23;
var usuarioEx7 = {
  nomeEx7: nomeEx7,
  idadeEx7: idadeEx7,
  cidadeEx7: 'Rio do sul'
};
var usuarioEx7OSS = {
  nomeEx7: nomeEx7,
  idadeEx7: idadeEx7,
  cidadeEx7: 'Rio do Sul'
};
console.log(usuarioEx7OSS);
/*
FIM DOS DESAFIOS DESTA ETAPA! UMA OBSERVAÇÃO MUITO IMPORTANTE: MELHOR SEPARAR OS ARQUIVOS JS POR EXERCICIOS POR TEREM MUITAS VARIAVEIS COM O MESMO NOME SENDO NECESSARIO INVENTAR NOMES DIFICEIS PARA VARIAVEIS E CONSTANTES POSTERIORES
*/
