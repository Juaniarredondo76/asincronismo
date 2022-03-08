/*ASYNC / AWAIT
QUE ES?
FUNCION ASIGNADA QUE DISFRASA AL LA PROMESA OSEA OTRA FORMA DE HACER CALBACK
*/
//funcion principal
function principal(){

    let promesa=new Promise(function(resolve,reject){

        setTimeout(function(){
            console.log("Soy la funcion principal ")
            resolve(("termine"))
        },2000)
    })
    return promesa
}

//principal()
//funcion principal
 async function callback(){
     try{
        await principal()
        console.log("soy el calback ##")

     }catch(error){
        console.log("upps..." + error)
     }
 }
 callback()