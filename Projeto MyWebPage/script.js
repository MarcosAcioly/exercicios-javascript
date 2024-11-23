document.getElementById("home-link").addEventListener("click", () => {
  document.getElementById("content").innerHTML = "<h1>Bem vindo à nossa home page</h1>";
});

document.getElementById("produtos-link").addEventListener("click", () => {
  document.getElementById("content").innerHTML = `
    <h1>Produtos</h1>
    <p>Você está na nossa página de produtos ofertados. Escolha a seção onde o produto de seu interesse se encontra. Em seguida clique no produto desejado. Se preferir faça sua busca através do botão de busca, digitando o produto que você deseja.</p>
    <form>
      <label for="codigo">Código:</label><br>
      <input type="text" id="codigo" name="codigo"><br>
      <label for="compra">Valor de Compra:</label><br>
      <input type="number" id="compra" name="compra"><br>
      <label for="revenda">Valor de Revenda:</label><br>
      <input type="number" id="revenda" name="revenda"><br>
      <label for="estoque">Quantidade em Estoque:</label><br>
      <input type="number" id="estoque" name="estoque"><br><br>
      <button type="submit">Cadastrar Produto</button>
    </form>`;
});

document.getElementById("servicos-link").addEventListener("click", () => {
  document.getElementById("content").innerHTML = `
    <h1>Serviços</h1>
    <p>Você está na nossa página de serviços ofertados. Escolha a seção onde o serviço de seu interesse se encontra. Em seguida clique no serviço desejado. Se preferir faça sua busca através do botão de busca, digitando o serviço que você deseja.</p>
    <form>
      <label for="codigo-servico">Código:</label><br>
      <input type="text" id="codigo-servico" name="codigo-servico"><br>
      <label for="valor">Valor do Serviço:</label><br>
      <input type="number" id="valor" name="valor"><br><br>
      <button type="submit">Cadastrar Serviço</button>
    </form>`;
});

document.getElementById("historia-link").addEventListener("click", () => {
  document.getElementById("content").innerHTML = `
    <h1>Nossa História</h1>
    <p>Nesta página você vai conhecer a nossa história. Irás perceber que os muitos percalços que se nos apresentaram foram fundamentais para as nossas grandes conquistas e vitórias.</p>`;
});

document.getElementById("contate-nos-link").addEventListener("click", () => {
  document.getElementById("content").innerHTML = `
    <h1>Contate-nos</h1>
    <p>Nesta página apresentamos a você, nosso cliente, a maior razão da nossa existência, os canais que nossa organização disponibiliza pra você manter contato conosco. Isso inclui a nossa ouvidoria.</p>`;
});