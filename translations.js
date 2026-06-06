const translations = {
  es: {
    auth: {
      login: "Iniciar Sesión",
      register: "Registrarse",
      email: "Correo electrónico",
      emailPlaceholder: "correo@ejemplo.com",
      password: "Contraseña",
      forgot: "¿Olvidaste tu contraseña?",
      forgotDesc: "Ingresá tu correo y te enviaremos un enlace para restablecer tu contraseña.",
      back: "Volver",
      sendEmail: "Enviar correo",
      fullName: "Nombre completo",
      farmName: "Nombre de finca / empresa",
      createAccount: "Crear cuenta",
      enter: "Entrar"
    },
    header: {
      logout: "Salir"
    },
    tabs: {
      calc: "🧮 Calculadora",
      bitacora: "📋 Bitácora",
      zootecnico: "🔬 Zootécnico",
      params: "⚙️ Parámetros",
      especies: "🐠 Mis Especies",
      formulas: "📐 Fórmulas"
    },
    calc: {
      title: "Calculadora",
      sub: "Seleccione especie e ingrese datos del estanque",
      speciesCard: "🐠 Especie",
      pondCard: "🏊 Datos del Estanque",
      volArea: "Volumen / Área",
      density: "Densidad de siembra",
      initialWeight: "Peso inicial (g)",
      harvestWeight: "Peso de cosecha (g)",
      paramsCard: "📊 Parámetros",
      survival: "Supervivencia (%)",
      resultsCard: "📈 Resultados",
      totalAnimals: "Total animales",
      initialBiomass: "Biomasa inicial (kg)",
      harvestBiomass: "Biomasa cosecha (kg)",
      harvestAnimals: "Animales cosecha",
      totalFeed: "Alimento total (kg)",
      feedCost: "Costo alimento",
      grossIncome: "Ingreso bruto",
      profit: "Utilidad",
      rationCard: "🍽️ Ración Diaria",
      currentBiomass: "Biomasa actual (kg)",
      rationDay: "Ración/día (kg)",
      rationMeal: "Por comida (kg)",
      feedRate: "Tasa alimentación (%)"
    }
  },
  en: {
    auth: {
      login: "Sign In",
      register: "Sign Up",
      email: "Email",
      emailPlaceholder: "email@example.com",
      password: "Password",
      forgot: "Forgot your password?",
      forgotDesc: "Enter your email and we'll send you a link to reset your password.",
      back: "Back",
      sendEmail: "Send Email",
      fullName: "Full Name",
      farmName: "Farm / Company Name",
      createAccount: "Create Account",
      enter: "Enter"
    },
    header: {
      logout: "Logout"
    },
    tabs: {
      calc: "🧮 Calculator",
      bitacora: "📋 Log Book",
      zootecnico: "🔬 Zootechnical",
      params: "⚙️ Parameters",
      especies: "🐠 My Species",
      formulas: "📐 Formulas"
    },
    calc: {
      title: "Calculator",
      sub: "Select species and enter pond data",
      speciesCard: "🐠 Species",
      pondCard: "🏊 Pond Data",
      volArea: "Volume / Area",
      density: "Stocking density",
      initialWeight: "Initial weight (g)",
      harvestWeight: "Harvest weight (g)",
      paramsCard: "📊 Parameters",
      survival: "Survival (%)",
      resultsCard: "📈 Results",
      totalAnimals: "Total animals",
      initialBiomass: "Initial biomass (kg)",
      harvestBiomass: "Harvest biomass (kg)",
      harvestAnimals: "Harvest animals",
      totalFeed: "Total feed (kg)",
      feedCost: "Feed cost",
      grossIncome: "Gross income",
      profit: "Profit",
      rationCard: "🍽️ Daily Ration",
      currentBiomass: "Current biomass (kg)",
      rationDay: "Ration/day (kg)",
      rationMeal: "Per meal (kg)",
      feedRate: "Feeding rate (%)"
    }
  },
  pt: {
    auth: {
      login: "Entrar",
      register: "Registrar",
      email: "Email",
      emailPlaceholder: "email@exemplo.com",
      password: "Senha",
      forgot: "Esqueceu sua senha?",
      forgotDesc: "Digite seu email e enviaremos um link para redefinir sua senha.",
      back: "Voltar",
      sendEmail: "Enviar Email",
      fullName: "Nome completo",
      farmName: "Nome da Fazenda / Empresa",
      createAccount: "Criar Conta",
      enter: "Entrar"
    },
    header: {
      logout: "Sair"
    },
    tabs: {
      calc: "🧮 Calculadora",
      bitacora: "📋 Diário",
      zootecnico: "🔬 Zootecnia",
      params: "⚙️ Parâmetros",
      especies: "🐠 Minhas Espécies",
      formulas: "📐 Fórmulas"
    },
    calc: {
      title: "Calculadora",
      sub: "Selecione espécie e insira dados do tanque",
      speciesCard: "🐠 Espécie",
      pondCard: "🏊 Dados do Tanque",
      volArea: "Volume / Área",
      density: "Densidade de estoque",
      initialWeight: "Peso inicial (g)",
      harvestWeight: "Peso de colheita (g)",
      paramsCard: "📊 Parâmetros",
      survival: "Sobrevivência (%)",
      resultsCard: "📈 Resultados",
      totalAnimals: "Total de animais",
      initialBiomass: "Biomassa inicial (kg)",
      harvestBiomass: "Biomassa de colheita (kg)",
      harvestAnimals: "Animais de colheita",
      totalFeed: "Alimento total (kg)",
      feedCost: "Custo de alimento",
      grossIncome: "Receita bruta",
      profit: "Lucro",
      rationCard: "🍽️ Ração Diária",
      currentBiomass: "Biomassa atual (kg)",
      rationDay: "Ração/dia (kg)",
      rationMeal: "Por refeição (kg)",
      feedRate: "Taxa de alimentação (%)"
    }
  }
};

function getTranslation(key, lang = 'es') {
  const keys = key.split('.');
  let value = translations[lang];
  for (let k of keys) {
    value = value?.[k];
  }
  return value || key;
}

function updatePageTranslations(lang = 'es') {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = getTranslation(key, lang);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = getTranslation(key, lang);
  });
}
