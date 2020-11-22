//Numero que mas se repite 



//2)  Crear un módulo llamado awesomeModule para envolver las dos mezclas isCoolMixin y danceMixin.


   
       const awesomeModule = (function () {
    
        var isCoolMxin = function(obj) {
            obj.isCool = function() {
            return true
            }
           }
    
        var danceMixin = function(obj) {
            obj.dance = function() {
            console.log("Dancing a lot");
            }
           }
    
        return {
            isCoolMxin: isCoolMxin,
            danceMixin: danceMixin
        };
    })();
    
    awesomeModule.isCoolMxin();
    awesomeModule.danceMixin();



//3)


function Vehiculo() {
};
Vehiculo.prototype = {
 constructor: Vehiculo,
 accelerate: function() {
 console.log("is accelerating");
 }
}
function Carro() {
};
Carro.prototype = new Vehiculo();
Carro.prototype.constructor = Carro;

var mycar = new Carro();
mycar.accelerate (); 






//4)






//5) async await
//Resolver esta Promesa usando Async y Await

async function promSolveAfter5scs(){
  try{

   const finalReturn = await new Promise(resolve => {
     setTimeout(() =>{
      resolve('resuelto');
      alert('bienvenido')
     }, 5000);
      })
      return finalReturn
    }
    catch (error) {
        console.log(error);
      }
     }
     promSolveAfter5scs()


