// Conjunto dados para montar dinamicamente as estruras dos cards
import informacoesCards from './dataset/informacao.js';

let createInformacoesCard = (informacoesCard) => {
  let card = `<div class="col">
          <div class="card">
            <img src="${informacoesCard.url}" class="card-img-top" alt="${informacoesCard.titulo}">
            <div class="card-body">
              <h5 class="card-title">${informacoesCard.titulo}</h5>
              <p class="card-text">${informacoesCard.subtitulo}</p>
              <a href="#" class="btn btn-primary">Consultar</a>
            </div>
          </div>
        </div>`;

  return card;
};

let addInformacaoCard = (card) => {
  let informacoesCardsRow = document.getElementById('informacoesCardsRow');
  informacoesCardsRow.insertAdjacentHTML('beforeend', card);
};

let loadInformacoesCards = () => {
  for (let informacoesCard of informacoesCards) {
    let card = createInformacoesCard(informacoesCard);
    addInformacaoCard(card);
  }
};

// loadInformacoesCards();
window.onload = loadInformacoesCards;
