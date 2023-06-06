// const nome = sessionStorage.getItem('nome');
// const posicao = sessionStorage.getItem('posicao');
// const imagem = sessionStorage.getItem('imagem');
// const descricao = sessionStorage.getItem('descricao');
// const nome_completo = sessionStorage.getItem('nome_completo');
// const nascimento = sessionStorage.getItem('nascimento');
// const altura = sessionStorage.getItem('altura');

const nome = localStorage.getItem('nome');
const posicao = localStorage.getItem('posicao');
const imagem = localStorage.getItem('imagem');
const descricao = localStorage.getItem('descricao');
const nome_completo = localStorage.getItem('nome_completo');
const nascimento = localStorage.getItem('nascimento');
const altura = localStorage.getItem('altura');

document.addEventListener('DOMContentLoaded', function() {
    const nome_p = document.createElement('p');
    nome_p.textContent = nome;

    const posicao_p = document.createElement('p');
    posicao_p.textContent = posicao;

    const imagem_p = document.createElement('img');
    imagem_p.src = imagem;

    const descricao_p = document.createElement('p');
    descricao_p.textContent = descricao;

    const nome_completo_p = document.createElement('p');
    nome_completo_p.textContent = nome_completo;

    const nascimento_p = document.createElement('p');
    nascimento_p.textContent = nascimento;

    const altura_p = document.createElement('p');
    altura_p.textContent = altura;

    const voltar = document.createElement('a');
    voltar.className = "btn_voltar";
    voltar.innerHTML = "Voltar";
    voltar.href = "./index.html";
    voltar.style.textDecoration = "none";
    voltar.style.color = "#ffffff";
    voltar.style.fontSize = "23pt";

    document.body.appendChild(nome_p);
    document.body.appendChild(posicao_p);
    document.body.appendChild(imagem_p);
    document.body.appendChild(descricao_p);
    document.body.appendChild(nome_completo_p);
    document.body.appendChild(nascimento_p);
    document.body.appendChild(altura_p);
    document.body.appendChild(voltar);
});