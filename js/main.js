/*aquí va tu código*/
function initial{
	var save= document.getElementById("save");
	save.addEventListener("click", saveData);//saveData es la función que reune values y contiene al localStorage

	print();
}
initial();

function saveData(){
	var clave= document.getElementById("clave").value;
	var valor=document.getElementById("valor").value;

	localStorage.setItem(clave,valor);
	print();
}
function print(){
	var container= document.getElementById("ale");
	contain.innerHTML=""//recarga pag pero no limpia inputs
}