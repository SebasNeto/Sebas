/* ===========================
   CONFIG – TROCAR AQUI
   =========================== */
const GA_ID = "G-83FEN292RT";          // ex.: G-ABC123DEF
const CV_URL = "Sebastião_Bicharra_Neto_Curriculo_CV_.pdf"; // link do seu CV
const FORM_EMAIL = "sebastiaobicharraneto@gmail.com";  // FormSubmit AJAX

// GA se ID válido
if (GA_ID && GA_ID !== "G-83FEN292RT") {
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date()); gtag('config', GA_ID);
}

/* ===========================
   I18N
   =========================== */
const I18N = {
  pt:{a11y:{skip:"Ir para o conteúdo"},
    nav:{about:"Sobre",tcc:"TCC",achievements:"Conquistas",projects:"Projetos",certs:"Certificações",events:"Eventos",skills:"Habilidades",contact:"Contato"},
    hero:{title:"Programação Paralela & Visão Computacional",subtitle:"Desenvolvo soluções de alto desempenho aplicadas a Visão Computacional e Programação Paralela.",github:"Ver GitHub ↗",cv:"Baixar CV"},
    about:{title:"Sobre",text:"Graduado em Ciência da Computação pelo Instituto de Computação  ICOMP/UFAM. Atuo com paralelismo aplicado ao processamento de imagens e visão computacional."},

    /* TCC */
    tcc:{
      title:"Trabalho de Conclusão de Curso (TCC)",
      caption1:"Capa do TCC",
      caption2:"Apresentação do TCC",
      topic:"Tema",
      topicText:"Programação paralela aplicada ao processamento de imagens e computação de alto desempenho: uma abordagem experimental.",
      abstract:"Resumo",
      abstractText1:"O trabalho investiga, por experimentos, versões sequenciais (Python, C) e paralelas (C+Threads, OpenMP, Julia e Halide) em algoritmos de visão (transformações radiométricas, filtragens, detecção de bordas e Otsu) e em problemas gerais (multiplicação de matrizes, ordenação, buscas, redução e Monte Carlo), variando o número de núcleos para medir speedup, eficiência e escalabilidade.",
      abstractText2:"Os resultados mostram reduções expressivas de tempo nas abordagens paralelas, com destaque recorrente para Halide, que obteve os menores tempos nas técnicas de imagem e ótima escalabilidade conforme o aumento de threads.",
      highlights:"Destaques",
      hl1:"Comparações sistemáticas entre linguagens e frameworks em diferentes arquiteturas multicore.",
      hl2:"Metodologia de benchmarks com médias e speedup, conjuntos de imagens por faixas de pixels e tamanhos crescentes de vetores/matrizes.",
      hl3:"Diretrizes práticas sobre quando o custo de paralelizar compensa, considerando padrão de acesso à memória e overhead.",
      source:"Resumo adaptado do TCC (PDF no anexo).",
      btnPdf:"Abrir PDF ↗"
    },

    achievements:{title:"Destaque de conquistas",speedup:"Speedup em paralelismo",projects:"Projetos/estudos entregues",talks:"Apresentações & eventos",areas:"Áreas de foco"},
    projects:{title:"Meus Projetos",search:"Buscar por título ou descrição..."},
    filters:{all:"Todos",parallelism:"Paralelismo",databases:"Banco de Dados",cv:"Visão Computacional",other:"Outros"},
    certs:{title:"Certificações"},
    events:{title:"Eventos"}, skills:{title:"Habilidades"},
    contact:{title:"Vamos conversar",name:"Nome",namePh:"Seu nome",subject:"Assunto",subjectPh:"Tema da mensagem",message:"Mensagem",messagePh:"Como posso ajudar?",emailPh:"seu@email.com",send:"Enviar mensagem",emailAlt:"Enviar por e-mail",sending:"Enviando...",sent:"Mensagem enviada! Vou responder em breve.",error:"Não foi possível enviar. Tente novamente ou use o e-mail.",network:"Falha de rede. Tente novamente.",
      errName:"Nome é obrigatório", errEmail:"E-mail válido é obrigatório", errMsg:"Mensagem é obrigatória"}
  },
  en:{a11y:{skip:"Skip to content"},
    nav:{about:"About",tcc:"Thesis",achievements:"Highlights",projects:"Projects",certs:"Certificates",events:"Events",skills:"Skills",contact:"Contact"},
    hero:{title:"Parallel Programming & Computer Vision",subtitle:"I develop high-performance solutions applied to Computer Vision and Parallel Programming.",github:"View GitHub ↗",cv:"Download CV"},
    about:{title:"About",text:"Graduated in Computer Science from the Institute of Computing (ICOMP/UFAM). I work with parallelism applied to image processing and computer vision."},

    /* TCC */
    tcc:{
      title:"Undergraduate Thesis",
      caption1:"Thesis cover",
      caption2:"Thesis defense",
      topic:"Topic",
      topicText:"Parallel programming applied to image processing and high-performance computing: an experimental approach.",
      abstract:"Abstract",
      abstractText1:"This work experimentally compares sequential (Python, C) and parallel (C+Threads, OpenMP, Julia, Halide) versions across vision algorithms (radiometric transforms, filters, edge detection, Otsu) and general problems (matrix multiplication, sorting, searches, reduction, Monte Carlo), varying CPU cores to measure speedup, efficiency and scalability.",
      abstractText2:"Results show expressive time reductions with parallel approaches; Halide repeatedly achieved the lowest times on image tasks with strong scalability as threads increase.",
      highlights:"Highlights",
      hl1:"Systematic comparisons across languages and frameworks on multiple multicore architectures.",
      hl2:"Benchmarking methodology with averages and speedup; image sets by pixel ranges; growing vector/matrix sizes.",
      hl3:"Practical guidance on when parallelization pays off, considering memory access patterns and overhead.",
      source:"Summary adapted from the thesis (attached PDF).",
      btnPdf:"Open PDF ↗"
    },

    achievements:{title:"Highlights",speedup:"Parallelism speedup",projects:"Delivered projects/studies",talks:"Talks & events",areas:"Focus areas"},
    projects:{title:"My Projects",search:"Search by title or description..."},
    filters:{all:"All",parallelism:"Parallelism",databases:"Databases",cv:"Computer Vision",other:"Other"},
    certs:{title:"Certificates"},
    events:{title:"Events"}, skills:{title:"Skills"},
    contact:{title:"Let’s talk",name:"Name",namePh:"Your name",subject:"Subject",subjectPh:"Message topic",message:"Message",messagePh:"How can I help?",emailPh:"your@email.com",send:"Send message",emailAlt:"Send via email",sending:"Sending...",sent:"Message sent! I’ll get back soon.",error:"Couldn’t send now. Try again or use e-mail.",network:"Network error. Please try again.",
      errName:"Name is required", errEmail:"Valid e-mail required", errMsg:"Message is required"}
  }
};
let currentLang = (localStorage.getItem("lang") || (navigator.language||"pt")).startsWith("en") ? "en" : "pt";

