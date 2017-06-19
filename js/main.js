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
		lilDiv.setAttribute("id","dale");

		var title=document.createElement("h5");//h5 para el nombre
		title.classList.add("comment-title");

		var parrafo=document.createElement("p");//p para el comentario
		parrafo.classList.add("comment");

		//creación de nodos a imprimir
		var textClave= document.createTextNode("#" + (i+1)+ " " + nick+ ":");
		var textValor= document.createTextNode(valui);

		title.appendChild(textClave);
		parrafo.appendChild(textValor);

		lilDiv.appendChild(title);
		lilDiv.appendChild(parrafo);
	}
}