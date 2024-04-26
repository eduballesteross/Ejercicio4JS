/**
 * 
 */
function ejercicio4(){

 var patatas = ["fritas", "congeladas", "alioli", "aliñadas", "guisadas"]
 
 var  tamanioArray = patatas.length
 
 var numeroUsuario = parseInt(prompt("Introduzca un número para obtener la posición del array deseada"))
 
document.write("El tamaño de mi array es: "+ tamanioArray)

if(!isNaN(numeroUsuario)&& numeroUsuario>=0&&numeroUsuario<=tamanioArray-1){

var valor = patatas[numeroUsuario]

document.write("El valor obtenido ha sido: "+valor)
	}else{
		document.write("El número ingresado esta fuera del rango")
	}
 }