const $ = (s, r=document)=>r.querySelector(s);
const $$ = (s, r=document)=>Array.from(r.querySelectorAll(s));

function t(path){ return path.split(".").reduce((a,k)=>a && a[k], I18N[currentLang]) || path; }

function updateLangBtn(){
  const btn = $("#langToggle");
  if(!btn) return;
  btn.textContent = currentLang === "pt" ? "EN" : "PT";
  btn.setAttribute("aria-pressed", currentLang === "en" ? "true" : "false");
}
function applyI18n(){
  document.documentElement.lang = currentLang === "en" ? "en" : "pt-br";
  $$("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const attr = el.getAttribute("data-i18n-attr");
    const val = t(key);
    if(attr) el.setAttribute(attr,val); else el.textContent = val;
  });
  updateLangBtn();
  renderizarProjetos(); renderizarCertificados(); renderizarEventos();
}
$("#langToggle")?.addEventListener("click",()=>{ currentLang = currentLang === "pt" ? "en" : "pt"; localStorage.setItem("lang", currentLang); applyI18n(); });

/* ===========================
   Dados
   =========================== */
const projetos = [
  { titulo:"A inclusão da computação como um elemento complementar de estudo no 9º ano do ensino fundamental.",
    title_en:"Introducing computing as a complementary study element in 9th grade.",
    descricao:"Uso de recursos tecnológicos para ensino-aprendizagem em lógica e programação.",
    desc_en:"Using technology to improve teaching and learning in logic and programming.",
    imagem:"imagens/cert-uea.PNG", link:"#", tags:["Outros"], techs:["Python","HTML","CSS","JavaScript"] },
  { titulo:"Uma análise empírica sobre o desempenho de algoritmos de ordenação.",
    title_en:"An empirical analysis of sorting algorithm performance.",
    descricao:"Comparação de cinco algoritmos de ordenação em grandes volumes de dados.",
    desc_en:"Comparative study of five sorting algorithms on large datasets.",
    imagem:"imagens/cert-super.PNG", link:"https://github.com/SebasNeto/PROJETO-SUPER---UFAM.git", tags:["Banco de Dados"], techs:["C++","Python"] },
  { titulo:"Análise comparativa de desempenho entre algoritmos paralelos e tradicionais para processamento de imagens.",
    title_en:"Performance comparison between parallel and traditional image processing algorithms.",
    descricao:"Impacto da execução paralela em algoritmos de visão, comparando com versões tradicionais.",
    desc_en:"Assessing the impact of parallel execution on vision algorithms vs. traditional versions.",
    imagem:"imagens/cert-super-2.PNG", link:"https://github.com/SebasNeto/Processamento-de-Imagens---Programacao-Paralela.git", tags:["Paralelismo","Visão Computacional"], techs:["Halide","OpenMP","C++","OpenCV"] },
  { titulo:"Processamento de Imagens e Programação Paralela.",
    title_en:"Image Processing & Parallel Programming.",
    descricao:"Aplicação de técnicas de imagem com paralelismo para ganho de desempenho.",
    desc_en:"Applying image processing with parallelism for performance gains.",
    imagem:"imagens/PIBIC.jpg", link:"https://github.com/SebasNeto/Processamento-de-Imagens---Programacao-Paralela.git", tags:["Paralelismo","Visão Computacional"], techs:["Halide","OpenMP","C++","Python"] }
];

