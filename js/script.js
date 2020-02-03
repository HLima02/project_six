// ___________________ Menu Retratil ____________________
function abrirMenu(){
	var btn_abrir = document.querySelector("nav")
	btn_abrir.style.right = "0"
}

function fecharMenu(){
	var btn_fechar = document.querySelector("nav")
	btn_fechar.style.right = "-250px"
}




// Efeito de maquina de escrever no banner 
function efeitoMaquina(elemento){
	const textoArray = elemento.innerHTML.split("")
	elemento.innerHTML = "";

	textoArray.forEach(function(letra, i){
		setTimeout(function(){
			elemento.innerHTML += letra;
		}, 70 * i)
	})
} 

const bannerTxt = document.getElementById('banner_txt');
efeitoMaquina(bannerTxt);

// _______________________ slider _______________________ 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n)
}

function currentSlide(n){
	showSlides(slideIndex = n)
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("mySlide");

	if(n > slides.length){
		slideIndex = 1;
	}
	if(n < 1){
		slideIndex = slides.length;
	}

	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}

	slides[slideIndex - 1].style.display = "block";
}

// _______________________ Zoom da galeria _______________________
$(function(){
	$(".img").elevateZoom({
		zoomType: "inner",
		cursor: "crosshair"
	})
})