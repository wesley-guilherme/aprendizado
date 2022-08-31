
//setTimeout(function(){
  //  console.log('Time1...')

    //setTimeout(function(){
      //  console.log('Time2...')

        //setTimeout(function(){
          //  console.log('Time3...')
        //}, 2000)
    //}, 2000)
//}, 2000)


function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise...')
            console.log('TimeA')
            console.log('TimeB')
            console.log('TimeC')
            resolve('Vishs')
        }, tempo)
    })
}

esperarPor()
    
    