const certificados = [
  { titulo:"Projeto de Sistemas Web", titulo_en:"Web Systems Design", descricao:"Requisitos, UML e protótipos navegáveis.", desc_en:"Requirements, UML and clickable prototypes.", imagem:"imagens/certificado_web.jpg" },
  { titulo:"Machine Learning e Deep Learning", titulo_en:"Machine Learning & Deep Learning", descricao:"Aprendizado supervisionado e redes neurais.", desc_en:"Supervised learning and neural networks.", imagem:"imagens/build.jpg" },
  { titulo:"PLN e Visão Computacional", titulo_en:"NLP & Computer Vision", descricao:"Prática com redes neurais.", desc_en:"Practical work with neural networks.", imagem:"imagens/build_02.jpg" },
  { titulo:"PCAP: Programming Essentials in Python", titulo_en:"PCAP: Programming Essentials in Python", descricao:"Fundamentos e OOP em Python.", desc_en:"Python fundamentals and OOP.", imagem:"imagens/python_curso.jpg" },
  { titulo:"HTML5 e Programação Web", titulo_en:"HTML5 & Web Programming", descricao:"Estruturação, semântica e responsividade.", desc_en:"Structure, semantics and responsiveness.", imagem:"imagens/html_curso.jpg" },
  { titulo:"Capacitação Tecnológica", titulo_en:"Technology Enablement", descricao:"Soft skills e produtividade.", desc_en:"Soft skills and productivity.", imagem:"imagens/capacitacao.jpg" },
  { titulo:"Super Tech Week 2022", titulo_en:"Super Tech Week 2022", descricao:"IA e tendências em TI.", desc_en:"AI and software trends.", imagem:"imagens/tech_02.jpg" },
  { titulo:"Super Tech Week 2023", titulo_en:"Super Tech Week 2023", descricao:"Paralelismo e segurança.", desc_en:"Parallelism and security.", imagem:"imagens/tech_03.jpg" },
  { titulo:"Congresso de Iniciação Científica", titulo_en:"Undergraduate Research Congress", descricao:"Pesquisa em algoritmos paralelos.", desc_en:"Research on parallel algorithms.", imagem:"imagens/connic.png" },
  { titulo:"Congresso de Iniciação Científica", titulo_en:"Undergraduate Research Congress", descricao:"33ª edição do Congresso.", desc_en:"33rd edition of the congress.", imagem:"imagens/connic_02.png" }
];

