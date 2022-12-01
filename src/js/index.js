const paginas = document.querySelectorAll(".pagina");


paginas.forEach(pagina => {
    // passo 2 - identificar o clique no elemento da pagina
    pagina.addEventListener("click", function() {

        if(pagina.classList.contains("selecionado")) {
            return;
        }
        
        selecionarPagina(pagina)
        
        mostrarCartaDaPagina(pagina)
    });
});

function selecionarPagina(pagina){
    // passo 3 - quando o usuário clicar, desmarcar a pagina selecionada
    const paginaSelecionada = document.querySelector(".pagina.selecionado");
    paginaSelecionada.classList.remove("selecionado");

    // passo 4 - marcar a pagina clicada como selecionado
    pagina.classList.add("selecionado")
}

function mostrarCartaDaPagina(pagina){
    // passo 5 - esconder o conteúdo anterior
    const cartaSelecionada = document.querySelector(".carta.selecionado");
    cartaSelecionada.classList.remove("selecionado");

    // passo 6 - mostrar o conteúdo da aba selecionada
    const idDoElementoCartaPagina = `pg-${pagina.id}`

    const cartaASerMostrada = document.getElementById(idDoElementoCartaPagina)

    cartaASerMostrada.classList.add("selecionado")
}