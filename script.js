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
        descricao: "O projeto teve como objetivo realizar uma análise detalhada do desempenho de cinco algoritmos de ordenação: Bolha, Inserção Direta, Seleção Direta, Merge Sort e Quick Sort. Foi analisado e comparado o comportamento desses algoritmos na ordenação de grandes volumes de dados, destacando suas respectivas aplicações práticas e relevância em cenários reais.",
        imagem: "imagens/cert-super.PNG" ,
        link: "https://github.com/SebasNeto/PROJETO-SUPER---UFAM.git"
    },
    {
        titulo: "Análise comparativa de desempenho entre algoritmos paralelos e tradicionais para processamento de imagens",
        descricao: "O projeto teve como objetivo realizar uma análise comparativa do desempenho entre algoritmos tradicionais e paralelos no processamento de imagens. Utilizando técnicas como transformadas radiométricas, detecção de bordas e filtragem espacial, o estudo avaliará o impacto da programação paralela em termos de tempo de processamento e eficiência. A investigação foca em quantificar o ganho de desempenho proporcionado pela execução paralela e examinar se esse ganho justifica a complexidade adicional no desenvolvimento. A pesquisa busca contribuir para a escolha mais adequada de tecnologias paralelas para o processamento de imagens.",
        imagem: "imagens/cert-super-2.PNG",
        link: "https://github.com/SebasNeto/Processamento-de-Imagens---Programacao-Paralela.git"
    },
    {
        titulo: "Processamento de Imagens e Programação Paralela",
        descricao: "O projeto teve como objetivo aplicar tecnicas de processamento de imagens como transformações radiométricas, filtragens espaciais e detecção de bordas em imagens diversificadas. Foi utilizado o poder o paralelismo para melhoria do desempenho.",
        imagem: "imagens/PIBIC.jpg",
        link: "https://github.com/SebasNeto/Processamento-de-Imagens---Programacao-Paralela.git"

    }
];

//certificações 

const certificados = [
    {
        titulo: "Projeto de Sistemas Web",
        descricao: "Curso que aborda o desenvolvimento de sistemas web desde a concepção até a implementação. O conteúdo inclui levantamento e análise de requisitos, modelagem de sistemas, engenharia e validação de requisitos, além do uso de metodologias e ferramentas para modelagem de aplicações web. O curso também cobre a utilização da UML para documentação e projeto de sistemas web.",
        imagem: "imagens/certificado_web.jpg",
    },
    {
        titulo: "Curso de Machine Learning e Deep Learning",
        descricao: "Curso introdutório sobre Machine Learning e Deep Learning, cobrindo conceitos básicos, principais algoritmos e aplicações práticas. O programa abordou desde aprendizado supervisionado até redes neurais profundas e suas implementações.",
        imagem: "imagens/build.jpg",
    },
    {
        titulo: "Processamento de Linguagem Natural e Visão Computacional",
        descricao: "Curso focado em técnicas de Processamento de Linguagem Natural (PLN) e Visão Computacional, explorando o uso de redes neurais e modelos avançados para análise de texto e imagens. Incluiu aplicações práticas na área de inteligência artificial.",
        imagem: "imagens/build_02.jpg",
    },
    {
        titulo: "PCAP: Programming Essentials in Python",
        descricao: "Curso essencial de programação em Python, cobrindo desde conceitos básicos até tópicos avançados como manipulação de arquivos, programação orientada a objetos (OOP) e uso de módulos e pacotes. Inclui boas práticas e técnicas fundamentais para desenvolvimento eficiente.",
        imagem: "imagens/python_curso.jpg",
    },
    {
        titulo: "Curso de HTML5 e Programação Web",
        descricao: "Curso introdutório sobre HTML5 e desenvolvimento web, abrangendo estruturação de páginas, listas, tabelas, formulários e elementos semânticos. Incluiu exercícios práticos para criação de sites responsivos e interativos.",
        imagem: "imagens/html_curso.jpg",
    },
    {
        titulo: "Capacitação Tecnológica: Competências Profissionais, Emocionais e Tecnológicas",
        descricao: "Curso abordando competências essenciais para o mercado de trabalho, incluindo estratégia, produtividade, liderança, inteligência emocional e transformação digital. Ministrado pelos professores Leandro Karnal e Luiza Helena Trajano, o programa focou em inovação, cooperação e adaptabilidade profissional.",
        imagem: "imagens/capacitacao.jpg",
    },
    {
        titulo: "Super Tech Week 2022",
        descricao: "Participação na segunda edição da Super Tech Week, um evento científico que reúne palestras, workshops e painéis sobre tendências tecnológicas e inovação. O evento abordou temas como inteligência artificial, programação e desenvolvimento de software.",
        imagem: "imagens/tech_02.jpg",
    },
    {
        titulo: "Super Tech Week 2023",
        descricao: "Participação na terceira edição da Super Tech Week, explorando avanços tecnológicos e tendências em TI. O evento contou com especialistas da área discutindo inteligência artificial, computação em nuvem, programação paralela e segurança da informação.",
        imagem: "imagens/tech_03.jpg",
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


// Função para renderizar certificados na página
function renderizarCertificados() {
    const container = document.getElementById("certificados-container");
    container.innerHTML = "";
    certificados.forEach(certificado => {
        const certificadoCard = document.createElement("div");
        certificadoCard.className = "certificado-card";
        certificadoCard.innerHTML = `
            <img src="${certificado.imagem}" alt="${certificado.titulo}" class="certificado-image">
            <h3>${certificado.titulo}</h3>
            <p>${certificado.descricao}</p>
            <a href="${certificado.link}" target="_blank"></a>
        `;
        container.appendChild(certificadoCard);
    });
}

// Chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    renderizarProjetos(); 
    renderizarCertificados(); 
});

