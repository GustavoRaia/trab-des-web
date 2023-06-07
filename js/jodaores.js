// Referências.
const div_elenco_feminino = document.getElementById("lista_imagens_feminino");
const div_elenco_masculino = document.getElementById("lista_imagens_masculino");

const div_imagem = document.getElementById("imagem");

jogadores.forEach(
    (ele) => {
        const img_jogador = document.createElement('img');
        img_jogador.src = ele.imagem;
        img_jogador.style.width = "95%";

        const nome_jogador = document.createElement('p');
        nome_jogador.innerHTML = ele.nome;
        nome_jogador.style.fontWeight = "bolder";

        const div_jogador = document.createElement('div');
        div_jogador.className = "jogador";
        div_jogador.appendChild(img_jogador);
        div_jogador.appendChild(nome_jogador);

        div_jogador.setAttribute("data-nome", ele.nome);
        div_jogador.setAttribute("data-posicao", ele.posicao);  
        div_jogador.setAttribute("data-imagem", ele.imagem);  
        div_jogador.setAttribute("data-descricao", ele.descricao);              
        div_jogador.setAttribute("data-nome_completo", ele.nome_completo);
        div_jogador.setAttribute("data-nascimento", ele.nascimento);        
        div_jogador.setAttribute("data-altura", ele.altura);

        if (ele.elenco == "feminino"){
            div_elenco_feminino.appendChild(div_jogador); 
        } else {
            div_elenco_masculino.appendChild(div_jogador);
        }
    }
)

// Manipulando o evento
const manipula_evento = (evento) => {

    const div_jogador = evento.currentTarget;

    // // SessionStorage
    // sessionStorage.setItem('nome', div_jogador.dataset.nome);
    // sessionStorage.setItem('posicao', div_jogador.dataset.posicao);
    // sessionStorage.setItem('imagem', div_jogador.dataset.imagem);
    // sessionStorage.setItem('descricao', div_jogador.dataset.descricao);
    // sessionStorage.setItem('nome_completo', div_jogador.dataset.nome_completo);
    // sessionStorage.setItem('nascimento', div_jogador.dataset.nascimento);
    // sessionStorage.setItem('altura', div_jogador.dataset.altura);

    // LocalStorage
    localStorage.setItem('nome', div_jogador.dataset.nome);
    localStorage.setItem('posicao', div_jogador.dataset.posicao);
    localStorage.setItem('imagem', div_jogador.dataset.imagem);
    localStorage.setItem('descricao', div_jogador.dataset.descricao);
    localStorage.setItem('nome_completo', div_jogador.dataset.nome_completo);
    localStorage.setItem('nascimento', div_jogador.dataset.nascimento);
    localStorage.setItem('altura', div_jogador.dataset.altura);

    window.location.href = "./detalhes.html";

}

const storage_jogador = document.querySelectorAll(".jogador");

storage_jogador.forEach((div_jogador) => {
  div_jogador.addEventListener("click", manipula_evento);
});