const eventos = [
  { titulo:"Apresentação Super Tech Week 2022", titulo_en:"Talk at Super Tech Week 2022", imagens:["imagens/apre_super.jpg"] },
  { titulo:"Apresentação PIBIC 2023-2024", titulo_en:"PIBIC Presentation 2023-2024", imagens:["imagens/apre_pibic.jpg","imagens/apre_pibic02.jpg","imagens/apre_pibic03.jpg"] }
];

/* Badges coloridas nos cards */
const TECH_COLORS = {
  Python:{bg:"#3776AB",fg:"#fff", tip:"Python"},
  "C++":{bg:"#00599C",fg:"#fff", tip:"C++"},
  C:{bg:"#555",fg:"#fff", tip:"C"},
  Halide:{bg:"#9b59b6",fg:"#fff", tip:"Halide"},
  OpenMP:{bg:"#f59e0b",fg:"#111", tip:"OpenMP"},
  OpenCV:{bg:"#5c6bc0",fg:"#fff", tip:"OpenCV"},
  HTML:{bg:"#e34f26",fg:"#fff", tip:"HTML"},
  CSS:{bg:"#1572B6",fg:"#fff", tip:"CSS"},
  JavaScript:{bg:"#f7df1e",fg:"#111", tip:"JavaScript"},
  MySQL:{bg:"#00618A",fg:"#fff", tip:"MySQL"},
  MongoDB:{bg:"#13aa52",fg:"#fff", tip:"MongoDB"}
};
function makeBadges(techs=[]){
  if(!techs.length) return "";
  return `<div class="badges">${
    techs.map(t=>{
      const c = TECH_COLORS[t] || {bg:"#2b2b2b",fg:"#ddd", tip:t};
      return `<span class="badge" title="${c.tip}" style="color:${c.fg};background:${c.bg}22;border-color:${c.bg}55">
        <span class="dot" style="background:${c.bg}"></span>${t}</span>`;
    }).join("")
  }</div>`;
}

/* Renderização */
function criarCard({ imagem, titulo, title_en, descricao, desc_en, link, techs }, tipo="projeto"){
  const card = document.createElement("article");
  card.className = "card " + (tipo === "evento" ? "evento-card" : "");
  card.setAttribute("data-animate","");

  if (tipo !== "evento") {
    const title = currentLang === "en" ? (title_en || titulo) : titulo;
    const desc  = currentLang === "en" ? (desc_en  || descricao) : descricao;
    const moreLabel = `${currentLang==='en'?'View more: ':'Ver mais: '}${title.replace(/"/g,'&quot;')}`;
    card.innerHTML = `
      <img src="${imagem}" alt="${title}" loading="lazy" decoding="async" width="800" height="450" />
      <div class="card-body">
        <h3>${title}</h3>
        ${desc ? `<p>${desc}</p>` : ""}
        ${makeBadges(techs)}
        ${link ? `<a class="btn btn-ghost" href="${link}" target="_blank" rel="noopener" aria-label="${moreLabel}">${currentLang==='en'?'View more ↗':'Ver mais ↗'}</a>` : ""}
      </div>`;
    return card;
  }

  const head = document.createElement("div");
  head.className = "card-body";
  const evTitle = currentLang === "en" ? (title_en || titulo) : titulo;
  head.innerHTML = `<h3>${evTitle}</h3>`;
  const gallery = document.createElement("div");
  gallery.className = "evento-gallery";
  eventos.find(e => e.titulo === titulo).imagens.forEach(src => {
    const fig = document.createElement("figure");
    fig.className = "thumb";
    fig.innerHTML = `<img src="${src}" alt="${evTitle}" loading="lazy" decoding="async" data-lightbox="${src}" />`;
    gallery.appendChild(fig);
  });
  card.appendChild(head);
  card.appendChild(gallery);
  return card;
}

