/*DIFINICION DE CALLBACK
una funcion en espera, una funcion secundaria,una funcion que es agrgumentada de otra
    PARA QUE SIRVE ?
    para llamar una funcion SI y SOLO SI, una funcion previa se ah ejecutado*/

   /* 
    function principal(callback){
        setTimeout(function(){
            console.log("Soy la funcion principal ")
            callback()
        },2000)
    }
    principal(secundaria)
    
    function secundaria(){
        console.log("Soy el callback 2 ")
    }
   */ //juagando con el ejercicio
    function principal(callback){
        setTimeout(function(){
            console.log("Soy la funcion principal ")
            callback()
        },2000)
    }
    principal(function (){
        console.log("Soy el callback 2 ")
    })