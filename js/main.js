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
	contain.innerHTML=""//limpia inputs cuando se recarga pag

	for(var i=0; i < localStorage.length; i++){
		var nick = localStorage.key(i);
		var valui= localStorage.getItem(nick);

		//DOM, creo un div y h3 + p para el comentario
		var lilDiv= document.createElement("div");//div para el cuadro
		lilDiv.setAttribute("id","dale")

		var title=document.createElement("h5")//h5 para el nombre
	}
}