function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
              setTimeout(() => resolve(), tempo)              
    })
}

//esperarPor(2000)
  //  .then(() => console.log('TimeA'))
   // .then(esperarPor)    
   // .then(() => console.log('TimeB'))
   // .then(esperarPor)
  //  .then(() => console.log('TimeC'))

  function retornaValor() {
      return new Promise(resolve => {
          setTimeout(() => resolve(10), 4000)
      })
  }

  
  async function executar() {
      let valor = await retornaValor() 
      await esperarPor (1500)
      console.log(`Async/Await  ${valor}....`)

      await esperarPor (1500)
      console.log(`Async/Await ${valor +1}`)

      await esperarPor (1500)
      console.log(`Async/Await ${valor +2}`)

      return valor + 3
  }

  executar().then(console.log)
    