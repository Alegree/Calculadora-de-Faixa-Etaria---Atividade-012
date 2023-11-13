function calcularIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    let resultado = '';
    let imagem = '';

    if (isNaN(idade) || idade <= 0) {
        alert('Por favor, insira uma idade válida.');
        return; // Para a execução da função se a idade não for válida
    }

    if (idade >= 0 && idade <= 2) {
        resultado = 'Bebé';
        imagem = '/imagens/bebe.jpg';
    } else if (idade > 2 && idade < 12) {
        resultado = 'Criança';
        imagem = '/imagens/crianca.jpg';
    } else if (idade >= 12 && idade <= 16) {
        resultado = 'Adolescente';
        imagem = '/imagens/adolescente.jpg';
    } else if (idade > 16 && idade < 18) {
        resultado = 'Jovem Adulto';
        imagem = '/imagens/jovem_adulto.jpg';
    } else if (idade >= 18 && idade < 50) {
        resultado = 'Adulto';
        imagem = '/imagens/adulto.jpg';
    } else if (idade >= 50 && idade <= 65) {
        resultado = 'Adulto de Meia Idade';
        imagem = '/imagens/meia_idade.jpg';
    } else if (idade > 65 && idade < 100) {
        resultado = 'Idoso';
        imagem = '/imagens/idoso.jpg';
    } else if (idade >= 100 && idade <= 130) {
        resultado = 'Lendário';
        imagem = '/imagens/lendario.jpg';
    } else if (idade > 130) {
        resultado = 'Imortal';
        imagem = '/imagens/imortal.jpg';
    }

    document.getElementById('resultado').innerText = `Faixa Etária: ${resultado}`;
    document.getElementById('imagem').src = imagem;
}
