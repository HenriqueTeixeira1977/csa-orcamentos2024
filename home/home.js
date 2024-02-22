
function pesquisarEndereco() {
    var cep = document.getElementById('cep').value;
  
    // Verifica se o CEP possui 8 dígitos
    if (cep.length !== 8) {
      alert('Por favor, insira um CEP válido com 8 dígitos.');
      return;
    }
  
    // Realiza a consulta na API ViaCEP
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => preencherEndereco(data))
      .catch(error => console.log('Ocorreu um erro ao buscar o endereço:', error));
  }
  
  function preencherEndereco(data) {
    document.getElementById('logradouro').value = data.logradouro;
    document.getElementById('bairro').value = data.bairro;
    document.getElementById('cidade').value = data.localidade;
    document.getElementById('uf').value = data.uf;
  }
  
  function pesquisarIMEI() {
    // Lógica para pesquisar IMEI e preencher campo correspondente
  }
  
  function calcularTotal() {
    var valorPeca = parseFloat(document.getElementById('valor-peca').value);
    var valorAparelho = parseFloat(document.getElementById('valor-aparelho').value);
    var tipoMaoDeObra = document.getElementById('mao-de-obra').value;
    var porcentagem;
  
    switch (tipoMaoDeObra) {
      case 'basico':
        porcentagem = 0.15;
        break;
      case 'intermediario':
        porcentagem = 0.25;
        break;
      case 'avancado':
        porcentagem = 0.30;
        break;
      default:
        porcentagem = 0;
    }
  
    var total = valorPeca + (valorAparelho * porcentagem);
    document.getElementById('resultado').innerText = "Total: R$ " + total.toFixed(2);
  }
  
  function enviarOrdem() {
    // Lógica para enviar a ordem de serviço para uma planilha do Google
  }
  function enviarOrdem() {
    // Lógica para enviar a ordem de serviço
  }