(function(){
  const i18n = {
    es: {
      nav_mentoring: 'Mentoría',
      nav_press: 'Prensa',
      nav_papers: 'Papers',
      nav_rd: 'I+D',
      nav_artifacts: 'Artifacts', // Actualizado desde Lab

      hero_title: 'Ingeniero de Sistemas Complejos.',
      hero_sub: 'I+D para entender el movimiento humano en entornos reales.', // Corregido el "para la entender"
      hero_bio: 'Soy Raimundo Sánchez, PhD en Ingeniería de Sistemas Complejos e investigador en la Universidad de Queensland. Desarrollo soluciones de I+D para wearables y análisis biomecánico, especializándome en transformar señales ruidosas capturadas en terreno en evidencia validada. Mi trabajo conecta el procesamiento avanzado de datos con el rendimiento físico real. Previamente, lideré el área de Revenue Analytics en LATAM Airlines y fundé la startup Metric Trails.',
      hero_cred: 'R&D Scientist, The University of Queensland (Brisbane, Australia). Fundador de Metric Trails.',
      hero_cta_mentoring: 'Mentoría 1:1',
      hero_cta_rd: 'Hablemos de I+D',

      mentoring_title: 'Mentoría en Data & Analytics',
      mentoring_subtitle: 'Elige el track que mejor calza con tu perfil actual y agenda un plan enfocado en resultados concretos.',

      tech_label: 'Track Técnico',
      tech_title: 'Para profesionales de Data que buscan dar el siguiente gran salto',
      tech_body: 'Si ya dominas las herramientas técnicas pero buscas aumentar tu impacto en el negocio, este track te ayuda a definir tu próximo movimiento estratégico: consolidar tu seniority, transitar hacia nuevas disciplinas (ej. BI a Data Science) o prepararte para el liderazgo técnico.',
      tech_link: 'Ver programa completo \u2192',

      exec_label: 'Track Ejecutivo',
      exec_title: 'Para líderes de negocio que necesitan decisiones sólidas en Data & AI',
      exec_body: 'Aclara el hype tecnológico. Este espacio está diseñado para ayudarte a liderar equipos técnicos con seguridad, evaluar proveedores sin caer en trampas de mercado y conducir iniciativas de datos guiadas exclusivamente por el retorno de inversión (ROI).',
      exec_link: 'Ver programa completo \u2192',

      press_title: 'Prensa & Difusión',
      press_subtitle: 'Apariciones destacadas en medios y entrevistas sobre mi trabajo.',

      abc_desc: 'Sobre los desafíos y la necesidad de estándares técnicos para medir el trail running: distancia, desnivel y comparabilidad entre rutas a nivel global.',
      abc_cta: 'Leer en ABC News',

      uai_title: 'Football Analytics y el uso estratégico de la data en los deportes',
      uai_desc: 'Una conversación a fondo sobre cómo convertir datos crudos en decisiones deportivas accionables para mejorar el rendimiento con evidencia.',
      uai_cta: 'Leer el artículo',

      om_title: 'Data Science en acción: El científico detrás del trail running',
      om_desc: 'Entrevista repasando mi trayectoria profesional, la aplicación práctica de la ciencia de datos y mi investigación en el mundo del trail running.',
      om_cta: 'Ver en YouTube',

      papers_title: 'Publicaciones Científicas',
      papers_sub: 'Selección de mis investigaciones en wearables, medición en terreno y analítica deportiva aplicada.',
      papers_full: 'Ver lista completa en Google Scholar',

      p1_why: 'Valida estimaciones de desnivel acumulado usando distintos wearables y pipelines de post-proceso en terreno montañoso.',
      p2_why: 'Detecta y modela transiciones de marcha/carrera en subida usando wearables, con foco en dinámica real de trail.',
      p3_why: 'Cuantifica cómo la resolución del DEM cambia el desnivel estimado en trail running y define implicancias prácticas.',
      p4_why: 'Muestra cómo la complejidad fractal distorsiona distancia y desnivel, y argumenta por estándares de medición comparables.',
      p5_why: 'Propone un framework geoespacial multimodal para mapear terreno montañoso con precisión útil para investigación de locomoción.',
      p6_why: 'Relaciona carga de entrenamiento, HRV, fatiga, sueño y lesión en atletas durante un mesociclo, con datos longitudinales.',

      rd_title: 'Consultoría I+D: Wearables y Analítica del Movimiento',
      rd_subtitle: 'Colaboro con equipos de investigación y desarrollo de producto para transformar datos fisiológicos y cinemáticos crudos en evidencia defendible y decisiones claras.',
      rd_b1: 'Validación y benchmarking: Testeo de sensores y algoritmos en condiciones reales (fuera de entornos controlados de laboratorio).',
      rd_b2: 'Diseño experimental: Creación de métricas, estudios y protocolos reproducibles.',
      rd_b3: 'Arquitectura de datos: Modelado longitudinal, fusión de sensores y construcción de pipelines de procesamiento de señales.',
      rd_formats_title: 'Formatos de Colaboración',
      rd_formats_body: 'Ofrezco flexibilidad según el estado de tu proyecto: auditorías técnicas (Audits), asesoría continua (Advisory), o desarrollo directo mediante Sprints de implementación.',
      rd_formats_note: 'El alcance, los entregables y los tiempos se ajustan a la complejidad del problema a resolver.',
      rd_cta: 'Enviar correo',
      rd_contact: '¿Tienes un proyecto en mente? Escríbeme a raimundosanchezu@gmail.com o conectemos por LinkedIn para evaluar cómo puedo aportar a tu equipo.',

      artifacts_title: 'Artifacts', // Actualizado desde Lab
      artifacts_sub: 'Repositorios de código, procesamiento de datos, herramientas y documentación de prototipos técnicos (software y hardware).',
      artifacts_cta: 'Explorar en GitHub',

      footer_more: 'Más enlaces profesionales e intereses',
      footer_elsewhere: 'En otros lugares',

      meta_title: 'Raimundo Sánchez | I+D en Wearables y Analítica del Movimiento',
      meta_desc: 'Doctor en Ingeniería de Sistemas Complejos. Investigación aplicada en wearables y analítica del movimiento humano en el mundo real. Mentoría 1:1 en Data y Analytics.'
    },
    en: {
      nav_mentoring: 'Mentoring',
      nav_press: 'Press',
      nav_papers: 'Papers',
      nav_rd: 'R&D',
      nav_artifacts: 'Artifacts', // Actualizado

      hero_title: 'Complex Systems Engineer.',
      hero_sub: 'R&D for human locomotion in the wild.',
      hero_bio: 'I am Raimundo Sanchez, a PhD in Complex Systems Engineering and Research Fellow at The University of Queensland. I develop R&D solutions for wearables and movement analytics, specialising in turning noisy, field-based signals into validated evidence. My work bridges the gap between advanced data processing and real-world physical performance. Previously, I led Revenue Analytics at LATAM Airlines and founded the startup Metric Trails.',
      hero_cred: 'R&D Scientist, The University of Queensland (Brisbane, Australia). Founder of Metric Trails.',
      hero_cta_mentoring: '1:1 Mentoring',
      hero_cta_rd: 'R&D consulting',

      mentoring_title: 'Data & Analytics Mentoring',
      mentoring_subtitle: 'Choose the track that fits your current profile and book a session focused on concrete, strategic outcomes.',

      tech_label: 'Technical track',
      tech_title: 'For data professionals looking to make the next big leap',
      tech_body: 'If you already master the technical tools but want to increase your business impact, this track helps you define your next strategic move: consolidating seniority, pivoting to new disciplines (e.g., BI to Data Science), or preparing for technical leadership.',
      tech_link: 'See full program \u2192',

      exec_label: 'Executive track',
      exec_title: 'For business leaders who need solid decisions in Data & AI',
      exec_body: 'Cut through the technological hype. This space is designed to help you confidently lead technical teams, evaluate vendors without falling into market traps, and drive data initiatives guided exclusively by Return on Investment (ROI).',
      exec_link: 'See full program \u2192',

      press_title: 'Press & Media',
      press_subtitle: 'Selected media appearances and interviews about my work.',

      abc_desc: 'On the challenges and the need for technical standards to measure trail running: distance, elevation gain, and comparability across global courses.',
      abc_cta: 'Read on ABC News',

      uai_title: 'Football Analytics and the strategic use of data in sports',
      uai_desc: 'An in-depth conversation on turning raw data into actionable sports decisions to improve performance with solid evidence.',
      uai_cta: 'Read article',

      om_title: 'Data Science in action: The scientist behind trail running',
      om_desc: 'Interview reviewing my career path, applied data science, and my research in the world of trail running.',
      om_cta: 'Watch on YouTube',

      papers_title: 'Scientific Publications',
      papers_sub: 'A selection of my research in wearables, field measurement, and applied sports analytics.',
      papers_full: 'See full list on Google Scholar',

      p1_why: 'Validates elevation gain estimates across common wearables and processing pipelines in mountainous terrain.',
      p2_why: 'Detects and models walk-run transitions during uphill trail running using wearables, focused on real-world dynamics.',
      p3_why: 'Quantifies how DEM resolution shifts elevation gain estimates in trail running and what that means in practice.',
      p4_why: 'Shows how fractal complexity distorts distance and elevation gain, motivating comparable measurement standards.',
      p5_why: 'Proposes a multimodal geospatial framework to map mountain terrain with precision useful for locomotion research.',
      p6_why: 'Links training load, HRV, fatigue, sleep, and injury across a training mesocycle using longitudinal athlete data.',

      rd_title: 'R&D Consulting: Wearables and Movement Analytics',
      rd_subtitle: 'I collaborate with research and product development teams to transform raw physiological and kinematic data into defensible evidence and clear decisions.',
      rd_b1: 'Validation and benchmarking: Testing sensors and algorithms in real-world conditions (outside controlled lab environments).',
      rd_b2: 'Experimental design: Creation of reproducible metrics, studies, and protocols.',
      rd_b3: 'Data architecture: Longitudinal modeling, sensor fusion, and construction of signal processing pipelines.',
      rd_formats_title: 'Collaboration Formats',
      rd_formats_body: 'I offer flexibility depending on your project\'s status: technical audits, continuous advisory, or direct development through implementation sprints.',
      rd_formats_note: 'Scope, deliverables, and timelines adapt to the complexity of the problem to be solved.',
      rd_cta: 'Send email',
      rd_contact: 'Have a project in mind? Email me at raimundosanchezu@gmail.com or connect on LinkedIn to evaluate how I can contribute to your team.',

      artifacts_title: 'Artifacts', // Actualizado
      artifacts_sub: 'Code repositories, data processing pipelines, tools, and technical prototype documentation (software and hardware).',
      artifacts_cta: 'Explore on GitHub',

      footer_more: 'More professional links and interests',
      footer_elsewhere: 'Elsewhere',

      meta_title: 'Raimundo Sánchez | Wearables R&D and Movement Analytics',
      meta_desc: 'PhD in Complex Systems Engineering. Applied research in wearables and human movement analytics in real-world settings. 1:1 mentoring in Data and Analytics.'
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

    // text nodes
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(dict[key] != null){
        // Usar innerHTML en lugar de textContent si hay etiquetas HTML en el texto
        el.innerHTML = dict[key]; 
      }
    });

    // meta
    document.title = dict.meta_title;
    setMeta('description', dict.meta_desc);
    setOg('og:title', dict.meta_title);
    setOg('og:description', dict.meta_desc);
    const twTitle = document.querySelector("meta[name='twitter:title']");
    if(twTitle) twTitle.setAttribute('content', dict.meta_title);
    const twDesc = document.querySelector("meta[name='twitter:description']");
    if(twDesc) twDesc.setAttribute('content', dict.meta_desc);

    // buttons
    const esBtn = document.getElementById('btn-es');
    const enBtn = document.getElementById('btn-en');
    if(esBtn && enBtn){
      esBtn.setAttribute('aria-pressed', lang === 'es' ? 'true' : 'false');
      enBtn.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
    }

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