//QUE ES UNA PROMESA 
/*es una funcion que se ejecuta de otra,algo que si o si se debe cumplir ,algo que se espera,

//COMO SE INTERPRETA 
debemos utilizar uan clase de JS (promesa())
*/
function principal(){

    let promesa=new Promise(function(resolve,reject){

        setTimeout(function(){
            console.log("Soy la funcion principal ")
            resolve(("Soy el callback"))
        },2000)
    })
    return promesa
}
principal()
.then(function(respuesta){
    console.log(respueta)

})