function renderizarProjetos(list = projetos){
  const container = $("#projetos-container"); container.innerHTML = "";
  const q = ($("#buscaProjetos")?.value || "").trim().toLowerCase();
  const catBtn = $$(".chip[data-cat]").find(b=>b.classList.contains("is-active"));
  const cat = catBtn ? catBtn.dataset.cat : "all";
  const filtrados = list.filter(p=>{
    const title = (currentLang==='en' ? (p.title_en||p.titulo) : p.titulo).toLowerCase();
    const desc  = (currentLang==='en' ? (p.desc_en||p.descricao) : p.descricao).toLowerCase();
    const okText = !q || title.includes(q) || desc.includes(q);
    const okCat = cat === "all" ? true : (p.tags||[]).includes(cat);
    return okText && okCat;
  });
  filtrados.forEach(p=>container.appendChild(criarCard(p,"projeto")));
}
function renderizarCertificados(){
  const c = $("#certificados-container"); c.innerHTML = "";
  certificados.forEach(cert=>{
    c.appendChild(criarCard({
      imagem: cert.imagem,
      titulo: cert.titulo, title_en: cert.titulo_en,
      descricao: cert.descricao, desc_en: cert.desc_en
    }, "certificado"));
  });
}
function renderizarEventos(){
  const c = $("#eventos-container"); c.innerHTML = "";
  eventos.forEach(ev=>{
    c.appendChild(criarCard({ imagem:"", titulo: ev.titulo, title_en: ev.titulo_en }, "evento"));
  });
}

/* Interações */
function iniciarScrollspy(){
  const links = $$('a[data-nav]');
  const sections = links.map(a => $(a.getAttribute("href")));
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      const id = `#${entry.target.id}`;
      const link = links.find(a => a.getAttribute("href") === id);
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach(l => { l.classList.remove("is-active"); l.removeAttribute("aria-current"); });
        link.classList.add("is-active");
        link.setAttribute("aria-current","true");
      }
    });
  }, { rootMargin: "-55% 0px -40% 0px", threshold: 0.02 });
  sections.forEach(sec => sec && io.observe(sec));
}

function iniciarReveal(){
  const observables = $$(".observe");
  const io1 = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("is-visible"); io1.unobserve(e.target);} }); }, {threshold:0.1});
  observables.forEach(el=>io1.observe(el));
  const cards = $$("[data-animate]");
  const io2 = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if(e.isIntersecting){ e.target.style.transform="translateY(0) scale(1)"; e.target.style.opacity="1"; io2.unobserve(e.target);} }); }, {threshold:0.15});
  cards.forEach(c=>io2.observe(c));
}

/* Busca + filtro */
function iniciarBuscaEFiltro(){
  $("#buscaProjetos")?.addEventListener("input",()=>renderizarProjetos());
  $$(".chip[data-cat]").forEach(ch=>{
    ch.addEventListener("click",()=>{ $$(".chip[data-cat]").forEach(x=>x.classList.remove("is-active")); ch.classList.add("is-active"); renderizarProjetos(); });
  });
}

