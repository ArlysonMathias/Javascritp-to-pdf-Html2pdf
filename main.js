function gerarPDF() {
  // aqui foi criada uma variável chamada 'texto' que vai pegar o valor digitado do no nosso input pelo id
  const texto = document.getElementById("text").value;

  var opt = {
    margin: 1,
    filename: "arquivo.pdf",
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(opt).from(texto).save();
}

//   explicando a função acima
//   Primeiro foi criada uma variável chamada 'texto' que pega pelo id o valor do input, que está com o id 'text'
//  depois é criada uma outra variável que é definida pela própria biblioteca 'html2pdf',
// cuja documentação pode ser encontrada nesse site 'https://ekoopmans.github.io/html2pdf.js/', que faz algumas configurações como por exemplo o nome do arquivo salvo, definido pela propriedade 'filename', o formato do arquivo. e até mesmo a orientação da página
// E por último é passado para biblioteca através da função 'set', que define todas essas propriedas especificdads, juntamente com a função 'from' que define de onde está vindo essa informação, e salva através da função 'save' todas essas informações seguindo as definições especificadas

