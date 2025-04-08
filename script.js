// ===================
// Dados dos Projetos
// ===================
const projetos = [
    {
        titulo: "A inclusão da computação como um elemento complementar de estudo no 9º ano do ensino fundamental",
        descricao: "Utilização de recursos tecnológicos para melhorar o ensino-aprendizagem, com foco em lógica e programação.",
        imagem: "imagens/cert-uea.PNG",
        link: "#"
    },
    {
        titulo: "Uma análise empírica sobre o desempenho de algoritmos de ordenação",
        descricao: "Análise comparativa de cinco algoritmos de ordenação, avaliando tempo e eficiência em grandes volumes de dados.",
        imagem: "imagens/cert-super.PNG",
        link: "https://github.com/SebasNeto/PROJETO-SUPER---UFAM.git"
    },
    {
        titulo: "Análise comparativa de desempenho entre algoritmos paralelos e tradicionais para processamento de imagens",
        descricao: "Avaliação do impacto da execução paralela em algoritmos de imagens, comparando eficiência com versões tradicionais.",
        imagem: "imagens/cert-super-2.PNG",
        link: "https://github.com/SebasNeto/Processamento-de-Imagens---Programacao-Paralela.git"
    },
    {
        titulo: "Processamento de Imagens e Programação Paralela",
        descricao: "Aplicação de técnicas de imagem com programação paralela para aumento de desempenho computacional.",
        imagem: "imagens/PIBIC.jpg",
        link: "https://github.com/SebasNeto/Processamento-de-Imagens---Programacao-Paralela.git"
    }
];

// ===================
// Certificados
// ===================
const certificados = [
    {
        titulo: "Projeto de Sistemas Web",
        descricao: "Desenvolvimento de sistemas web desde requisitos até UML e protótipos navegáveis.",
        imagem: "imagens/certificado_web.jpg",
    },
    {
        titulo: "Curso de Machine Learning e Deep Learning",
        descricao: "Conceitos básicos e práticos em aprendizado supervisionado e redes neurais.",
        imagem: "imagens/build.jpg",
    },
    {
        titulo: "Processamento de Linguagem Natural e Visão Computacional",
        descricao: "Exploração prática de PLN e visão computacional usando redes neurais.",
        imagem: "imagens/build_02.jpg",
    },
    {
        titulo: "PCAP: Programming Essentials in Python",
        descricao: "Conceitos fundamentais e OOP em Python, com foco em boas práticas.",
        imagem: "imagens/python_curso.jpg",
    },
    {
        titulo: "Curso de HTML5 e Programação Web",
        descricao: "Fundamentos do HTML5 com foco em estruturação, semântica e responsividade.",
        imagem: "imagens/html_curso.jpg",
    },
    {
        titulo: "Capacitação Tecnológica: Competências Profissionais, Emocionais e Tecnológicas",
        descricao: "Curso sobre inovação, produtividade e inteligência emocional com foco em soft skills.",
        imagem: "imagens/capacitacao.jpg",
    },
    {
        titulo: "Super Tech Week 2022",
        descricao: "Participação em evento com foco em IA, desenvolvimento de software e tendências em TI.",
        imagem: "imagens/tech_02.jpg",
    },
    {
        titulo: "Super Tech Week 2023",
        descricao: "Discussões avançadas sobre computação paralela, nuvem e segurança da informação.",
        imagem: "imagens/tech_03.jpg",
    },
    {
        titulo: "Congresso de Iniciação Científica",
        descricao: "Apresentação de pesquisa sobre algoritmos paralelos para processamento de imagens.",
        imagem: "imagens/connic.png"
    },
    {
        titulo: "Congresso de Iniciação Científica",
        descricao: "Participação na 33ª edição do Congresso de Iniciação Científica.",
        imagem: "imagens/connic_02.png"
    }
];

// ===================
// Eventos
// ===================
const eventos = [
    {
        titulo: "Apresentação Super Tech Week 2022",
        imagens: ["imagens/apre_super.jpg"]
    },
    {
        titulo: "Apresentação PIBIC 2023-2024",
        imagens: [
            "imagens/apre_pibic.jpg",
            "imagens/apre_pibic02.jpg",
            "imagens/apre_pibic03.jpg"
        ]
    }
];

// ============================
// Funções de Renderização
// ============================

function renderizarProjetos() {
    const container = document.getElementById("projetos-container");
    container.innerHTML = "";
    projetos.forEach(projeto => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
            <img src="${projeto.imagem}" alt="${projeto.titulo}" class="project-image">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <a href="${projeto.link}" target="_blank">Ver mais</a>
        `;
        container.appendChild(card);
    });
}

function renderizarCertificados() {
    const container = document.getElementById("certificados-container");
    container.innerHTML = "";
    certificados.forEach(certificado => {
        const card = document.createElement("div");
        card.className = "certificado-card";
        card.innerHTML = `
            <img src="${certificado.imagem}" alt="${certificado.titulo}" class="certificado-image">
            <h3>${certificado.titulo}</h3>
            <p>${certificado.descricao}</p>
        `;
        container.appendChild(card);
    });
}

function renderizarEventos() {
    const container = document.getElementById("eventos-container");
    container.innerHTML = "";
    eventos.forEach(evento => {
        const card = document.createElement("div");
        card.className = "evento-card";
        let imagensHtml = `<h3>${evento.titulo}</h3>`;
        evento.imagens.forEach(imagem => {
            imagensHtml += `<img src="${imagem}" alt="${evento.titulo}" class="evento-imagem">`;
        });
        card.innerHTML = imagensHtml;
        container.appendChild(card);
    });
}

// ========================================
// Scroll para o topo ao clicar no botão
// ========================================
window.onscroll = () => {
    const btn = document.getElementById("scrollTopBtn");
    btn.style.display = window.scrollY > 300 ? "block" : "none";
};

document.getElementById("scrollTopBtn").onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// ===================
// Ao carregar a página
// ===================
document.addEventListener("DOMContentLoaded", () => {
    renderizarProjetos();
    renderizarCertificados();
    renderizarEventos();
});

  
