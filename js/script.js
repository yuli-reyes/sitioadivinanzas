boton.addEventListener('click',e=>{ //evento click , funcion flecha=>
	e.preventDefault()

	let nombre=document.getElementById('nombre').value
	nombre=parseInt(nombre)

	let apellido=document.getElementById('apellido').value
	apellido=parseInt(apellido)

	let correcto=document.getElementById('correcto')


	if(nombre==1 && apellido==3){

		texto=`<p>La respuesta es correcta <img src="imagenes/correcto.png"></p>`

		correcto.innerHTML=texto
		correcto.style.setProperty("visibility","visible")
		correcto.style.setProperty("opacity","1")
		correcto.style.setProperty("transition","all 3s ease 3s")

	}

	else if(nombre==2 && apellido==1){

		texto=`<p>La respuesta es correcta <img src="imagenes/correcto.png"></p>`

		correcto.innerHTML=texto
		correcto.style.setProperty("visibility","visible")
		correcto.style.setProperty("opacity","1")
		correcto.style.setProperty("transition","all 3s ease 3s")

	}

	else if(nombre==3 && apellido==2){

		texto=`<p>La respuesta es correcta <img src="imagenes/correcto.png"></p>`

		correcto.innerHTML=texto
		correcto.style.setProperty("visibility","visible")
		correcto.style.setProperty("opacity","1")
		correcto.style.setProperty("transition","all 3s ease 3s")

	}

	else{

		texto=`<p>La respuesta es incorrecta <img src="imagenes/incorrecto.png"></p>`

		correcto.innerHTML=texto
		correcto.style.setProperty("visibility","visible")
		correcto.style.setProperty("opacity","1")
		correcto.style.setProperty("transition","all 3s ease 3s")

	}

})

num3.addEventListener('click', e=>{

	let respuesta=document.getElementById('acertijo')

	texto=`<p>La respuesta es incorrecta <img src="imagenes/incorrecto.png"></p>`

	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","1")
	respuesta.style.setProperty("transition","all 3s ease 3s")

})


num4.addEventListener('click', e=>{

	let respuesta2=document.getElementById('acertijo')

	texto=`<p>La respuesta es correcta <img src="imagenes/correcto.png"></p>`

	respuesta2.innerHTML=texto
	respuesta2.style.setProperty("visibility","visible")
	respuesta2.style.setProperty("opacity","1")
	respuesta2.style.setProperty("transition","all 3s ease 3s")

})

num5.addEventListener('click', e=>{

	let respuesta3=document.getElementById('acertijo')

	texto=`<p>La respuesta es incorrecta <img src="imagenes/incorrecto.png"></p>`

	respuesta3.innerHTML=texto
	respuesta3.style.setProperty("visibility","visible")
	respuesta3.style.setProperty("opacity","1")
	respuesta3.style.setProperty("transition","all 3s ease 3s")


})


botonenviar.addEventListener('click',e=>{
	e.preventDefault()
//document.querySelector es para los radio
	let palabra=document.querySelector('input[name="palabra"]:checked').value
	palabra=parseInt(palabra)
	let respuestar=document.getElementById('resp')

	if(palabra===1){

		texto=`<p>La respuesta es correcta <img src="imagenes/correcto.png"></p>`

		respuestar.innerHTML=texto
		//respuestar.style.setProperty("visibility","visible")
		//respuestar.style.setProperty("opacity","1")
		//respuestar.style.setProperty("transition","all 3s ease")
		respuestar.setAttribute("class","prueba")
	}

	else{

		texto=`<p>La respuesta es incorrecta <img src="imagenes/incorrecto.png"></p>`

		respuestar.innerHTML=texto
		//respuestar.style.setProperty("visibility","visible")
		//respuestar.style.setProperty("opacity","1")
		//respuestar.style.setProperty("transition","all 3s ease")
		respuestar.setAttribute("class","prueba")

	}

})

pista.addEventListener('click', e=>{
	

	let eleccion=document.getElementById('adivina')

	pista.setAttribute("class","btnp")

	texto=`<p><b>Pista:</b> L_ _&nbsp;&nbsp;&nbsp_ EGUND_ _</p>`
	eleccion.innerHTML=texto
	eleccion.setAttribute("class","prueba")

})

solucion.addEventListener('click',e=>{
	e.preventDefault()

	let eleccion2=document.getElementById('adivina')
	
	solucion.setAttribute("class","btnp")

	texto='<p><b>Solucion:</b> Los segundos </p>'
	eleccion2.innerHTML=texto
	eleccion2.setAttribute("class","prueba")

})

