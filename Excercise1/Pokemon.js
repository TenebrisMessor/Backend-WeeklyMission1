class Pokemon {
    constructor(Pokemon) {
      // this es una variable para referenciar el valor del contexto local de esta clase
      this.Pokemon = Pokemon // Estás variables se le conocen como atributos
    }
}

sayHello => {
};
sayMessage => {};

exports.sayHello = (Pokemon) => {
    console.log('info: ${Pokemon}')

}

exports.Pokemon = (message) => {
    console.log('pokemon: ${message}')
}

exports.sayMessage = (message) => {
    console.log('pokemon: ${message}')
}


