// Dados dos projetos
const projetos = [
    {
        titulo: "A inclusãoda computação como um elemento complementar de estudo no 9o ano do ensino fundamental",
        descricao: "O projeto teve como objetivo utilizar recursos tecnológicos atuais para aprimorar o processo de ensino-aprendizagem, buscando melhorias no desempenho dos alunos em disciplinas complexas que exigem habilidades de raciocínio lógico-matemático e possuem afinidade com conceitos de programação.",
        imagem: "imagens/cert-uea.PNG",
        link: "#"
    },
    {
        titulo: "Uma análise empírica sobre o desempenho de algoritmos de ordenação",
        descricao: "O projeto realizou uma análise detalhada do desempenho de cinco algoritmos de ordenação: Bolha, Inserção Direta, Seleção Direta, Merge Sort e Quick Sort. O objetivo foi identificar e comparar o comportamento desses algoritmos na ordenação de grandes volumes de dados, destacando suas respectivas aplicações práticas e relevância em cenários reais.",
        imagem: "imagens/cert-super.PNG" ,
        link: "https://github.com/SebasNeto/PROJETO-SUPER---UFAM.git"
    },
    {
        titulo: "Análise comparativa de desempenho entre algoritmos paralelos e tradicionais para processamento de imagens",
        descricao: "Este projeto visa realizar uma análise comparativa do desempenho entre algoritmos tradicionais e paralelos no processamento de imagens. Utilizando técnicas como transformadas radiométricas, detecção de bordas e filtragem espacial, o estudo avaliará o impacto da programação paralela em termos de tempo de processamento e eficiência. A investigação foca em quantificar o ganho de desempenho proporcionado pela execução paralela e examinar se esse ganho justifica a complexidade adicional no desenvolvimento. A pesquisa busca contribuir para a escolha mais adequada de tecnologias paralelas para o processamento de imagens.",
        imagem: "imagens/cert-super-2.PNG",
        link: "https://github.com/SebasNeto/Processamento-de-Imagens---Programacao-Paralela.git"
    }
];

// Função para renderizar projetos na página
function renderizarProjetos() {
    const container = document.getElementById("projetos-container");
    projetos.forEach(projeto => {
        const projetoCard = document.createElement("div");
        projetoCard.className = "project-card";
        projetoCard.innerHTML = `
            <img src="${projeto.imagem}" alt="${projeto.titulo}" class="project-image">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <a href="${projeto.link}" target="_blank">Ver mais</a>
        `;
        container.appendChild(projetoCard);
    });
}

// Chama a função ao carregar a página
window.onload = renderizarProjetos;
