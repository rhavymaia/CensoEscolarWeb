// Definir o evento de submissão para o formulário
// onsubmit
const insertRowTBody = (instituicaoEnsino) => {
  let instituicoesEnsinoTBody = document.getElementById(
    'instituicoesEnsinoTBody',
  );
  let row = `<tr>
          <th scope="row">1</th>
          <td>${instituicaoEnsino.nome}</td>
          <td>${instituicaoEnsino.cidade}</td>
          <td>${instituicaoEnsino.estado}</td>
          <td>${instituicaoEnsino.matriculas}</td>
        </tr>`;
  instituicoesEnsinoTBody.insertAdjacentHTML('beforeend', row);
};

let instituicoesEnsino = JSON.parse(localStorage.getItem('instituicoesensino')) ?? [];

for (let instituicaoEnsino of instituicoesEnsino) {
  insertRowTBody(instituicaoEnsino);
}

let instituicaoEnsinoForm = document.getElementById('instituicaoEnsinoForm');
instituicaoEnsinoForm.onsubmit = (event) => {
  event.preventDefault();
  console.log('Controlando a submissão do browser');

  // Captar os valores digitados nos elementos do formulário.
  let nomeInput = document.getElementById('nome');
  let nome = nomeInput.value;

  let cidadeInput = document.getElementById('cidade');
  let cidade = cidadeInput.value;

  let estadoeInput = document.getElementById('estado');
  let estado = estadoeInput.value;

  let matriculasInput = document.getElementById('matriculas');
  let matriculas = matriculasInput.value;

  // Persistir os dados no LocalStorage.
  let instituicaoEnsinoJson = {
    nome: nome,
    cidade: cidade,
    estado: estado,
    matriculas: matriculas,
  };
  instituicoesEnsino.push(instituicaoEnsinoJson);

  localStorage.setItem(
    'instituicoesensino',
    JSON.stringify(instituicoesEnsino),
  );

  // Atualizar a listagem das IEs na tabela.
  insertRowTBody(instituicaoEnsinoJson);

  $('#instituicaoEnsinoModal').modal('hide');

  Toastify({
    text: 'Instituição de Ensino salva com sucesso!',
    className: 'info',
    style: {
      background: 'linear-gradient(to right, #00b09b, #96c93d)',
    },
  }).showToast();
};
