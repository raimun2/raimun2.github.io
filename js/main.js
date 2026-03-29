(function(){
  const i18n = {
    es: {
      // Navbar & Comunes
      nav_mentoring: 'Advisory',
      nav_press: 'Prensa',
      nav_papers: 'Papers',
      nav_rd: 'I+D',
      nav_artifacts: 'Artefactos',
      back_home: '← Volver al inicio',
      
      // Index: Hero
      hero_title: 'Constructor de Sistemas.',
      hero_sub: 'Transformo complejidad en sistemas de decisión.',
      hero_bio: 'PhD en Sistemas Complejos. Construyo sistemas inteligentes y arquitecturas de datos donde la matemática choca con la realidad. Mi enfoque es la estructura del problema y la reducción de ruido. Soy Research Fellow en The University of Queensland, ex-Director de Analytics en LATAM Airlines y fundador de Metric Trails.',
      hero_cred: 'PhD Sistemas Complejos. Research Fellow, UQ. Fundador, Metric Trails.',
      hero_cta_mentoring: 'Data Advisory',
      hero_cta_rd: 'Proyectos I+D',

      // Index: Advisory
      mentoring_title: 'Data & Analytics Advisory',
      mentoring_subtitle: 'Conecto la ejecución técnica con la estrategia corporativa.',
      tech_label: 'Track Técnico',
      tech_title: 'Para profesionales y expertos de datos',
      tech_body: 'Transición desde la ejecución de código hacia el diseño de arquitecturas de sistemas y toma de decisión estratégica.',
      tech_link: 'Explorar Advisory \u2192',
      exec_label: 'Track Ejecutivo',
      exec_title: 'Para líderes de negocio y directores',
      exec_body: 'Traducción de ciencia de datos compleja en impacto de negocio y estrategia corporativa. Cortar el ruido y diseñar sistemas lean.',
      exec_link: 'Explorar Advisory \u2192',

      // Index: Prensa
      press_title: 'Prensa & Difusión',
      press_subtitle: 'Apariciones y entrevistas sobre arquitectura de sistemas y datos.',
      abc_desc: 'Sobre la necesidad de estándares técnicos y comparabilidad de datos en entornos complejos a nivel global.',
      abc_cta: 'Leer en ABC News',
      uai_title: 'Uso estratégico de la data en entornos de alto rendimiento',
      uai_desc: 'Conversación a fondo sobre cómo convertir datos crudos en decisiones accionables mediante evidencia empírica.',
      uai_cta: 'Leer artículo',
      om_title: 'Data Science: Del ruido a la señal',
      om_desc: 'Entrevista repasando mi trayectoria profesional, reducción de ruido y la aplicación práctica de la ciencia de datos.',
      om_cta: 'Ver en YouTube',

      // Index: Papers
      papers_title: 'Publicaciones Científicas',
      papers_sub: 'Selección de mis investigaciones: modelado matemático y validación empírica.',
      papers_full: 'Google Scholar',

      // Index: R&D
      rd_title: 'I+D: Arquitectura y Modelado',
      rd_subtitle: 'Diseño y testeo de modelos matemáticos contra el caos empírico.',
      rd_b1: '<strong>Validación empírica:</strong> Extraer la señal del ruido en condiciones reales.',
      rd_b2: '<strong>Arquitecturas predictivas:</strong> Modelado matemático y diseño experimental reproducible.',
      rd_b3: '<strong>Traducción Estratégica:</strong> Del pipeline analítico al impacto de negocio corporativo.',
      rd_contact: '¿Tienes un proyecto en mente? Escríbeme a <a href="mailto:raimundosanchezu@gmail.com" class="text-[#00AEEF] hover:underline">raimundosanchezu@gmail.com</a> o conectemos por LinkedIn para evaluar cómo resolverlo.',
      rd_cta: 'Enviar correo',
      rd_formats_title: 'Formatos de Colaboración',
      rd_formats_body: 'Auditorías técnicas, Advisory continuo o Sprints de implementación. Ajustado a la complejidad del sistema.',
      
      // Index: Artifacts
      artifacts_title: 'Artefactos',
      artifacts_sub: 'Código, modelos y herramientas empíricas.',
      artifacts_cta: 'Explorar en GitHub',

      // Footer
      footer_more: 'Enlaces e Intereses',
      
      // Meta Tags (Index)
      meta_title: 'Raimundo Sánchez | Constructor de Sistemas',
      meta_desc: 'PhD en Sistemas Complejos. Construyo sistemas inteligentes y arquitecturas de datos orientadas a la decisión. I+D aplicado y Data Advisory.',

      // Track Ejecutivo (Subpágina)
      exec_hero_title: 'Data Advisory:<br><span class="text-[#00AEEF]">Estrategia y Arquitectura</span>',
      exec_hero_sub: 'Diseñado para líderes de negocio, gerentes y directores que necesitan separar la señal del ruido en sus iniciativas de Data & AI.',
      exec_hero_bio: 'El mercado está saturado de hype tecnológico. Mi trabajo es entregarte claridad epistemológica: evaluar la viabilidad real de tus proyectos, auditar proveedores con rigor técnico y asegurar que cada iniciativa de datos esté estrictamente atada al ROI corporativo y no al algoritmo de moda.',
      exec_p1_title: 'Diagnóstico y Topología del Problema (90 min)',
      exec_p1_desc: 'Aislamos el problema real. Evaluamos tus cuellos de botella actuales, la madurez de tu infraestructura y la validez técnica de las propuestas que tienes sobre la mesa.',
      exec_p2_title: 'Reducción y Framework de Decisión',
      exec_p2_desc: 'Eliminamos el ruido. Diseñamos una hoja de ruta lean, priorizando arquitecturas empíricamente viables y estrictamente alineadas a tus métricas de éxito corporativas.',
      exec_p3_title: 'Alineación y Seguimiento (30 min)',
      exec_p3_desc: 'Calibración de la estrategia, resolución de fricciones en la implementación y definición clara de los siguientes pasos.',
      exec_r1_title: 'Criterio Técnico',
      exec_r1_desc: 'Capacidad para evaluar, descartar o aprobar propuestas tecnológicas basándote en evidencia funcional, no en discursos de venta.',
      exec_r2_title: 'Traducción Estratégica',
      exec_r2_desc: 'Herramientas para liderar equipos técnicos exigiendo resultados medibles y conectando el código con el impacto comercial.',
      exec_r3_title: 'Sistemas Orientados al ROI',
      exec_r3_desc: 'Priorización despiadada del portafolio analítico. Asignación de capital exclusiva a arquitecturas que resuelven problemas de negocio reales.',

      // Track Técnico (Subpágina)
      tech_hero_title: 'Data Advisory:<br><span class="text-[#00AEEF]">Arquitectura y Toma de Decisión</span>',
      tech_hero_sub: 'Para profesionales y expertos de datos. Transición desde la ejecución de código hacia el diseño de arquitecturas de sistemas.',
      tech_hero_bio: 'Dominar el stack técnico no basta si el impacto de tus modelos no escala. Evaluaremos la topología de tus proyectos para estructurar flujos de trabajo sistémicos, conectar tu código directamente con el ROI corporativo y preparar tu transición al liderazgo técnico. Cero hype, pura evidencia empírica.',
      tech_p1_title: 'Diagnóstico Estructural (90 min)',
      tech_p1_desc: 'Evaluación estricta de tu stack, contexto operacional y fricciones de implementación. Aislamos el ruido que impide que tus análisis se conviertan en decisiones.',
      tech_p2_title: 'Diseño de Arquitectura Profesional',
      tech_p2_desc: 'Frameworks de decisión. Diseño de un plan empírico para estructurar tus proyectos, traducir complejidad matemática a lenguaje de negocio y escalar tu seniority.',
      tech_p3_title: 'Alineación y Seguimiento (30 min)',
      tech_p3_desc: 'Calibración de la estrategia, resolución de fricciones tácticas en el código o con stakeholders, y definición de siguientes pasos.',
      tech_r1_title: 'Diseño de Sistemas',
      tech_r1_desc: 'Capacidad para estructurar pipelines y modelos que no solo compilen, sino que resuelvan el problema corporativo de forma lean y escalable.',
      tech_r2_title: 'Reducción de Ruido',
      tech_r2_desc: 'Aprende a decodificar hallazgos matemáticos complejos y traducirlos en variables de decisión claras para directores y gerentes.',
      tech_r3_title: 'Influencia Estructural',
      tech_r3_desc: 'Posicionamiento como arquitecto de soluciones. Deja de ejecutar requerimientos y comienza a definir la topología del problema.'
    },
    en: {
      // Navbar & Common
      nav_mentoring: 'Advisory',
      nav_press: 'Press',
      nav_papers: 'Papers',
      nav_rd: 'R&D',
      nav_artifacts: 'Artifacts',
      back_home: '← Back to home',

      // Index: Hero
      hero_title: 'System Builder.',
      hero_sub: 'Transforming complexity into decision systems.',
      hero_bio: 'PhD in Complex Systems. I build intelligent systems and data architectures where mathematics collides with reality. My focus is problem topology and noise reduction. Research Fellow at The University of Queensland, former Analytics Director at LATAM Airlines, and founder of Metric Trails.',
      hero_cred: 'PhD Complex Systems. Research Fellow, UQ. Founder, Metric Trails.',
      hero_cta_mentoring: 'Data Advisory',
      hero_cta_rd: 'R&D Projects',

      // Index: Advisory
      mentoring_title: 'Data & Analytics Advisory',
      mentoring_subtitle: 'Bridging technical execution with corporate strategy.',
      tech_label: 'Technical Track',
      tech_title: 'For data professionals and experts',
      tech_body: 'Transition from code execution to system architecture design and strategic decision-making.',
      tech_link: 'Explore Advisory \u2192',
      exec_label: 'Executive Track',
      exec_title: 'For business leaders and directors',
      exec_body: 'Translating complex data science into business impact and corporate strategy. Cut the noise and design lean systems.',
      exec_link: 'Explore Advisory \u2192',

      // Index: Press
      press_title: 'Press & Media',
      press_subtitle: 'Media appearances and interviews on system architecture and data.',
      abc_desc: 'On the need for technical standards and data comparability in complex environments globally.',
      abc_cta: 'Read on ABC News',
      uai_title: 'Strategic use of data in high-performance environments',
      uai_desc: 'In-depth conversation on turning raw data into actionable decisions through empirical evidence.',
      uai_cta: 'Read article',
      om_title: 'Data Science: From noise to signal',
      om_desc: 'Interview covering my professional trajectory, noise reduction, and the practical application of data science.',
      om_cta: 'Watch on YouTube',

      // Index: Papers
      papers_title: 'Scientific Publications',
      papers_sub: 'Selected research: mathematical modeling and empirical validation.',
      papers_full: 'Google Scholar',

      // Index: R&D
      rd_title: 'R&D: Architecture & Modeling',
      rd_subtitle: 'Designing and testing mathematical models against empirical chaos.',
      rd_b1: '<strong>Empirical validation:</strong> Extracting the signal from the noise in real-world conditions.',
      rd_b2: '<strong>Predictive architectures:</strong> Mathematical modeling and reproducible experimental design.',
      rd_b3: '<strong>Strategic Translation:</strong> From analytical pipelines to corporate business impact.',
      rd_contact: 'Got a project in mind? Email me at <a href="mailto:raimundosanchezu@gmail.com" class="text-[#00AEEF] hover:underline">raimundosanchezu@gmail.com</a> or connect on LinkedIn to discuss how to solve it.',
      rd_cta: 'Send email',
      rd_formats_title: 'Collaboration Formats',
      rd_formats_body: 'Technical audits, continuous Advisory, or direct implementation Sprints. Adjusted to system complexity.',
      
      // Index: Artifacts
      artifacts_title: 'Artifacts',
      artifacts_sub: 'Code, models, and empirical tools.',
      artifacts_cta: 'Explore on GitHub',

      // Footer
      footer_more: 'Links & Interests',

      // Meta Tags (Index)
      meta_title: 'Raimundo Sánchez | System Builder',
      meta_desc: 'PhD in Complex Systems. I build intelligent systems and decision-oriented data architectures. Applied R&D and Data Advisory.',

      // Track Ejecutivo (Subpage)
      exec_hero_title: 'Data Advisory:<br><span class="text-[#00AEEF]">Strategy and Architecture</span>',
      exec_hero_sub: 'Designed for business leaders, managers, and directors who need to separate the signal from the noise in their Data & AI initiatives.',
      exec_hero_bio: 'The market is saturated with tech hype. My job is to provide epistemological clarity: evaluate the real viability of your projects, audit vendors with technical rigor, and ensure every data initiative is strictly tied to corporate ROI, not the trending algorithm.',
      exec_p1_title: 'Diagnosis and Problem Topology (90 min)',
      exec_p1_desc: 'We isolate the real problem. We evaluate your current bottlenecks, your infrastructure\'s maturity, and the technical validity of the proposals on your table.',
      exec_p2_title: 'Reduction and Decision Framework',
      exec_p2_desc: 'We eliminate the noise. We design a lean roadmap, prioritizing empirically viable architectures strictly aligned with your corporate success metrics.',
      exec_p3_title: 'Alignment and Follow-up (30 min)',
      exec_p3_desc: 'Strategy calibration, implementation friction resolution, and clear definition of next steps.',
      exec_r1_title: 'Technical Criteria',
      exec_r1_desc: 'Ability to evaluate, discard, or approve tech proposals based on functional evidence, not sales pitches.',
      exec_r2_title: 'Strategic Translation',
      exec_r2_desc: 'Tools to lead technical teams by demanding measurable results and connecting code with commercial impact.',
      exec_r3_title: 'ROI-Oriented Systems',
      exec_r3_desc: 'Ruthless prioritization of the analytical portfolio. Capital allocation exclusive to architectures that solve real business problems.',

      // Track Técnico (Subpage)
      tech_hero_title: 'Data Advisory:<br><span class="text-[#00AEEF]">Architecture and Decision Making</span>',
      tech_hero_sub: 'For data professionals and experts. Transition from code execution to system architecture design.',
      tech_hero_bio: 'Mastering the technical stack is not enough if the impact of your models doesn\'t scale. We will evaluate the topology of your projects to structure systemic workflows, connect your code directly to corporate ROI, and prepare your transition to technical leadership. Zero hype, pure empirical evidence.',
      tech_p1_title: 'Structural Diagnosis (90 min)',
      tech_p1_desc: 'Strict evaluation of your stack, operational context, and implementation frictions. We isolate the noise preventing your analysis from becoming decisions.',
      tech_p2_title: 'Professional Architecture Design',
      tech_p2_desc: 'Decision frameworks. Design an empirical plan to structure your projects, translate mathematical complexity into business language, and scale your seniority.',
      tech_p3_title: 'Alignment and Follow-up (30 min)',
      tech_p3_desc: 'Strategy calibration, resolution of tactical frictions in code or with stakeholders, and definition of next steps.',
      tech_r1_title: 'System Design',
      tech_r1_desc: 'Ability to structure pipelines and models that don\'t just compile, but solve the corporate problem in a lean and scalable way.',
      tech_r2_title: 'Noise Reduction',
      tech_r2_desc: 'Learn to decode complex mathematical findings and translate them into clear decision variables for directors and managers.',
      tech_r3_title: 'Structural Influence',
      tech_r3_desc: 'Positioning as a solution architect. Stop executing requirements and start defining the topology of the problem.'
    }
  };

  function setMeta(name, content){
    if(!content) return;
    const el = document.querySelector(`meta[name='${name}']`);
    if(el) el.setAttribute('content', content);
  }
  
  function setOg(prop, content){
    if(!content) return;
    const el = document.querySelector(`meta[property='${prop}']`);
    if(el) el.setAttribute('content', content);
  }

  function applyLang(lang){
    const dict = i18n[lang] || i18n.es;
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'es');

    // Nodos de texto
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if(dict[key] != null){
        el.innerHTML = dict[key]; 
      }
    });

    // Metadatos (se aplican principalmente al index, pero no rompen subpáginas si no existen)
    if (dict.meta_title) {
        document.title = dict.meta_title;
        setMeta('description', dict.meta_desc);
        setOg('og:title', dict.meta_title);
        setOg('og:description', dict.meta_desc);
        const twTitle = document.querySelector("meta[name='twitter:title']");
        if(twTitle) twTitle.setAttribute('content', dict.meta_title);
        const twDesc = document.querySelector("meta[name='twitter:description']");
        if(twDesc) twDesc.setAttribute('content', dict.meta_desc);
    }

    // Estado visual de botones
    const esBtn = document.getElementById('btn-es');
    const enBtn = document.getElementById('btn-en');
    if(esBtn && enBtn){
      esBtn.setAttribute('aria-pressed', lang === 'es' ? 'true' : 'false');
      enBtn.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
    }

    // Persistencia
    try{ localStorage.setItem('lang', lang); }catch(e){}
  }

  function init(){
    const saved = (function(){
      try{ return localStorage.getItem('lang'); }catch(e){ return null; }
    })();
    const lang = (saved === 'en' || saved === 'es') ? saved : 'es';

    const esBtn = document.getElementById('btn-es');
    const enBtn = document.getElementById('btn-en');
    if(esBtn) esBtn.addEventListener('click', ()=>applyLang('es'));
    if(enBtn) enBtn.addEventListener('click', ()=>applyLang('en'));

    applyLang(lang);

    const yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  document.addEventListener('DOMContentLoaded', init);
})();