$(document).ready(function() {

    let slideAtual = 1;
    let listaSlides = ["banner-primario", "banner-secundario", "banner-piloto"]

    setInterval(mudarSlide, 2000)

    function mudarSlide() {
        console.log("Slide atual:", slideAtual);

        //Remove o slide anterior
        if (slideAtual > 0) {
            $("#carrossel").removeClass(listaSlides[slideAtual - 1])
        } else if (slideAtual == 0) {
            $("#carrossel").removeClass(listaSlides[ (listaSlides.length) - 1])
        }

        //Adiciona o slide atual
        $("#carrossel").addClass(listaSlides[slideAtual]);

        //Indica o slide atual
        slideAtual++

        if(slideAtual > (listaSlides.length) - 1) {
            slideAtual = 0;
        }

    
    }

    $("#barras").click(function() {
       
        if($("#menu").hasClass("menu-ativo") ) {
            $("#menu").removeClass("menu-ativo")
        } else {
            $("#menu").addClass("menu-ativo")
        }

    })

})

function mostrarMenu() {
    let menu = document.getElementById("menu")

    if (getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

function cadastrarNewsLetter () {
    let email = document.getElementById("campo-email").value
    alert(email)
}