/* Chela's Academy — Contenido de entrenamiento (44 módulos)
   Para añadir un módulo: copia un bloque { ... }, pégalo antes del `];` final y edita el texto.
   Campos: id, track (CORE|SERVER|BARTENDER|BUSSER|HOST|MANAGER), title, lessons, quiz, pass, critical (opcional), flashcards (opcional)
   Todos los textos usan { en, es }. */

const MODULES = [

  // ===================== CORE (5) =====================
  {
    id: "C1",
    track: "CORE",
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
    title: { en: "Server Role Overview", es: "Resumen del Rol de Server" },
    lessons: [
      { en: "As a Server, you own the guest's full experience: greeting, ordering, pacing the meal, and closing out the check.", es: "Como Server, eres responsable de toda la experiencia del huésped: saludo, pedido, ritmo de la comida y cierre de cuenta." },
      { en: "You'll work closely with bussers, bartenders, hosts, and the kitchen — clear communication keeps the floor running smoothly.", es: "Trabajarás de cerca con bussers, bartenders, hosts y cocina — la comunicación clara mantiene el piso funcionando sin problemas." }
    ],
    quiz: [
      { q: { en: "Who owns the guest's full dining experience?", es: "¿Quién es responsable de toda la experiencia del huésped?" }, options: [{ en: "Host only", es: "Solo el Host" }, { en: "The Server", es: "El Server" }, { en: "Kitchen only", es: "Solo la cocina" }, { en: "Nobody in particular", es: "Nadie en particular" }], correct: 1 },
      { q: { en: "Which teams does a Server coordinate with?", es: "¿Con qué equipos coordina un Server?" }, options: [{ en: "None", es: "Ninguno" }, { en: "Bussers, bartenders, hosts, kitchen", es: "Bussers, bartenders, hosts, cocina" }, { en: "Only managers", es: "Solo gerentes" }, { en: "Only other servers", es: "Solo otros servers" }], correct: 1 },
      { q: { en: "Why is clear communication important on the floor?", es: "¿Por qué es importante la comunicación clara en el piso?" }, options: [{ en: "It isn't", es: "No lo es" }, { en: "It keeps service running smoothly", es: "Mantiene el servicio funcionando sin problemas" }, { en: "Only managers need it", es: "Solo la necesitan los gerentes" }, { en: "It slows things down", es: "Ralentiza las cosas" }], correct: 1 }
    ],
    pass: 80
  },
  {
    id: "S2",
    track: "SERVER",
    title: { en: "Menu Knowledge & Upselling", es: "Conocimiento de Menú y Venta Sugestiva" },
    lessons: [
      { en: "Know the menu well enough to answer guest questions confidently and make genuine recommendations, not pushy upsells.", es: "Conoce el menú lo suficiente para responder preguntas con confianza y hacer recomendaciones genuinas, no ventas forzadas." },
      { en: "(This module will be filled in with our full menu details as they're finalized.)", es: "(Este módulo se completará con los detalles completos del menú cuando estén finalizados.)" }
    ],
    quiz: [
      { q: { en: "What's the goal when suggesting items to guests?", es: "¿Cuál es el objetivo al sugerir artículos a los huéspedes?" }, options: [{ en: "Pushy upselling", es: "Venta forzada" }, { en: "Genuine, helpful recommendations", es: "Recomendaciones genuinas y útiles" }, { en: "Ignore their preferences", es: "Ignorar sus preferencias" }, { en: "Only suggest the most expensive item", es: "Sugerir solo lo más caro" }], correct: 1 },
      { q: { en: "Why should you know the menu well?", es: "¿Por qué debes conocer bien el menú?" }, options: [{ en: "To answer guest questions confidently", es: "Para responder preguntas con confianza" }, { en: "It doesn't matter", es: "No importa" }, { en: "Only managers need to know it", es: "Solo los gerentes deben saberlo" }, { en: "Only for exams", es: "Solo para exámenes" }], correct: 0 },
      { q: { en: "Is this module's full content finalized yet?", es: "¿Está finalizado el contenido completo de este módulo?" }, options: [{ en: "Yes, complete", es: "Sí, completo" }, { en: "No, pending full menu details", es: "No, pendiente de detalles completos del menú" }, { en: "Not applicable", es: "No aplica" }, { en: "Unknown", es: "Desconocido" }], correct: 1 }
    ],
    pass: 80
  },
  {
    id: "S3",
    track: "SERVER",
    title: { en: "Floor Plan & Sections", es: "Plano del Piso y Secciones" },
    lessons: [
      { en: "Sections (left to right): Florida Room 101–109 · Bar 21–24, 31–34, 35 · Centro 41–48 (48 is the round 8-top, near the HOST stand) · Jungle 51–53, 61–63, 71–73, 81–85 · Exterior 401–410 and 501–510.", es: "Secciones (de izquierda a derecha): Florida Room 101–109 · Bar 21–24, 31–34, 35 · Centro 41–48 (48 es la mesa redonda de 8, cerca del podio de HOST) · Jungle 51–53, 61–63, 71–73, 81–85 · Exterior 401–410 y 501–510." },
      { en: "Know your assigned section before every shift and check the floor plan if unsure of a table number.", es: "Conoce tu sección asignada antes de cada turno y revisa el plano si tienes dudas sobre un número de mesa." }
    ],
    quiz: [
      { q: { en: "Which table is the round 8-top near the host stand?", es: "¿Cuál mesa es la redonda de 8 cerca del podio de host?" }, options: [{ en: "Table 48", es: "Mesa 48" }, { en: "Table 21", es: "Mesa 21" }, { en: "Table 101", es: "Mesa 101" }, { en: "Table 501", es: "Mesa 501" }], correct: 0 },
      { q: { en: "Which section covers tables 401–410 and 501–510?", es: "¿Qué sección cubre las mesas 401–410 y 501–510?" }, options: [{ en: "Florida Room", es: "Florida Room" }, { en: "Exterior", es: "Exterior" }, { en: "Jungle", es: "Jungle" }, { en: "Bar", es: "Bar" }], correct: 1 },
      { q: { en: "Which section covers tables 101–109?", es: "¿Qué sección cubre las mesas 101–109?" }, options: [{ en: "Florida Room", es: "Florida Room" }, { en: "Centro", es: "Centro" }, { en: "Jungle", es: "Jungle" }, { en: "Exterior", es: "Exterior" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "S4",
    track: "SERVER",
    title: { en: "Order Sequence & Timing", es: "Secuencia de Pedido y Tiempos" },
    lessons: [
      { en: "Standard flow: greet → drinks → food order → check on the table after first bites → dessert offer → close check.", es: "Flujo estándar: saludo → bebidas → pedido de comida → revisar la mesa después de los primeros bocados → ofrecer postre → cerrar cuenta." },
      { en: "Fire courses with proper timing so guests aren't rushed or left waiting too long between courses.", es: "Envía los tiempos de cocina con el ritmo adecuado para que los huéspedes no se sientan apurados ni esperen demasiado entre platos." }
    ],
    quiz: [
      { q: { en: "What's the standard order of service?", es: "¿Cuál es el orden estándar de servicio?" }, options: [{ en: "Food, then drinks", es: "Comida, luego bebidas" }, { en: "Greet, drinks, food, check-back, dessert, close", es: "Saludo, bebidas, comida, revisión, postre, cierre" }, { en: "Dessert first", es: "Postre primero" }, { en: "Random order", es: "Orden aleatorio" }], correct: 1 },
      { q: { en: "When should you check on a table after food arrives?", es: "¿Cuándo debes revisar la mesa después de que llega la comida?" }, options: [{ en: "Never", es: "Nunca" }, { en: "After the first few bites", es: "Después de los primeros bocados" }, { en: "Immediately when it lands", es: "Inmediatamente al llegar" }, { en: "Only if they call you", es: "Solo si te llaman" }], correct: 1 },
      { q: { en: "Why does course timing matter?", es: "¿Por qué importa el ritmo entre platos?" }, options: [{ en: "It doesn't", es: "No importa" }, { en: "So guests aren't rushed or left waiting", es: "Para que no se sientan apurados ni esperen demasiado" }, { en: "To turn tables faster always", es: "Para rotar mesas más rápido siempre" }, { en: "Only the kitchen controls it", es: "Solo la cocina lo controla" }], correct: 1 }
    ],
    pass: 80
  },
  {
    id: "S5",
    track: "SERVER",
    title: { en: "Handling Special Requests", es: "Manejo de Solicitudes Especiales" },
    lessons: [
      { en: "Modifications, substitutions, and allergy requests should be entered accurately in the POS and confirmed with the kitchen when needed.", es: "Modificaciones, sustituciones y solicitudes por alergias deben ingresarse con precisión en el POS y confirmarse con la cocina cuando sea necesario." },
      { en: "Always double-check with the guest before sending an order with special instructions.", es: "Siempre confirma con el huésped antes de enviar un pedido con instrucciones especiales." }
    ],
    quiz: [
      { q: { en: "Where should modifications be entered?", es: "¿Dónde deben ingresarse las modificaciones?" }, options: [{ en: "Nowhere, just remember them", es: "En ningún lado, solo recordarlas" }, { en: "Accurately in the POS", es: "Con precisión en el POS" }, { en: "Told verbally only", es: "Dicho verbalmente solamente" }, { en: "Written on a napkin", es: "Escrito en una servilleta" }], correct: 1 },
      { q: { en: "What should you do before sending a special order?", es: "¿Qué debes hacer antes de enviar un pedido especial?" }, options: [{ en: "Nothing extra", es: "Nada extra" }, { en: "Double-check with the guest", es: "Confirmar con el huésped" }, { en: "Skip confirmation", es: "Saltarte la confirmación" }, { en: "Ask another table", es: "Preguntarle a otra mesa" }], correct: 1 },
      { q: { en: "Who might you need to confirm allergy modifications with?", es: "¿Con quién podrías necesitar confirmar modificaciones por alergia?" }, options: [{ en: "The kitchen", es: "La cocina" }, { en: "No one", es: "Nadie" }, { en: "A random coworker", es: "Un compañero al azar" }, { en: "The valet", es: "El valet" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "S6",
    track: "SERVER",
    title: { en: "Auto-Gratuity & Billing", es: "Propina Automática y Facturación" },
    lessons: [
      { en: "Auto-gratuity of 20% applies to parties of 6 or more, or checks of $300 or more.", es: "La propina automática del 20% aplica a grupos de 6 o más personas, o cuentas de $300 o más." },
      { en: "Always review the check with the guest and mention the auto-gratuity when it applies, before they sign.", es: "Siempre revisa la cuenta con el huésped y menciona la propina automática cuando aplique, antes de que firmen." }
    ],
    quiz: [
      { q: { en: "At what party size does auto-gratuity apply?", es: "¿A partir de qué tamaño de grupo aplica la propina automática?" }, options: [{ en: "4+", es: "4+" }, { en: "6 or more", es: "6 o más" }, { en: "10+", es: "10+" }, { en: "2+", es: "2+" }], correct: 1 },
      { q: { en: "At what check amount does auto-gratuity apply?", es: "¿A partir de qué monto de cuenta aplica la propina automática?" }, options: [{ en: "$100+", es: "$100+" }, { en: "$300 or more", es: "$300 o más" }, { en: "$500+", es: "$500+" }, { en: "No amount threshold", es: "Sin monto mínimo" }], correct: 1 },
      { q: { en: "What is the auto-gratuity percentage?", es: "¿Cuál es el porcentaje de propina automática?" }, options: [{ en: "10%", es: "10%" }, { en: "15%", es: "15%" }, { en: "20%", es: "20%" }, { en: "25%", es: "25%" }], correct: 2 }
    ],
    pass: 80
  },
  {
    id: "S7",
    track: "SERVER",
    title: { en: "Responsible Alcohol Service", es: "Servicio Responsable de Alcohol" },
    lessons: [
      { en: "Official policy FOH-BAR-ALC-001 (Florida). Card anyone who looks 35 or younger — no exceptions.", es: "Política oficial FOH-BAR-ALC-001 (Florida). Pide identificación a cualquiera que aparente 35 años o menos — sin excepciones." },
      { en: "If a guest should be cut off, use the approved cut-off script and notify a manager. Only the Manager on Duty (MOD) can override a cut-off decision.", es: "Si un huésped debe ser cortado, usa el guion aprobado de corte y notifica a un gerente. Solo el Gerente en Turno (MOD) puede anular una decisión de corte." },
      { en: "Every alcoholic drink must be rung into Toast — no exceptions, no comps without a manager.", es: "Toda bebida alcohólica debe registrarse en Toast — sin excepciones, sin cortesías sin autorización de un gerente." },
      { en: "Responsible Vendor Act (RVA) training: non-managers must complete it within 30 days of hire; managers within 15 days; refresher every 4 months for everyone.", es: "Entrenamiento de la Ley de Vendedor Responsable (RVA): no gerentes deben completarlo en 30 días desde su contratación; gerentes en 15 días; repaso cada 4 meses para todos." },
      { en: "Alcohol service hours follow the most restrictive applicable rule, including Miami Lakes hours where relevant.", es: "Las horas de servicio de alcohol siguen la regla más restrictiva aplicable, incluyendo el horario de Miami Lakes cuando corresponda." }
    ],
    quiz: [
      { q: { en: "Who should be carded?", es: "¿A quién se le debe pedir identificación?" }, options: [{ en: "Only if they ask", es: "Solo si lo piden" }, { en: "Anyone who looks 35 or younger", es: "Cualquiera que aparente 35 años o menos" }, { en: "Only obviously young guests", es: "Solo huéspedes obviamente jóvenes" }, { en: "Nobody", es: "Nadie" }], correct: 1 },
      { q: { en: "Who can override a cut-off decision?", es: "¿Quién puede anular una decisión de corte?" }, options: [{ en: "Any server", es: "Cualquier server" }, { en: "Only the Manager on Duty (MOD)", es: "Solo el Gerente en Turno (MOD)" }, { en: "The guest", es: "El huésped" }, { en: "The bartender always", es: "El bartender siempre" }], correct: 1 },
      { q: { en: "Must every alcoholic drink be rung into Toast?", es: "¿Debe registrarse en Toast toda bebida alcohólica?" }, options: [{ en: "No", es: "No" }, { en: "Yes, no exceptions", es: "Sí, sin excepciones" }, { en: "Only cocktails", es: "Solo cócteles" }, { en: "Only if asked", es: "Solo si se pide" }], correct: 1 },
      { q: { en: "How soon must non-managers complete RVA training?", es: "¿En cuánto tiempo deben los no gerentes completar el entrenamiento RVA?" }, options: [{ en: "30 days", es: "30 días" }, { en: "90 days", es: "90 días" }, { en: "1 year", es: "1 año" }, { en: "Never required", es: "Nunca es requerido" }], correct: 0 },
      { q: { en: "How often is the RVA refresher required?", es: "¿Cada cuánto se requiere el repaso de RVA?" }, options: [{ en: "Every 4 months", es: "Cada 4 meses" }, { en: "Every 5 years", es: "Cada 5 años" }, { en: "Once, never again", es: "Una vez, nunca más" }, { en: "Every week", es: "Cada semana" }], correct: 0 }
    ],
    pass: 100,
    critical: true
  },
  {
    id: "S8",
    track: "SERVER",
    title: { en: "Service Recovery & Complaints", es: "Recuperación de Servicio y Quejas" },
    lessons: [
      { en: "Listen fully, apologize sincerely, and involve a manager for anything beyond a simple fix.", es: "Escucha completamente, discúlpate con sinceridad e involucra a un gerente para cualquier cosa que vaya más allá de una solución simple." },
      { en: "Never argue with a guest. Your job is to make it right, not to be right.", es: "Nunca discutas con un huésped. Tu trabajo es resolverlo, no tener la razón." }
    ],
    quiz: [
      { q: { en: "What's the first step when a guest complains?", es: "¿Cuál es el primer paso cuando un huésped se queja?" }, options: [{ en: "Argue your point", es: "Defender tu punto" }, { en: "Listen fully and apologize sincerely", es: "Escuchar completamente y disculparte con sinceridad" }, { en: "Ignore it", es: "Ignorarlo" }, { en: "Walk away", es: "Alejarte" }], correct: 1 },
      { q: { en: "When should you involve a manager?", es: "¿Cuándo debes involucrar a un gerente?" }, options: [{ en: "Never", es: "Nunca" }, { en: "For anything beyond a simple fix", es: "Para cualquier cosa que vaya más allá de una solución simple" }, { en: "Always, even for minor things", es: "Siempre, incluso cosas menores" }, { en: "Only if the guest yells", es: "Solo si el huésped grita" }], correct: 1 },
      { q: { en: "What is the goal of service recovery?", es: "¿Cuál es el objetivo de la recuperación de servicio?" }, options: [{ en: "Being right", es: "Tener la razón" }, { en: "Making it right for the guest", es: "Resolverlo para el huésped" }, { en: "Winning the argument", es: "Ganar la discusión" }, { en: "Avoiding the guest", es: "Evitar al huésped" }], correct: 1 }
    ],
    pass: 80
  },
  {
    id: "S9",
    track: "SERVER",
    title: { en: "Closing Duties & Side Work", es: "Tareas de Cierre y Side Work" },
    lessons: [
      { en: "Complete all assigned side work before clocking out — restocking, cleaning, and resetting your section for the next shift.", es: "Completa todo el side work asignado antes de marcar salida — reabastecer, limpiar y dejar lista tu sección para el próximo turno." },
      { en: "Check out with a manager before leaving to confirm your section and paperwork are complete.", es: "Haz check-out con un gerente antes de irte para confirmar que tu sección y papeleo estén completos." }
    ],
    quiz: [
      { q: { en: "What should be done before clocking out?", es: "¿Qué debe hacerse antes de marcar salida?" }, options: [{ en: "Nothing", es: "Nada" }, { en: "All assigned side work", es: "Todo el side work asignado" }, { en: "Leave immediately", es: "Salir de inmediato" }, { en: "Only clean your own plate", es: "Solo limpiar tu propio plato" }], correct: 1 },
      { q: { en: "Who should you check out with?", es: "¿Con quién debes hacer check-out?" }, options: [{ en: "A manager", es: "Un gerente" }, { en: "No one", es: "Nadie" }, { en: "A random guest", es: "Un huésped al azar" }, { en: "The valet", es: "El valet" }], correct: 0 },
      { q: { en: "What does side work typically include?", es: "¿Qué suele incluir el side work?" }, options: [{ en: "Restocking, cleaning, resetting section", es: "Reabastecer, limpiar, dejar lista la sección" }, { en: "Nothing specific", es: "Nada específico" }, { en: "Only counting tips", es: "Solo contar propinas" }, { en: "Only greeting guests", es: "Solo saludar huéspedes" }], correct: 0 }
    ],
    pass: 80
  },

  // ===================== BARTENDER (9) =====================
  {
    id: "BT1",
    track: "BARTENDER",
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
    title: { en: "Responsible Alcohol Service", es: "Servicio Responsable de Alcohol" },
    lessons: [
      { en: "Official policy FOH-BAR-ALC-001 (Florida). Card anyone who looks 35 or younger — no exceptions.", es: "Política oficial FOH-BAR-ALC-001 (Florida). Pide identificación a cualquiera que aparente 35 años o menos — sin excepciones." },
      { en: "If a guest should be cut off, use the approved cut-off script and notify a manager. Only the Manager on Duty (MOD) can override a cut-off decision.", es: "Si un huésped debe ser cortado, usa el guion aprobado de corte y notifica a un gerente. Solo el Gerente en Turno (MOD) puede anular una decisión de corte." },
      { en: "Every alcoholic drink must be rung into Toast — no exceptions, no comps without a manager.", es: "Toda bebida alcohólica debe registrarse en Toast — sin excepciones, sin cortesías sin autorización de un gerente." },
      { en: "Responsible Vendor Act (RVA) training: non-managers must complete it within 30 days of hire; managers within 15 days; refresher every 4 months for everyone.", es: "Entrenamiento de la Ley de Vendedor Responsable (RVA): no gerentes deben completarlo en 30 días desde su contratación; gerentes en 15 días; repaso cada 4 meses para todos." },
      { en: "Alcohol service hours follow the most restrictive applicable rule, including Miami Lakes hours where relevant.", es: "Las horas de servicio de alcohol siguen la regla más restrictiva aplicable, incluyendo el horario de Miami Lakes cuando corresponda." }
    ],
    quiz: [
      { q: { en: "Who should be carded?", es: "¿A quién se le debe pedir identificación?" }, options: [{ en: "Only if they ask", es: "Solo si lo piden" }, { en: "Anyone who looks 35 or younger", es: "Cualquiera que aparente 35 años o menos" }, { en: "Only obviously young guests", es: "Solo huéspedes obviamente jóvenes" }, { en: "Nobody", es: "Nadie" }], correct: 1 },
      { q: { en: "Who can override a cut-off decision?", es: "¿Quién puede anular una decisión de corte?" }, options: [{ en: "Any bartender", es: "Cualquier bartender" }, { en: "Only the Manager on Duty (MOD)", es: "Solo el Gerente en Turno (MOD)" }, { en: "The guest", es: "El huésped" }, { en: "A server always", es: "Un server siempre" }], correct: 1 },
      { q: { en: "Must every alcoholic drink be rung into Toast?", es: "¿Debe registrarse en Toast toda bebida alcohólica?" }, options: [{ en: "No", es: "No" }, { en: "Yes, no exceptions", es: "Sí, sin excepciones" }, { en: "Only cocktails", es: "Solo cócteles" }, { en: "Only if asked", es: "Solo si se pide" }], correct: 1 },
      { q: { en: "How soon must managers complete RVA training?", es: "¿En cuánto tiempo deben los gerentes completar el entrenamiento RVA?" }, options: [{ en: "15 days", es: "15 días" }, { en: "90 days", es: "90 días" }, { en: "1 year", es: "1 año" }, { en: "Never required", es: "Nunca es requerido" }], correct: 0 },
      { q: { en: "How often is the RVA refresher required?", es: "¿Cada cuánto se requiere el repaso de RVA?" }, options: [{ en: "Every 4 months", es: "Cada 4 meses" }, { en: "Every 5 years", es: "Cada 5 años" }, { en: "Once, never again", es: "Una vez, nunca más" }, { en: "Every week", es: "Cada semana" }], correct: 0 }
    ],
    pass: 100,
    critical: true
  },
  {
    id: "BT9",
    track: "BARTENDER",
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
    title: { en: "Table Reset Standards", es: "Estándares de Montaje de Mesa" },
    lessons: [
      { en: "Clear plates from the right when possible, wipe the table fully, and reset with clean, aligned settings before the next guest is seated.", es: "Retira los platos por la derecha cuando sea posible, limpia bien la mesa, y monta con vajilla limpia y alineada antes de que se siente el próximo huésped." }
    ],
    quiz: [
      { q: { en: "What should happen to the table before the next guest is seated?", es: "¿Qué debe pasar con la mesa antes de que se siente el próximo huésped?" }, options: [{ en: "Nothing", es: "Nada" }, { en: "Fully wiped and reset", es: "Completamente limpia y montada" }, { en: "Just remove big items", es: "Solo quitar cosas grandes" }, { en: "Leave as is", es: "Dejarla como está" }], correct: 1 },
      { q: { en: "How should settings be arranged?", es: "¿Cómo deben acomodarse los cubiertos/vajilla?" }, options: [{ en: "Clean and aligned", es: "Limpios y alineados" }, { en: "Any way is fine", es: "De cualquier forma" }, { en: "Doesn't matter", es: "No importa" }, { en: "Only glasses need placing", es: "Solo hay que poner los vasos" }], correct: 0 },
      { q: { en: "From which side should plates generally be cleared?", es: "¿Por qué lado se deben retirar generalmente los platos?" }, options: [{ en: "The right, when possible", es: "La derecha, cuando sea posible" }, { en: "Doesn't matter", es: "No importa" }, { en: "Always from the front", es: "Siempre por el frente" }, { en: "Only from behind", es: "Solo por atrás" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "B3",
    track: "BUSSER",
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
    title: { en: "Safety & Sanitation", es: "Seguridad y Sanitización" },
    lessons: [
      { en: "Use separate bins for trash vs. dishware, carry trays properly to avoid spills, and report any hazard immediately.", es: "Usa contenedores separados para basura vs. vajilla, carga las bandejas correctamente para evitar derrames, y reporta cualquier peligro de inmediato." }
    ],
    quiz: [
      { q: { en: "What should you use separate bins for?", es: "¿Para qué debes usar contenedores separados?" }, options: [{ en: "Trash vs. dishware", es: "Basura vs. vajilla" }, { en: "Nothing", es: "Nada" }, { en: "Only napkins", es: "Solo servilletas" }, { en: "Only trash" , es: "Solo basura"}], correct: 0 },
      { q: { en: "What should you do if you notice a hazard?", es: "¿Qué debes hacer si notas un peligro?" }, options: [{ en: "Ignore it", es: "Ignorarlo" }, { en: "Report it immediately", es: "Reportarlo de inmediato" }, { en: "Wait for someone else", es: "Esperar a alguien más" }, { en: "Fix it yourself always", es: "Arreglarlo tú siempre" }], correct: 1 },
      { q: { en: "Why carry trays properly?", es: "¿Por qué cargar las bandejas correctamente?" }, options: [{ en: "To avoid spills", es: "Para evitar derrames" }, { en: "It doesn't matter", es: "No importa" }, { en: "Only for show", es: "Solo por apariencia" }, { en: "To go faster only", es: "Solo para ir más rápido" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "B6",
    track: "BUSSER",
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

  // ===================== HOST (7) =====================
  {
    id: "H1",
    track: "HOST",
    title: { en: "Host Role Overview", es: "Resumen del Rol de Host" },
    lessons: [
      { en: "The Host is the first and last impression — warm welcome, accurate seating, and smooth waitlist management.", es: "El Host es la primera y última impresión — bienvenida cálida, asignación de mesas precisa y manejo fluido de la lista de espera." }
    ],
    quiz: [
      { q: { en: "Why is the Host role important?", es: "¿Por qué es importante el rol de Host?" }, options: [{ en: "First and last impression for guests", es: "Primera y última impresión para los huéspedes" }, { en: "It isn't", es: "No lo es" }, { en: "Only handles payments", es: "Solo maneja pagos" }, { en: "Only works in the kitchen", es: "Solo trabaja en la cocina" }], correct: 0 },
      { q: { en: "What does the Host manage?", es: "¿Qué gestiona el Host?" }, options: [{ en: "Seating and waitlist", es: "Asientos y lista de espera" }, { en: "Cocktails", es: "Cócteles" }, { en: "Inventory only", es: "Solo inventario" }, { en: "Payroll", es: "Nómina" }], correct: 0 },
      { q: { en: "What kind of welcome should guests receive?", es: "¿Qué tipo de bienvenida deben recibir los huéspedes?" }, options: [{ en: "Warm welcome", es: "Bienvenida cálida" }, { en: "Cold and rushed", es: "Fría y apresurada" }, { en: "None", es: "Ninguna" }, { en: "Only if VIP", es: "Solo si son VIP" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "H2",
    track: "HOST",
    title: { en: "Floor Plan & Seating Rotation", es: "Plano del Piso y Rotación de Asientos" },
    lessons: [
      { en: "Sections (left to right): Florida Room 101–109 · Bar 21–24, 31–34, 35 · Centro 41–48 (48 is the round 8-top) · Jungle 51–53, 61–63, 71–73, 81–85 · Exterior 401–410 and 501–510.", es: "Secciones (de izquierda a derecha): Florida Room 101–109 · Bar 21–24, 31–34, 35 · Centro 41–48 (48 es la mesa redonda de 8) · Jungle 51–53, 61–63, 71–73, 81–85 · Exterior 401–410 y 501–510." },
      { en: "Rotate seating evenly across sections so no server gets overloaded.", es: "Rota los asientos de manera equitativa entre secciones para que ningún server se sobrecargue." }
    ],
    quiz: [
      { q: { en: "Why rotate seating across sections?", es: "¿Por qué rotar los asientos entre secciones?" }, options: [{ en: "So no server gets overloaded", es: "Para que ningún server se sobrecargue" }, { en: "It doesn't matter", es: "No importa" }, { en: "To fill one section only", es: "Para llenar solo una sección" }, { en: "Random reasons", es: "Razones aleatorias" }], correct: 0 },
      { q: { en: "Which section has the round 8-top?", es: "¿Qué sección tiene la mesa redonda de 8?" }, options: [{ en: "Centro", es: "Centro" }, { en: "Exterior", es: "Exterior" }, { en: "Bar", es: "Bar" }, { en: "Jungle", es: "Jungle" }], correct: 0 },
      { q: { en: "Which section covers 401–410 and 501–510?", es: "¿Qué sección cubre 401–410 y 501–510?" }, options: [{ en: "Exterior", es: "Exterior" }, { en: "Florida Room", es: "Florida Room" }, { en: "Bar", es: "Bar" }, { en: "Centro", es: "Centro" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "H3",
    track: "HOST",
    title: { en: "Reservations & Party Policy", es: "Reservaciones y Política de Grupos" },
    lessons: [
      { en: "This module is pending final details from Chela's: the reservation system/software used, max party size without a reservation, and the no-show/cancellation policy. It will be added once confirmed.", es: "Este módulo está pendiente de detalles finales de Chela's: el sistema/software de reservaciones, el tamaño máximo de grupo sin reservación, y la política de no-show/cancelación. Se agregará una vez confirmado." },
      { en: "For now: check with a manager for any reservation or large-party question you're unsure about.", es: "Por ahora: consulta con un gerente cualquier duda sobre reservaciones o grupos grandes." }
    ],
    quiz: [
      { q: { en: "Is the reservation policy finalized in this module yet?", es: "¿Está finalizada la política de reservaciones en este módulo?" }, options: [{ en: "Yes", es: "Sí" }, { en: "No, pending final details from Chela's", es: "No, pendiente de detalles finales de Chela's" }, { en: "N/A", es: "N/A" }, { en: "Unknown", es: "Desconocido" }], correct: 1 },
      { q: { en: "What should you do for a reservation question you're unsure about?", es: "¿Qué debes hacer ante una duda sobre reservaciones?" }, options: [{ en: "Guess", es: "Adivinar" }, { en: "Ask a manager", es: "Preguntar a un gerente" }, { en: "Ignore it", es: "Ignorarla" }, { en: "Ask a guest", es: "Preguntarle a un huésped" }], correct: 1 },
      { q: { en: "What three details is this module waiting on?", es: "¿Qué tres detalles está esperando este módulo?" }, options: [{ en: "Reservation system, max walk-in party size, no-show policy", es: "Sistema de reservación, tamaño máximo sin reservar, política de no-show" }, { en: "Menu prices", es: "Precios del menú" }, { en: "Uniform colors", es: "Colores de uniforme" }, { en: "Fryer schedule", es: "Horario de freidoras" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "H4",
    track: "HOST",
    title: { en: "Greeting & Guest Experience", es: "Saludo y Experiencia del Huésped" },
    lessons: [
      { en: "Make eye contact, smile, and welcome guests warmly the moment they walk in — even if you're mid-task.", es: "Haz contacto visual, sonríe y da la bienvenida cálida al huésped en el momento en que entra — incluso si estás en medio de otra tarea." }
    ],
    quiz: [
      { q: { en: "When should a guest be greeted?", es: "¿Cuándo debe saludarse a un huésped?" }, options: [{ en: "The moment they walk in", es: "En el momento en que entra" }, { en: "Whenever convenient", es: "Cuando sea conveniente" }, { en: "Only if not busy", es: "Solo si no hay mucho trabajo" }, { en: "Never", es: "Nunca" }], correct: 0 },
      { q: { en: "What communicates warmth when greeting?", es: "¿Qué comunica calidez al saludar?" }, options: [{ en: "Eye contact and a smile", es: "Contacto visual y sonrisa" }, { en: "Looking away", es: "Mirar hacia otro lado" }, { en: "Silence", es: "Silencio" }, { en: "Rushing them", es: "Apresurarlos" }], correct: 0 },
      { q: { en: "Should you greet a guest even if you're mid-task?", es: "¿Debes saludar a un huésped aunque estés en medio de otra tarea?" }, options: [{ en: "Yes", es: "Sí" }, { en: "No", es: "No" }, { en: "Only if it's slow", es: "Solo si está tranquilo" }, { en: "Only VIPs", es: "Solo VIPs" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "H5",
    track: "HOST",
    title: { en: "Waitlist Management", es: "Manejo de Lista de Espera" },
    lessons: [
      { en: "Give realistic wait times, keep the waitlist updated in real time, and communicate proactively with waiting guests.", es: "Da tiempos de espera realistas, mantén la lista de espera actualizada en tiempo real, y comunica proactivamente con los huéspedes que esperan." }
    ],
    quiz: [
      { q: { en: "What kind of wait times should you give?", es: "¿Qué tipo de tiempos de espera debes dar?" }, options: [{ en: "Realistic", es: "Realistas" }, { en: "Always short, even if wrong", es: "Siempre cortos, aunque sean incorrectos" }, { en: "Random", es: "Aleatorios" }, { en: "No estimate at all", es: "Ninguna estimación" }], correct: 0 },
      { q: { en: "How should the waitlist be kept?", es: "¿Cómo debe mantenerse la lista de espera?" }, options: [{ en: "Updated in real time", es: "Actualizada en tiempo real" }, { en: "Updated once a day", es: "Actualizada una vez al día" }, { en: "Not tracked", es: "Sin seguimiento" }, { en: "On paper only, never checked", es: "Solo en papel, nunca revisada" }], correct: 0 },
      { q: { en: "Should you proactively update waiting guests?", es: "¿Debes actualizar proactivamente a los huéspedes que esperan?" }, options: [{ en: "Yes", es: "Sí" }, { en: "No", es: "No" }, { en: "Only if they ask", es: "Solo si preguntan" }, { en: "Never", es: "Nunca" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "H6",
    track: "HOST",
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
    title: { en: "Coordinating with the FOH Team", es: "Coordinación con el Equipo de FOH" },
    lessons: [
      { en: "Communicate large parties, VIPs, or special occasions to servers and managers ahead of time so the team can prepare.", es: "Comunica grupos grandes, VIPs, u ocasiones especiales a servers y gerentes con anticipación para que el equipo pueda prepararse." }
    ],
    quiz: [
      { q: { en: "What should be communicated ahead of time?", es: "¿Qué debe comunicarse con anticipación?" }, options: [{ en: "Large parties, VIPs, special occasions", es: "Grupos grandes, VIPs, ocasiones especiales" }, { en: "Nothing", es: "Nada" }, { en: "Only complaints", es: "Solo quejas" }, { en: "Only the weather", es: "Solo el clima" }], correct: 0 },
      { q: { en: "Who should be informed of a VIP arrival?", es: "¿Quién debe ser informado de la llegada de un VIP?" }, options: [{ en: "Servers and managers", es: "Servers y gerentes" }, { en: "No one", es: "Nadie" }, { en: "Only the kitchen", es: "Solo la cocina" }, { en: "Only the valet", es: "Solo el valet" }], correct: 0 },
      { q: { en: "Why give the team advance notice?", es: "¿Por qué avisar al equipo con anticipación?" }, options: [{ en: "So they can prepare", es: "Para que puedan prepararse" }, { en: "It's not needed", es: "No es necesario" }, { en: "Only for show", es: "Solo por apariencia" }, { en: "To confuse the team", es: "Para confundir al equipo" }], correct: 0 }
    ],
    pass: 80
  },

  // ===================== MANAGER (8) =====================
  {
    id: "MG1",
    track: "MANAGER",
    title: { en: "Leadership & Role Overview", es: "Liderazgo y Resumen del Rol" },
    lessons: [
      { en: "Managers set the tone for the shift — lead by example, support the team, and hold standards consistently.", es: "Los gerentes marcan el tono del turno — lideran con el ejemplo, apoyan al equipo, y mantienen los estándares de forma consistente." }
    ],
    quiz: [
      { q: { en: "What sets the tone for a shift?", es: "¿Qué marca el tono de un turno?" }, options: [{ en: "Manager leadership", es: "El liderazgo del gerente" }, { en: "Nothing in particular", es: "Nada en particular" }, { en: "Only the menu", es: "Solo el menú" }, { en: "Only the weather", es: "Solo el clima" }], correct: 0 },
      { q: { en: "How should standards be held?", es: "¿Cómo deben mantenerse los estándares?" }, options: [{ en: "Consistently", es: "De forma consistente" }, { en: "Only when convenient", es: "Solo cuando sea conveniente" }, { en: "Randomly", es: "Al azar" }, { en: "Never enforced", es: "Nunca aplicados" }], correct: 0 },
      { q: { en: "What does leading by example mean?", es: "¿Qué significa liderar con el ejemplo?" }, options: [{ en: "Modeling the behavior you expect", es: "Modelar el comportamiento que esperas" }, { en: "Giving orders only", es: "Solo dar órdenes" }, { en: "Avoiding the floor", es: "Evitar el piso" }, { en: "Doing nothing", es: "No hacer nada" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "MG2",
    track: "MANAGER",
    title: { en: "Staff Scheduling & Training Oversight", es: "Programación de Personal y Supervisión de Entrenamiento" },
    lessons: [
      { en: "Track each trainee's progress through Chela's Academy and make sure new hires complete CORE + their track before working solo.", es: "Da seguimiento al progreso de cada trainee en Chela's Academy y asegúrate de que los nuevos empleados completen CORE + su track antes de trabajar solos." }
    ],
    quiz: [
      { q: { en: "What should be completed before a new hire works solo?", es: "¿Qué debe completarse antes de que un nuevo empleado trabaje solo?" }, options: [{ en: "CORE + their role track", es: "CORE + su track de rol" }, { en: "Nothing", es: "Nada" }, { en: "Only CORE", es: "Solo CORE" }, { en: "Only their track", es: "Solo su track" }], correct: 0 },
      { q: { en: "How should managers track training?", es: "¿Cómo deben los gerentes dar seguimiento al entrenamiento?" }, options: [{ en: "Via Chela's Academy progress", es: "Mediante el progreso en Chela's Academy" }, { en: "Not at all", es: "De ninguna forma" }, { en: "Guessing", es: "Adivinando" }, { en: "Only verbally, once", es: "Solo verbalmente, una vez" }], correct: 0 },
      { q: { en: "Who is responsible for training oversight?", es: "¿Quién es responsable de la supervisión del entrenamiento?" }, options: [{ en: "Managers", es: "Gerentes" }, { en: "No one", es: "Nadie" }, { en: "Guests", es: "Huéspedes" }, { en: "Vendors", es: "Proveedores" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "MG3",
    track: "MANAGER",
    title: { en: "Opening & Closing Management Duties", es: "Tareas de Gerencia de Apertura y Cierre" },
    lessons: [
      { en: "Opening: walk the floor, check staffing and stock. Closing: reconcile POS, secure cash/alcohol, and complete the closing checklist.", es: "Apertura: recorre el piso, revisa personal y stock. Cierre: concilia el POS, asegura efectivo/alcohol, y completa la lista de cierre." }
    ],
    quiz: [
      { q: { en: "What should a manager do when opening?", es: "¿Qué debe hacer un gerente al abrir?" }, options: [{ en: "Walk the floor, check staffing and stock", es: "Recorrer el piso, revisar personal y stock" }, { en: "Nothing", es: "Nada" }, { en: "Leave immediately", es: "Irse de inmediato" }, { en: "Only check the register", es: "Solo revisar la caja" }], correct: 0 },
      { q: { en: "What should be secured at closing?", es: "¿Qué debe asegurarse al cierre?" }, options: [{ en: "Cash and alcohol", es: "Efectivo y alcohol" }, { en: "Nothing", es: "Nada" }, { en: "Only the front door", es: "Solo la puerta principal" }, { en: "Only the patio", es: "Solo el patio" }], correct: 0 },
      { q: { en: "What should be reconciled at closing?", es: "¿Qué debe conciliarse al cierre?" }, options: [{ en: "The POS", es: "El POS" }, { en: "Nothing", es: "Nada" }, { en: "Only tips", es: "Solo las propinas" }, { en: "Only the schedule", es: "Solo el horario" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "MG4",
    track: "MANAGER",
    title: { en: "Guest Complaints & Escalations", es: "Quejas de Huéspedes y Escalaciones" },
    lessons: [
      { en: "Take escalated complaints personally and calmly, empower the team to solve small issues, and document repeat problems.", es: "Atiende personalmente y con calma las quejas escaladas, empodera al equipo para resolver problemas pequeños, y documenta problemas recurrentes." }
    ],
    quiz: [
      { q: { en: "How should escalated complaints be handled?", es: "¿Cómo deben manejarse las quejas escaladas?" }, options: [{ en: "Personally and calmly", es: "Personalmente y con calma" }, { en: "Ignored", es: "Ignoradas" }, { en: "Passed to a guest", es: "Pasadas a otro huésped" }, { en: "Argued", es: "Discutidas" }], correct: 0 },
      { q: { en: "Should the team be empowered to solve small issues?", es: "¿Debe empoderarse al equipo para resolver problemas pequeños?" }, options: [{ en: "Yes", es: "Sí" }, { en: "No", es: "No" }, { en: "Only managers can act", es: "Solo los gerentes pueden actuar" }, { en: "Never", es: "Nunca" }], correct: 0 },
      { q: { en: "What should be done with repeat problems?", es: "¿Qué debe hacerse con problemas recurrentes?" }, options: [{ en: "Documented", es: "Documentarlos" }, { en: "Ignored", es: "Ignorarlos" }, { en: "Forgotten", es: "Olvidarlos" }, { en: "Hidden", es: "Ocultarlos" }], correct: 0 }
    ],
    pass: 80
  },
  {
    id: "MG5",
    track: "MANAGER",
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
    title: { en: "Responsible Alcohol Service — Manager", es: "Servicio Responsable de Alcohol — Gerente" },
    lessons: [
      { en: "Official policy FOH-BAR-ALC-001 (Florida). Managers are the final authority on carding disputes and cut-off overrides — only the Manager on Duty (MOD) may override a cut-off.", es: "Política oficial FOH-BAR-ALC-001 (Florida). Los gerentes son la autoridad final en disputas de identificación y anulaciones de corte — solo el Gerente en Turno (MOD) puede anular un corte." },
      { en: "Managers must complete Responsible Vendor Act (RVA) training within 15 days of hire, with a refresher every 4 months.", es: "Los gerentes deben completar el entrenamiento de la Ley de Vendedor Responsable (RVA) dentro de 15 días desde su contratación, con repaso cada 4 meses." },
      { en: "Alcohol service hours follow the most restrictive applicable rule, including Miami Lakes hours where relevant. Managers are responsible for enforcing this.", es: "Las horas de servicio de alcohol siguen la regla más restrictiva aplicable, incluyendo el horario de Miami Lakes cuando corresponda. Los gerentes son responsables de hacerlo cumplir." },
      { en: "Every alcoholic drink rung into Toast is a manager responsibility to audit periodically for compliance.", es: "Cada bebida alcohólica registrada en Toast es responsabilidad del gerente auditarla periódicamente para cumplimiento." }
    ],
    quiz: [
      { q: { en: "Who is the final authority on cut-off overrides?", es: "¿Quién es la autoridad final para anular un corte?" }, options: [{ en: "The Manager on Duty (MOD)", es: "El Gerente en Turno (MOD)" }, { en: "Any server", es: "Cualquier server" }, { en: "The guest", es: "El huésped" }, { en: "The bartender", es: "El bartender" }], correct: 0 },
      { q: { en: "How soon must managers complete RVA training?", es: "¿En cuánto tiempo deben los gerentes completar el entrenamiento RVA?" }, options: [{ en: "15 days of hire", es: "15 días desde la contratación" }, { en: "90 days", es: "90 días" }, { en: "1 year", es: "1 año" }, { en: "Never", es: "Nunca" }], correct: 0 },
      { q: { en: "How often is the manager RVA refresher required?", es: "¿Cada cuánto se requiere el repaso de RVA para gerentes?" }, options: [{ en: "Every 4 months", es: "Cada 4 meses" }, { en: "Every 5 years", es: "Cada 5 años" }, { en: "Once only", es: "Solo una vez" }, { en: "Never", es: "Nunca" }], correct: 0 },
      { q: { en: "What determines alcohol service hours?", es: "¿Qué determina las horas de servicio de alcohol?" }, options: [{ en: "The most restrictive applicable rule", es: "La regla más restrictiva aplicable" }, { en: "Whatever is easiest", es: "Lo que sea más fácil" }, { en: "Guest preference", es: "Preferencia del huésped" }, { en: "No rule applies", es: "No aplica ninguna regla" }], correct: 0 },
      { q: { en: "Who audits Toast for alcohol-service compliance?", es: "¿Quién audita Toast para cumplimiento del servicio de alcohol?" }, options: [{ en: "Managers", es: "Gerentes" }, { en: "No one", es: "Nadie" }, { en: "Guests", es: "Huéspedes" }, { en: "Vendors", es: "Proveedores" }], correct: 0 }
    ],
    pass: 100,
    critical: true
  },
  {
    id: "MG7",
    track: "MANAGER",
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