/* Carrossel */
function iniciarCarrosselCertificados(){
  const row=$("#certificados-container"), prev=$("#certPrev"), next=$("#certNext"); if(!row||!prev||!next) return;
  const step=()=>row.querySelector(".card")?.getBoundingClientRect().width||320;
  prev.addEventListener("click",()=>row.scrollBy({left:-step()-16,behavior:"smooth"}));
  next.addEventListener("click",()=>row.scrollBy({left: step()+16,behavior:"smooth"}));
}

/* FAB topo */
function iniciarFabTopo(){ const btn=$("#scrollTopBtn"); const onScroll=()=>{ btn.style.display=window.scrollY>400?"grid":"none"; }; window.addEventListener("scroll",onScroll,{passive:true}); btn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"})); onScroll(); }

/* Tema (claro como padrão) */
function iniciarTema(){
  const root=document.documentElement, toggle=$("#themeToggle");
  const saved=localStorage.getItem("theme");
  if(saved){ root.setAttribute("data-theme", saved); } else { root.setAttribute("data-theme","light"); }
  toggle.addEventListener("click",()=>{ const cur=root.getAttribute("data-theme"); const nxt=cur==="dark"?"light":"dark"; root.setAttribute("data-theme",nxt); localStorage.setItem("theme",nxt); });
}

/* Lightbox com focus trap e ESC */
function iniciarLightbox(){
  const lb=$("#lightbox"), img=$("#lightboxImg"), close=$("#lightboxClose");
  let lastFocused=null;
  document.addEventListener("click",(e)=>{ const t=e.target; const src=t?.getAttribute?.("data-lightbox"); if(src){ lastFocused=document.activeElement; img.src=src; lb.classList.add("is-open"); lb.setAttribute("aria-hidden","false"); close.focus(); }});
  const fechar=()=>{ lb.classList.remove("is-open"); lb.setAttribute("aria-hidden","true"); img.removeAttribute("src"); lastFocused?.focus(); };
  close.addEventListener("click",fechar); lb.addEventListener("click",(e)=>{ if(e.target===lb) fechar(); });
  document.addEventListener("keydown",(e)=>{ if(!lb.classList.contains('is-open')) return; if(e.key==="Escape") fechar(); if(e.key==="Tab"){ e.preventDefault(); close.focus(); } });
}

/* CV */
async function configurarCV(){
  const btn=$("#cvBtn"); if(!btn) return; btn.href=CV_URL; btn.setAttribute("download","");
  try { await fetch(CV_URL,{method:"HEAD",mode:"no-cors"}); } catch {
    btn.textContent = currentLang==='en' ? "Request CV by e-mail" : "Pedir CV por e-mail";
    btn.removeAttribute("download"); btn.removeAttribute("target");
    btn.setAttribute("href","mailto:sebastiaobicharraneto@gmail.com?subject=Solicitar%20CV&body=Olá%2C%20poderia%20me%20enviar%20seu%20CV%3F");
  }
}

/* ======= Formulário com ERROS POR CAMPO ======= */
function iniciarContato(){
  const form=$("#contatoForm"), feedback=$("#contatoFeedback"); if(!form) return;

  const setFieldError=(id,msg)=>{
    const input = document.getElementById(id);
    const err = document.getElementById('err-'+id);
    if(msg){
      input.setAttribute('aria-invalid','true');
      input.setAttribute('aria-describedby','err-'+id);
      err.textContent = msg;
      err.setAttribute('role','alert');
    }else{
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      err.textContent = '';
      err.removeAttribute('role');
    }
  };

  const validate=()=>{
    let ok=true;
    const data = Object.fromEntries(new FormData(form));
    setFieldError('nome',''); setFieldError('email',''); setFieldError('mensagem',''); // limpa
    if(!data.nome) { setFieldError('nome', t('contact.errName')); ok=false; }
    if(!/^\S+@\S+\.\S+$/.test(data.email||'')) { setFieldError('email', t('contact.errEmail')); ok=false; }
    if(!data.mensagem) { setFieldError('mensagem', t('contact.errMsg')); ok=false; }
    return ok ? data : null;
  };

  // limpar erro ao digitar
  ['nome','email','mensagem','assunto'].forEach(id=>{
    const el = document.getElementById(id);
    el?.addEventListener('input',()=> setFieldError(id,''));
  });

  form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const data = validate();
    if(!data) return;

    feedback.textContent = t("contact.sending");
    const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(FORM_EMAIL)}`;
    try{
      const res = await fetch(endpoint,{
        method:"POST",
        headers:{ "Content-Type":"application/json", "Accept":"application/json" },
        body: JSON.stringify({
          _subject: data.assunto || (currentLang==="en"?"Portfolio contact":"Contato via portfólio"),
          _template:"table",
          Name:data.nome, Email:data.email, Subject:data.assunto, Message:data.mensagem
        })
      });
      if(res.ok){ feedback.textContent = t("contact.sent"); form.reset(); }
      else{ feedback.textContent = t("contact.error"); }
    }catch{ feedback.textContent = t("contact.network"); }
  });
}

/* Hambúrguer */
function iniciarMenu(){
  const btn=$("#menuToggle"), nav=$("#siteNav"), backdrop=$("#menuBackdrop");
  const setState=(open)=>{
    btn.classList.toggle("is-open", open);
    nav.classList.toggle("is-open", open);
    backdrop.classList.toggle("is-open", open);
    backdrop.hidden = !open;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    if(open) setTimeout(()=>$("#siteNav a")?.focus(),0);
  };
  btn.addEventListener("click",()=>setState(!nav.classList.contains("is-open")));
  backdrop.addEventListener("click",()=>setState(false));
  $("#siteNav").addEventListener("click",e=>{ if(e.target.tagName==="A") setState(false); });
  document.addEventListener("keydown",e=>{ if(e.key==="Escape") setState(false); if(e.key==="Tab" && nav.classList.contains("is-open") && !nav.contains(document.activeElement)) { e.preventDefault(); $("#siteNav a")?.focus(); } });
}

// --- Atualiza valores das métricas dinamicamente ---
function atualizarMetricas() {
  const el = sel => document.querySelector(`.metric[data-metric="${sel}"]`);

  // Defina as regras de contagem aqui:
  const valores = {
    speedup: 1000,                              // fixo ou calculado
    projects: projetos.length,               // conta projetos do array
    talks: eventos.length,                   // conta eventos
    areas: new Set(projetos.flatMap(p=>p.tags || [])).size // conta áreas únicas
  };

  for (const [k,v] of Object.entries(valores)) {
    const node = el(k);
    if (node) node.dataset.count = String(v);
  }
}

// --- MÉTRICAS (anima de 0 até data-count; respeita reduced-motion) ---
function iniciarMetricas(){
  const metrics = $$(".metric");
  if (!metrics.length) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    metrics.forEach(m => {
      const alvo = parseInt(m.dataset.count || "0", 10);
      const span = m.querySelector(".count");
      if (span) span.textContent = alvo;
    });
    return;
  }

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const alvo = parseInt(el.dataset.count || "0", 10);
      const span = el.querySelector(".count");
      if (!span) return;

      const dur = 800; // ms
      const t0 = performance.now();

      function tick(now){
        const p = Math.min(1, (now - t0) / dur);
        const val = Math.round(alvo * p);
        span.textContent = val;
        if (p < 1) requestAnimationFrame(tick);
        else io.unobserve(el);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.4 });

  metrics.forEach(m => io.observe(m));
}


/* Init */
document.addEventListener("DOMContentLoaded", ()=>{
  applyI18n();
  iniciarScrollspy(); iniciarReveal(); iniciarBuscaEFiltro(); iniciarCarrosselCertificados();
  iniciarFabTopo(); iniciarTema(); iniciarLightbox(); configurarCV(); iniciarContato(); iniciarMenu(); atualizarMetricas(); iniciarMetricas();
});




  
