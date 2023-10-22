var precio = 400000;

valorTotalSpan = document.querySelector('.valor-total');
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

var cantidad = 0;
var valorTotal = 0;




function suma(){ 

  cantidadSpan = document.querySelector(".cantidad");
  cantidadSpan.innerHTML = cantidad;

  cantidad = cantidad + 1;
  cantidadSpan.innerHTML = cantidad;

  valorTotal = precio * cantidad;
  valorTotalSpan.innerHTML = valorTotal;

}

function resta(){
  cantidadSpan = document.querySelector(".cantidad");
  cantidadSpan.innerHTML = cantidad;

  cantidad = cantidad - 1;
  cantidadSpan.innerHTML = cantidad;

  valorTotal = precio * cantidad;
  valorTotalSpan.innerHTML = valorTotal;
 
}










