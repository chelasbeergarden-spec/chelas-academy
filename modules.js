/* Chela's Academy — Contenido de entrenamiento (44 módulos)
   Para añadir un módulo: copia un bloque { ... }, pégalo antes del `];` final y edita el texto.
   Campos: id, track (CORE|SERVER|BARTENDER|BUSSER|HOST|MANAGER), title, lessons, quiz, pass, critical (opcional), flashcards (opcional)
   Todos los textos usan { en, es }. */

const MODULES = [

  // ===================== CORE (5) =====================
  {
    id: "C1",
    track: "CORE",
    category: "Servicio",
    title: { en: "Welcome & Chela's Culture", es: "Bienvenida y Cultura Chela's" },
    lessons: [
      { en: "Welcome to Chela's Coctelería (Miami)! This app is how you'll train — at your own pace, on your phone.", es: "¡Bienvenido/a a Chela's Coctelería (Miami)! Esta app es tu entrenamiento — a tu propio ritmo, desde el teléfono." },
      { en: "Our culture: warm hospitality, teamwork, punctuality, and pride in the details. Uniform must be clean and complete every shift.", es: "Nuestra cultura: hospitalidad cálida, trabajo en equipo, puntualidad y orgullo en los detalles. El uniforme debe estar limpio y completo cada turno." },
      { en: "You must pass each module (with a score at or above the required %) before the next one unlocks. Some modules (allergens, alcohol service) require 100%.", es: "Debes aprobar cada módulo (con un puntaje igual o mayor al % requerido) antes de que se desbloquee el siguiente. Algunos módulos (alérgenos, servicio de alcohol) requieren 100%." }
    ],
    quiz: [
      { q: { en: "What score is required to unlock the next module in most cases?", es: "¿Qué puntaje se requiere para desbloquear el siguiente módulo en la mayoría de los casos?" },
        options: [{ en: "50%", es: "50%" }, { en: "80% or the module's pass score", es: "80% o el puntaje de aprobación del módulo" }, { en: "It doesn't matter", es: "No importa" }, { en: "0%", es: "0%" }],
        correct: 1 },
      { q: { en: "Which modules require a perfect 100% score?", es: "¿Qué módulos requieren un puntaje perfecto de 100%?" },
        options: [{ en: "Allergens and Responsible Alcohol Service", es: "Alérgenos y Servicio Responsable de Alcohol" }, { en: "Closing duties", es: "Tareas de cierre" }, { en: "None", es: "Ninguno" }, { en: "Uniform module", es: "Módulo de uniforme" }],
        correct: 0 },
      { q: { en: "Do CORE modules need to be completed before your role track?", es: "¿Los módulos CORE deben completarse antes de tu track de rol?" },
        options: [{ en: "No, any order", es: "No, en cualquier orden" }, { en: "Yes, CORE first", es: "Sí, primero CORE" }, { en: "Only for managers", es: "Solo para gerentes" }, { en: "Only on weekends", es: "Solo los fines de semana" }],
        correct: 1 }
    ],
    pass: 80
  },
  {
    id: "C2",
    track: "CORE",
    category: "Alergias",
    title: { en: "Allergens", es: "Alérgenos" },
    lessons: [
      { en: "We have TWO fryers. French fries/chips are fried in the NON-seafood fryer, so they are safe from shellfish/fish cross-contact.", es: "Tenemos DOS freidoras. Las papas fritas se cocinan en la freidora SIN mariscos, así que están libres de contacto cruzado con mariscos/pescado." },
      { en: "However, that same fryer is shared with gluten items — so the chips/fries are NOT gluten-free. Always say this clearly to gluten-free guests.", es: "Sin embargo, esa misma freidora se comparte con productos con gluten — por lo tanto las papas NO son libres de gluten. Siempre acláralo a los huéspedes libres de gluten." },
      { en: "Every allergy order must be marked in the POS using the single standard format: ALLERGY – [Allergen] – Table #.", es: "Todo pedido con alergia debe marcarse en el POS con el formato estándar: ALLERGY – [Alérgeno] – Mesa #." },
      { en: "If you are ever unsure about an ingredient, STOP and ask a manager or the kitchen before serving. Never guess with allergies.", es: "Si alguna vez tienes duda sobre un ingrediente, DETENTE y pregunta a un gerente o a la cocina antes de servir. Nunca adivines con alergias." }
    ],
    quiz: [
      { q: { en: "Are the fries/chips gluten-free?", es: "¿Las papas fritas son libres de gluten?" },
        options: [{ en: "Yes, always", es: "Sí, siempre" }, { en: "No — the fryer is shared with gluten items", es: "No — la freidora se comparte con productos con gluten" }, { en: "Only on request", es: "Solo si se pide" }, { en: "Only at lunch", es: "Solo en almuerzo" }],
        correct: 1 },
      { q: { en: "Are the fries safe for a shellfish allergy?", es: "¿Las papas fritas son seguras para una alergia a mariscos?" },
        options: [{ en: "No", es: "No" }, { en: "Yes — fried in the non-seafood fryer", es: "Sí — se fríen en la freidora sin mariscos" }, { en: "Only sometimes", es: "Solo a veces" }, { en: "Unknown", es: "Desconocido" }],
        correct: 1 },
      { q: { en: "What is the correct POS label for an allergy order?", es: "¿Cuál es la etiqueta correcta en el POS para un pedido con alergia?" },
        options: [{ en: "Just a note in the kitchen", es: "Solo una nota en la cocina" }, { en: "ALLERGY – [Allergen] – Table #", es: "ALLERGY – [Alérgeno] – Mesa #" }, { en: "No label needed", es: "No se necesita etiqueta" }, { en: "Verbal only", es: "Solo verbal" }],
        correct: 1 },
      { q: { en: "What should you do if you're unsure about an ingredient and a guest has an allergy?", es: "¿Qué debes hacer si tienes duda sobre un ingrediente y el huésped tiene alergia?" },
        options: [{ en: "Guess based on experience", es: "Adivinar según tu experiencia" }, { en: "Serve it anyway", es: "Servirlo de todos modos" }, { en: "Stop and ask a manager or the kitchen", es: "Detenerte y preguntar a un gerente o a la cocina" }, { en: "Ignore the allergy", es: "Ignorar la alergia" }],
        correct: 2 }
    ],
    pass: 100,
    critical: true
  },
  {
    id: "C3",
    track: "CORE",
    category: "Alergias",
    title: { en: "Hygiene & Safety", es: "Higiene y Seguridad" },
    lessons: [
      { en: "Wash hands frequently: before shift, after breaks, after touching your face/phone, after trash, and between tasks.", es: "Lávate las manos con frecuencia: antes del turno, después de descansos, después de tocarte la cara/teléfono, después de la basura y entre tareas." },
      { en: "Report any injury, spill, or unsafe condition to a manager immediately. Use wet-floor signs for spills.", es: "Reporta cualquier lesión, derrame o condición insegura a un gerente de inmediato. Usa señales de piso mojado para derrames." },
      { en: "Never handle glass with bare hands if broken — use a broom/dustpan, never your hands.", es: "Nunca manejes vidrio roto con las manos — usa escoba/recogedor, nunca las manos." }
    ],
    quiz: [
      { q: { en: "When should you wash your hands?", es: "¿Cuándo debes lavarte las manos?" },
        options: [{ en: "Only at the start of shift", es: "Solo al inicio del turno" }, { en: "Frequently — breaks, trash, face/phone contact, between tasks", es: "Con frecuencia — descansos, basura, contacto con cara/teléfono, entre tareas" }, { en: "Never", es: "Nunca" }, { en: "Only after eating", es: "Solo después de comer" }],
        correct: 1 },
      { q: { en: "What should you do with a spill?", es: "¿Qué debes hacer con un derrame?" },
        options: [{ en: "Ignore it", es: "Ignorarlo" }, { en: "Put up a wet-floor sign and clean it up", es: "Poner señal de piso mojado y limpiarlo" }, { en: "Wait for someone else", es: "Esperar a que alguien más lo haga" }, { en: "Cover it with a napkin", es: "Cubrirlo con una servilleta" }],
        correct: 1 },
      { q: { en: "How should broken glass be handled?", es: "¿Cómo se debe manejar el vidrio roto?" },
        options: [{ en: "With bare hands", es: "Con las manos" }, { en: "With a broom and dustpan", es: "Con escoba y recogedor" }, { en: "Leave it", es: "Dejarlo" }, { en: "Kick it aside", es: "Patearlo a un lado" }],
        correct: 1 }
    ],
    pass: 80
  },
  {
    id: "C4",
    track: "CORE",
    category: "Servicio",
    title: { en: "Customer Service Standards", es: "Estándares de Servicio al Cliente" },
    lessons: [
      { en: "Greet every guest within 60 seconds of being seated, with a warm, genuine welcome.", es: "Saluda a cada huésped dentro de los primeros 60 segundos de sentarse, con una bienvenida cálida y genuina." },
      { en: "Hospitality is a team sport — if you see a table that needs something, help even if it's not 'yours'.", es: "La hospitalidad es un deporte de equipo — si ves una mesa que necesita algo, ayuda aunque no sea 'tuya'." },
      { en: "Always thank guests by name when possible and invite them back.", es: "Siempre agradece a los huéspedes por su nombre cuando sea posible e invítalos a regresar." }
    ],
    quiz: [
      { q: { en: "How soon should you greet a newly seated guest?", es: "¿Qué tan pronto debes saludar a un huésped recién sentado?" },
        options: [{ en: "Within 60 seconds", es: "Dentro de 60 segundos" }, { en: "Whenever convenient", es: "Cuando sea conveniente" }, { en: "After 10 minutes", es: "Después de 10 minutos" }, { en: "Only if they wave", es: "Solo si hacen una seña" }],
        correct: 0 },
      { q: { en: "If you see another team's table needs help, what should you do?", es: "Si ves que la mesa de otro compañero necesita ayuda, ¿qué debes hacer?" },
        options: [{ en: "Ignore it, not your table", es: "Ignorarla, no es tu mesa" }, { en: "Help — hospitality is a team effort", es: "Ayudar — la hospitalidad es esfuerzo de equipo" }, { en: "Tell them to wait", es: "Decirles que esperen" }, { en: "Complain to a manager", es: "Quejarte con un gerente" }],
        correct: 1 },
      { q: { en: "What's a good habit when guests are leaving?", es: "¿Cuál es un buen hábito cuando los huéspedes se van?" },
        options: [{ en: "Say nothing", es: "No decir nada" }, { en: "Thank them and invite them back", es: "Agradecerles e invitarlos a regresar" }, { en: "Rush them out", es: "Apresurarlos a salir" }, { en: "Hand them the check silently", es: "Entregar la cuenta en silencio" }],
        correct: 1 }
    ],
    pass: 80
  },
  {
    id: "C5",
    track: "CORE",
    category: "Servicio",
    title: { en: "POS Basics (Toast)", es: "Fundamentos del POS (Toast)" },
    lessons: [
      { en: "Log in with your personal PIN — never share it. Every action in Toast is tracked to you.", es: "Inicia sesión con tu PIN personal — nunca lo compartas. Toda acción en Toast queda registrada a tu nombre." },
      { en: "Open a table before entering any order. Enter items accurately and promptly.", es: "Abre la mesa antes de ingresar cualquier pedido. Ingresa los artículos con precisión y rapidez." },
      { en: "Every drink — alcoholic or not — must be rung into Toast. This is required for our alcohol policy too.", es: "Toda bebida — con o sin alcohol — debe registrarse en Toast. Esto también es requerido por nuestra política de alcohol." }
    ],
    quiz: [
      { q: { en: "Can you share your Toast PIN with a coworker?", es: "¿Puedes compartir tu PIN de Toast con un compañero?" },
        options: [{ en: "Yes, it's fine", es: "Sí, está bien" }, { en: "No, never", es: "No, nunca" }, { en: "Only with managers", es: "Solo con gerentes" }, { en: "Only on busy nights", es: "Solo en noches ocupadas" }],
        correct: 1 },
      { q: { en: "What must happen before entering an order?", es: "¿Qué debe pasar antes de ingresar un pedido?" },
        options: [{ en: "Nothing, just enter it", es: "Nada, solo ingresarlo" }, { en: "Open the table", es: "Abrir la mesa" }, { en: "Ask the kitchen first", es: "Preguntar primero a la cocina" }, { en: "Close the check", es: "Cerrar la cuenta" }],
        correct: 1 },
      { q: { en: "Must every drink be rung into Toast?", es: "¿Toda bebida debe registrarse en Toast?" },
        options: [{ en: "Only alcoholic ones", es: "Solo las alcohólicas" }, { en: "Yes, every drink", es: "Sí, toda bebida" }, { en: "Only if asked", es: "Solo si se pide" }, { en: "No", es: "No" }],
        correct: 1 }
    ],
    pass: 80
  },

  // ===================== SERVER (9) =====================
  {
    id: "S1",
    track: "SERVER",
    category: "Servicio",
    title: { en: "About Chela's & Floor Plan", es: "Sobre Chela's y Plano del Piso" },
    lessons: [
      { en: "Chela's Coctelería is more than a Miami restaurant: it's a one-of-a-kind experience blending entertainment, craft cocktails, and a chef-driven menu that fuses Latin American flavors with American staples. Our mission is to deliver exceptional hospitality and memorable moments every shift.", es: "Chela's Coctelería es más que un restaurante en Miami: es una experiencia única que combina entretenimiento, cócteles artesanales, y un menú creado por el chef que fusiona sabores latinoamericanos con clásicos americanos. Nuestra misión es ofrecer hospitalidad excepcional y momentos memorables en cada turno." },
      { en: "Hours: Mon–Tue 12pm–11pm · Wed–Thu 12pm–12am · Fri–Sat 12pm–2am · Sun 12pm–10pm (Brunch 12pm–4pm). Happy Hour runs Monday–Saturday, 4pm–7pm.", es: "Horario: Lun–Mar 12pm–11pm · Mié–Jue 12pm–12am · Vie–Sáb 12pm–2am · Dom 12pm–10pm (Brunch 12pm–4pm). Happy Hour de lunes a sábado, 4pm–7pm." },
      { en: "Sections (left to right): Florida Room 101–109 · Bar 21–24, 31–34, 35 · Centro 41–48 (48 is the round 8-top, near the HOST stand) · Jungle 51–53, 61–63, 71–73, 81–85 · Exterior 401–410 and 501–510.", es: "Secciones (de izquierda a derecha): Florida Room 101–109 · Bar 21–24, 31–34, 35 · Centro 41–48 (48 es la mesa redonda de 8, cerca del podio de HOST) · Jungle 51–53, 61–63, 71–73, 81–85 · Exterior 401–410 y 501–510." },
      { en: "Weekly promos: Uno Mondays ($1 tacos, $6 margaritas all day) · Taco Tuesday (tacos under $3 + margarita specials) · Way Back Wednesday (Live DJ 7pm, 70s/80s/90s) · Jueves de Despecho (Ladies Night, half-off menu from 8pm) · Salsa Fridays (free dance classes + Live DJ 9pm, open till 2am) · Saturday Live DJ 9pm, open till 2am · Sunday Brunch (bottomless mimosas, 99¢ oysters, 12pm–4pm).", es: "Promociones semanales: Uno Mondays ($1 tacos, $6 margaritas todo el día) · Taco Tuesday (tacos desde menos de $3 + especiales de margarita) · Way Back Wednesday (DJ en vivo 7pm, música de los 70s/80s/90s) · Jueves de Despecho (Ladies Night, menú a mitad de precio desde las 8pm) · Salsa Fridays (clases gratis de baile + DJ en vivo 9pm, abierto hasta las 2am) · Sábado DJ en vivo 9pm, hasta las 2am · Brunch dominical (mimosas ilimitadas, ostras a 99¢, 12pm–4pm)." }
    ],
    quiz: [
      { q: { en: "What is Chela's mission?", es: "¿Cuál es la misión de Chela's?" }, options: [{ en: "Deliver exceptional hospitality and memorable moments every shift", es: "Ofrecer hospitalidad excepcional y momentos memorables en cada turno" }, { en: "Serve the fastest food in Miami", es: "Servir la comida más rápida de Miami" }, { en: "Only sell drinks", es: "Solo vender bebidas" }, { en: "Compete on price alone", es: "Competir solo en precio" }], correct: 0 },
      { q: { en: "What are the Friday–Saturday hours?", es: "¿Cuál es el horario de viernes a sábado?" }, options: [{ en: "12pm–11pm", es: "12pm–11pm" }, { en: "12pm–2am", es: "12pm–2am" }, { en: "12pm–10pm", es: "12pm–10pm" }, { en: "24 hours", es: "24 horas" }], correct: 1 },
      { q: { en: "Which table is the round 8-top near the host stand?", es: "¿Cuál mesa es la redonda de 8 cerca del podio de host?" }, options: [{ en: "Table 48", es: "Mesa 48" }, { en: "Table 21", es: "Mesa 21" }, { en: "Table 101", es: "Mesa 101" }, { en: "Table 501", es: "Mesa 501" }], correct: 0 },
      { q: { en: "What happens on Taco Tuesday?", es: "¿Qué pasa los Taco Tuesday?" }, options: [{ en: "Tacos from under $3 + margarita specials, every week all day", es: "Tacos desde menos de $3 + especiales de margarita, cada semana todo el día" }, { en: "Nothing special", es: "Nada especial" }, { en: "Only on the first Tuesday of the month", es: "Solo el primer martes del mes" }, { en: "Free desserts", es: "Postres gratis" }], correct: 0 },
      { q: { en: "When does Happy Hour run?", es: "¿Cuándo es el Happy Hour?" }, options: [{ en: "Monday–Saturday, 4pm–7pm", es: "Lunes a sábado, 4pm–7pm" }, { en: "Every day, all day", es: "Todos los días, todo el día" }, { en: "Only weekends", es: "Solo fines de semana" }, { en: "Sundays only", es: "Solo domingos" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "S2",
    track: "SERVER",
    category: "Servicio",
    title: { en: "Greeting Standards & Menu Tour", es: "Saludo y Recorrido de Menú" },
    lessons: [
      { en: "The Initial Greet is about making a strong first impression: be warm, friendly, and make eye contact with everyone at the table.", es: "El Saludo Inicial busca causar una gran primera impresión: sé cálido, amigable, y haz contacto visual con todos en la mesa." },
      { en: "The Opener: \"Hi everyone! My name is (server name), and I'll be your main server tonight.\" Returning guest: \"We're so glad you came back. For tonight, I highly recommend our Bajapanty cocktail and our chef's special.\" First-timer: \"Welcome! We're so happy to have you. Our menu is inspired by Latin American flavors with a modern South Florida twist. I'd be happy to give you a quick tour of the menu.\"", es: "El Opener: \"¡Hola a todos! Mi nombre es (nombre del server), y seré su server principal esta noche.\" Huésped que regresa: \"Nos alegra mucho que hayan vuelto. Para esta noche, les recomiendo mucho nuestro cóctel Bajapanty y el especial del chef.\" Primera vez: \"¡Bienvenidos! Nos alegra mucho tenerlos aquí. Nuestro menú está inspirado en sabores latinoamericanos con un toque moderno del sur de Florida. Con gusto les doy un recorrido rápido por el menú.\"" },
      { en: "Menu Tour: \"Our cocktail menu is full of unique hand-crafted cocktails made with only fresh ingredients... You'll also find a variety of small plates perfect for sharing, plus larger entrées.\" Drinks: \"Can I get you started with one of our cocktails? We also have a great selection of wines by the glass.\" Always ask water preference: \"Would you prefer bottled still water, sparkling, or tap water?\"", es: "Recorrido de menú: \"Nuestro menú de cócteles está lleno de creaciones únicas hechas solo con ingredientes frescos... También encontrarán una variedad de platos pequeños perfectos para compartir, además de entradas más grandes.\" Bebidas: \"¿Les gustaría empezar con uno de nuestros cócteles? También tenemos una gran selección de vinos por copa.\" Siempre pregunta la preferencia de agua: \"¿Prefieren agua embotellada sin gas, con gas, o de la llave?\"" },
      { en: "Guac suggestion: \"While I get your drinks started, would you like a fresh guac & chips to share? It's a great way to start.\" If yes: \"Would you like that with chicharrones, or just plain?\" After sending it, suggest a couple of appetizers or the Chela's Sampler Tower.", es: "Sugerencia de guacamole: \"Mientras les traigo las bebidas, ¿les gustaría un guacamole fresco con chips para compartir? Es una excelente forma de empezar.\" Si dicen que sí: \"¿Lo quieren con chicharrones, o solo?\" Después de enviarlo, sugiere un par de entradas o la Chela's Sampler Tower." },
      { en: "The Two-Minute Check-Up (after appetizers): \"How are those appetizers tasting? Is there anything else I can get for you?\" This is the moment to recommend entrées like Camarones Saltados or Steak Frites.", es: "El Check-Up de Dos Minutos (después de las entradas): \"¿Cómo están las entradas? ¿Puedo traerles algo más?\" Este es el momento para recomendar entradas fuertes como Camarones Saltados o Steak Frites." },
      { en: "Dessert timing: mention it when guests are about three-quarters through their main, before they're completely full: \"Just a heads-up, you might want to save room for dessert. Our 5-Layer Chocolate Ganache Cake à la mode is absolutely fantastic.\" Then offer an after-dinner drink like an Espresso Martini or Chela's Carajillo.", es: "Momento del postre: menciónalo cuando los huéspedes van como tres cuartas partes de su plato fuerte, antes de que estén completamente llenos: \"Un adelanto, quizás quieran dejar espacio para el postre. Nuestro pastel de chocolate de 5 capas está buenísimo.\" Luego ofrece una bebida después de la cena como un Espresso Martini o un Carajillo Chela's." },
      { en: "The Farewell: \"Thank you so much for dining with us tonight. I hope you all had a wonderful time, and we look forward to seeing you again soon!\"", es: "La Despedida: \"Muchas gracias por cenar con nosotros esta noche. Espero que la hayan pasado increíble, ¡y esperamos verlos pronto de nuevo!\"" },
      { en: "Upselling technique 1 — Be Descriptive: right after guests sit down, describe a favorite instead of just asking what they want to drink: \"I love our Bajapanty, it's made with fresh lychee and butterfly pea flower — highly recommend it.\" Do the same for appetizers. Never be pushy — the goal is a genuine, appealing description, not pressure.", es: "Técnica de venta 1 — Sé Descriptivo: justo después de que se sientan, describe un favorito en vez de solo preguntar qué quieren tomar: \"Me encanta nuestro Bajapanty, lleva lychee fresco y flor de mariposa — te lo recomiendo mucho.\" Haz lo mismo con las entradas. Nunca seas insistente — el objetivo es una descripción genuina y atractiva, no presión." },
      { en: "Upselling technique 2 — Be Assumptive: after drinks, don't ask \"do you want an entrée?\" — assume they do and offer options: \"Are we feeling like the Steak Frites tonight, or were you thinking about the Lomo Saltado?\" Once they choose, suggest a side or upgrade, like adding guac or truffle fries.", es: "Técnica de venta 2 — Sé Asumidor: después de las bebidas, no preguntes \"¿quieren un plato fuerte?\" — asume que sí y ofrece opciones: \"¿Se les antoja el Steak Frites esta noche, o estaban pensando en el Lomo Saltado?\" Una vez que elijan, sugiere un acompañante o mejora, como agregar guac o papas trufadas." },
      { en: "Upselling technique 3 — Be Suggestive: after the meal, don't just ask \"dessert?\" — describe it before they can say they're full: \"Our 5-Layer Chocolate Ganache Cake is rich, decadent, and pairs perfectly with a coffee or an Espresso Martini.\" Pairing a drink with the dessert increases both sales.", es: "Técnica de venta 3 — Sé Sugerente: después de la comida, no solo preguntes \"¿postre?\" — descríbelo antes de que digan que están llenos: \"Nuestro pastel de chocolate de 5 capas es rico, decadente, y combina perfecto con un café o un Espresso Martini.\" Combinar una bebida con el postre aumenta ambas ventas." }
    ],
    quiz: [
      { q: { en: "What should you always ask before bringing water to the table?", es: "¿Qué debes preguntar siempre antes de traer agua a la mesa?" }, options: [{ en: "Still, sparkling, or tap preference", es: "Preferencia de sin gas, con gas, o de la llave" }, { en: "Nothing, just bring tap water", es: "Nada, solo traer agua de la llave" }, { en: "Their name", es: "Su nombre" }, { en: "How many ice cubes", es: "Cuántos cubos de hielo" }], correct: 0 },
      { q: { en: "When should dessert be mentioned?", es: "¿Cuándo debe mencionarse el postre?" }, options: [{ en: "About three-quarters through the main course", es: "Cuando van como tres cuartas partes del plato fuerte" }, { en: "Before they order food", es: "Antes de que pidan comida" }, { en: "Only if they ask", es: "Solo si preguntan" }, { en: "After they've paid", es: "Después de que paguen" }], correct: 0 },
      { q: { en: "What should you suggest while drinks are being made?", es: "¿Qué debes sugerir mientras se preparan las bebidas?" }, options: [{ en: "Fresh guac & chips to share", es: "Guacamole fresco con chips para compartir" }, { en: "Nothing", es: "Nada" }, { en: "The check", es: "La cuenta" }, { en: "Dessert", es: "El postre" }], correct: 0 },
      { q: { en: "What two entrées are given as example recommendations at the check-up?", es: "¿Qué dos platos fuertes se dan como ejemplo de recomendación en el check-up?" }, options: [{ en: "Camarones Saltados and Steak Frites", es: "Camarones Saltados y Steak Frites" }, { en: "Pizza and pasta", es: "Pizza y pasta" }, { en: "Only desserts", es: "Solo postres" }, { en: "Nothing, wait for them to ask", es: "Nada, esperar que pregunten" }], correct: 0 },
      { q: { en: "What's the \"Be Descriptive\" upselling technique?", es: "¿Qué es la técnica de venta \"Sé Descriptivo\"?" }, options: [{ en: "Describe a favorite item instead of just asking what they want", es: "Describir un artículo favorito en vez de solo preguntar qué quieren" }, { en: "List every menu item mechanically", es: "Listar mecánicamente cada artículo del menú" }, { en: "Say nothing and wait", es: "No decir nada y esperar" }, { en: "Push the most expensive item only", es: "Presionar solo el artículo más caro" }], correct: 0 },
      { q: { en: "What's the \"Be Assumptive\" technique used for?", es: "¿Para qué se usa la técnica \"Sé Asumidor\"?" }, options: [{ en: "Offering entrée options instead of asking if they want one", es: "Ofrecer opciones de plato fuerte en vez de preguntar si quieren uno" }, { en: "Assuming they don't want food", es: "Asumir que no quieren comida" }, { en: "Skipping the order entirely", es: "Saltarse el pedido por completo" }, { en: "Only used for desserts", es: "Solo se usa para postres" }], correct: 0 },
      { q: { en: "Why pair a drink recommendation with dessert?", es: "¿Por qué combinar una recomendación de bebida con el postre?" }, options: [{ en: "It increases both sales", es: "Aumenta ambas ventas" }, { en: "It's required by policy", es: "Es requerido por política" }, { en: "It has no effect", es: "No tiene ningún efecto" }, { en: "Guests dislike it", es: "A los huéspedes les disgusta" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "S3",
    track: "SERVER",
    category: "Servicio",
    title: { en: "Steps of Service", es: "Pasos de Servicio" },
    lessons: [
      { en: "Greet & Water — within 2 minutes: introduce yourself, offer bottled or house water. Menu Tour — during the greet: point out apps, mains, desserts; suggest specialty cocktails.", es: "Saludo y Agua — dentro de 2 minutos: preséntate, ofrece agua embotellada o de la casa. Recorrido de Menú — durante el saludo: señala entradas, platos fuertes, postres; sugiere cócteles especiales." },
      { en: "Special the Guest — before leaving the table, use the 4 Ps: Product, Preparation, Presentation, Price. Drink Service — delivered within 6 minutes; name each cocktail as you place it.", es: "Recomienda al Huésped — antes de dejar la mesa, usa las 4 P: Producto, Preparación, Presentación, Precio. Servicio de Bebidas — entregado en 6 minutos; nombra cada cóctel al colocarlo." },
      { en: "Pre-App Setup — before drinks arrive: ensure water and chips & salsa are on the table. Taking the Order — with drinks on the table: take by seat position, repeat to confirm, suggest sides.", es: "Preparación previa a Entradas — antes de que lleguen las bebidas: asegura que el agua y los chips & salsa estén en la mesa. Toma del Pedido — con las bebidas en la mesa: toma por posición de asiento, repite para confirmar, sugiere acompañamientos." },
      { en: "Ringing In — ASAP by seat position number; communicate allergies with expo immediately. Second Beverage Sale — before food delivery: offer to refresh beverages.", es: "Ingresar el Pedido — lo antes posible por número de posición de asiento; comunica alergias con expo de inmediato. Segunda Venta de Bebida — antes de la entrega de comida: ofrece renovar bebidas." },
      { en: "Food Delivery — 20–25 minutes; assist with running food, place by seat number. 2-Minute / 2-Bite Checkback — within 2 minutes of delivery: remove unused items, keep waters full.", es: "Entrega de Comida — 20–25 minutos; ayuda a llevar los platos, colócalos por número de asiento. Revisión de 2 Minutos / 2 Bocados — dentro de 2 minutos de la entrega: retira artículos sin usar, mantén el agua llena." },
      { en: "Clearing the Table — within 4 minutes of finishing; reset silverware as needed. Dessert & Coffee — present dessert menus (1 per 2 guests); crumb the table; offer digestifs/coffee.", es: "Levantar la Mesa — dentro de 4 minutos de terminar; reacomoda los cubiertos según sea necesario. Postre y Café — presenta menús de postre (1 por cada 2 huéspedes); limpia migas de la mesa; ofrece digestivos/café." },
      { en: "Check Presentation — verify accuracy; clear all plates and empties before dropping the check. Payment — within 3 minutes of request; process swiftly, thank the guest, invite them back.", es: "Presentación de la Cuenta — verifica que sea correcta; retira todos los platos y vasos vacíos antes de dejar la cuenta. Pago — dentro de 3 minutos de solicitado; procesa rápido, agradece al huésped, invítalo a volver." }
    ],
    quiz: [
      { q: { en: "Within how many minutes should drinks be delivered?", es: "¿En cuántos minutos deben entregarse las bebidas?" }, options: [{ en: "6 minutes", es: "6 minutos" }, { en: "20 minutes", es: "20 minutos" }, { en: "1 minute", es: "1 minuto" }, { en: "No time limit", es: "Sin límite de tiempo" }], correct: 0 },
      { q: { en: "What is the food delivery time window?", es: "¿Cuál es la ventana de tiempo para entregar la comida?" }, options: [{ en: "20–25 minutes", es: "20–25 minutos" }, { en: "5 minutes", es: "5 minutos" }, { en: "1 hour", es: "1 hora" }, { en: "No target", es: "Sin objetivo" }], correct: 0 },
      { q: { en: "What are the 4 Ps used to \"special the guest\"?", es: "¿Cuáles son las 4 P para \"recomendar al huésped\"?" }, options: [{ en: "Product, Preparation, Presentation, Price", es: "Producto, Preparación, Presentación, Precio" }, { en: "Plate, Portion, Protein, Profit", es: "Plato, Porción, Proteína, Ganancia" }, { en: "Price only", es: "Solo Precio" }, { en: "None of these", es: "Ninguna de estas" }], correct: 0 },
      { q: { en: "Within how many minutes should payment be processed after it's requested?", es: "¿En cuántos minutos debe procesarse el pago después de solicitado?" }, options: [{ en: "3 minutes", es: "3 minutos" }, { en: "15 minutes", es: "15 minutos" }, { en: "1 minute", es: "1 minuto" }, { en: "No rush", es: "Sin apuro" }], correct: 0 },
      { q: { en: "How should orders be taken?", es: "¿Cómo deben tomarse los pedidos?" }, options: [{ en: "By seat position, repeated back to confirm", es: "Por posición de asiento, repetidos para confirmar" }, { en: "From memory only", es: "Solo de memoria" }, { en: "Written on a napkin", es: "Escritos en una servilleta" }, { en: "Guessed", es: "Adivinados" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "S4",
    track: "SERVER",
    category: "Alergias",
    title: { en: "Allergy Procedure", es: "Procedimiento de Alergias" },
    lessons: [
      { en: "Guest safety is our top priority — a single mistake can put a guest's health at risk. Common allergens: Shellfish & Fish (shrimp, lobster, crab, mussels, clams, squid, octopus, cobia, tuna, mahi-mahi) — high presence in ceviches, Camarones Saltados, poke bowl, Catch of the Day tacos, Seafood Chicharrones, Coctel de Camaron.", es: "La seguridad del huésped es nuestra prioridad — un solo error puede poner en riesgo la salud de alguien. Alérgenos comunes: Mariscos y Pescado (camarón, langosta, cangrejo, mejillones, almejas, calamar, pulpo, cobia, atún, mahi-mahi) — presentes en ceviches, Camarones Saltados, poke bowl, tacos Catch of the Day, Chicharrones de Mariscos, Coctel de Camarón." },
      { en: "Tree Nuts & Seeds: trace amounts in sauces/desserts (nutella on churros). Dairy: quesadillas, desserts, creamy sauces, cheesecake, whipped cream. Gluten: flour tortillas (quesadillas, burger buns), empanaditas, sopaipillas, churros, some beers. Egg: baked goods, aiolis, brunch egg dishes, some desserts. Soy: soy sauce and marinades like the Lomo Saltado sauce. Other: sulfites (wine, dried fruit), mustard, celery, artificial colorings.", es: "Frutos Secos y Semillas: trazas en salsas/postres (nutella en churros). Lácteos: quesadillas, postres, salsas cremosas, cheesecake, crema batida. Gluten: tortillas de harina (quesadillas, pan de hamburguesa), empanaditas, sopaipillas, churros, algunas cervezas. Huevo: repostería, aiolis, platos de brunch con huevo, algunos postres. Soya: salsa de soya y marinados como la salsa del Lomo Saltado. Otros: sulfitos (vino, fruta seca), mostaza, apio, colorantes artificiales." },
      { en: "Symptoms to recognize: redness/swelling of face, lips, or tongue; trouble breathing, coughing, or throat tightness; severe stomach pain, vomiting, or sudden diarrhea; dizziness, confusion, or loss of consciousness.", es: "Síntomas a reconocer: enrojecimiento/hinchazón de cara, labios o lengua; dificultad para respirar, tos, u opresión en la garganta; dolor estomacal severo, vómito, o diarrea repentina; mareo, confusión, o pérdida de conciencia." },
      { en: "In case of a SEVERE reaction: Call 911 immediately. Notify a manager at once. Stay calm and reassure the guest. Do not give food or drink unless instructed by medical personnel.", es: "En caso de una reacción SEVERA: Llama al 911 de inmediato. Notifica a un gerente al instante. Mantén la calma y tranquiliza al huésped. No des comida ni bebida a menos que el personal médico lo indique." },
      { en: "POS procedure: rename the table using the format ALLERGY – [Allergen] – Table # (e.g., ALLERGY – Shellfish – Table 12). Add the ALLERGY modifier to every affected item, including shared dishes. Notify the Chef and Expo immediately after ringing in, and alert a Manager to monitor preparation and delivery.", es: "Procedimiento en POS: renombra la mesa con el formato ALLERGY – [Alérgeno] – Mesa # (ej. ALLERGY – Shellfish – Table 12). Agrega el modificador ALLERGY a cada artículo afectado, incluyendo platos compartidos. Notifica al Chef y a Expo de inmediato después de ingresar el pedido, y avisa a un Gerente para que supervise la preparación y entrega." }
    ],
    quiz: [
      { q: { en: "Which dishes have high shellfish/fish presence?", es: "¿Qué platos tienen alta presencia de mariscos/pescado?" }, options: [{ en: "Ceviches, Camarones Saltados, poke bowl, Seafood Chicharrones", es: "Ceviches, Camarones Saltados, poke bowl, Chicharrones de Mariscos" }, { en: "Only desserts", es: "Solo postres" }, { en: "Only quesadillas", es: "Solo quesadillas" }, { en: "None on the menu", es: "Ninguno en el menú" }], correct: 0 },
      { q: { en: "What is the first thing to do for a severe allergic reaction?", es: "¿Qué es lo primero que debes hacer ante una reacción alérgica severa?" }, options: [{ en: "Call 911 immediately", es: "Llamar al 911 de inmediato" }, { en: "Wait and see", es: "Esperar a ver qué pasa" }, { en: "Give the guest water", es: "Darle agua al huésped" }, { en: "Ask a coworker what to do", es: "Preguntarle a un compañero qué hacer" }], correct: 0 },
      { q: { en: "What is the correct POS format for an allergy order?", es: "¿Cuál es el formato correcto en el POS para un pedido con alergia?" }, options: [{ en: "ALLERGY – [Allergen] – Table #", es: "ALLERGY – [Alérgeno] – Mesa #" }, { en: "A verbal note only", es: "Solo una nota verbal" }, { en: "No format needed", es: "No se necesita formato" }, { en: "Table number only", es: "Solo el número de mesa" }], correct: 0 },
      { q: { en: "Which sauce commonly contains soy?", es: "¿Qué salsa comúnmente contiene soya?" }, options: [{ en: "Lomo Saltado sauce", es: "Salsa de Lomo Saltado" }, { en: "Guacamole", es: "Guacamole" }, { en: "Whipped cream", es: "Crema batida" }, { en: "Salsa verde", es: "Salsa verde" }], correct: 0 },
      { q: { en: "Besides the chef/expo, who else must be alerted for an allergy order?", es: "Además del chef/expo, ¿a quién más se debe alertar en un pedido con alergia?" }, options: [{ en: "A manager, to monitor prep and delivery", es: "A un gerente, para supervisar preparación y entrega" }, { en: "No one else", es: "A nadie más" }, { en: "The valet", es: "Al valet" }, { en: "Another guest", es: "A otro huésped" }], correct: 0 }
    ],
    pass: 100,
    critical: true
  },
  {
    id: "S5",
    track: "SERVER",
    category: "Menú",
    title: { en: "Menu Guide", es: "Guía de Menú" },
    lessons: [
      { en: "Starters include Oysters* (fresh dozen, mignonette with malagueta peppers), Coctel de Camaron, Mexican Chicken Wings, Chela's Nachos, Seafood Chicharrones, Guac & Chips Bowl, Esquites, Chips & Salsa, Mini Short Rib Empanaditas, Guac Tuna Tartare*, and the Chela's Sampler Tower (great for groups).", es: "Las entradas incluyen Ostras* (docena fresca, mignonette con pimienta malagueta), Coctel de Camarón, Alitas de Pollo Mexicanas, Nachos Chela's, Chicharrones de Mariscos, Guacamole con Chips, Esquites, Chips & Salsa, Mini Empanaditas de Short Rib, Tuna Tartare con Guac*, y la Chela's Sampler Tower (ideal para grupos)." },
      { en: "Food safety: never leave oysters waiting more than 25 minutes. The Guac & Chips Bowl (lemon, tomato, red onion, jalapeño, cilantro) cannot be modified. Mexican Wings always carry their marinade flavor — they are never completely plain, even if a guest asks for \"plain.\"", es: "Seguridad alimentaria: nunca dejes ostras esperando más de 25 minutos. El Guacamole con Chips (limón, tomate, cebolla morada, jalapeño, cilantro) no se puede modificar. Las Alitas Mexicanas siempre llevan el sabor del marinado — nunca son completamente \"solas\", aunque el huésped lo pida." },
      { en: "Tacos & Quesadillas: the Three Taco Deal lets guests choose any three (Shorty, Cochinito, Chipotle Chick, Garlic Shrimp, Vegan Taco) on 100% corn tortillas. Filetón Tacos and Catch of the Day Tacos are sold only as a set of three (no substitutions). We do NOT offer a shrimp quesadilla — fillings are chicken, short rib, vegetarian, or filet.", es: "Tacos y Quesadillas: el Three Taco Deal permite elegir cualquiera de tres (Shorty, Cochinito, Chipotle Chick, Garlic Shrimp, Taco Vegano) en tortillas 100% de maíz. Los Tacos Filetón y los Catch of the Day se venden solo en set de tres (sin sustituciones). NO ofrecemos quesadilla de camarón — los rellenos son pollo, short rib, vegetariana, o filete." },
      { en: "From the Sea highlights: Caribbean Tuna Poke Bowl*, Camarones Saltados, Grilled Octopus Salad, Catch of the Day Tacos, Chela's Caribbean Shrimp (coconut-crusted), Classic Ceviche*, and Ceviche Mixto*. From the Land: Truffle Smashed Burger, Lomo Saltado, Milanesa de Pollo, Steak Frites (12oz NY strip), Buttermilk Chicken Tenders, Sopa de Costilla.", es: "Destacados Del Mar: Caribbean Tuna Poke Bowl*, Camarones Saltados, Ensalada de Pulpo a la Parrilla, Catch of the Day Tacos, Chela's Caribbean Shrimp (empanizado en coco), Ceviche Clásico*, y Ceviche Mixto*. De la Tierra: Truffle Smashed Burger, Lomo Saltado, Milanesa de Pollo, Steak Frites (NY strip de 12oz), Buttermilk Chicken Tenders, Sopa de Costilla." },
      { en: "Desserts: Homemade Sopaipillas, 5-Layer Chocolate Ganache Cake (best à la mode), Classic New York Cheesecake, Homemade Churros (with nutella & dulce de leche), Flan de La Tigra, and The Ultimate Celebration Tray (great for parties). Coffee is by Coffee Papis Co., locally roasted in South Florida — 100% Arabica from Brazil, Guatemala, and Honduras.", es: "Postres: Sopaipillas Caseras, Pastel de Chocolate de 5 Capas (mejor à la mode), Cheesecake Clásico Nueva York, Churros Caseros (con nutella y dulce de leche), Flan de La Tigra, y The Ultimate Celebration Tray (ideal para fiestas). El café es de Coffee Papis Co., tostado localmente en el sur de Florida — 100% Arábica de Brasil, Guatemala y Honduras." }
    ],
    flashcards: [
      { front: { en: "Coctel de Camaron", es: "Coctel de Camaron" }, back: { en: "Large prawns, avocado, cucumber, sweet jalapeños & cilantro on Marie Rose sauce; homemade corn chips.", es: "Camarones grandes, aguacate, pepino, jalapeños dulces y cilantro sobre salsa Marie Rose; chips de maíz caseros." } },
      { front: { en: "Chela's Nachos", es: "Chela's Nachos" }, back: { en: "Corn chips, cochinita pibil, pico, guac, red & black beans, cheese, ají amarillo (add short rib +$4).", es: "Chips de maíz, cochinita pibil, pico, guac, frijoles rojos y negros, queso, ají amarillo (agrega short rib +$4)." } },
      { front: { en: "Three Taco Deal", es: "Three Taco Deal" }, back: { en: "Choose any 3: Shorty, Cochinito, Chipotle Chick, Garlic Shrimp, or Vegan Taco. 100% corn tortillas.", es: "Elige cualquiera de 3: Shorty, Cochinito, Chipotle Chick, Garlic Shrimp, o Taco Vegano. Tortillas 100% de maíz." } },
      { front: { en: "Truffle Smashed Burger", es: "Truffle Smashed Burger" }, back: { en: "Double Angus patties, truffle, American cheese, secret sauce, lettuce & pickles, potato bun; truffle fries & ketchup.", es: "Doble carne Angus, trufa, queso americano, salsa secreta, lechuga y pepinillos, pan de papa; papas trufadas y ketchup." } },
      { front: { en: "Lomo Saltado", es: "Lomo Saltado" }, back: { en: "Wok-tossed beef, tomatoes, onion, ají amarillo, lomo sauce; fries & ají amarillo rice.", es: "Carne salteada al wok, tomates, cebolla, ají amarillo, salsa de lomo; papas fritas y arroz con ají amarillo." } },
      { front: { en: "Steak Frites", es: "Steak Frites" }, back: { en: "12oz NY strip (medium) with French fries & salad.", es: "NY strip de 12oz (término medio) con papas fritas francesas y ensalada." } },
      { front: { en: "5-Layer Chocolate Ganache Cake", es: "Pastel de Chocolate de 5 Capas" }, back: { en: "Best enjoyed à la mode (add ice cream).", es: "Mejor disfrutado à la mode (con helado)." } },
      { front: { en: "Homemade Churros", es: "Churros Caseros" }, back: { en: "Three large churros, cinnamon sugar; nutella & dulce de leche dipping sauces.", es: "Tres churros grandes, azúcar con canela; salsas de nutella y dulce de leche." } }
    ],
    quiz: [
      { q: { en: "Do we offer a shrimp quesadilla?", es: "¿Ofrecemos quesadilla de camarón?" }, options: [{ en: "No — fillings are chicken, short rib, vegetarian, filet", es: "No — los rellenos son pollo, short rib, vegetariana, filete" }, { en: "Yes, always", es: "Sí, siempre" }, { en: "Only on weekends", es: "Solo los fines de semana" }, { en: "Only for brunch", es: "Solo en brunch" }], correct: 0 },
      { q: { en: "How long can oysters wait before they must be discarded?", es: "¿Cuánto tiempo pueden esperar las ostras antes de descartarse?" }, options: [{ en: "No more than 25 minutes", es: "No más de 25 minutos" }, { en: "2 hours", es: "2 horas" }, { en: "All night", es: "Toda la noche" }, { en: "No limit", es: "Sin límite" }], correct: 0 },
      { q: { en: "Can the Guac & Chips Bowl be modified?", es: "¿Se puede modificar el Guacamole con Chips?" }, options: [{ en: "No, it cannot be modified", es: "No, no se puede modificar" }, { en: "Yes, any way", es: "Sí, de cualquier forma" }, { en: "Only remove chips", es: "Solo quitar los chips" }, { en: "Only on request of a manager", es: "Solo con autorización de un gerente" }], correct: 0 },
      { q: { en: "What should you tell a guest who asks for Mexican Wings \"plain\"?", es: "¿Qué debes decirle a un huésped que pide las Alitas Mexicanas \"solas\"?" }, options: [{ en: "They always carry the marinade flavor, never fully plain", es: "Siempre llevan el sabor del marinado, nunca son completamente solas" }, { en: "They come with no flavor at all", es: "No llevan ningún sabor" }, { en: "We don't have wings", es: "No tenemos alitas" }, { en: "They are always spicy", es: "Siempre son picantes" }], correct: 0 },
      { q: { en: "Are Filetón Tacos sold individually?", es: "¿Se venden los Tacos Filetón individualmente?" }, options: [{ en: "No, only as a set of three", es: "No, solo en set de tres" }, { en: "Yes, one at a time", es: "Sí, uno a la vez" }, { en: "Only in pairs", es: "Solo en pares" }, { en: "Only for brunch", es: "Solo en brunch" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "S6",
    track: "SERVER",
    category: "Bebidas",
    title: { en: "Beverage Guide", es: "Guía de Bebidas" },
    lessons: [
      { en: "Signature cocktails include Bajapanty (butterfly pea flower rum, lychee, lime, soda), Smoke Some (mezcal, ancho chile, smoked pineapple), Gran Reserva Old Fashioned (barrel-aged, Zacapa 23 rum), and The Spicy One (Don Julio Blanco, mezcal, passion fruit, jalapeño). After-dinner: Espresso Martini, Chela's Carajillo (Licor 43 + Coffee Papis espresso), and Irish Coffee.", es: "Cócteles insignia: Bajapanty (ron con flor de mariposa, lychee, limón, soda), Smoke Some (mezcal, chile ancho, piña ahumada), Gran Reserva Old Fashioned (añejado en barril, ron Zacapa 23), y The Spicy One (Don Julio Blanco, mezcal, maracuyá, jalapeño). Después de la cena: Espresso Martini, Chela's Carajillo (Licor 43 + espresso Coffee Papis), e Irish Coffee." },
      { en: "Margaritas: Tommy's (classic, JC Tradicional Plata + agave + lime), Cereza Margarita, Corona-Rita (jumbo Tommy's topped with a Coronita), and Frozen Margarita (flavors +$2: mango, passion fruit, tamarind, spicy guava, strawberry). Tequila Tasting Flights: Beginners (Blanco/Reposado/Añejo) and Ballers (Añejo/70th Anniversary/1942).", es: "Margaritas: Tommy's (clásica, JC Tradicional Plata + agave + limón), Cereza Margarita, Corona-Rita (Tommy's jumbo con una Coronita encima), y Margarita Frozen (sabores +$2: mango, maracuyá, tamarindo, guayaba picante, fresa). Flights de Tequila: Beginners (Blanco/Reposado/Añejo) y Ballers (Añejo/70 Aniversario/1942)." },
      { en: "Zero-proof cocktails (for guests who don't drink alcohol): Strawberryta, Yellow Bull, Ponche, and Botánico. Always offer these as an option — don't assume every guest wants alcohol.", es: "Cócteles sin alcohol (para huéspedes que no toman): Strawberryta, Yellow Bull, Ponche, y Botánico. Siempre ofrécelos como opción — no asumas que todo huésped quiere alcohol." },
      { en: "Bottle service: included mixers are sodas, juices, and sparkling water — any additional mixers are charged separately. No bottle orders are allowed one hour before the end of a reservation. Beer includes drafts (Monopolio, Mahou, Pacifico, Modelo, Guinness) and The Super Bucket (5 beers + 5 shots).", es: "Servicio de botella: los mixers incluidos son sodas, jugos y agua con gas — cualquier mixer adicional se cobra aparte. No se permiten pedidos de botella una hora antes de que termine la reservación. La cerveza incluye de barril (Monopolio, Mahou, Pacifico, Modelo, Guinness) y The Super Bucket (5 cervezas + 5 shots)." },
      { en: "Coffee is by Coffee Papis Co., locally roasted in South Florida — 100% Arabica sourced from Brazil, Guatemala, and Honduras. Other non-alcoholic options: Mexican Coca-Cola, Jarritos, Chicha Morada, Flor de Jamaica, Fresh Lemonade, Red Bull, and Saratoga Spring Water (still/sparkling).", es: "El café es de Coffee Papis Co., tostado localmente en el sur de Florida — 100% Arábica de Brasil, Guatemala y Honduras. Otras opciones sin alcohol: Mexican Coca-Cola, Jarritos, Chicha Morada, Flor de Jamaica, Limonada Fresca, Red Bull, y agua Saratoga (sin gas/con gas)." }
    ],
    flashcards: [
      { front: { en: "Bajapanty", es: "Bajapanty" }, back: { en: "Rum infused with butterfly pea flower, lychee nectar, lime, soda.", es: "Ron infusionado con flor de mariposa, néctar de lychee, limón, soda." } },
      { front: { en: "Chela's Carajillo", es: "Chela's Carajillo" }, back: { en: "Licor 43, Coffee Papis Co. espresso, orange peel, large ice cube.", es: "Licor 43, espresso de Coffee Papis Co., cáscara de naranja, hielo grande." } },
      { front: { en: "Tommy's Margarita", es: "Tommy's Margarita" }, back: { en: "JC Tradicional Plata, agave nectar, lime (add Cointreau +$5).", es: "JC Tradicional Plata, néctar de agave, limón (agrega Cointreau +$5)." } },
      { front: { en: "The Spicy One", es: "The Spicy One" }, back: { en: "Don Julio Blanco, Contraluz mezcal, passion fruit, jalapeño, cilantro.", es: "Don Julio Blanco, mezcal Contraluz, maracuyá, jalapeño, cilantro." } },
      { front: { en: "Strawberryta (zero-proof)", es: "Strawberryta (sin alcohol)" }, back: { en: "Almave NA tequila, strawberries, lime, agave, salt rim.", es: "Tequila sin alcohol Almave, fresas, limón, agave, borde de sal." } },
      { front: { en: "Espresso Martini", es: "Espresso Martini" }, back: { en: "Vanilla-bean infused vodka, Mr. Black coffee liqueur, Coffee Papis espresso, demerara.", es: "Vodka infusionado con vainilla, licor de café Mr. Black, espresso Coffee Papis, azúcar demerara." } }
    ],
    quiz: [
      { q: { en: "What's in Chela's Carajillo?", es: "¿Qué lleva el Carajillo Chela's?" }, options: [{ en: "Licor 43 and Coffee Papis espresso", es: "Licor 43 y espresso Coffee Papis" }, { en: "Only tequila", es: "Solo tequila" }, { en: "Rum and cola", es: "Ron y cola" }, { en: "Vodka and soda", es: "Vodka y soda" }], correct: 0 },
      { q: { en: "What is the policy on bottle-service orders near the end of a reservation?", es: "¿Cuál es la política de pedidos de botella cerca del fin de una reservación?" }, options: [{ en: "Not allowed one hour before the reservation ends", es: "No se permiten una hora antes de que termine la reservación" }, { en: "Always allowed", es: "Siempre se permiten" }, { en: "Only for VIPs", es: "Solo para VIPs" }, { en: "No policy exists", es: "No existe política" }], correct: 0 },
      { q: { en: "What coffee brand does Chela's use?", es: "¿Qué marca de café usa Chela's?" }, options: [{ en: "Coffee Papis Co. (South Florida roasted)", es: "Coffee Papis Co. (tostado en el sur de Florida)" }, { en: "Starbucks", es: "Starbucks" }, { en: "Imported from Italy only", es: "Importado solo de Italia" }, { en: "No specific brand", es: "Sin marca específica" }], correct: 0 },
      { q: { en: "Should you offer zero-proof cocktails to guests?", es: "¿Debes ofrecer cócteles sin alcohol a los huéspedes?" }, options: [{ en: "Yes, always offer them as an option", es: "Sí, siempre ofrecerlos como opción" }, { en: "No, only if they ask twice", es: "No, solo si preguntan dos veces" }, { en: "Never mention them", es: "Nunca mencionarlos" }, { en: "Only for kids", es: "Solo para niños" }], correct: 0 },
      { q: { en: "What mixers are included in bottle service?", es: "¿Qué mixers están incluidos en el servicio de botella?" }, options: [{ en: "Sodas, juices, sparkling water", es: "Sodas, jugos, agua con gas" }, { en: "Everything is extra", es: "Todo tiene costo adicional" }, { en: "Only water", es: "Solo agua" }, { en: "Nothing is included", es: "Nada está incluido" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "S7",
    track: "SERVER",
    category: "Servicio",
    title: { en: "POS: Checks, Allergies & Payments", es: "POS: Cuentas, Alergias y Pagos" },
    lessons: [
      { en: "Opening a check: log in with your server number, select the table from the floor plan, enter guest count accurately, and confirm you're logged under the correct server name.", es: "Abrir una cuenta: inicia sesión con tu número de server, selecciona la mesa desde el plano, ingresa el número de huéspedes correctamente, y confirma que estás en tu propio nombre de server." },
      { en: "Taking orders, splits & payments: enter items by seat number for accurate food running. Split by seat when each guest pays their own items; split by check to divide evenly. Process each card payment separately for multiple cards. To finalize credit tips: My Tables → Tips → select card type → search last 4 digits → enter tip → confirm & save.", es: "Tomar pedidos, divisiones y pagos: ingresa los artículos por número de asiento para que la comida llegue correctamente. Divide por asiento cuando cada huésped paga lo suyo; divide por cuenta para repartir en partes iguales. Procesa cada tarjeta por separado si hay varias. Para finalizar propinas con tarjeta: Mis Mesas → Propinas → selecciona el tipo de tarjeta → busca los últimos 4 dígitos → ingresa la propina → confirma y guarda." },
      { en: "Best practices: ring orders immediately — don't rely on memory. Don't leave checks open past your shift. Communicate voids, comps, or discounts with a manager. Keep receipts organized for end-of-shift reconciliation. Drop the check only after confirming no further orders, and process payment within 3 minutes of the guest's request.", es: "Buenas prácticas: ingresa los pedidos de inmediato — no confíes en la memoria. No dejes cuentas abiertas después de tu turno. Comunica anulaciones, cortesías, o descuentos con un gerente. Mantén los recibos organizados para la conciliación de fin de turno. Deja la cuenta solo después de confirmar que no hay más pedidos, y procesa el pago dentro de 3 minutos de solicitado." },
      { en: "Auto-gratuity of 20% applies to parties of 6 or more, or checks of $300 or more. Always review the check with the guest and mention the auto-gratuity when it applies, before they sign.", es: "La propina automática del 20% aplica a grupos de 6 o más personas, o cuentas de $300 o más. Siempre revisa la cuenta con el huésped y menciona la propina automática cuando aplique, antes de que firmen." }
    ],
    quiz: [
      { q: { en: "What should you confirm right after logging in?", es: "¿Qué debes confirmar justo después de iniciar sesión?" }, options: [{ en: "That you're logged under the correct server name", es: "Que estás con tu propio nombre de server" }, { en: "Nothing", es: "Nada" }, { en: "The weather", es: "El clima" }, { en: "Yesterday's sales", es: "Las ventas de ayer" }], correct: 0 },
      { q: { en: "When do you split a check \"by seat\"?", es: "¿Cuándo divides una cuenta \"por asiento\"?" }, options: [{ en: "When each guest pays their own items", es: "Cuando cada huésped paga lo suyo" }, { en: "Always, no matter what", es: "Siempre, sin importar el caso" }, { en: "Never", es: "Nunca" }, { en: "Only for parties of 2", es: "Solo para grupos de 2" }], correct: 0 },
      { q: { en: "At what party size does auto-gratuity apply?", es: "¿A partir de qué tamaño de grupo aplica la propina automática?" }, options: [{ en: "6 or more", es: "6 o más" }, { en: "2 or more", es: "2 o más" }, { en: "10 or more", es: "10 o más" }, { en: "Never applies", es: "Nunca aplica" }], correct: 0 },
      { q: { en: "How soon should orders be rung into the POS?", es: "¿Qué tan pronto deben ingresarse los pedidos al POS?" }, options: [{ en: "Immediately — don't rely on memory", es: "De inmediato — no confiar en la memoria" }, { en: "At the end of the shift", es: "Al final del turno" }, { en: "Whenever convenient", es: "Cuando sea conveniente" }, { en: "Never, tell the kitchen verbally", es: "Nunca, decirle a la cocina verbalmente" }], correct: 0 },
      { q: { en: "Who should you talk to about voids, comps, or discounts?", es: "¿Con quién debes hablar sobre anulaciones, cortesías, o descuentos?" }, options: [{ en: "A manager", es: "Un gerente" }, { en: "No one, do it yourself", es: "Con nadie, hazlo tú mismo" }, { en: "The guest only", es: "Solo con el huésped" }, { en: "Another server", es: "Con otro server" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "S8",
    track: "SERVER",
    category: "Alcohol",
    title: { en: "Responsible Alcohol Service", es: "Servicio Responsable de Alcohol" },
    lessons: [
      { en: "Official policy FOH-BAR-ALC-001 (Florida). Card anyone who looks 35 or younger — no exceptions.", es: "Política oficial FOH-BAR-ALC-001 (Florida). Pide identificación a cualquiera que aparente 35 años o menos — sin excepciones." },
      { en: "If a guest should be cut off, use the approved cut-off script and notify a manager. Only the Manager on Duty (MOD) can override a cut-off decision.", es: "Si un huésped debe ser cortado, usa el guion aprobado de corte y notifica a un gerente. Solo el Gerente en Turno (MOD) puede anular una decisión de corte." },
      { en: "Every alcoholic drink must be rung into Toast — no exceptions, no comps without a manager.", es: "Toda bebida alcohólica debe registrarse en Toast — sin excepciones, sin cortesías sin autorización de un gerente." },
      { en: "Responsible Vendor Act (RVA) training: non-managers must complete it within 30 days of hire; managers within 15 days; refresher every 4 months for everyone.", es: "Entrenamiento de la Ley de Vendedor Responsable (RVA): no gerentes deben completarlo en 30 días desde su contratación; gerentes en 15 días; repaso cada 4 meses para todos." },
      { en: "Alcohol service hours follow the most restrictive applicable rule, including Miami Lakes hours where relevant.", es: "Las horas de servicio de alcohol siguen la regla más restrictiva aplicable, incluyendo el horario de Miami Lakes cuando corresponda." },
      { en: "Guest Intoxication Policy — Step 1: stay alert for signs of intoxication (slurred speech, unsteady walking/balance issues, aggressive or overly emotional behavior, difficulty focusing or responding, strong smell of alcohol or visible overconsumption). Step 2: never handle it alone — alert a supervisor or manager immediately so they can take the lead.", es: "Política de Intoxicación de Huéspedes — Paso 1: mantente alerta a señales de intoxicación (habla arrastrada, problemas de equilibrio al caminar, comportamiento agresivo o muy emocional, dificultad para enfocarse o responder, fuerte olor a alcohol o sobreconsumo visible). Paso 2: nunca lo manejes solo — alerta a un supervisor o gerente de inmediato para que tome la iniciativa." },
      { en: "Step 3 — Stop Serving Alcohol: once confirmed, kindly say \"For your safety, we won't be able to serve more alcohol at this time. Can I bring you some water?\" Step 4 — Offer Water and Food: \"Let's get you a glass of water and something to eat. That should help you feel better.\"", es: "Paso 3 — Deja de Servir Alcohol: una vez confirmado, di amablemente \"Por tu seguridad, no podremos servirte más alcohol en este momento. ¿Te traigo un poco de agua?\" Paso 4 — Ofrece Agua y Comida: \"Vamos a traerte un vaso de agua y algo de comer. Eso debería ayudarte a sentirte mejor.\"" },
      { en: "Step 5 — Evaluate Transportation: if they plan to drive, say \"We'd really recommend not driving right now. We can help you get a ride with Uber, Lyft, or a taxi.\" Offer to call a ride or help with their phone; if they're with friends, ask for their help getting the guest home safely. If it escalates or they insist on driving, the manager steps in firmly but respectfully.", es: "Paso 5 — Evalúa el Transporte: si planean manejar, di \"Realmente te recomendamos no manejar en este momento. Podemos ayudarte a conseguir un viaje con Uber, Lyft, o un taxi.\" Ofrece llamar el viaje o ayudar con su teléfono; si están con amigos, pídeles ayuda para que el huésped llegue seguro a casa. Si la situación escala o insisten en manejar, el gerente debe intervenir con firmeza pero con respeto." },
      { en: "Step 6 — Document the Incident: a brief written report submitted to management including date/time, staff involved, actions taken, and transportation arranged. Step 7 — Follow Up: if a guest has recurring issues, management may limit or refuse future service per local laws and restaurant policy.", es: "Paso 6 — Documenta el Incidente: un breve reporte escrito enviado a la gerencia con fecha/hora, personal involucrado, acciones tomadas, y transporte gestionado (si aplica). Paso 7 — Seguimiento: si un huésped tiene problemas recurrentes, la gerencia puede limitar o rechazar el servicio en el futuro según las leyes locales y la política del restaurante." }
    ],
    quiz: [
      { q: { en: "Who should be carded?", es: "¿A quién se le debe pedir identificación?" }, options: [{ en: "Only if they ask", es: "Solo si lo piden" }, { en: "Anyone who looks 35 or younger", es: "Cualquiera que aparente 35 años o menos" }, { en: "Only obviously young guests", es: "Solo huéspedes obviamente jóvenes" }, { en: "Nobody", es: "Nadie" }], correct: 1 },
      { q: { en: "Who can override a cut-off decision?", es: "¿Quién puede anular una decisión de corte?" }, options: [{ en: "Any server", es: "Cualquier server" }, { en: "Only the Manager on Duty (MOD)", es: "Solo el Gerente en Turno (MOD)" }, { en: "The guest", es: "El huésped" }, { en: "The bartender always", es: "El bartender siempre" }], correct: 1 },
      { q: { en: "Must every alcoholic drink be rung into Toast?", es: "¿Debe registrarse en Toast toda bebida alcohólica?" }, options: [{ en: "No", es: "No" }, { en: "Yes, no exceptions", es: "Sí, sin excepciones" }, { en: "Only cocktails", es: "Solo cócteles" }, { en: "Only if asked", es: "Solo si se pide" }], correct: 1 },
      { q: { en: "How soon must non-managers complete RVA training?", es: "¿En cuánto tiempo deben los no gerentes completar el entrenamiento RVA?" }, options: [{ en: "30 days", es: "30 días" }, { en: "90 days", es: "90 días" }, { en: "1 year", es: "1 año" }, { en: "Never required", es: "Nunca es requerido" }], correct: 0 },
      { q: { en: "How often is the RVA refresher required?", es: "¿Cada cuánto se requiere el repaso de RVA?" }, options: [{ en: "Every 4 months", es: "Cada 4 meses" }, { en: "Every 5 years", es: "Cada 5 años" }, { en: "Once, never again", es: "Una vez, nunca más" }, { en: "Every week", es: "Cada semana" }], correct: 0 },
      { q: { en: "What is the first thing to do when you notice signs of intoxication?", es: "¿Qué es lo primero que debes hacer al notar señales de intoxicación?" }, options: [{ en: "Alert a supervisor or manager immediately — never handle it alone", es: "Alertar a un supervisor o gerente de inmediato — nunca manejarlo solo" }, { en: "Serve them water and say nothing to anyone", es: "Servirles agua y no decirle a nadie" }, { en: "Ignore it if they're a regular", es: "Ignorarlo si son clientes frecuentes" }, { en: "Ask another guest to handle it", es: "Pedirle a otro huésped que lo maneje" }], correct: 0 },
      { q: { en: "What should you say when you stop serving a guest alcohol?", es: "¿Qué debes decir cuando dejas de servirle alcohol a un huésped?" }, options: [{ en: "\"For your safety, we won't be able to serve more alcohol at this time. Can I bring you some water?\"", es: "\"Por tu seguridad, no podremos servirte más alcohol en este momento. ¿Te traigo un poco de agua?\"" }, { en: "\"You've had too much, get out.\"", es: "\"Ya tomaste demasiado, vete.\"" }, { en: "Nothing, just stop bringing drinks silently", es: "Nada, solo dejar de traer bebidas en silencio" }, { en: "\"Ask the bartender for more.\"", es: "\"Pídele más al bartender.\"" }], correct: 0 },
      { q: { en: "If an intoxicated guest plans to drive, what should you do?", es: "Si un huésped intoxicado planea manejar, ¿qué debes hacer?" }, options: [{ en: "Recommend not driving and help arrange Uber/Lyft/taxi", es: "Recomendar que no maneje y ayudar a conseguir Uber/Lyft/taxi" }, { en: "Let them drive, it's their choice", es: "Dejarlo manejar, es su decisión" }, { en: "Give them coffee and let them go", es: "Darles café y dejarlos ir" }, { en: "Nothing, it's not your responsibility", es: "Nada, no es tu responsabilidad" }], correct: 0 },
      { q: { en: "What must be done after the situation is under control?", es: "¿Qué debe hacerse después de que la situación esté controlada?" }, options: [{ en: "A brief written incident report submitted to management", es: "Un breve reporte escrito enviado a la gerencia" }, { en: "Nothing further", es: "Nada más" }, { en: "Post about it on social media", es: "Publicarlo en redes sociales" }, { en: "Tell other guests what happened", es: "Contarle a otros huéspedes lo que pasó" }], correct: 0 }
    ],
    pass: 100,
    critical: true
  },
  {
    id: "S9",
    track: "SERVER",
    category: "Práctico",
    title: { en: "Training Program & Certification", es: "Programa de Entrenamiento y Certificación" },
    lessons: [
      { en: "Training consists of 1 Kitchen/Expo shift, 1 Bar shift, 1 Busser shift, and 4 Server training shifts (8 hours each). Each shift ends with a test.", es: "El entrenamiento consiste en 1 turno de Cocina/Expo, 1 turno de Bar, 1 turno de Busser, y 4 turnos de entrenamiento de Server (8 horas cada uno). Cada turno termina con una prueba." },
      { en: "Day 1 — Expo/Kitchen Trail: shadow the chef on the expo line, learn the look and basic taste of every dish, take notes on ingredients and allergy considerations. Day 2 — Bar: sidework, tastings, specials; sell two cocktails, whites by the glass, two appetizers, and four non-alcoholic beverages; learn floor layout and timing.", es: "Día 1 — Expo/Cocina: acompaña al chef en la línea de expo, aprende la apariencia y sabor básico de cada plato, toma notas sobre ingredientes y consideraciones de alergias. Día 2 — Bar: side work, catas, especiales; vende dos cócteles, vinos blancos por copa, dos entradas, y cuatro bebidas sin alcohol; aprende el plano del piso y los tiempos." },
      { en: "Day 3 — Server Focus: front one table for the duration while the trainer coaches; practice clearing, note-taking, POS ringing, dessert sales, check presentation. Day 4 — Manager Service Assessment: greet timing, beverage knowledge, upselling, allergy protocol, order accuracy, sequencing, clearing, dessert/after-dinner sales, check handling — conducted at a Manager's table, treated as a regular table.", es: "Día 3 — Enfoque en Server: atiende una mesa durante todo el turno mientras el entrenador supervisa; practica levantar mesas, tomar notas, ingresar al POS, vender postres, presentar la cuenta. Día 4 — Evaluación del Gerente: tiempo de saludo, conocimiento de bebidas, venta sugestiva, protocolo de alergias, precisión del pedido, secuencia, limpieza de mesa, venta de postre/digestivo, manejo de la cuenta — se hace en la mesa de un gerente, tratada como una mesa normal." },
      { en: "Pre-Hiring Exam: must score 80% or higher; covers menu, steps of service, allergy protocol, and suggestive selling. Passing both the written and practical evaluations certifies readiness for independent floor service.", es: "Examen de Pre-Contratación: debe aprobarse con 80% o más; cubre menú, pasos de servicio, protocolo de alergias, y venta sugestiva. Aprobar tanto la evaluación escrita como la práctica certifica que estás listo para trabajar el piso de forma independiente." }
    ],
    quiz: [
      { q: { en: "How many server training shifts are there, and how long is each?", es: "¿Cuántos turnos de entrenamiento de server hay, y cuánto dura cada uno?" }, options: [{ en: "4 shifts, 8 hours each", es: "4 turnos, 8 horas cada uno" }, { en: "1 shift, 2 hours", es: "1 turno, 2 horas" }, { en: "10 shifts, 4 hours each", es: "10 turnos, 4 horas cada uno" }, { en: "No set number", es: "Sin número definido" }], correct: 0 },
      { q: { en: "Where is the final Manager Service Assessment conducted?", es: "¿Dónde se realiza la evaluación final del gerente?" }, options: [{ en: "At a Manager's table, treated as a regular table", es: "En la mesa de un gerente, tratada como mesa normal" }, { en: "In a classroom only", es: "Solo en un salón de clases" }, { en: "Over the phone", es: "Por teléfono" }, { en: "It isn't conducted", es: "No se realiza" }], correct: 0 },
      { q: { en: "What score is required on the Pre-Hiring Exam?", es: "¿Qué puntaje se requiere en el Examen de Pre-Contratación?" }, options: [{ en: "80% or higher", es: "80% o más" }, { en: "50%", es: "50%" }, { en: "100% only", es: "Solo 100%" }, { en: "No minimum", es: "Sin mínimo" }], correct: 0 },
      { q: { en: "On Day 2 (Bar shift), what must the trainee sell?", es: "¿Qué debe vender el trainee el Día 2 (turno de Bar)?" }, options: [{ en: "Two cocktails, whites by the glass, two appetizers, four NA beverages", es: "Dos cócteles, vinos blancos por copa, dos entradas, cuatro bebidas sin alcohol" }, { en: "Nothing, just observe", es: "Nada, solo observar" }, { en: "Only desserts", es: "Solo postres" }, { en: "Only beer", es: "Solo cerveza" }], correct: 0 },
      { q: { en: "What should Day 1 focus on?", es: "¿En qué se enfoca el Día 1?" }, options: [{ en: "Shadowing the chef on expo, learning dishes and allergy considerations", es: "Acompañar al chef en expo, aprender los platos y consideraciones de alergias" }, { en: "Selling alcohol", es: "Vender alcohol" }, { en: "Cash handling only", es: "Solo manejo de efectivo" }, { en: "Nothing specific", es: "Nada específico" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "S10",
    track: "SERVER",
    category: "Práctico",
    title: { en: "Side Work Stations", es: "Estaciones de Side Work" },
    lessons: [
      { en: "Running side work applies during all active service (lunch, dinner, special events). Whoever is assigned to a station must maintain it continuously, in addition to their main guest-service duties — this is not optional, even during busy periods.", es: "El running side work aplica durante todo el horario de servicio activo (almuerzo, cena, eventos especiales). Quien esté asignado a una estación debe mantenerla continuamente, además de sus funciones principales de atención al cliente — no es opcional, ni siquiera en horas de mucho movimiento." },
      { en: "Mexican Sodas & Waters Fridge (Jungle Room, assigned server): keep it organized and stocked with Mexican sodas, bottled water, and Jarritos. Clean spills/stains inside and out, and keep the area clear of boxes.", es: "Mexican Sodas & Waters Fridge (Jungle Room, server asignado): mantenlo organizado y abastecido con sodas mexicanas, agua embotellada, y jarritos. Limpia derrames/manchas por dentro y por fuera, y mantén el área libre de cajas." },
      { en: "Coffee Station & Sugar Caddies (Center Room, assigned server): keep the station stocked (hot coffee, cups, lids, sleeves) and clean; organize and refill sugar caddies (white sugar, brown sugar, sweeteners, stirrers); clean coffee/sugar residue around the station.", es: "Coffee Station & Sugar Caddies (Center Room, server asignado): mantén la estación abastecida (café caliente, vasos, tapas, sleeves) y limpia; organiza y rellena los sugar caddies (azúcar blanca, azúcar morena, edulcorantes, mezcladores); limpia residuos de café o azúcar alrededor de la estación." },
      { en: "Water Station (Florida Room, assigned server): keep it clean, organized, and stocked; ensure a constant supply of cold pitchers, clean glasses, and ice; clean trays and wet surfaces; check that soda boxes are full and replace them if not.", es: "Water Station (Florida Room, server asignado): mantenla limpia, organizada, y abastecida; asegura disponibilidad constante de jarras frías, vasos limpios, y hielo; limpia bandejas y superficies húmedas; revisa que las cajas de soda estén llenas y reemplázalas si no." },
      { en: "POS Station (Bar, assigned server): keep the POS area clean and tidy (no loose tickets or trash); restock printer paper, tip envelopes, and pens; make sure extra paper rolls are always on hand; clean the screen/keyboard if needed.", es: "POS Station (Bar, server asignado): mantén el área del POS limpia y ordenada (sin tickets sueltos ni residuos); reabastece papel para la impresora, sobres de propina, y bolígrafos; asegura que siempre haya rollos de papel extra disponibles; limpia pantalla/teclado si es necesario." },
      { en: "Soda Station & Glassware (Busser Station) is the busser's assigned station, not the server's — but servers should notice and flag issues there too. If you can't cover your station temporarily, tell the supervisor or arrange a hand-off with a coworker. Every station reflects the restaurant's professionalism.", es: "La Soda Station & Glassware (Busser Station) es la estación asignada del busser, no del server — pero los servers también deben notar y reportar problemas ahí. Si no puedes cubrir tu estación temporalmente, avisa al supervisor o arregla un relevo con un compañero. Cada estación refleja el profesionalismo del restaurante." }
    ],
    quiz: [
      { q: { en: "When does running side work apply?", es: "¿Cuándo aplica el running side work?" }, options: [{ en: "During all active service, including busy periods", es: "Durante todo el servicio activo, incluyendo horas de mucho movimiento" }, { en: "Only when it's slow", es: "Solo cuando está tranquilo" }, { en: "Only at closing", es: "Solo al cierre" }, { en: "It's optional", es: "Es opcional" }], correct: 0 },
      { q: { en: "Where is the Coffee Station & Sugar Caddies located?", es: "¿Dónde está la Coffee Station & Sugar Caddies?" }, options: [{ en: "Center Room", es: "Center Room" }, { en: "Jungle Room", es: "Jungle Room" }, { en: "Florida Room", es: "Florida Room" }, { en: "Bar", es: "Bar" }], correct: 0 },
      { q: { en: "Who is assigned to the Water Station in the Florida Room?", es: "¿Quién está asignado a la Water Station en Florida Room?" }, options: [{ en: "The server assigned to that section", es: "El server asignado a esa sección" }, { en: "No one specifically", es: "Nadie en específico" }, { en: "Only the manager", es: "Solo el gerente" }, { en: "The valet", es: "El valet" }], correct: 0 },
      { q: { en: "What should be restocked at the POS Station?", es: "¿Qué debe reabastecerse en la POS Station?" }, options: [{ en: "Printer paper, tip envelopes, pens", es: "Papel de impresora, sobres de propina, bolígrafos" }, { en: "Nothing", es: "Nada" }, { en: "Only napkins", es: "Solo servilletas" }, { en: "Food items", es: "Artículos de comida" }], correct: 0 },
      { q: { en: "What should you do if you can't cover your station temporarily?", es: "¿Qué debes hacer si no puedes cubrir tu estación temporalmente?" }, options: [{ en: "Tell the supervisor or arrange a hand-off with a coworker", es: "Avisar al supervisor o arreglar un relevo con un compañero" }, { en: "Leave it uncovered", es: "Dejarla sin cubrir" }, { en: "Nothing, it's not important", es: "Nada, no es importante" }, { en: "Ask a guest to help", es: "Pedirle a un huésped que ayude" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "S11",
    track: "SERVER",
    category: "Servicio",
    title: { en: "Difficult Situations & Service Recovery", es: "Situaciones Difíciles y Recuperación de Servicio" },
    lessons: [
      { en: "A customer says the food is too expensive: don't get defensive — acknowledge their feedback warmly and highlight the quality/value (fresh ingredients, chef-driven menu, portion size) without pressuring them to order more.", es: "Un huésped dice que la comida es muy cara: no te pongas a la defensiva — reconoce su comentario con calidez y destaca la calidad/valor (ingredientes frescos, menú creado por el chef, tamaño de porción) sin presionarlo a pedir más." },
      { en: "A table has been waiting 45 minutes for food: apologize sincerely, check with the kitchen/expo immediately for a real update, offer a complimentary item or drink if appropriate, and keep the table informed rather than leaving them wondering.", es: "Una mesa lleva 45 minutos esperando la comida: discúlpate con sinceridad, consulta con cocina/expo de inmediato para una actualización real, ofrece un artículo o bebida de cortesía si aplica, y mantén informada a la mesa en vez de dejarlos esperando sin noticias." },
      { en: "A customer claims they found a hair in their food: apologize immediately and remove the plate without argument, notify a manager right away, offer to remake the dish or comp it per manager's direction — never debate the guest about it at the table.", es: "Un huésped dice que encontró un cabello en su comida: discúlpate de inmediato y retira el plato sin discutir, notifica a un gerente de inmediato, ofrece rehacer el plato o darlo de cortesía según indique el gerente — nunca debatas con el huésped sobre esto en la mesa." },
      { en: "A table wants to modify 6 different items: stay calm, take the modifications one item at a time and repeat each back to confirm, enter them accurately in the POS, and give the kitchen a heads-up if the ticket will need extra attention.", es: "Una mesa quiere modificar 6 artículos distintos: mantén la calma, toma las modificaciones una por una y repítelas para confirmar, ingrésalas con precisión en el POS, y avísale a la cocina si el ticket va a necesitar atención extra." },
      { en: "Someone asks for \"the strongest drink you have\": don't just pick the highest-ABV pour — ask about their spirit preference and involve the bartender for a proper recommendation; strength should never come at the cost of responsible service.", es: "Alguien pide \"la bebida más fuerte que tengan\": no elijas solo la de mayor graduación alcohólica — pregunta su preferencia de licor e involucra al bartender para una recomendación adecuada; la fortaleza nunca debe ir en contra del servicio responsable." },
      { en: "General principle for any complaint: listen fully without interrupting, apologize sincerely, involve a manager for anything beyond a simple fix, and follow up to make sure the guest is satisfied before they leave. The team helps prevent complaints by communicating clearly and anticipating needs.", es: "Principio general para cualquier queja: escucha completamente sin interrumpir, discúlpate con sinceridad, involucra a un gerente para cualquier cosa que vaya más allá de una solución simple, y da seguimiento para asegurarte de que el huésped quede satisfecho antes de irse. El equipo ayuda a prevenir quejas comunicándose con claridad y anticipando necesidades." }
    ],
    quiz: [
      { q: { en: "A guest says the food is too expensive. What's the best response?", es: "Un huésped dice que la comida es muy cara. ¿Cuál es la mejor respuesta?" }, options: [{ en: "Acknowledge warmly and highlight quality/value, without pressuring them", es: "Reconocer con calidez y destacar la calidad/valor, sin presionarlo" }, { en: "Argue that the prices are fair", es: "Discutir que los precios son justos" }, { en: "Ignore the comment", es: "Ignorar el comentario" }, { en: "Offer a discount immediately without checking with a manager", es: "Ofrecer un descuento de inmediato sin consultar a un gerente" }], correct: 0 },
      { q: { en: "A table has waited 45 minutes for food. What should you do?", es: "Una mesa lleva 45 minutos esperando comida. ¿Qué debes hacer?" }, options: [{ en: "Apologize, check with the kitchen for a real update, and keep them informed", es: "Disculparte, consultar con la cocina para una actualización real, y mantenerlos informados" }, { en: "Say nothing and hope it comes out soon", es: "No decir nada y esperar que salga pronto" }, { en: "Blame the kitchen to the guest", es: "Culpar a la cocina frente al huésped" }, { en: "Tell them to leave if they're unhappy", es: "Decirles que se vayan si no están contentos" }], correct: 0 },
      { q: { en: "A guest says they found a hair in their food. What should you do first?", es: "Un huésped dice que encontró un cabello en su comida. ¿Qué debes hacer primero?" }, options: [{ en: "Apologize, remove the plate, and notify a manager immediately", es: "Disculparte, retirar el plato, y notificar a un gerente de inmediato" }, { en: "Argue that it's not possible", es: "Discutir que no es posible" }, { en: "Ignore it and hope they drop it", es: "Ignorarlo y esperar que lo dejen pasar" }, { en: "Offer them a different table", es: "Ofrecerles otra mesa" }], correct: 0 },
      { q: { en: "How should you handle a table modifying 6 different items?", es: "¿Cómo debes manejar una mesa que modifica 6 artículos distintos?" }, options: [{ en: "One at a time, repeating each back to confirm", es: "Uno a la vez, repitiendo cada uno para confirmar" }, { en: "Guess what they want", es: "Adivinar lo que quieren" }, { en: "Refuse to take modifications", es: "Negarte a tomar modificaciones" }, { en: "Rush through it without confirming", es: "Apresurarte sin confirmar" }], correct: 0 },
      { q: { en: "If someone asks for \"the strongest drink,\" what should you do?", es: "Si alguien pide \"la bebida más fuerte\", ¿qué debes hacer?" }, options: [{ en: "Ask their spirit preference and involve the bartender for a proper recommendation", es: "Preguntar su preferencia de licor e involucrar al bartender para una recomendación adecuada" }, { en: "Just pour the highest-ABV drink with no questions", es: "Solo servir la bebida de mayor graduación sin preguntar" }, { en: "Refuse to serve them", es: "Negarte a servirles" }, { en: "Serve them two drinks at once", es: "Servirles dos bebidas a la vez" }], correct: 0 }
    ],
    pass: 80
  },

  // ===================== BARTENDER (9) =====================
  {
    id: "BT1",
    track: "BARTENDER",
    category: "Servicio",
    title: { en: "Bar Setup & Station Organization", es: "Montaje de Barra y Organización de Estación" },
    lessons: [
      { en: "Set up your station before opening: ice, garnishes, glassware, and tools within reach and organized consistently.", es: "Prepara tu estación antes de abrir: hielo, guarniciones, cristalería y herramientas al alcance y organizadas de forma consistente." },
      { en: "A clean, organized bar is faster and safer during a rush.", es: "Una barra limpia y organizada es más rápida y segura durante horas de mucho trabajo." }
    ],
    quiz: [
      { q: { en: "When should the bar station be set up?", es: "¿Cuándo debe montarse la estación de bar?" }, options: [{ en: "Before opening", es: "Antes de abrir" }, { en: "During the rush", es: "Durante la hora pico" }, { en: "Never", es: "Nunca" }, { en: "After closing", es: "Después de cerrar" }], correct: 0 },
      { q: { en: "Why keep the bar organized consistently?", es: "¿Por qué mantener la barra organizada de forma consistente?" }, options: [{ en: "It doesn't matter", es: "No importa" }, { en: "Faster and safer during a rush", es: "Más rápido y seguro durante horas pico" }, { en: "Looks nicer only", es: "Solo se ve mejor" }, { en: "Required by law", es: "Requerido por ley" }], correct: 1 },
      { q: { en: "What should be within reach at your station?", es: "¿Qué debe estar al alcance en tu estación?" }, options: [{ en: "Ice, garnishes, glassware, tools", es: "Hielo, guarniciones, cristalería, herramientas" }, { en: "Nothing in particular", es: "Nada en particular" }, { en: "Only ice", es: "Solo hielo" }, { en: "Only glassware", es: "Solo cristalería" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "BT2",
    track: "BARTENDER",
    category: "Bebidas",
    title: { en: "Cocktail Pours, Glassware & Garnish", es: "Medidas de Cóctel, Cristalería y Guarnición" },
    lessons: [
      { en: "This module is pending final details from Chela's (exact pours, glassware, and garnish per cocktail). It will be added here once confirmed.", es: "Este módulo está pendiente de los detalles finales de Chela's (medidas exactas, cristalería y guarnición por cóctel). Se agregará aquí una vez confirmado." },
      { en: "For now: always follow the printed recipe cards at the bar and ask a manager if a recipe isn't posted.", es: "Por ahora: sigue siempre las tarjetas de receta impresas en la barra y pregunta a un gerente si una receta no está publicada." }
    ],
    quiz: [
      { q: { en: "Is this module's cocktail content finalized?", es: "¿Está finalizado el contenido de cócteles de este módulo?" }, options: [{ en: "Yes", es: "Sí" }, { en: "No, pending final details from Chela's", es: "No, pendiente de detalles finales de Chela's" }, { en: "Not applicable", es: "No aplica" }, { en: "Unknown", es: "Desconocido" }], correct: 1 },
      { q: { en: "What should you follow for pours until this is finalized?", es: "¿Qué debes seguir para las medidas hasta que esto se finalice?" }, options: [{ en: "Guess", es: "Adivinar" }, { en: "Printed recipe cards at the bar", es: "Tarjetas de receta impresas en la barra" }, { en: "Whatever feels right", es: "Lo que se sienta correcto" }, { en: "Ask a guest", es: "Preguntarle a un huésped" }], correct: 1 },
      { q: { en: "What should you do if a recipe isn't posted?", es: "¿Qué debes hacer si una receta no está publicada?" }, options: [{ en: "Ask a manager", es: "Preguntar a un gerente" }, { en: "Skip the drink", es: "Omitir la bebida" }, { en: "Make it up", es: "Inventarla" }, { en: "Ask another guest", es: "Preguntarle a otro huésped" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "BT3",
    track: "BARTENDER",
    category: "Bebidas",
    title: { en: "Bar Menu Knowledge", es: "Conocimiento del Menú de Barra" },
    lessons: [
      { en: "Know the full drink menu, key ingredients, and be ready to make recommendations based on guest taste.", es: "Conoce todo el menú de bebidas, ingredientes clave, y está listo para recomendar según el gusto del huésped." },
      { en: "(Detailed menu content will be added as the drink list is finalized.)", es: "(El contenido detallado del menú se agregará cuando la carta de bebidas esté finalizada.)" }
    ],
    quiz: [
      { q: { en: "What should you be ready to do for guests?", es: "¿Para qué debes estar preparado con los huéspedes?" }, options: [{ en: "Make recommendations based on taste", es: "Hacer recomendaciones según su gusto" }, { en: "Ignore requests", es: "Ignorar solicitudes" }, { en: "Only serve beer", es: "Solo servir cerveza" }, { en: "Refuse questions", es: "Rechazar preguntas" }], correct: 0 },
      { q: { en: "Is the full drink menu content already finalized in this module?", es: "¿Está ya finalizado el contenido completo del menú de bebidas en este módulo?" }, options: [{ en: "Yes", es: "Sí" }, { en: "No, to be added later", es: "No, se agregará después" }, { en: "N/A", es: "N/A" }, { en: "Unknown", es: "Desconocido" }], correct: 1 },
      { q: { en: "What should you know about each drink?", es: "¿Qué debes saber de cada bebida?" }, options: [{ en: "Key ingredients", es: "Ingredientes clave" }, { en: "Nothing", es: "Nada" }, { en: "Only the price", es: "Solo el precio" }, { en: "Only the name", es: "Solo el nombre" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "BT4",
    track: "BARTENDER",
    category: "Servicio",
    title: { en: "POS for Bar Orders", es: "POS para Pedidos de Barra" },
    lessons: [
      { en: "Ring every drink into Toast as it's made — this keeps tabs accurate and supports our alcohol policy.", es: "Registra cada bebida en Toast al hacerla — esto mantiene las cuentas precisas y apoya nuestra política de alcohol." },
      { en: "Double check modifiers (e.g., 'no ice', 'extra lime') are entered so the guest gets exactly what they ordered.", es: "Verifica que los modificadores (ej. 'sin hielo', 'extra limón') estén ingresados para que el huésped reciba exactamente lo que pidió." }
    ],
    quiz: [
      { q: { en: "When should a drink be rung into Toast?", es: "¿Cuándo debe registrarse una bebida en Toast?" }, options: [{ en: "At the end of the night", es: "Al final de la noche" }, { en: "As it's made", es: "Al hacerla" }, { en: "Never", es: "Nunca" }, { en: "Only if paid in cash", es: "Solo si se paga en efectivo" }], correct: 1 },
      { q: { en: "Why check modifiers in the POS?", es: "¿Por qué revisar los modificadores en el POS?" }, options: [{ en: "It doesn't matter", es: "No importa" }, { en: "So guests get exactly what they ordered", es: "Para que el huésped reciba exactamente lo que pidió" }, { en: "To slow down service", es: "Para ralentizar el servicio" }, { en: "Optional step", es: "Paso opcional" }], correct: 1 },
      { q: { en: "Does ringing drinks into Toast support the alcohol policy?", es: "¿Registrar bebidas en Toast apoya la política de alcohol?" }, options: [{ en: "Yes", es: "Sí" }, { en: "No", es: "No" }, { en: "Unrelated", es: "No relacionado" }, { en: "Only on weekends", es: "Solo los fines de semana" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "BT5",
    track: "BARTENDER",
    category: "Bebidas",
    title: { en: "Water Service", es: "Servicio de Agua" },
    lessons: [
      { en: "Our water brand is Saratoga — available still or sparkling. Know how to present and offer it correctly.", es: "Nuestra marca de agua es Saratoga — disponible sin gas o con gas. Sepa cómo presentarla y ofrecerla correctamente." }
    ],
    quiz: [
      { q: { en: "What is our water brand?", es: "¿Cuál es nuestra marca de agua?" }, options: [{ en: "Saratoga", es: "Saratoga" }, { en: "Evian", es: "Evian" }, { en: "Fiji", es: "Fiji" }, { en: "Perrier", es: "Perrier" }], correct: 0 },
      { q: { en: "What options does our water come in?", es: "¿En qué opciones viene nuestra agua?" }, options: [{ en: "Still or sparkling", es: "Sin gas o con gas" }, { en: "Only sparkling", es: "Solo con gas" }, { en: "Only still", es: "Solo sin gas" }, { en: "Flavored only", es: "Solo saborizada" }], correct: 0 },
      { q: { en: "Should you know how to correctly present the water?", es: "¿Debes saber cómo presentar correctamente el agua?" }, options: [{ en: "Yes", es: "Sí" }, { en: "No", es: "No" }, { en: "Only if asked", es: "Solo si se pide" }, { en: "Not necessary", es: "No es necesario" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "BT6",
    track: "BARTENDER",
    category: "Servicio",
    title: { en: "Bar Cleanliness & Sanitation", es: "Limpieza y Sanitización de Barra" },
    lessons: [
      { en: "Wipe down the bar top and tools regularly. Change bar rags/towels often and keep ice bins covered and separate from bottle wells.", es: "Limpia la barra y las herramientas con regularidad. Cambia los paños de barra frecuentemente y mantén los depósitos de hielo cubiertos y separados de las botellas." }
    ],
    quiz: [
      { q: { en: "Should ice bins be kept separate from bottle wells?", es: "¿Deben los depósitos de hielo mantenerse separados de las botellas?" }, options: [{ en: "Yes", es: "Sí" }, { en: "No", es: "No" }, { en: "Doesn't matter", es: "No importa" }, { en: "Only at night", es: "Solo de noche" }], correct: 0 },
      { q: { en: "How often should bar rags be changed?", es: "¿Con qué frecuencia deben cambiarse los paños de barra?" }, options: [{ en: "Never", es: "Nunca" }, { en: "Often", es: "Frecuentemente" }, { en: "Once a week", es: "Una vez por semana" }, { en: "Once a month", es: "Una vez al mes" }], correct: 1 },
      { q: { en: "What should be wiped down regularly?", es: "¿Qué debe limpiarse con regularidad?" }, options: [{ en: "Bar top and tools", es: "Barra y herramientas" }, { en: "Nothing", es: "Nada" }, { en: "Only glasses", es: "Solo los vasos" }, { en: "Only the floor", es: "Solo el piso" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "BT7",
    track: "BARTENDER",
    category: "Práctico",
    title: { en: "Speed & Efficiency During Rush", es: "Velocidad y Eficiencia en Horas Pico" },
    lessons: [
      { en: "Batch similar drinks, pre-stock garnishes before a rush, and call out orders clearly to teammates.", es: "Agrupa bebidas similares, pre-abastece guarniciones antes de la hora pico, y comunica los pedidos con claridad a tus compañeros." }
    ],
    quiz: [
      { q: { en: "What helps during a rush?", es: "¿Qué ayuda durante la hora pico?" }, options: [{ en: "Batching similar drinks", es: "Agrupar bebidas similares" }, { en: "Working alone silently", es: "Trabajar solo en silencio" }, { en: "Ignoring teammates", es: "Ignorar a los compañeros" }, { en: "Skipping prep", es: "Saltarte la preparación" }], correct: 0 },
      { q: { en: "When should garnishes be pre-stocked?", es: "¿Cuándo deben pre-abastecerse las guarniciones?" }, options: [{ en: "Before a rush", es: "Antes de la hora pico" }, { en: "During a rush", es: "Durante la hora pico" }, { en: "Never", es: "Nunca" }, { en: "After closing only", es: "Solo después de cerrar" }], correct: 0 },
      { q: { en: "Why call out orders clearly to teammates?", es: "¿Por qué comunicar los pedidos con claridad a los compañeros?" }, options: [{ en: "It's unnecessary", es: "Es innecesario" }, { en: "Keeps the team coordinated and fast", es: "Mantiene al equipo coordinado y rápido" }, { en: "Slows things down", es: "Ralentiza las cosas" }, { en: "Only for show", es: "Solo por apariencia" }], correct: 1 }
    ],
    pass: 80
  },
  {
    id: "BT8",
    track: "BARTENDER",
    category: "Alcohol",
    title: { en: "Responsible Alcohol Service", es: "Servicio Responsable de Alcohol" },
    lessons: [
      { en: "Official policy FOH-BAR-ALC-001 (Florida). Card anyone who looks 35 or younger — no exceptions.", es: "Política oficial FOH-BAR-ALC-001 (Florida). Pide identificación a cualquiera que aparente 35 años o menos — sin excepciones." },
      { en: "If a guest should be cut off, use the approved cut-off script and notify a manager. Only the Manager on Duty (MOD) can override a cut-off decision.", es: "Si un huésped debe ser cortado, usa el guion aprobado de corte y notifica a un gerente. Solo el Gerente en Turno (MOD) puede anular una decisión de corte." },
      { en: "Every alcoholic drink must be rung into Toast — no exceptions, no comps without a manager.", es: "Toda bebida alcohólica debe registrarse en Toast — sin excepciones, sin cortesías sin autorización de un gerente." },
      { en: "Responsible Vendor Act (RVA) training: non-managers must complete it within 30 days of hire; managers within 15 days; refresher every 4 months for everyone.", es: "Entrenamiento de la Ley de Vendedor Responsable (RVA): no gerentes deben completarlo en 30 días desde su contratación; gerentes en 15 días; repaso cada 4 meses para todos." },
      { en: "Alcohol service hours follow the most restrictive applicable rule, including Miami Lakes hours where relevant.", es: "Las horas de servicio de alcohol siguen la regla más restrictiva aplicable, incluyendo el horario de Miami Lakes cuando corresponda." },
      { en: "Guest Intoxication Policy — Step 1: stay alert for signs of intoxication (slurred speech, unsteady walking/balance issues, aggressive or overly emotional behavior, difficulty focusing or responding, strong smell of alcohol or visible overconsumption). Step 2: never handle it alone — alert a supervisor or manager immediately so they can take the lead.", es: "Política de Intoxicación de Huéspedes — Paso 1: mantente alerta a señales de intoxicación (habla arrastrada, problemas de equilibrio al caminar, comportamiento agresivo o muy emocional, dificultad para enfocarse o responder, fuerte olor a alcohol o sobreconsumo visible). Paso 2: nunca lo manejes solo — alerta a un supervisor o gerente de inmediato para que tome la iniciativa." },
      { en: "Step 3 — Stop Serving Alcohol: once confirmed, kindly say \"For your safety, we won't be able to serve more alcohol at this time. Can I bring you some water?\" Step 4 — Offer Water and Food: \"Let's get you a glass of water and something to eat. That should help you feel better.\"", es: "Paso 3 — Deja de Servir Alcohol: una vez confirmado, di amablemente \"Por tu seguridad, no podremos servirte más alcohol en este momento. ¿Te traigo un poco de agua?\" Paso 4 — Ofrece Agua y Comida: \"Vamos a traerte un vaso de agua y algo de comer. Eso debería ayudarte a sentirte mejor.\"" },
      { en: "Step 5 — Evaluate Transportation: if they plan to drive, say \"We'd really recommend not driving right now. We can help you get a ride with Uber, Lyft, or a taxi.\" Offer to call a ride or help with their phone; if they're with friends, ask for their help getting the guest home safely. If it escalates or they insist on driving, the manager steps in firmly but respectfully.", es: "Paso 5 — Evalúa el Transporte: si planean manejar, di \"Realmente te recomendamos no manejar en este momento. Podemos ayudarte a conseguir un viaje con Uber, Lyft, o un taxi.\" Ofrece llamar el viaje o ayudar con su teléfono; si están con amigos, pídeles ayuda para que el huésped llegue seguro a casa. Si la situación escala o insisten en manejar, el gerente debe intervenir con firmeza pero con respeto." },
      { en: "Step 6 — Document the Incident: a brief written report submitted to management including date/time, staff involved, actions taken, and transportation arranged. Step 7 — Follow Up: if a guest has recurring issues, management may limit or refuse future service per local laws and restaurant policy.", es: "Paso 6 — Documenta el Incidente: un breve reporte escrito enviado a la gerencia con fecha/hora, personal involucrado, acciones tomadas, y transporte gestionado (si aplica). Paso 7 — Seguimiento: si un huésped tiene problemas recurrentes, la gerencia puede limitar o rechazar el servicio en el futuro según las leyes locales y la política del restaurante." }
    ],
    quiz: [
      { q: { en: "Who should be carded?", es: "¿A quién se le debe pedir identificación?" }, options: [{ en: "Only if they ask", es: "Solo si lo piden" }, { en: "Anyone who looks 35 or younger", es: "Cualquiera que aparente 35 años o menos" }, { en: "Only obviously young guests", es: "Solo huéspedes obviamente jóvenes" }, { en: "Nobody", es: "Nadie" }], correct: 1 },
      { q: { en: "Who can override a cut-off decision?", es: "¿Quién puede anular una decisión de corte?" }, options: [{ en: "Any bartender", es: "Cualquier bartender" }, { en: "Only the Manager on Duty (MOD)", es: "Solo el Gerente en Turno (MOD)" }, { en: "The guest", es: "El huésped" }, { en: "A server always", es: "Un server siempre" }], correct: 1 },
      { q: { en: "Must every alcoholic drink be rung into Toast?", es: "¿Debe registrarse en Toast toda bebida alcohólica?" }, options: [{ en: "No", es: "No" }, { en: "Yes, no exceptions", es: "Sí, sin excepciones" }, { en: "Only cocktails", es: "Solo cócteles" }, { en: "Only if asked", es: "Solo si se pide" }], correct: 1 },
      { q: { en: "How soon must managers complete RVA training?", es: "¿En cuánto tiempo deben los gerentes completar el entrenamiento RVA?" }, options: [{ en: "15 days", es: "15 días" }, { en: "90 days", es: "90 días" }, { en: "1 year", es: "1 año" }, { en: "Never required", es: "Nunca es requerido" }], correct: 0 },
      { q: { en: "How often is the RVA refresher required?", es: "¿Cada cuánto se requiere el repaso de RVA?" }, options: [{ en: "Every 4 months", es: "Cada 4 meses" }, { en: "Every 5 years", es: "Cada 5 años" }, { en: "Once, never again", es: "Una vez, nunca más" }, { en: "Every week", es: "Cada semana" }], correct: 0 },
      { q: { en: "What is the first thing to do when you notice signs of intoxication?", es: "¿Qué es lo primero que debes hacer al notar señales de intoxicación?" }, options: [{ en: "Alert a supervisor or manager immediately — never handle it alone", es: "Alertar a un supervisor o gerente de inmediato — nunca manejarlo solo" }, { en: "Serve them water and say nothing to anyone", es: "Servirles agua y no decirle a nadie" }, { en: "Ignore it if they're a regular", es: "Ignorarlo si son clientes frecuentes" }, { en: "Ask another guest to handle it", es: "Pedirle a otro huésped que lo maneje" }], correct: 0 },
      { q: { en: "What should you say when you stop serving a guest alcohol?", es: "¿Qué debes decir cuando dejas de servirle alcohol a un huésped?" }, options: [{ en: "\"For your safety, we won't be able to serve more alcohol at this time. Can I bring you some water?\"", es: "\"Por tu seguridad, no podremos servirte más alcohol en este momento. ¿Te traigo un poco de agua?\"" }, { en: "\"You've had too much, get out.\"", es: "\"Ya tomaste demasiado, vete.\"" }, { en: "Nothing, just stop bringing drinks silently", es: "Nada, solo dejar de traer bebidas en silencio" }, { en: "\"Ask another bartender for more.\"", es: "\"Pídele a otro bartender.\"" }], correct: 0 },
      { q: { en: "If an intoxicated guest plans to drive, what should you do?", es: "Si un huésped intoxicado planea manejar, ¿qué debes hacer?" }, options: [{ en: "Recommend not driving and help arrange Uber/Lyft/taxi", es: "Recomendar que no maneje y ayudar a conseguir Uber/Lyft/taxi" }, { en: "Let them drive, it's their choice", es: "Dejarlo manejar, es su decisión" }, { en: "Give them coffee and let them go", es: "Darles café y dejarlos ir" }, { en: "Nothing, it's not your responsibility", es: "Nada, no es tu responsabilidad" }], correct: 0 },
      { q: { en: "What must be done after the situation is under control?", es: "¿Qué debe hacerse después de que la situación esté controlada?" }, options: [{ en: "A brief written incident report submitted to management", es: "Un breve reporte escrito enviado a la gerencia" }, { en: "Nothing further", es: "Nada más" }, { en: "Post about it on social media", es: "Publicarlo en redes sociales" }, { en: "Tell other guests what happened", es: "Contarle a otros huéspedes lo que pasó" }], correct: 0 }
    ],
    pass: 100,
    critical: true
  },
  {
    id: "BT9",
    track: "BARTENDER",
    category: "Servicio",
    title: { en: "Closing & Inventory Duties", es: "Tareas de Cierre e Inventario" },
    lessons: [
      { en: "Count and log bottles, restock for the next shift, and secure the bar before leaving.", es: "Cuenta y registra las botellas, reabastece para el siguiente turno, y asegura la barra antes de irte." },
      { en: "Check out with a manager to confirm closing tasks and cash/tips are reconciled.", es: "Haz check-out con un gerente para confirmar que las tareas de cierre y el efectivo/propinas estén conciliados." }
    ],
    quiz: [
      { q: { en: "What should be counted and logged at close?", es: "¿Qué debe contarse y registrarse al cierre?" }, options: [{ en: "Bottles", es: "Botellas" }, { en: "Nothing", es: "Nada" }, { en: "Only cash", es: "Solo efectivo" }, { en: "Only glasses", es: "Solo vasos" }], correct: 0 },
      { q: { en: "Who should you check out with?", es: "¿Con quién debes hacer check-out?" }, options: [{ en: "A manager", es: "Un gerente" }, { en: "No one", es: "Nadie" }, { en: "A guest", es: "Un huésped" }, { en: "The valet", es: "El valet" }], correct: 0 },
      { q: { en: "What should happen to the bar before leaving?", es: "¿Qué debe pasar con la barra antes de irte?" }, options: [{ en: "Leave it open", es: "Dejarla abierta" }, { en: "Secure it", es: "Asegurarla" }, { en: "Nothing", es: "Nada" }, { en: "Leave bottles out", es: "Dejar botellas afuera" }], correct: 1 }
    ],
    pass: 80
  },

  // ===================== BUSSER (6) =====================
  {
    id: "B1",
    track: "BUSSER",
    category: "Servicio",
    title: { en: "Busser Role Overview", es: "Resumen del Rol de Busser" },
    lessons: [
      { en: "Bussers keep the floor moving — clearing, resetting tables quickly, and supporting servers so guests are seated fast.", es: "Los bussers mantienen el piso en movimiento — recogiendo, montando mesas rápidamente y apoyando a los servers para que los huéspedes se sienten rápido." }
    ],
    quiz: [
      { q: { en: "What is a busser's main job?", es: "¿Cuál es el trabajo principal de un busser?" }, options: [{ en: "Clearing and resetting tables quickly", es: "Recoger y montar mesas rápidamente" }, { en: "Taking orders", es: "Tomar pedidos" }, { en: "Making cocktails", es: "Hacer cócteles" }, { en: "Managing staff", es: "Gestionar personal" }], correct: 0 },
      { q: { en: "Who do bussers support?", es: "¿A quién apoyan los bussers?" }, options: [{ en: "Servers", es: "Servers" }, { en: "No one", es: "A nadie" }, { en: "Only managers", es: "Solo a gerentes" }, { en: "Only the kitchen", es: "Solo a la cocina" }], correct: 0 },
      { q: { en: "Why is a fast table reset important?", es: "¿Por qué es importante un montaje rápido de mesa?" }, options: [{ en: "Guests are seated faster", es: "Los huéspedes se sientan más rápido" }, { en: "It isn't important", es: "No es importante" }, { en: "Only matters at lunch", es: "Solo importa en almuerzo" }, { en: "Slows down service", es: "Ralentiza el servicio" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "B2",
    track: "BUSSER",
    category: "Práctico",
    title: { en: "Table Reset Standards", es: "Estándares de Montaje de Mesa" },
    lessons: [
      { en: "Clear plates from the right when possible, wipe the table fully, and reset with clean, aligned settings before the next guest is seated.", es: "Retira los platos por la derecha cuando sea posible, limpia bien la mesa, y monta con vajilla limpia y alineada antes de que se siente el próximo huésped." },
      { en: "Before starting: memorize the dining room layout (table numbers, sections) and how to properly set a table. Gather your supplies first — a bus tub or large tray, a bucket of sanitizer, and cleaning towels.", es: "Antes de empezar: memoriza el plano del comedor (números de mesa, secciones) y cómo montar correctamente una mesa. Reúne tus suministros primero — un bus tub o bandeja grande, un balde de sanitizante, y toallas de limpieza." },
      { en: "Clearing order: approach with a friendly smile, confirm guests are finished, then remove empty plates/bowls/glasses first — don't stack them too high. Then wipe down crumbs and debris with a clean towel, sanitize, and make sure the table is fully dry before resetting (a damp table is a common mistake).", es: "Orden de limpieza: acércate con una sonrisa amable, confirma que terminaron, luego retira primero platos/tazones/vasos vacíos — sin apilarlos demasiado alto. Luego limpia migas y residuos con una toalla limpia, sanitiza, y asegúrate de que la mesa esté completamente seca antes de montarla (una mesa húmeda es un error común)." },
      { en: "Protect glassware: never stack glasses or fill them with flatware — each contact between glass and another object causes mechanical shock, which creates invisible abrasions that weaken the glass and make it break more easily later. Stack dishes largest at the bottom, smaller on top, so they don't topple.", es: "Protege la cristalería: nunca apiles vasos ni los llenes con cubiertos — cada contacto entre el vidrio y otro objeto causa un choque mecánico, que crea abrasiones invisibles que debilitan el vidrio y hacen que se rompa más fácil después. Apila los platos con los más grandes abajo y los más pequeños arriba, para que no se caigan." }
    ],
    quiz: [
      { q: { en: "What should happen to the table before the next guest is seated?", es: "¿Qué debe pasar con la mesa antes de que se siente el próximo huésped?" }, options: [{ en: "Nothing", es: "Nada" }, { en: "Fully wiped and reset", es: "Completamente limpia y montada" }, { en: "Just remove big items", es: "Solo quitar cosas grandes" }, { en: "Leave as is", es: "Dejarla como está" }], correct: 1 },
      { q: { en: "How should settings be arranged?", es: "¿Cómo deben acomodarse los cubiertos/vajilla?" }, options: [{ en: "Clean and aligned", es: "Limpios y alineados" }, { en: "Any way is fine", es: "De cualquier forma" }, { en: "Doesn't matter", es: "No importa" }, { en: "Only glasses need placing", es: "Solo hay que poner los vasos" }], correct: 0 },
      { q: { en: "From which side should plates generally be cleared?", es: "¿Por qué lado se deben retirar generalmente los platos?" }, options: [{ en: "The right, when possible", es: "La derecha, cuando sea posible" }, { en: "Doesn't matter", es: "No importa" }, { en: "Always from the front", es: "Siempre por el frente" }, { en: "Only from behind", es: "Solo por atrás" }], correct: 0 },
      { q: { en: "Why should you never stack glasses or fill them with flatware?", es: "¿Por qué nunca debes apilar vasos ni llenarlos con cubiertos?" }, options: [{ en: "It causes mechanical shock that weakens the glass", es: "Causa choque mecánico que debilita el vidrio" }, { en: "It's slower", es: "Es más lento" }, { en: "It doesn't matter", es: "No importa" }, { en: "Guests prefer it that way", es: "A los huéspedes les gusta así" }], correct: 0 },
      { q: { en: "How should you stack dishes?", es: "¿Cómo debes apilar los platos?" }, options: [{ en: "Largest at the bottom, smaller on top", es: "Los más grandes abajo, los más pequeños arriba" }, { en: "Smallest at the bottom", es: "Los más pequeños abajo" }, { en: "Randomly", es: "Al azar" }, { en: "Never stack them", es: "Nunca apilarlos" }], correct: 0 },
      { q: { en: "What supplies should you gather before bussing?", es: "¿Qué suministros debes reunir antes de hacer bussing?" }, options: [{ en: "A bus tub or tray, sanitizer bucket, and cleaning towels", es: "Un bus tub o bandeja, balde de sanitizante, y toallas de limpieza" }, { en: "Nothing special", es: "Nada en especial" }, { en: "Only a napkin", es: "Solo una servilleta" }, { en: "Only a broom", es: "Solo una escoba" }], correct: 0 },
      { q: { en: "What's a common mistake when resetting a table?", es: "¿Cuál es un error común al montar una mesa?" }, options: [{ en: "Leaving it too damp for guests to sit comfortably", es: "Dejarla demasiado húmeda para que los huéspedes se sienten cómodos" }, { en: "Setting it too fast", es: "Montarla demasiado rápido" }, { en: "Making it too clean", es: "Dejarla demasiado limpia" }, { en: "There is no common mistake", es: "No hay ningún error común" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "B3",
    track: "BUSSER",
    category: "Servicio",
    title: { en: "Floor Plan & Section Awareness", es: "Plano del Piso y Conocimiento de Secciones" },
    lessons: [
      { en: "Sections (left to right): Florida Room 101–109 · Bar 21–24, 31–34, 35 · Centro 41–48 (48 is the round 8-top, near the HOST stand) · Jungle 51–53, 61–63, 71–73, 81–85 · Exterior 401–410 and 501–510.", es: "Secciones (de izquierda a derecha): Florida Room 101–109 · Bar 21–24, 31–34, 35 · Centro 41–48 (48 es la mesa redonda de 8, cerca del podio de HOST) · Jungle 51–53, 61–63, 71–73, 81–85 · Exterior 401–410 y 501–510." }
    ],
    quiz: [
      { q: { en: "Which section covers tables 51–53, 61–63, 71–73, 81–85?", es: "¿Qué sección cubre las mesas 51–53, 61–63, 71–73, 81–85?" }, options: [{ en: "Jungle", es: "Jungle" }, { en: "Bar", es: "Bar" }, { en: "Florida Room", es: "Florida Room" }, { en: "Exterior", es: "Exterior" }], correct: 0 },
      { q: { en: "Which table is near the host stand?", es: "¿Qué mesa está cerca del podio de host?" }, options: [{ en: "Table 48", es: "Mesa 48" }, { en: "Table 21", es: "Mesa 21" }, { en: "Table 401", es: "Mesa 401" }, { en: "Table 101", es: "Mesa 101" }], correct: 0 },
      { q: { en: "Which section covers 21–24, 31–34, 35?", es: "¿Qué sección cubre 21–24, 31–34, 35?" }, options: [{ en: "Bar", es: "Bar" }, { en: "Centro", es: "Centro" }, { en: "Jungle", es: "Jungle" }, { en: "Exterior", es: "Exterior" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "B4",
    track: "BUSSER",
    category: "Servicio",
    title: { en: "Communication with Servers & Kitchen", es: "Comunicación con Servers y Cocina" },
    lessons: [
      { en: "Let servers know when a table is reset and ready, and flag the kitchen/expo if a table needs extra time before food fires.", es: "Avisa a los servers cuando una mesa está lista, y avisa a cocina/expo si una mesa necesita más tiempo antes de que salgan los platos." }
    ],
    quiz: [
      { q: { en: "Who should you tell when a table is ready?", es: "¿A quién debes avisar cuando una mesa está lista?" }, options: [{ en: "The server", es: "El server" }, { en: "No one", es: "A nadie" }, { en: "Only the manager", es: "Solo al gerente" }, { en: "The valet", es: "El valet" }], correct: 0 },
      { q: { en: "Who should you flag if a table needs extra time before food fires?", es: "¿A quién debes avisar si una mesa necesita más tiempo antes de que salgan los platos?" }, options: [{ en: "The kitchen/expo", es: "Cocina/expo" }, { en: "No one", es: "A nadie" }, { en: "The host only", es: "Solo al host" }, { en: "The guest", es: "Al huésped" }], correct: 0 },
      { q: { en: "Why is busser-server communication important?", es: "¿Por qué es importante la comunicación busser-server?" }, options: [{ en: "Keeps service coordinated", es: "Mantiene el servicio coordinado" }, { en: "It isn't important", es: "No es importante" }, { en: "Only for show", es: "Solo por apariencia" }, { en: "Slows things down", es: "Ralentiza las cosas" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "B5",
    track: "BUSSER",
    category: "Alergias",
    title: { en: "Safety & Sanitation", es: "Seguridad y Sanitización" },
    lessons: [
      { en: "Use separate bins for trash vs. dishware, carry trays properly to avoid spills, and report any hazard immediately.", es: "Usa contenedores separados para basura vs. vajilla, carga las bandejas correctamente para evitar derrames, y reporta cualquier peligro de inmediato." },
      { en: "Sanitizer pails must be changed every 2–4 hours per ServSafe standards — sooner if the water looks visibly dirty. Keep a set schedule so it doesn't get forgotten during a busy shift.", es: "Los baldes de sanitizante deben cambiarse cada 2–4 horas según los estándares de ServSafe — antes si el agua se ve visiblemente sucia. Mantén un horario fijo para que no se te olvide durante un turno ocupado." },
      { en: "Never use a soiled cleaning towel in front of guests — once a towel picks up spilled coffee, juice, or sauce, retire it and grab a fresh one. Keep a spare apron on hand and change it if it becomes stained, since bussers work the dining room floor and must look clean and tidy.", es: "Nunca uses una toalla sucia frente a los huéspedes — en cuanto una toalla recoge café, jugo, o salsa derramada, retírala y toma una nueva. Ten un delantal de repuesto a la mano y cámbialo si se mancha, ya que los bussers trabajan en el piso del comedor y deben verse limpios y ordenados." }
    ],
    quiz: [
      { q: { en: "What should you use separate bins for?", es: "¿Para qué debes usar contenedores separados?" }, options: [{ en: "Trash vs. dishware", es: "Basura vs. vajilla" }, { en: "Nothing", es: "Nada" }, { en: "Only napkins", es: "Solo servilletas" }, { en: "Only trash" , es: "Solo basura"}], correct: 0 },
      { q: { en: "What should you do if you notice a hazard?", es: "¿Qué debes hacer si notas un peligro?" }, options: [{ en: "Ignore it", es: "Ignorarlo" }, { en: "Report it immediately", es: "Reportarlo de inmediato" }, { en: "Wait for someone else", es: "Esperar a alguien más" }, { en: "Fix it yourself always", es: "Arreglarlo tú siempre" }], correct: 1 },
      { q: { en: "Why carry trays properly?", es: "¿Por qué cargar las bandejas correctamente?" }, options: [{ en: "To avoid spills", es: "Para evitar derrames" }, { en: "It doesn't matter", es: "No importa" }, { en: "Only for show", es: "Solo por apariencia" }, { en: "To go faster only", es: "Solo para ir más rápido" }], correct: 0 },
      { q: { en: "How often must sanitizer pails be changed per ServSafe standards?", es: "¿Cada cuánto deben cambiarse los baldes de sanitizante según ServSafe?" }, options: [{ en: "Every 2–4 hours", es: "Cada 2–4 horas" }, { en: "Once a week", es: "Una vez por semana" }, { en: "Never", es: "Nunca" }, { en: "Once a shift only, no matter how dirty", es: "Solo una vez por turno, sin importar qué tan sucio esté" }], correct: 0 },
      { q: { en: "What should you do with a soiled cleaning towel in front of guests?", es: "¿Qué debes hacer con una toalla sucia frente a los huéspedes?" }, options: [{ en: "Retire it and grab a fresh one", es: "Retirarla y tomar una nueva" }, { en: "Keep using it", es: "Seguir usándola" }, { en: "Hide it", es: "Esconderla" }, { en: "Wash it in front of them", es: "Lavarla frente a ellos" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "B6",
    track: "BUSSER",
    category: "Práctico",
    title: { en: "Closing Side Work", es: "Side Work de Cierre" },
    lessons: [
      { en: "Restock service stations, break down and clean bus bins, and confirm all sections are reset before clocking out.", es: "Reabastece las estaciones de servicio, vacía y limpia los contenedores de bussing, y confirma que todas las secciones estén listas antes de marcar salida." }
    ],
    quiz: [
      { q: { en: "What should be restocked at close?", es: "¿Qué debe reabastecerse al cierre?" }, options: [{ en: "Service stations", es: "Estaciones de servicio" }, { en: "Nothing", es: "Nada" }, { en: "Only napkins", es: "Solo servilletas" }, { en: "Only glasses", es: "Solo vasos" }], correct: 0 },
      { q: { en: "What should be confirmed before clocking out?", es: "¿Qué debe confirmarse antes de marcar salida?" }, options: [{ en: "All sections are reset", es: "Todas las secciones están listas" }, { en: "Nothing", es: "Nada" }, { en: "Only your own table", es: "Solo tu propia mesa" }, { en: "The weather", es: "El clima" }], correct: 0 },
      { q: { en: "What should be done to bus bins at closing?", es: "¿Qué debe hacerse con los contenedores de bussing al cierre?" }, options: [{ en: "Broken down and cleaned", es: "Vaciados y limpiados" }, { en: "Left full", es: "Dejarlos llenos" }, { en: "Nothing", es: "Nada" }, { en: "Thrown away", es: "Tirarlos" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "B7",
    track: "BUSSER",
    category: "Práctico",
    title: { en: "Side Work Stations", es: "Estaciones de Side Work" },
    lessons: [
      { en: "Running side work applies during all active service (lunch, dinner, special events) — not just at closing. It must be kept up continuously alongside your main bussing duties, even during busy periods.", es: "El running side work aplica durante todo el horario de servicio activo (almuerzo, cena, eventos especiales) — no solo al cierre. Debe mantenerse de forma continua junto con tus funciones principales de bussing, incluso en horas de mucho movimiento." },
      { en: "Soda Station & Glassware (Busser Station, assigned busser): keep the soda station clean and operational. Stock clean glasses of different sizes as needed. Constantly clean spills or drink residue. Refill ice if needed. Report any dispenser malfunction to the shift supervisor.", es: "Soda Station & Glassware (Busser Station, busser asignado): mantén la estación de soda limpia y funcionando. Abastece con vasos limpios de distintos tamaños según se necesite. Limpia constantemente derrames o residuos de bebida. Rellena hielo si es necesario. Reporta cualquier falla del dispensador al supervisor de turno." },
      { en: "Other stations in the restaurant — Mexican Sodas & Waters Fridge (Jungle Room), Coffee Station (Center Room), and Water Station (Florida Room) — are usually assigned to servers, but bussers should flag issues there too. If you can't cover your station temporarily, tell the supervisor or arrange a hand-off with a coworker.", es: "Las demás estaciones del restaurante — Mexican Sodas & Waters Fridge (Jungle Room), Coffee Station (Center Room), y Water Station (Florida Room) — normalmente están asignadas a servers, pero los bussers también deben reportar problemas ahí. Si no puedes cubrir tu estación temporalmente, avisa al supervisor o arregla un relevo con un compañero." }
    ],
    quiz: [
      { q: { en: "Which station is the busser's specific responsibility?", es: "¿Cuál estación es responsabilidad específica del busser?" }, options: [{ en: "Soda Station & Glassware", es: "Soda Station & Glassware" }, { en: "Coffee Station", es: "Coffee Station" }, { en: "Water Station", es: "Water Station" }, { en: "None", es: "Ninguna" }], correct: 0 },
      { q: { en: "What should you do if the soda dispenser malfunctions?", es: "¿Qué debes hacer si el dispensador de soda falla?" }, options: [{ en: "Report it to the shift supervisor", es: "Reportarlo al supervisor de turno" }, { en: "Ignore it", es: "Ignorarlo" }, { en: "Fix it yourself with tools", es: "Arreglarlo tú mismo con herramientas" }, { en: "Tell a guest to wait", es: "Decirle a un huésped que espere" }], correct: 0 },
      { q: { en: "When does running side work apply?", es: "¿Cuándo aplica el running side work?" }, options: [{ en: "During all active service, not just at closing", es: "Durante todo el servicio activo, no solo al cierre" }, { en: "Only at closing", es: "Solo al cierre" }, { en: "Only when it's slow", es: "Solo cuando está tranquilo" }, { en: "Never", es: "Nunca" }], correct: 0 }
    ],
    pass: 80
  },

  // ===================== HOST (8) =====================
  {
    id: "H1",
    track: "HOST",
    category: "Servicio",
    title: { en: "Host Role Overview", es: "Resumen del Rol de Host" },
    lessons: [
      { en: "The Host is the first and last impression — warm welcome, accurate seating, and smooth waitlist management.", es: "El Host es la primera y última impresión — bienvenida cálida, asignación de mesas precisa y manejo fluido de la lista de espera." },
      { en: "A good host is aware of the flow of service in the dining room at all times: handling reservations, server seating rotation, and guest wait times, all while welcoming every guest at the door. Hosts may also answer phones, cash out guests, and package carryout orders.", es: "Un buen host está al tanto del flujo de servicio en el comedor en todo momento: maneja reservaciones, rotación de asientos por server, y tiempos de espera, mientras da la bienvenida a cada huésped en la puerta. Los hosts también pueden contestar teléfonos, cobrar cuentas, y empacar pedidos para llevar." },
      { en: "Maitre D vs. Host: a maître d' is similar to a host but with more responsibility — they oversee the entire front-of-house, manage the server staff, and take ownership of guest satisfaction. At Chela's, the Host role focuses on the door, seating, and guest flow, coordinating closely with managers on anything beyond that.", es: "Maître D vs. Host: un maître d' es similar a un host pero con más responsabilidad — supervisa todo el frente de la casa, gestiona al personal de servers, y es responsable de la satisfacción del huésped. En Chela's, el rol de Host se enfoca en la puerta, la asignación de mesas, y el flujo de huéspedes, coordinando de cerca con los gerentes para todo lo demás." }
    ],
    quiz: [
      { q: { en: "Why is the Host role important?", es: "¿Por qué es importante el rol de Host?" }, options: [{ en: "First and last impression for guests", es: "Primera y última impresión para los huéspedes" }, { en: "It isn't", es: "No lo es" }, { en: "Only handles payments", es: "Solo maneja pagos" }, { en: "Only works in the kitchen", es: "Solo trabaja en la cocina" }], correct: 0 },
      { q: { en: "What does the Host manage?", es: "¿Qué gestiona el Host?" }, options: [{ en: "Seating and waitlist", es: "Asientos y lista de espera" }, { en: "Cocktails", es: "Cócteles" }, { en: "Inventory only", es: "Solo inventario" }, { en: "Payroll", es: "Nómina" }], correct: 0 },
      { q: { en: "What kind of welcome should guests receive?", es: "¿Qué tipo de bienvenida deben recibir los huéspedes?" }, options: [{ en: "Warm welcome", es: "Bienvenida cálida" }, { en: "Cold and rushed", es: "Fría y apresurada" }, { en: "None", es: "Ninguna" }, { en: "Only if VIP", es: "Solo si son VIP" }], correct: 0 },
      { q: { en: "How does a Maître D's role differ from a Host's?", es: "¿En qué se diferencia el rol de Maître D del de Host?" }, options: [{ en: "The Maître D oversees the whole front-of-house and server staff", es: "El Maître D supervisa todo el frente de la casa y al personal de servers" }, { en: "There is no difference", es: "No hay diferencia" }, { en: "The Host has more responsibility", es: "El Host tiene más responsabilidad" }, { en: "Maître D only works in the kitchen", es: "El Maître D solo trabaja en la cocina" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "H2",
    track: "HOST",
    category: "Servicio",
    title: { en: "Floor Plan & Seating Rotation", es: "Plano del Piso y Rotación de Asientos" },
    lessons: [
      { en: "Sections (left to right): Florida Room 101–109 · Bar 21–24, 31–34, 35 · Centro 41–48 (48 is the round 8-top) · Jungle 51–53, 61–63, 71–73, 81–85 · Exterior 401–410 and 501–510.", es: "Secciones (de izquierda a derecha): Florida Room 101–109 · Bar 21–24, 31–34, 35 · Centro 41–48 (48 es la mesa redonda de 8) · Jungle 51–53, 61–63, 71–73, 81–85 · Exterior 401–410 y 501–510." },
      { en: "Rotation means seating each server's section in turn so all servers get tables (and tips) fairly. Overseating/double-seating happens when a host seats too many guests in the same section at once — it's frowned upon because it hurts that server's tips and the level of service they can give. Double-seating still happens sometimes (window/booth requests, favorite servers) — the skill is handling it fairly.", es: "La rotación significa sentar por turno cada sección de server para que todos reciban mesas (y propinas) de forma justa. El overseating/double-seating ocurre cuando un host sienta demasiados huéspedes en la misma sección a la vez — se ve mal porque afecta las propinas de ese server y el nivel de servicio que puede dar. El double-seating a veces pasa igual (peticiones de ventana/booth, server favorito) — la habilidad está en manejarlo con justicia." },
      { en: "Support your servers: know every server by name and let them know about a new table in their section, communicate special requests, modify rotation if a section got skipped, stagger seating instead of sitting everyone at once, and help with water/drinks if you double-sat someone. Also know when a server's shift is ending and avoid seating their section right before that.", es: "Apoya a tus servers: conoce a cada uno por nombre y avísale de una mesa nueva en su sección, comunica solicitudes especiales, modifica la rotación si se saltó una sección, escalona la sentada en vez de sentar a todos a la vez, y ayuda con agua/bebidas si le hiciste double-seat a alguien. También debes saber cuándo termina el turno de un server y evitar sentar su sección justo antes de eso." }
    ],
    quiz: [
      { q: { en: "Why rotate seating across sections?", es: "¿Por qué rotar los asientos entre secciones?" }, options: [{ en: "So no server gets overloaded", es: "Para que ningún server se sobrecargue" }, { en: "It doesn't matter", es: "No importa" }, { en: "To fill one section only", es: "Para llenar solo una sección" }, { en: "Random reasons", es: "Razones aleatorias" }], correct: 0 },
      { q: { en: "Which section has the round 8-top?", es: "¿Qué sección tiene la mesa redonda de 8?" }, options: [{ en: "Centro", es: "Centro" }, { en: "Exterior", es: "Exterior" }, { en: "Bar", es: "Bar" }, { en: "Jungle", es: "Jungle" }], correct: 0 },
      { q: { en: "Which section covers 401–410 and 501–510?", es: "¿Qué sección cubre 401–410 y 501–510?" }, options: [{ en: "Exterior", es: "Exterior" }, { en: "Florida Room", es: "Florida Room" }, { en: "Bar", es: "Bar" }, { en: "Centro", es: "Centro" }], correct: 0 },
      { q: { en: "What is overseating/double-seating?", es: "¿Qué es el overseating/double-seating?" }, options: [{ en: "Seating too many guests in the same section at once", es: "Sentar demasiados huéspedes en la misma sección a la vez" }, { en: "Seating guests too slowly", es: "Sentar huéspedes muy lento" }, { en: "A type of table", es: "Un tipo de mesa" }, { en: "Never happens", es: "Nunca ocurre" }], correct: 0 },
      { q: { en: "How can a host support a server who just got double-sat?", es: "¿Cómo puede un host apoyar a un server al que le acaba de hacer double-seat?" }, options: [{ en: "Help with water or taking a drink order", es: "Ayudar con agua o tomando un pedido de bebida" }, { en: "Nothing, it's not the host's problem", es: "Nada, no es problema del host" }, { en: "Seat even more tables in that section", es: "Sentar aún más mesas en esa sección" }, { en: "Tell the guest to leave", es: "Decirle al huésped que se vaya" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "H3",
    track: "HOST",
    category: "Servicio",
    title: { en: "Reservations & Party Policy", es: "Reservaciones y Política de Grupos" },
    lessons: [
      { en: "When taking a reservation (by phone or in person), collect: number of guests, highchairs or boosters needed, wheelchairs/walkers/service animals, table or booth preference, indoor or outdoor preference, dietary restrictions, birthdays or special occasions, exact time and date, and contact information.", es: "Al tomar una reservación (por teléfono o en persona), reúne: número de huéspedes, si necesitan sillas altas o boosters, sillas de ruedas/andadores/animales de servicio, preferencia de mesa o booth, preferencia interior o exterior, restricciones dietéticas, cumpleaños u ocasiones especiales, fecha y hora exactas, y datos de contacto." },
      { en: "Floor management means balancing open tables, reservations, and walk-ins without seating a table too early and leaving it empty, or too late and making a reserved party wait. This is pending final Chela's-specific details: the exact reservation system/software used, max party size without a reservation, and the no-show/cancellation policy — check with a manager for now.", es: "El manejo del piso significa equilibrar mesas libres, reservaciones, y walk-ins sin sentar una mesa muy pronto y dejarla vacía, o muy tarde y hacer esperar a un grupo con reservación. Esto está pendiente de detalles específicos de Chela's: el sistema/software exacto de reservación, el tamaño máximo de grupo sin reservación, y la política de no-show/cancelación — por ahora consulta con un gerente." },
      { en: "Always honor special requests when feasible (window seat, high chair, accessibility needs), and be aware of emergency exit routes so an added chair for a walk-up guest never blocks one.", es: "Siempre honra las solicitudes especiales cuando sea posible (mesa junto a la ventana, silla alta, necesidades de accesibilidad), y ten en cuenta las rutas de salida de emergencia para que una silla extra agregada para un huésped que llegó sin aviso nunca las bloquee." }
    ],
    quiz: [
      { q: { en: "What information should you collect when taking a reservation?", es: "¿Qué información debes reunir al tomar una reservación?" }, options: [{ en: "Party size, seating needs, dietary restrictions, occasion, date/time, contact info", es: "Tamaño del grupo, necesidades de asiento, restricciones dietéticas, ocasión, fecha/hora, datos de contacto" }, { en: "Only the name", es: "Solo el nombre" }, { en: "Nothing specific", es: "Nada en específico" }, { en: "Only the phone number", es: "Solo el número de teléfono" }], correct: 0 },
      { q: { en: "What should you do for a reservation question you're unsure about?", es: "¿Qué debes hacer ante una duda sobre reservaciones?" }, options: [{ en: "Guess", es: "Adivinar" }, { en: "Ask a manager", es: "Preguntar a un gerente" }, { en: "Ignore it", es: "Ignorarla" }, { en: "Ask a guest", es: "Preguntarle a un huésped" }], correct: 1 },
      { q: { en: "What three Chela's-specific details is this module still waiting on?", es: "¿Qué tres detalles específicos de Chela's está esperando este módulo?" }, options: [{ en: "Reservation system, max walk-in party size, no-show policy", es: "Sistema de reservación, tamaño máximo sin reservar, política de no-show" }, { en: "Menu prices", es: "Precios del menú" }, { en: "Uniform colors", es: "Colores de uniforme" }, { en: "Fryer schedule", es: "Horario de freidoras" }], correct: 0 },
      { q: { en: "What must a host always be aware of when adding a chair for a walk-up guest?", es: "¿De qué debe estar siempre al tanto un host al agregar una silla para un huésped inesperado?" }, options: [{ en: "That it doesn't block an emergency exit route", es: "Que no bloquee una ruta de salida de emergencia" }, { en: "Nothing", es: "Nada" }, { en: "The guest's name only", es: "Solo el nombre del huésped" }, { en: "The weather", es: "El clima" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "H4",
    track: "HOST",
    category: "Práctico",
    title: { en: "Greeting & Guest Experience", es: "Saludo y Experiencia del Huésped" },
    lessons: [
      { en: "Make eye contact, smile, and welcome guests warmly the moment they walk in — even if you're mid-task.", es: "Haz contacto visual, sonríe y da la bienvenida cálida al huésped en el momento en que entra — incluso si estás en medio de otra tarea." },
      { en: "Never leave your post unmanned — if you must step away, ask someone to keep a lookout. Be proactive: open the door instead of waiting for guests to reach it. Greet each guest genuinely and vary your greeting so it doesn't sound robotic.", es: "Nunca dejes tu puesto sin cubrir — si debes alejarte, pídele a alguien que esté pendiente. Sé proactivo: abre la puerta en vez de esperar a que el huésped llegue a ella. Saluda a cada huésped genuinamente y varía el saludo para que no suene robótico." },
      { en: "Respect the order of arrival — first come, first served is what guests expect, and skipping someone's turn is one of the fastest ways to get a complaint. Avoid personal chit-chat with coworkers when guests are present — it can distract you from noticing someone walk in, and guests should always feel like the top priority.", es: "Respeta el orden de llegada — primero en llegar, primero en ser atendido, es lo que los huéspedes esperan, y saltarse el turno de alguien es una de las formas más rápidas de generar una queja. Evita platicar de temas personales con compañeros cuando hay huéspedes presentes — te puede distraer de notar a alguien entrando, y los huéspedes siempre deben sentirse como la prioridad." }
    ],
    quiz: [
      { q: { en: "When should a guest be greeted?", es: "¿Cuándo debe saludarse a un huésped?" }, options: [{ en: "The moment they walk in", es: "En el momento en que entra" }, { en: "Whenever convenient", es: "Cuando sea conveniente" }, { en: "Only if not busy", es: "Solo si no hay mucho trabajo" }, { en: "Never", es: "Nunca" }], correct: 0 },
      { q: { en: "What communicates warmth when greeting?", es: "¿Qué comunica calidez al saludar?" }, options: [{ en: "Eye contact and a smile", es: "Contacto visual y sonrisa" }, { en: "Looking away", es: "Mirar hacia otro lado" }, { en: "Silence", es: "Silencio" }, { en: "Rushing them", es: "Apresurarlos" }], correct: 0 },
      { q: { en: "Should you greet a guest even if you're mid-task?", es: "¿Debes saludar a un huésped aunque estés en medio de otra tarea?" }, options: [{ en: "Yes", es: "Sí" }, { en: "No", es: "No" }, { en: "Only if it's slow", es: "Solo si está tranquilo" }, { en: "Only VIPs", es: "Solo VIPs" }], correct: 0 },
      { q: { en: "What should you do if you must step away from the host stand?", es: "¿Qué debes hacer si tienes que alejarte del podio de host?" }, options: [{ en: "Ask someone to keep a lookout", es: "Pedirle a alguien que esté pendiente" }, { en: "Leave the post unmanned", es: "Dejar el puesto sin cubrir" }, { en: "Lock the door", es: "Cerrar la puerta con llave" }, { en: "Nothing, it's fine", es: "Nada, está bien" }], correct: 0 },
      { q: { en: "What order should guests be seated in?", es: "¿En qué orden deben sentarse los huéspedes?" }, options: [{ en: "First come, first served", es: "Primero en llegar, primero en ser atendido" }, { en: "Whoever tips more", es: "Quien deje más propina" }, { en: "Random order", es: "Orden aleatorio" }, { en: "Largest party first always", es: "El grupo más grande primero, siempre" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "H5",
    track: "HOST",
    category: "Servicio",
    title: { en: "Waitlist Management", es: "Manejo de Lista de Espera" },
    lessons: [
      { en: "Give realistic wait times, keep the waitlist updated in real time, and communicate proactively with waiting guests.", es: "Da tiempos de espera realistas, mantén la lista de espera actualizada en tiempo real, y comunica proactivamente con los huéspedes que esperan." },
      { en: "When tables are full, start taking names: guest name, party size, and seating preference. On a busy night, assign one host to the door to greet and log names, while another monitors the dining room and seats guests. \"First available\" means a guest has no table preference and can be seated more quickly — explain this option to waiting guests.", es: "Cuando las mesas estén llenas, empieza a tomar nombres: nombre del huésped, tamaño del grupo, y preferencia de asiento. En una noche ocupada, asigna a un host a la puerta para saludar y anotar nombres, mientras otro supervisa el comedor y sienta a los huéspedes. \"Primera disponible\" significa que el huésped no tiene preferencia de mesa y puede sentarse más rápido — explica esta opción a los huéspedes que esperan." },
      { en: "Observe the flow of service (drinks, ordering, payment stage) at each table to estimate realistic wait times, and work closely with bussers — flag which tables should be cleared first based on who's waiting (e.g., don't waste time on small tables while a party of six waits).", es: "Observa el flujo de servicio (bebidas, pedido, etapa de pago) en cada mesa para estimar tiempos de espera realistas, y trabaja de cerca con los bussers — indícales qué mesas deben limpiarse primero según quién está esperando (ej. no perder tiempo en mesas pequeñas mientras espera un grupo de seis)." }
    ],
    quiz: [
      { q: { en: "What kind of wait times should you give?", es: "¿Qué tipo de tiempos de espera debes dar?" }, options: [{ en: "Realistic", es: "Realistas" }, { en: "Always short, even if wrong", es: "Siempre cortos, aunque sean incorrectos" }, { en: "Random", es: "Aleatorios" }, { en: "No estimate at all", es: "Ninguna estimación" }], correct: 0 },
      { q: { en: "How should the waitlist be kept?", es: "¿Cómo debe mantenerse la lista de espera?" }, options: [{ en: "Updated in real time", es: "Actualizada en tiempo real" }, { en: "Updated once a day", es: "Actualizada una vez al día" }, { en: "Not tracked", es: "Sin seguimiento" }, { en: "On paper only, never checked", es: "Solo en papel, nunca revisada" }], correct: 0 },
      { q: { en: "Should you proactively update waiting guests?", es: "¿Debes actualizar proactivamente a los huéspedes que esperan?" }, options: [{ en: "Yes", es: "Sí" }, { en: "No", es: "No" }, { en: "Only if they ask", es: "Solo si preguntan" }, { en: "Never", es: "Nunca" }], correct: 0 },
      { q: { en: "What does \"first available\" mean?", es: "¿Qué significa \"primera disponible\"?" }, options: [{ en: "The guest has no table preference and can be seated more quickly", es: "El huésped no tiene preferencia de mesa y puede sentarse más rápido" }, { en: "The first guest of the day", es: "El primer huésped del día" }, { en: "A VIP table", es: "Una mesa VIP" }, { en: "The cheapest table", es: "La mesa más barata" }], correct: 0 },
      { q: { en: "How should hosts work with bussers during a busy wait?", es: "¿Cómo deben trabajar los hosts con los bussers durante una espera ocupada?" }, options: [{ en: "Flag which tables to clear first based on who's waiting", es: "Indicar qué mesas limpiar primero según quién espera" }, { en: "Not communicate at all", es: "No comunicarse en absoluto" }, { en: "Let bussers decide randomly", es: "Dejar que los bussers decidan al azar" }, { en: "Ignore the waitlist entirely", es: "Ignorar la lista de espera por completo" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "H6",
    track: "HOST",
    category: "Servicio",
    title: { en: "Phone Etiquette", es: "Etiqueta Telefónica" },
    lessons: [
      { en: "Answer within 3 rings, greet warmly with the restaurant name, speak clearly, and confirm details before hanging up.", es: "Contesta dentro de 3 timbres, saluda cálidamente con el nombre del restaurante, habla con claridad, y confirma los detalles antes de colgar." }
    ],
    quiz: [
      { q: { en: "Within how many rings should the phone be answered?", es: "¿Dentro de cuántos timbres debe contestarse el teléfono?" }, options: [{ en: "3", es: "3" }, { en: "10", es: "10" }, { en: "It doesn't matter", es: "No importa" }, { en: "1", es: "1" }], correct: 0 },
      { q: { en: "What should be confirmed before hanging up?", es: "¿Qué debe confirmarse antes de colgar?" }, options: [{ en: "The details", es: "Los detalles" }, { en: "Nothing", es: "Nada" }, { en: "Only the caller's name", es: "Solo el nombre del que llama" }, { en: "The weather", es: "El clima" }], correct: 0 },
      { q: { en: "How should calls be greeted?", es: "¿Cómo deben saludarse las llamadas?" }, options: [{ en: "Warmly, with the restaurant name", es: "Cálidamente, con el nombre del restaurante" }, { en: "Silently", es: "En silencio" }, { en: "Rudely", es: "Groseramente" }, { en: "With hold music only", es: "Solo con música de espera" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "H7",
    track: "HOST",
    category: "Servicio",
    title: { en: "Coordinating with the FOH Team", es: "Coordinación con el Equipo de FOH" },
    lessons: [
      { en: "Communicate large parties, VIPs, or special occasions to servers and managers ahead of time so the team can prepare.", es: "Comunica grupos grandes, VIPs, u ocasiones especiales a servers y gerentes con anticipación para que el equipo pueda prepararse." },
      { en: "If more than one host is seating guests at the same time, stay in sync — pay attention to where guests are being seated so two hosts don't seat the same table and cause confusion.", es: "Si hay más de un host sentando huéspedes al mismo tiempo, mantente sincronizado — presta atención a dónde se está sentando a los huéspedes para que dos hosts no sienten la misma mesa y causen confusión." }
    ],
    quiz: [
      { q: { en: "What should be communicated ahead of time?", es: "¿Qué debe comunicarse con anticipación?" }, options: [{ en: "Large parties, VIPs, special occasions", es: "Grupos grandes, VIPs, ocasiones especiales" }, { en: "Nothing", es: "Nada" }, { en: "Only complaints", es: "Solo quejas" }, { en: "Only the weather", es: "Solo el clima" }], correct: 0 },
      { q: { en: "Who should be informed of a VIP arrival?", es: "¿Quién debe ser informado de la llegada de un VIP?" }, options: [{ en: "Servers and managers", es: "Servers y gerentes" }, { en: "No one", es: "Nadie" }, { en: "Only the kitchen", es: "Solo la cocina" }, { en: "Only the valet", es: "Solo el valet" }], correct: 0 },
      { q: { en: "Why give the team advance notice?", es: "¿Por qué avisar al equipo con anticipación?" }, options: [{ en: "So they can prepare", es: "Para que puedan prepararse" }, { en: "It's not needed", es: "No es necesario" }, { en: "Only for show", es: "Solo por apariencia" }, { en: "To confuse the team", es: "Para confundir al equipo" }], correct: 0 },
      { q: { en: "What should multiple hosts do when seating guests at the same time?", es: "¿Qué deben hacer varios hosts al sentar huéspedes al mismo tiempo?" }, options: [{ en: "Stay in sync to avoid double-booking a table", es: "Mantenerse sincronizados para evitar doble-reservar una mesa" }, { en: "Work completely independently", es: "Trabajar completamente independientes" }, { en: "Ignore each other", es: "Ignorarse entre sí" }, { en: "Only one host is ever allowed", es: "Solo se permite un host a la vez" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "H8",
    track: "HOST",
    category: "Práctico",
    title: { en: "Carryout Orders & Checkout Station", es: "Pedidos Para Llevar y Estación de Cobro" },
    lessons: [
      { en: "Carryout guests have menu questions too — hosts should be as knowledgeable about the menu as servers. Know how to enter takeout and curbside orders into the POS accurately.", es: "Los huéspedes de pedidos para llevar también tienen preguntas sobre el menú — los hosts deben conocerlo tan bien como los servers. Sepan cómo ingresar pedidos para llevar y curbside en el POS con precisión." },
      { en: "When packaging takeout orders, double-check every dish for accuracy and use the right containers. Don't forget extras like straws, utensils, and condiments — guests notice when these are missing.", es: "Al empacar pedidos para llevar, verifica cada plato para que sea correcto y usa los contenedores adecuados. No olvides los extras como popotes, cubiertos, y aderezos — los huéspedes notan cuando faltan." },
      { en: "At the checkout station: keep the right receipt paper stocked and know how to reload it quickly (running out mid-rush is a rookie mistake). Check large bills for counterfeits. Know all active coupon/discount campaigns and how to apply them correctly to a guest's bill.", es: "En la estación de cobro: mantén el papel de recibos correcto abastecido y sepan recargarlo rápido (quedarse sin papel a media hora pico es un error de principiante). Revisa los billetes grandes por si son falsos. Conoce todas las campañas de cupones/descuentos activas y cómo aplicarlas correctamente a la cuenta del huésped." }
    ],
    quiz: [
      { q: { en: "Should hosts know the menu as well as servers do for carryout questions?", es: "¿Deben los hosts conocer el menú tan bien como los servers para preguntas de pedidos para llevar?" }, options: [{ en: "Yes", es: "Sí" }, { en: "No", es: "No" }, { en: "Only for dessert", es: "Solo para postres" }, { en: "It doesn't matter", es: "No importa" }], correct: 0 },
      { q: { en: "What should you double-check when packaging a takeout order?", es: "¿Qué debes verificar al empacar un pedido para llevar?" }, options: [{ en: "That every dish is accurate and includes extras like utensils/condiments", es: "Que cada plato sea correcto e incluya extras como cubiertos/aderezos" }, { en: "Nothing, just hand it over", es: "Nada, solo entregarlo" }, { en: "Only the total price", es: "Solo el precio total" }, { en: "Only the guest's name", es: "Solo el nombre del huésped" }], correct: 0 },
      { q: { en: "What's a common rookie mistake at the checkout station?", es: "¿Cuál es un error común de principiante en la estación de cobro?" }, options: [{ en: "Running out of receipt paper mid-rush", es: "Quedarse sin papel de recibos a media hora pico" }, { en: "Being too polite", es: "Ser demasiado educado" }, { en: "Smiling too much", es: "Sonreír demasiado" }, { en: "Counting change too carefully", es: "Contar el cambio con demasiado cuidado" }], correct: 0 },
      { q: { en: "What should you check when accepting large cash bills?", es: "¿Qué debes revisar al aceptar billetes grandes en efectivo?" }, options: [{ en: "For counterfeits", es: "Que no sean falsos" }, { en: "Nothing", es: "Nada" }, { en: "The serial number for fun", es: "El número de serie por curiosidad" }, { en: "Only the year printed", es: "Solo el año impreso" }], correct: 0 }
    ],
    pass: 80
  },
  // ===================== MANAGER (8) =====================
  {
    id: "MG1",
    track: "MANAGER",
    category: "Servicio",
    title: { en: "Leadership & Role Overview", es: "Liderazgo y Resumen del Rol" },
    lessons: [
      { en: "Managers set the tone for the shift — lead by example, support the team, and hold standards consistently.", es: "Los gerentes marcan el tono del turno — lideran con el ejemplo, apoyan al equipo, y mantienen los estándares de forma consistente." },
      { en: "As Assistant General Manager (AGM), be visible and available on the floor during day shifts to handle anything that comes up with guests or the team. Supervise service quality and hospitality standards, and support the team during peak hours, stepping in to resolve conflicts as they arise.", es: "Como Asistente del Gerente General (AGM), mantente visible y disponible en el piso durante los turnos diurnos para manejar cualquier eventualidad con clientes o equipo. Supervisa la calidad de servicio y los estándares de hospitalidad, y apoya al equipo durante horas pico, interviniendo para resolver conflictos si surgen." },
      { en: "Maintain constant communication with the General Manager on operational topics, staffing, and special events. Participate in leadership meetings and help implement new policies across the team.", es: "Mantén comunicación constante con el Gerente General sobre temas operativos, personal, y eventos especiales. Participa en reuniones de liderazgo y ayuda a implementar nuevas políticas en el equipo." },
      { en: "Prepare a brief daily report covering incidents, sales, and team performance. Monitor online reviews and coordinate follow-up with any servers mentioned by name.", es: "Prepara un pequeño informe diario que cubra incidencias, ventas, y rendimiento del equipo. Monitorea reseñas en línea y coordina el seguimiento con los servers mencionados por nombre." }
    ],
    quiz: [
      { q: { en: "What sets the tone for a shift?", es: "¿Qué marca el tono de un turno?" }, options: [{ en: "Manager leadership", es: "El liderazgo del gerente" }, { en: "Nothing in particular", es: "Nada en particular" }, { en: "Only the menu", es: "Solo el menú" }, { en: "Only the weather", es: "Solo el clima" }], correct: 0 },
      { q: { en: "How should standards be held?", es: "¿Cómo deben mantenerse los estándares?" }, options: [{ en: "Consistently", es: "De forma consistente" }, { en: "Only when convenient", es: "Solo cuando sea conveniente" }, { en: "Randomly", es: "Al azar" }, { en: "Never enforced", es: "Nunca aplicados" }], correct: 0 },
      { q: { en: "What does leading by example mean?", es: "¿Qué significa liderar con el ejemplo?" }, options: [{ en: "Modeling the behavior you expect", es: "Modelar el comportamiento que esperas" }, { en: "Giving orders only", es: "Solo dar órdenes" }, { en: "Avoiding the floor", es: "Evitar el piso" }, { en: "Doing nothing", es: "No hacer nada" }], correct: 0 },
      { q: { en: "Where should the AGM be during day shifts?", es: "¿Dónde debe estar el AGM durante los turnos diurnos?" }, options: [{ en: "Visible and available on the floor", es: "Visible y disponible en el piso" }, { en: "In the office at all times", es: "En la oficina todo el tiempo" }, { en: "Off-site", es: "Fuera del restaurante" }, { en: "Nowhere specific", es: "En ningún lugar en específico" }], correct: 0 },
      { q: { en: "What should the AGM prepare daily?", es: "¿Qué debe preparar el AGM a diario?" }, options: [{ en: "A brief report on incidents, sales, and team performance", es: "Un pequeño informe de incidencias, ventas, y rendimiento del equipo" }, { en: "Nothing", es: "Nada" }, { en: "Only a grocery list", es: "Solo una lista de compras" }, { en: "A weekly report only", es: "Solo un informe semanal" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "MG2",
    track: "MANAGER",
    category: "Servicio",
    title: { en: "Staff Scheduling & Training Oversight", es: "Programación de Personal y Supervisión de Entrenamiento" },
    lessons: [
      { en: "Track each trainee's progress through Chela's Academy and make sure new hires complete CORE + their track before working solo.", es: "Da seguimiento al progreso de cada trainee en Chela's Academy y asegúrate de que los nuevos empleados completen CORE + su track antes de trabajar solos." },
      { en: "Create and publish weekly schedules for FOH and BOH staff. Ensure adequate coverage for every shift, including holidays and special events. Review and adjust schedules for last-minute absences or changes.", es: "Crea y publica los horarios semanales del personal FOH y BOH. Asegura cobertura adecuada para todos los turnos, incluyendo días festivos y eventos especiales. Revisa y ajusta los horarios en caso de ausencias o cambios de última hora." },
      { en: "Supervise time-clock records: verify that all employees clock in, out, and take breaks correctly in the system. Correct clock errors and communicate any inconsistencies to the HR department.", es: "Supervisa los registros de reloj: verifica que todos los empleados registren correctamente sus entradas, salidas, y descansos en el sistema. Corrige errores de reloj y comunica cualquier inconsistencia al Departamento de Recursos Humanos." },
      { en: "Ensure new employees receive proper training, and reinforce service, cleanliness, and hospitality standards continuously — not just during onboarding. Provide constructive, ongoing feedback to the team.", es: "Asegúrate de que los nuevos empleados reciban la capacitación adecuada, y refuerza los estándares de servicio, limpieza, y hospitalidad de forma continua — no solo durante el onboarding. Proporciona retroalimentación constructiva y continua al equipo." }
    ],
    quiz: [
      { q: { en: "What should be completed before a new hire works solo?", es: "¿Qué debe completarse antes de que un nuevo empleado trabaje solo?" }, options: [{ en: "CORE + their role track", es: "CORE + su track de rol" }, { en: "Nothing", es: "Nada" }, { en: "Only CORE", es: "Solo CORE" }, { en: "Only their track", es: "Solo su track" }], correct: 0 },
      { q: { en: "How should managers track training?", es: "¿Cómo deben los gerentes dar seguimiento al entrenamiento?" }, options: [{ en: "Via Chela's Academy progress", es: "Mediante el progreso en Chela's Academy" }, { en: "Not at all", es: "De ninguna forma" }, { en: "Guessing", es: "Adivinando" }, { en: "Only verbally, once", es: "Solo verbalmente, una vez" }], correct: 0 },
      { q: { en: "Who is responsible for training oversight?", es: "¿Quién es responsable de la supervisión del entrenamiento?" }, options: [{ en: "Managers", es: "Gerentes" }, { en: "No one", es: "Nadie" }, { en: "Guests", es: "Huéspedes" }, { en: "Vendors", es: "Proveedores" }], correct: 0 },
      { q: { en: "If there's a clock error inconsistency, who should be notified?", es: "Si hay una inconsistencia de error de reloj, ¿a quién debe notificarse?" }, options: [{ en: "The HR department", es: "El Departamento de Recursos Humanos" }, { en: "No one", es: "A nadie" }, { en: "The guest", es: "Al huésped" }, { en: "A vendor", es: "A un proveedor" }], correct: 0 },
      { q: { en: "What must be ensured for every shift, including holidays?", es: "¿Qué debe asegurarse para cada turno, incluyendo días festivos?" }, options: [{ en: "Adequate staffing coverage", es: "Cobertura adecuada de personal" }, { en: "Nothing special", es: "Nada especial" }, { en: "Extra desserts", es: "Postres extra" }, { en: "Reduced hours always", es: "Horas reducidas siempre" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "MG3",
    track: "MANAGER",
    category: "Servicio",
    title: { en: "Opening & Closing Management Duties", es: "Tareas de Gerencia de Apertura y Cierre" },
    lessons: [
      { en: "Opening: walk the floor, check staffing and stock. Closing: reconcile POS, secure cash/alcohol, and complete the closing checklist.", es: "Apertura: recorre el piso, revisa personal y stock. Cierre: concilia el POS, asegura efectivo/alcohol, y completa la lista de cierre." },
      { en: "Supervise that mise en place and opening/closing shift protocols are followed by the team. Verify that inventory is received and logged correctly against invoices.", es: "Supervisa que se cumplan los protocolos de mise en place y de apertura/cierre de turno por parte del equipo. Verifica que el inventario se reciba y registre correctamente contra las facturas." },
      { en: "Support cost control: monitor portion sizes, food waste, and product rotation (FIFO) to protect margins without compromising quality.", es: "Apoya el control de costos: monitorea el tamaño de las porciones, el desperdicio de comida, y la rotación de productos (FIFO) para proteger los márgenes sin comprometer la calidad." }
    ],
    quiz: [
      { q: { en: "What should a manager do when opening?", es: "¿Qué debe hacer un gerente al abrir?" }, options: [{ en: "Walk the floor, check staffing and stock", es: "Recorrer el piso, revisar personal y stock" }, { en: "Nothing", es: "Nada" }, { en: "Leave immediately", es: "Irse de inmediato" }, { en: "Only check the register", es: "Solo revisar la caja" }], correct: 0 },
      { q: { en: "What should be secured at closing?", es: "¿Qué debe asegurarse al cierre?" }, options: [{ en: "Cash and alcohol", es: "Efectivo y alcohol" }, { en: "Nothing", es: "Nada" }, { en: "Only the front door", es: "Solo la puerta principal" }, { en: "Only the patio", es: "Solo el patio" }], correct: 0 },
      { q: { en: "What should be reconciled at closing?", es: "¿Qué debe conciliarse al cierre?" }, options: [{ en: "The POS", es: "El POS" }, { en: "Nothing", es: "Nada" }, { en: "Only tips", es: "Solo las propinas" }, { en: "Only the schedule", es: "Solo el horario" }], correct: 0 },
      { q: { en: "What should be verified when inventory arrives?", es: "¿Qué debe verificarse cuando llega el inventario?" }, options: [{ en: "That it's received and logged correctly against invoices", es: "Que se reciba y registre correctamente contra las facturas" }, { en: "Nothing", es: "Nada" }, { en: "Only the delivery driver's name", es: "Solo el nombre del repartidor" }, { en: "Only the box color", es: "Solo el color de la caja" }], correct: 0 },
      { q: { en: "What helps protect margins in cost control?", es: "¿Qué ayuda a proteger los márgenes en el control de costos?" }, options: [{ en: "Monitoring portions, waste, and product rotation (FIFO)", es: "Monitorear porciones, desperdicio, y rotación de productos (FIFO)" }, { en: "Ignoring waste", es: "Ignorar el desperdicio" }, { en: "Ordering more than needed always", es: "Pedir siempre más de lo necesario" }, { en: "Nothing in particular", es: "Nada en particular" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "MG4",
    track: "MANAGER",
    category: "Servicio",
    title: { en: "Guest Complaints & Escalations", es: "Quejas de Huéspedes y Escalaciones" },
    lessons: [
      { en: "Take escalated complaints personally and calmly, empower the team to solve small issues, and document repeat problems.", es: "Atiende personalmente y con calma las quejas escaladas, empodera al equipo para resolver problemas pequeños, y documenta problemas recurrentes." },
      { en: "Also supervise the overall guest experience: ambiance (music, cleanliness, presentation of the space), and the presentation/professionalism of the team on the floor.", es: "Supervisa también la experiencia general del huésped: el ambiente (música, limpieza, presentación del espacio), y la presentación/profesionalismo del equipo en el piso." },
      { en: "Monitor online reviews regularly and coordinate a respectful follow-up with any team members mentioned by name, whether the mention is positive or negative.", es: "Monitorea las reseñas en línea regularmente y coordina un seguimiento respetuoso con cualquier miembro del equipo mencionado por nombre, ya sea que la mención sea positiva o negativa." }
    ],
    quiz: [
      { q: { en: "How should escalated complaints be handled?", es: "¿Cómo deben manejarse las quejas escaladas?" }, options: [{ en: "Personally and calmly", es: "Personalmente y con calma" }, { en: "Ignored", es: "Ignoradas" }, { en: "Passed to a guest", es: "Pasadas a otro huésped" }, { en: "Argued", es: "Discutidas" }], correct: 0 },
      { q: { en: "Should the team be empowered to solve small issues?", es: "¿Debe empoderarse al equipo para resolver problemas pequeños?" }, options: [{ en: "Yes", es: "Sí" }, { en: "No", es: "No" }, { en: "Only managers can act", es: "Solo los gerentes pueden actuar" }, { en: "Never", es: "Nunca" }], correct: 0 },
      { q: { en: "What should be done with repeat problems?", es: "¿Qué debe hacerse con problemas recurrentes?" }, options: [{ en: "Documented", es: "Documentarlos" }, { en: "Ignored", es: "Ignorarlos" }, { en: "Forgotten", es: "Olvidarlos" }, { en: "Hidden", es: "Ocultarlos" }], correct: 0 },
      { q: { en: "What aspects of ambiance should a manager supervise?", es: "¿Qué aspectos del ambiente debe supervisar un gerente?" }, options: [{ en: "Music, cleanliness, and presentation of the space", es: "Música, limpieza, y presentación del espacio" }, { en: "Nothing, it's not their job", es: "Nada, no es su trabajo" }, { en: "Only the menu prices", es: "Solo los precios del menú" }, { en: "Only the parking lot", es: "Solo el estacionamiento" }], correct: 0 },
      { q: { en: "What should managers do with online reviews mentioning staff by name?", es: "¿Qué deben hacer los gerentes con reseñas en línea que mencionan a personal por nombre?" }, options: [{ en: "Monitor them and follow up respectfully with that team member", es: "Monitorearlas y dar seguimiento respetuoso con ese miembro del equipo" }, { en: "Ignore all reviews", es: "Ignorar todas las reseñas" }, { en: "Only respond to negative ones", es: "Solo responder a las negativas" }, { en: "Delete them", es: "Eliminarlas" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "MG5",
    track: "MANAGER",
    category: "Servicio",
    title: { en: "POS Manager Functions", es: "Funciones de Gerente en el POS" },
    lessons: [
      { en: "Managers can process voids, comps, and overrides in Toast — always log the reason and keep authority limited to legitimate business needs.", es: "Los gerentes pueden procesar anulaciones, cortesías y anulaciones especiales en Toast — siempre registra la razón y limita la autoridad a necesidades legítimas del negocio." }
    ],
    quiz: [
      { q: { en: "What can managers process in Toast that staff can't?", es: "¿Qué pueden procesar los gerentes en Toast que el personal no puede?" }, options: [{ en: "Voids, comps, overrides", es: "Anulaciones, cortesías, anulaciones especiales" }, { en: "Nothing extra", es: "Nada adicional" }, { en: "Only printing receipts", es: "Solo imprimir recibos" }, { en: "Only clocking in", es: "Solo marcar entrada" }], correct: 0 },
      { q: { en: "Should the reason for a void/comp be logged?", es: "¿Debe registrarse la razón de una anulación/cortesía?" }, options: [{ en: "Yes, always", es: "Sí, siempre" }, { en: "No", es: "No" }, { en: "Only sometimes", es: "Solo a veces" }, { en: "Never necessary", es: "Nunca es necesario" }], correct: 0 },
      { q: { en: "Should override authority be used freely for any reason?", es: "¿Debe usarse la autoridad de anulación libremente por cualquier razón?" }, options: [{ en: "No, only for legitimate business needs", es: "No, solo para necesidades legítimas del negocio" }, { en: "Yes, anytime", es: "Sí, en cualquier momento" }, { en: "Only on weekends", es: "Solo los fines de semana" }, { en: "Doesn't matter", es: "No importa" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "MG6",
    track: "MANAGER",
    category: "Alcohol",
    title: { en: "Responsible Alcohol Service — Manager", es: "Servicio Responsable de Alcohol — Gerente" },
    lessons: [
      { en: "Official policy FOH-BAR-ALC-001 (Florida). Managers are the final authority on carding disputes and cut-off overrides — only the Manager on Duty (MOD) may override a cut-off.", es: "Política oficial FOH-BAR-ALC-001 (Florida). Los gerentes son la autoridad final en disputas de identificación y anulaciones de corte — solo el Gerente en Turno (MOD) puede anular un corte." },
      { en: "Managers must complete Responsible Vendor Act (RVA) training within 15 days of hire, with a refresher every 4 months.", es: "Los gerentes deben completar el entrenamiento de la Ley de Vendedor Responsable (RVA) dentro de 15 días desde su contratación, con repaso cada 4 meses." },
      { en: "Alcohol service hours follow the most restrictive applicable rule, including Miami Lakes hours where relevant. Managers are responsible for enforcing this.", es: "Las horas de servicio de alcohol siguen la regla más restrictiva aplicable, incluyendo el horario de Miami Lakes cuando corresponda. Los gerentes son responsables de hacerlo cumplir." },
      { en: "Every alcoholic drink rung into Toast is a manager responsibility to audit periodically for compliance.", es: "Cada bebida alcohólica registrada en Toast es responsabilidad del gerente auditarla periódicamente para cumplimiento." },
      { en: "Guest Intoxication Policy — as the manager, you take the lead the moment a supervisor or team member alerts you. Confirm the signs (slurred speech, unsteady balance, aggressive/emotional behavior, difficulty focusing, strong smell of alcohol) and direct staff to stop serving alcohol immediately.", es: "Política de Intoxicación de Huéspedes — como gerente, tomas el mando en cuanto un supervisor o compañero te alerta. Confirma las señales (habla arrastrada, problemas de equilibrio, comportamiento agresivo/emocional, dificultad para enfocarse, fuerte olor a alcohol) y dirige al equipo para que dejen de servir alcohol de inmediato." },
      { en: "Ensure the team offers water and food, and evaluate the guest's transportation plans. If they intend to drive, recommend against it and offer to arrange a ride (Uber/Lyft/taxi). If the situation escalates or they insist on driving, you step in firmly but respectfully — this is ultimately the manager's call.", es: "Asegúrate de que el equipo ofrezca agua y comida, y evalúa los planes de transporte del huésped. Si piensa manejar, recomiéndale que no lo haga y ofrece ayudarle a conseguir un viaje (Uber/Lyft/taxi). Si la situación escala o insiste en manejar, debes intervenir con firmeza pero con respeto — esta es, en última instancia, decisión del gerente." },
      { en: "You are responsible for completing (or reviewing) the written incident report: date/time, staff involved, actions taken, and transportation arranged. For guests with recurring intoxication issues, you may decide to limit or refuse future service per local laws and restaurant policy.", es: "Eres responsable de completar (o revisar) el reporte escrito del incidente: fecha/hora, personal involucrado, acciones tomadas, y transporte gestionado. Para huéspedes con problemas recurrentes de intoxicación, puedes decidir limitar o rechazar el servicio futuro según las leyes locales y la política del restaurante." }
    ],
    quiz: [
      { q: { en: "Who is the final authority on cut-off overrides?", es: "¿Quién es la autoridad final para anular un corte?" }, options: [{ en: "The Manager on Duty (MOD)", es: "El Gerente en Turno (MOD)" }, { en: "Any server", es: "Cualquier server" }, { en: "The guest", es: "El huésped" }, { en: "The bartender", es: "El bartender" }], correct: 0 },
      { q: { en: "How soon must managers complete RVA training?", es: "¿En cuánto tiempo deben los gerentes completar el entrenamiento RVA?" }, options: [{ en: "15 days of hire", es: "15 días desde la contratación" }, { en: "90 days", es: "90 días" }, { en: "1 year", es: "1 año" }, { en: "Never", es: "Nunca" }], correct: 0 },
      { q: { en: "How often is the manager RVA refresher required?", es: "¿Cada cuánto se requiere el repaso de RVA para gerentes?" }, options: [{ en: "Every 4 months", es: "Cada 4 meses" }, { en: "Every 5 years", es: "Cada 5 años" }, { en: "Once only", es: "Solo una vez" }, { en: "Never", es: "Nunca" }], correct: 0 },
      { q: { en: "What determines alcohol service hours?", es: "¿Qué determina las horas de servicio de alcohol?" }, options: [{ en: "The most restrictive applicable rule", es: "La regla más restrictiva aplicable" }, { en: "Whatever is easiest", es: "Lo que sea más fácil" }, { en: "Guest preference", es: "Preferencia del huésped" }, { en: "No rule applies", es: "No aplica ninguna regla" }], correct: 0 },
      { q: { en: "Who audits Toast for alcohol-service compliance?", es: "¿Quién audita Toast para cumplimiento del servicio de alcohol?" }, options: [{ en: "Managers", es: "Gerentes" }, { en: "No one", es: "Nadie" }, { en: "Guests", es: "Huéspedes" }, { en: "Vendors", es: "Proveedores" }], correct: 0 },
      { q: { en: "Who ultimately decides how to handle an escalating intoxicated guest who insists on driving?", es: "¿Quién decide finalmente cómo manejar a un huésped intoxicado que escala e insiste en manejar?" }, options: [{ en: "The manager, stepping in firmly but respectfully", es: "El gerente, interviniendo con firmeza pero con respeto" }, { en: "Any coworker nearby", es: "Cualquier compañero cerca" }, { en: "The guest decides alone", es: "El huésped decide solo" }, { en: "No one needs to intervene", es: "Nadie necesita intervenir" }], correct: 0 },
      { q: { en: "Who is responsible for the written incident report after an intoxication situation?", es: "¿Quién es responsable del reporte escrito después de una situación de intoxicación?" }, options: [{ en: "The manager", es: "El gerente" }, { en: "No one, it's optional", es: "Nadie, es opcional" }, { en: "The guest", es: "El huésped" }, { en: "A random employee", es: "Un empleado al azar" }], correct: 0 },
      { q: { en: "What can management decide for a guest with recurring intoxication issues?", es: "¿Qué puede decidir la gerencia para un huésped con problemas recurrentes de intoxicación?" }, options: [{ en: "Limit or refuse future service per local laws and policy", es: "Limitar o rechazar el servicio futuro según leyes locales y política" }, { en: "Nothing can be done", es: "No se puede hacer nada" }, { en: "Always ban them immediately on the first issue", es: "Siempre prohibirles la entrada desde el primer problema" }, { en: "Ignore it", es: "Ignorarlo" }], correct: 0 }
    ],
    pass: 100,
    critical: true
  },
  {
    id: "MG7",
    track: "MANAGER",
    category: "Servicio",
    title: { en: "Inventory & Vendor Management", es: "Inventario y Gestión de Proveedores" },
    lessons: [
      { en: "Track stock levels, place orders proactively, and verify deliveries against invoices before accepting them.", es: "Da seguimiento a los niveles de stock, haz pedidos proactivamente, y verifica las entregas contra las facturas antes de aceptarlas." }
    ],
    quiz: [
      { q: { en: "What should be verified before accepting a delivery?", es: "¿Qué debe verificarse antes de aceptar una entrega?" }, options: [{ en: "The invoice matches", es: "Que la factura coincida" }, { en: "Nothing", es: "Nada" }, { en: "Only the box color", es: "Solo el color de la caja" }, { en: "Only the driver's name", es: "Solo el nombre del conductor" }], correct: 0 },
      { q: { en: "How should orders be placed?", es: "¿Cómo deben hacerse los pedidos?" }, options: [{ en: "Proactively", es: "Proactivamente" }, { en: "Only when completely out", es: "Solo cuando se acabe todo" }, { en: "Randomly", es: "Al azar" }, { en: "Never", es: "Nunca" }], correct: 0 },
      { q: { en: "What should managers track regularly?", es: "¿Qué deben rastrear los gerentes regularmente?" }, options: [{ en: "Stock levels", es: "Niveles de stock" }, { en: "Nothing", es: "Nada" }, { en: "Only tips", es: "Solo propinas" }, { en: "Only the weather", es: "Solo el clima" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "MG8",
    track: "MANAGER",
    category: "Práctico",
    title: { en: "Reviewing Team Progress in Chela's Academy", es: "Revisión del Progreso del Equipo en Chela's Academy" },
    lessons: [
      { en: "Use the 'Progreso' admin table in the app to see each team member's module completion and export a CSV for records.", es: "Usa la tabla de administración 'Progreso' en la app para ver la finalización de módulos de cada miembro del equipo y exportar un CSV para tus registros." },
      { en: "If a Google Sheet sync is set up, progress updates automatically there too — check the README for setup steps.", es: "Si se configuró la sincronización con Google Sheet, el progreso también se actualiza allí automáticamente — revisa el README para los pasos de configuración." }
    ],
    quiz: [
      { q: { en: "Where can a manager see all trainees' progress?", es: "¿Dónde puede un gerente ver el progreso de todos los trainees?" }, options: [{ en: "The 'Progreso' admin table", es: "La tabla de administración 'Progreso'" }, { en: "Nowhere", es: "En ningún lado" }, { en: "Only by asking each person", es: "Solo preguntando a cada persona" }, { en: "Only in Toast", es: "Solo en Toast" }], correct: 0 },
      { q: { en: "Can progress be exported for records?", es: "¿Se puede exportar el progreso para registros?" }, options: [{ en: "Yes, as CSV", es: "Sí, como CSV" }, { en: "No", es: "No" }, { en: "Only on paper", es: "Solo en papel" }, { en: "Not possible", es: "No es posible" }], correct: 0 },
      { q: { en: "What optional integration can sync progress centrally?", es: "¿Qué integración opcional puede sincronizar el progreso centralmente?" }, options: [{ en: "Google Sheet", es: "Google Sheet" }, { en: "None available", es: "Ninguna disponible" }, { en: "Fax", es: "Fax" }, { en: "Only email", es: "Solo correo" }], correct: 0 }
    ],
    pass: 80
  }
];
