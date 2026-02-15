import type { Lang } from '@/providers/LanguageProvider';

type T = Record<Lang, string>;

export const nav = {
  home: { fr: 'Accueil', en: 'Home', ar: 'الرئيسية' } as T,
  whoWeAre: { fr: 'Qui sommes-nous', en: 'Who we are', ar: 'من نحن' } as T,
  services: { fr: 'Services', en: 'Services', ar: 'الخدمات' } as T,
  marketing: { fr: 'Marketing Digital', en: 'Digital Marketing', ar: 'التسويق الرقمي' } as T,
  devIt: { fr: 'Développement IT', en: 'IT Development', ar: 'تطوير تكنولوجيا المعلومات' } as T,
  packs: { fr: 'Packs', en: 'Packs', ar: 'الباقات' } as T,
  shop: { fr: 'Boutique', en: 'Shop', ar: 'المتجر' } as T,
  work: { fr: 'Portfolio', en: 'Work', ar: 'أعمالنا' } as T,
  contact: { fr: 'Contact', en: 'Contact', ar: 'اتصل بنا' } as T,
  getQuote: { fr: 'Demander un devis', en: 'Get a quote', ar: 'طلب عرض سعر' } as T,
};

export const hero = {
  tagline: {
    fr: 'Créons ensemble votre impact digital',
    en: 'Let\'s create your digital impact together',
    ar: 'لنصنع معًا تأثيرك الرقمي',
  } as T,
  subtitle: {
    fr: 'OY Creative Agency — Agence hybride alliant marketing stratégique, production créative et développement technologique pour propulser votre marque.',
    en: 'OY Creative Agency — Hybrid agency combining strategic marketing, creative production and technology development to propel your brand.',
    ar: 'OY Creative Agency — وكالة شاملة تجمع بين التسويق الاستراتيجي والإنتاج الإبداعي والتطوير التكنولوجي لدفع علامتك التجارية.',
  } as T,
  ctaWhatsapp: { fr: 'Discuter sur WhatsApp', en: 'Chat on WhatsApp', ar: 'تحدث عبر واتساب' } as T,
  ctaServices: { fr: 'Découvrir nos services', en: 'Explore our services', ar: 'اكتشف خدماتنا' } as T,
};

export const showreel = {
  title: { fr: 'Notre showreel', en: 'Our showreel', ar: 'عرضنا المرئي' } as T,
  subtitle: {
    fr: 'Découvrez notre univers créatif en images',
    en: 'Discover our creative universe in motion',
    ar: 'اكتشف عالمنا الإبداعي بالصور المتحركة',
  } as T,
  fallback: {
    fr: 'Vidéo showreel bientôt disponible',
    en: 'Showreel video coming soon',
    ar: 'فيديو العرض قريبًا',
  } as T,
};

export const servicesHighlights = [
  {
    icon: 'computer',
    title: { fr: 'Création digitale', en: 'Digital creation', ar: 'الإبداع الرقمي' } as T,
    description: {
      fr: 'Sites web, applications, UX/UI et solutions IA sur mesure.',
      en: 'Websites, applications, UX/UI and custom AI solutions.',
      ar: 'مواقع ويب، تطبيقات، تجربة المستخدم وحلول ذكاء اصطناعي مخصصة.',
    } as T,
    link: '/services#digital',
  },
  {
    icon: 'megaphone',
    title: { fr: 'Marketing & Branding', en: 'Marketing & Branding', ar: 'التسويق والعلامة التجارية' } as T,
    description: {
      fr: 'Identité visuelle, stratégie digitale, community management et publicité.',
      en: 'Visual identity, digital strategy, community management and advertising.',
      ar: 'هوية بصرية، استراتيجية رقمية، إدارة المجتمع والإعلان.',
    } as T,
    link: '/services#marketing',
  },
  {
    icon: 'pencil',
    title: { fr: 'Contenu & Visibilité', en: 'Content & Visibility', ar: 'المحتوى والظهور' } as T,
    description: {
      fr: 'Création de contenus, visuels percutants, vidéos courtes et storytelling.',
      en: 'Content creation, impactful visuals, short videos and storytelling.',
      ar: 'إنشاء المحتوى، صور مؤثرة، فيديوهات قصيرة وسرد القصص.',
    } as T,
    link: '/services#content',
  },
  {
    icon: 'film',
    title: { fr: 'Production audiovisuelle', en: 'Audiovisual production', ar: 'الإنتاج السمعي البصري' } as T,
    description: {
      fr: 'Shooting, vidéo publicitaire & corporate, montage et motion design.',
      en: 'Photo shoots, advertising & corporate video, editing and motion design.',
      ar: 'تصوير فوتوغرافي، فيديو إعلاني ومؤسسي، مونتاج وموشن ديزاين.',
    } as T,
    link: '/services#production',
  },
];

export const whyUs = [
  {
    icon: 'target',
    title: { fr: 'Approche sur mesure', en: 'Tailored approach', ar: 'نهج مخصص' } as T,
    description: {
      fr: 'Chaque projet est unique. Nous adaptons notre stratégie et nos livrables à vos besoins spécifiques.',
      en: 'Every project is unique. We tailor our strategy and deliverables to your specific needs.',
      ar: 'كل مشروع فريد. نكيّف استراتيجيتنا ومخرجاتنا حسب احتياجاتك.',
    } as T,
  },
  {
    icon: 'bolt',
    title: { fr: 'Réactivité & rapidité', en: 'Fast & responsive', ar: 'سرعة واستجابة' } as T,
    description: {
      fr: 'Des délais respectés et une communication transparente tout au long du projet.',
      en: 'Respected deadlines and transparent communication throughout the project.',
      ar: 'مواعيد محترمة وتواصل شفاف طوال المشروع.',
    } as T,
  },
  {
    icon: 'refresh',
    title: { fr: 'Agence hybride', en: 'Hybrid agency', ar: 'وكالة شاملة' } as T,
    description: {
      fr: 'Marketing + Création + Tech sous un même toit. Pas de sous-traitance, une vision unifiée.',
      en: 'Marketing + Creation + Tech under one roof. No outsourcing, one unified vision.',
      ar: 'تسويق + إبداع + تكنولوجيا تحت سقف واحد. بدون تعاقد خارجي، رؤية موحدة.',
    } as T,
  },
  {
    icon: 'chart',
    title: { fr: 'Orienté résultats', en: 'Results-driven', ar: 'نتائج ملموسة' } as T,
    description: {
      fr: 'Chaque action est mesurable. Nous pilotons par la data pour maximiser votre ROI.',
      en: 'Every action is measurable. We drive by data to maximize your ROI.',
      ar: 'كل إجراء قابل للقياس. نعتمد على البيانات لتعظيم عائد استثمارك.',
    } as T,
  },
  {
    icon: 'users',
    title: { fr: 'Partenaire de croissance', en: 'Growth partner', ar: 'شريك النمو' } as T,
    description: {
      fr: 'Nous ne sommes pas un prestataire, mais un partenaire engagé dans votre succès à long terme.',
      en: 'We\'re not a vendor, but a partner committed to your long-term success.',
      ar: 'لسنا مجرد مزود خدمة، بل شريك ملتزم بنجاحك على المدى الطويل.',
    } as T,
  },
  {
    icon: 'globe',
    title: { fr: 'Expertise locale', en: 'Local expertise', ar: 'خبرة محلية' } as T,
    description: {
      fr: 'Basés en Tunisie, nous connaissons le marché local et régional à la perfection.',
      en: 'Based in Tunisia, we have perfect knowledge of the local and regional market.',
      ar: 'مقرنا في تونس، نعرف السوق المحلي والإقليمي بشكل مثالي.',
    } as T,
  },
];

export const process = [
  {
    step: 1,
    title: { fr: 'Découverte', en: 'Discovery', ar: 'الاكتشاف' } as T,
    description: {
      fr: 'Analyse de vos besoins, audit existant, benchmark concurrentiel.',
      en: 'Analysis of your needs, existing audit, competitive benchmark.',
      ar: 'تحليل احتياجاتك، تدقيق الوضع الحالي، مقارنة المنافسين.',
    } as T,
  },
  {
    step: 2,
    title: { fr: 'Stratégie', en: 'Strategy', ar: 'الاستراتيجية' } as T,
    description: {
      fr: 'Définition des objectifs, plan d\'action, choix des canaux.',
      en: 'Goal definition, action plan, channel selection.',
      ar: 'تحديد الأهداف، خطة العمل، اختيار القنوات.',
    } as T,
  },
  {
    step: 3,
    title: { fr: 'Production', en: 'Production', ar: 'الإنتاج' } as T,
    description: {
      fr: 'Création des livrables : design, développement, contenu, campagnes.',
      en: 'Creating deliverables: design, development, content, campaigns.',
      ar: 'إنشاء المخرجات: التصميم، التطوير، المحتوى، الحملات.',
    } as T,
  },
  {
    step: 4,
    title: { fr: 'Lancement', en: 'Launch', ar: 'الإطلاق' } as T,
    description: {
      fr: 'Mise en ligne, déploiement, activation des campagnes.',
      en: 'Going live, deployment, campaign activation.',
      ar: 'الإطلاق، النشر، تفعيل الحملات.',
    } as T,
  },
  {
    step: 5,
    title: { fr: 'Croissance', en: 'Growth', ar: 'النمو' } as T,
    description: {
      fr: 'Suivi, optimisation continue, reporting et accompagnement.',
      en: 'Monitoring, continuous optimization, reporting and support.',
      ar: 'المتابعة، التحسين المستمر، التقارير والدعم.',
    } as T,
  },
];

export const stats = [
  { value: 50, suffix: '+', label: { fr: 'Projets livrés', en: 'Projects delivered', ar: 'مشروع منجز' } as T },
  { value: 30, suffix: '+', label: { fr: 'Clients satisfaits', en: 'Happy clients', ar: 'عميل راضٍ' } as T },
  { value: 3, suffix: '+', label: { fr: 'Années d\'expérience', en: 'Years of experience', ar: 'سنوات خبرة' } as T },
  { value: 98, suffix: '%', label: { fr: 'Satisfaction client', en: 'Client satisfaction', ar: 'رضا العملاء' } as T },
];

export const testimonials = [
  {
    name: 'Ahmed B.',
    role: { fr: 'Fondateur, TechStart', en: 'Founder, TechStart', ar: 'مؤسس، تك ستارت' } as T,
    content: {
      fr: 'OY a transformé notre présence digitale. Leur approche hybride marketing + tech est exactement ce dont nous avions besoin. Résultats impressionnants en 3 mois.',
      en: 'OY transformed our digital presence. Their hybrid marketing + tech approach is exactly what we needed. Impressive results in 3 months.',
      ar: 'غيّرت OY حضورنا الرقمي بالكامل. نهجهم الشامل في التسويق والتكنولوجيا هو بالضبط ما كنا نحتاجه. نتائج مبهرة في 3 أشهر.',
    } as T,
  },
  {
    name: 'Sarah M.',
    role: { fr: 'Directrice Marketing, ModaShop', en: 'Marketing Director, ModaShop', ar: 'مديرة التسويق، مودا شوب' } as T,
    content: {
      fr: 'Une équipe réactive, créative et ultra-professionnelle. Notre e-commerce a vu ses ventes augmenter de 150% après leur intervention.',
      en: 'A reactive, creative and ultra-professional team. Our e-commerce saw sales increase by 150% after their intervention.',
      ar: 'فريق متجاوب وإبداعي ومحترف للغاية. شهدت مبيعات متجرنا الإلكتروني زيادة بنسبة 150% بعد تدخلهم.',
    } as T,
  },
  {
    name: 'Karim L.',
    role: { fr: 'CEO, FoodExpress', en: 'CEO, FoodExpress', ar: 'الرئيس التنفيذي، فود إكسبرس' } as T,
    content: {
      fr: 'De l\'identité visuelle à l\'application mobile, OY a géré l\'intégralité de notre projet. Un vrai partenaire de croissance.',
      en: 'From visual identity to mobile app, OY managed our entire project. A true growth partner.',
      ar: 'من الهوية البصرية إلى تطبيق الجوال، أدارت OY مشروعنا بالكامل. شريك نمو حقيقي.',
    } as T,
  },
  {
    name: 'Nadia R.',
    role: { fr: 'Gérante, Beauty Lounge', en: 'Manager, Beauty Lounge', ar: 'مديرة، بيوتي لاونج' } as T,
    content: {
      fr: 'Les contenus créés par OY ont boosté notre engagement sur les réseaux sociaux de manière spectaculaire. Très satisfaite de la collaboration.',
      en: 'The content created by OY spectacularly boosted our social media engagement. Very satisfied with the collaboration.',
      ar: 'المحتوى الذي أنشأته OY عزز تفاعلنا على وسائل التواصل الاجتماعي بشكل مذهل. راضية جدًا عن التعاون.',
    } as T,
  },
];

export const faq = [
  {
    question: {
      fr: 'Quels types de projets prenez-vous en charge ?',
      en: 'What types of projects do you handle?',
      ar: 'ما أنواع المشاريع التي تتولونها؟',
    } as T,
    answer: {
      fr: 'Nous gérons des projets de A à Z : sites web, applications, identité visuelle, stratégie marketing, création de contenu, production vidéo, et campagnes publicitaires. Notre force est de combiner tous ces services sous un même toit.',
      en: 'We manage projects from A to Z: websites, applications, visual identity, marketing strategy, content creation, video production, and advertising campaigns. Our strength is combining all these services under one roof.',
      ar: 'ندير المشاريع من الألف إلى الياء: مواقع ويب، تطبيقات، هوية بصرية، استراتيجية تسويقية، إنشاء محتوى، إنتاج فيديو، وحملات إعلانية. قوتنا تكمن في الجمع بين كل هذه الخدمات تحت سقف واحد.',
    } as T,
  },
  {
    question: {
      fr: 'Combien de temps prend un projet typique ?',
      en: 'How long does a typical project take?',
      ar: 'كم يستغرق المشروع النموذجي؟',
    } as T,
    answer: {
      fr: 'Cela dépend de la complexité. Un site vitrine prend 2-4 semaines, une application web 4-12 semaines, une stratégie marketing complète 2-3 semaines. Nous établissons un planning détaillé dès le départ.',
      en: 'It depends on complexity. A showcase website takes 2-4 weeks, a web application 4-12 weeks, a complete marketing strategy 2-3 weeks. We establish a detailed schedule from the start.',
      ar: 'يعتمد ذلك على مدى التعقيد. يستغرق موقع العرض 2-4 أسابيع، تطبيق ويب 4-12 أسبوعًا، استراتيجية تسويقية شاملة 2-3 أسابيع. نضع جدولًا زمنيًا مفصلاً من البداية.',
    } as T,
  },
  {
    question: {
      fr: 'Proposez-vous un accompagnement après la livraison ?',
      en: 'Do you offer post-delivery support?',
      ar: 'هل تقدمون دعمًا بعد التسليم؟',
    } as T,
    answer: {
      fr: 'Absolument. Chaque projet inclut une période de suivi. Nous proposons aussi des contrats de maintenance et d\'optimisation continue pour assurer la pérennité de vos investissements.',
      en: 'Absolutely. Each project includes a follow-up period. We also offer maintenance and continuous optimization contracts to ensure the longevity of your investments.',
      ar: 'بالتأكيد. يتضمن كل مشروع فترة متابعة. نقدم أيضًا عقود صيانة وتحسين مستمر لضمان استدامة استثماراتك.',
    } as T,
  },
  {
    question: {
      fr: 'Comment se déroule la première prise de contact ?',
      en: 'How does the first contact go?',
      ar: 'كيف يتم التواصل الأول؟',
    } as T,
    answer: {
      fr: 'Contactez-nous via WhatsApp, email ou le formulaire de contact. Nous organisons un appel de découverte gratuit de 30 minutes pour comprendre vos besoins et vous proposer une approche adaptée.',
      en: 'Contact us via WhatsApp, email or the contact form. We organize a free 30-minute discovery call to understand your needs and propose a tailored approach.',
      ar: 'تواصل معنا عبر واتساب أو البريد الإلكتروني أو نموذج الاتصال. ننظم مكالمة استكشاف مجانية لمدة 30 دقيقة لفهم احتياجاتك واقتراح نهج مناسب.',
    } as T,
  },
  {
    question: {
      fr: 'Travaillez-vous uniquement en Tunisie ?',
      en: 'Do you only work in Tunisia?',
      ar: 'هل تعملون فقط في تونس؟',
    } as T,
    answer: {
      fr: 'Non, nous travaillons avec des clients en Tunisie, en Afrique du Nord et en Europe. Notre équipe travaille aussi bien en présentiel qu\'à distance.',
      en: 'No, we work with clients in Tunisia, North Africa and Europe. Our team works both on-site and remotely.',
      ar: 'لا، نعمل مع عملاء في تونس وشمال أفريقيا وأوروبا. فريقنا يعمل حضوريًا وعن بُعد.',
    } as T,
  },
  {
    question: {
      fr: 'Quels sont vos tarifs ?',
      en: 'What are your rates?',
      ar: 'ما هي أسعاركم؟',
    } as T,
    answer: {
      fr: 'Nos tarifs sont sur mesure et dépendent de la portée du projet. Contactez-nous pour un devis gratuit et personnalisé. Consultez aussi notre page Packs pour des formules prédéfinies.',
      en: 'Our rates are custom and depend on the project scope. Contact us for a free, personalized quote. Also check our Packs page for predefined packages.',
      ar: 'أسعارنا مخصصة وتعتمد على نطاق المشروع. تواصل معنا للحصول على عرض أسعار مجاني ومخصص. اطلع أيضًا على صفحة الباقات لدينا.',
    } as T,
  },
];

export const insights = [
  {
    title: {
      fr: 'Marketing Digital : L\'ère de l\'Hyper-Personnalisation Prédictive',
      en: 'Digital Marketing: The Era of Predictive Hyper-Personalization',
      ar: 'التسويق الرقمي: عصر التخصيص الفائق التنبؤي',
    } as T,
    excerpt: {
      fr: 'Oubliez la simple segmentation ! En 2026, l\'IA ne se contente plus de réagir, elle anticipe. Découvrez comment l\'hyper-personnalisation prédictive transforme chaque interaction client en une expérience unique, avant même que le besoin ne soit exprimé.',
      en: 'Forget simple segmentation! In 2026, AI no longer just reacts, it anticipates. Discover how predictive hyper-personalization transforms every customer interaction into a unique experience, before the need is even expressed.',
      ar: 'انسَ التقسيم البسيط! في 2026، لم يعد الذكاء الاصطناعي يكتفي بالاستجابة، بل يتوقع. اكتشف كيف يحوّل التخصيص الفائق التنبؤي كل تفاعل مع العميل إلى تجربة فريدة.',
    } as T,
    category: { fr: 'Marketing', en: 'Marketing', ar: 'تسويق' } as T,
    image: '/images/content/article-1.jpg',
    date: '2026-02-10',
  },
  {
    title: {
      fr: 'UX Design : Au-delà de l\'écran – L\'UX Multimodale',
      en: 'UX Design: Beyond the Screen – Multimodal UX',
      ar: 'تصميم تجربة المستخدم: ما وراء الشاشة – تجربة المستخدم متعددة الوسائط',
    } as T,
    excerpt: {
      fr: 'L\'expérience utilisateur ne se limite plus au tactile et au visuel. Voix, gestes, haptique... L\'UX multimodale redéfinit notre interaction avec la technologie. Plongez dans le design d\'expériences qui engagent tous les sens.',
      en: 'User experience is no longer limited to touch and visuals. Voice, gestures, haptics... Multimodal UX redefines our interaction with technology. Dive into designing experiences that engage all senses.',
      ar: 'لم تعد تجربة المستخدم مقتصرة على اللمس والبصر. الصوت، الإيماءات، اللمس... تجربة المستخدم متعددة الوسائط تعيد تعريف تفاعلنا مع التكنولوجيا.',
    } as T,
    category: { fr: 'UX/Design', en: 'UX/Design', ar: 'تصميم' } as T,
    image: '/images/content/article-2.jpg',
    date: '2026-02-12',
  },
  {
    title: {
      fr: 'Audiovisuel : Le triomphe du format "Immersif et Brut"',
      en: 'Audiovisual: The Triumph of the "Immersive and Raw" Format',
      ar: 'السمعي البصري: انتصار الصيغة "الغامرة والخام"',
    } as T,
    excerpt: {
      fr: 'Les productions léchées laissent place à l\'authenticité captivante. Le format "Immersif et Brut" domine les écrans, privilégiant l\'émotion brute et la connexion directe. Analyse d\'une tendance qui redéfinit la production de contenu vidéo.',
      en: 'Polished productions give way to captivating authenticity. The "Immersive and Raw" format dominates screens, favoring raw emotion and direct connection. Analysis of a trend redefining video content production.',
      ar: 'الإنتاجات المصقولة تفسح المجال للأصالة الآسرة. الصيغة "الغامرة والخام" تهيمن على الشاشات، مفضّلة المشاعر الخام والتواصل المباشر.',
    } as T,
    category: { fr: 'Audiovisuel', en: 'Audiovisual', ar: 'سمعي بصري' } as T,
    image: '/images/content/article-3.jpg',
    date: '2026-02-14',
  },
];

// ===== TEAM =====
export const team = {
  sectionTitle: { fr: 'Les fondateurs', en: 'The founders', ar: 'المؤسسون' } as T,
  sectionSubtitle: {
    fr: 'Une complémentarité stratégique au service de votre réussite',
    en: 'Strategic complementarity at the service of your success',
    ar: 'تكامل استراتيجي في خدمة نجاحك',
  } as T,
  members: [
    {
      name: 'Oussema Habboubi',
      role: { fr: 'Fondateur | Marketing Digital & Stratégie', en: 'Founder | Digital Marketing & Strategy', ar: 'المؤسس | التسويق الرقمي والاستراتيجية' } as T,
      image: '/team/oussema.jpg',
      bio: {
        fr: 'Fondateur de OY Creative Agency et diplômé d\'un Master en Marketing Digital, Oussema accompagne les entreprises dans le développement de leur stratégie digitale, l\'optimisation de leur visibilité en ligne et la création de contenus performants. Son expertise couvre l\'analyse marketing, la gestion de campagnes digitales et la conception de supports de communication, avec une approche structurée et orientée résultats.',
        en: 'Founder of OY Creative Agency and holder of a Master\'s degree in Digital Marketing, Oussema helps businesses develop their digital strategy, optimize their online visibility and create high-performing content. His expertise covers marketing analysis, digital campaign management and communication material design, with a structured and results-oriented approach.',
        ar: 'مؤسس OY Creative Agency وحاصل على ماجستير في التسويق الرقمي، يرافق أسامة الشركات في تطوير استراتيجيتها الرقمية وتحسين ظهورها على الإنترنت وإنشاء محتوى عالي الأداء. تشمل خبرته التحليل التسويقي وإدارة الحملات الرقمية وتصميم وسائل الاتصال، بنهج منظم وموجه نحو النتائج.',
      } as T,
      skills: {
        fr: ['Stratégie digitale', 'Analyse marketing', 'Gestion de campagnes digitales', 'Création de contenus', 'Optimisation visibilité en ligne', 'Conception supports de communication'],
        en: ['Digital strategy', 'Marketing analysis', 'Digital campaign management', 'Content creation', 'Online visibility optimization', 'Communication material design'],
        ar: ['الاستراتيجية الرقمية', 'التحليل التسويقي', 'إدارة الحملات الرقمية', 'إنشاء المحتوى', 'تحسين الظهور على الإنترنت', 'تصميم وسائل الاتصال'],
      },
      certifications: {
        fr: ['Google Tag Manager', 'Google Analytics 4 (GA4)', 'Design Thinking', 'Écoute & PNL'],
        en: ['Google Tag Manager', 'Google Analytics 4 (GA4)', 'Design Thinking', 'Active Listening & NLP'],
        ar: ['Google Tag Manager', 'Google Analytics 4 (GA4)', 'التفكير التصميمي', 'الاستماع والبرمجة اللغوية العصبية'],
      },
    },
    {
      name: 'Yassmine Nouisser',
      role: { fr: 'Co-fondatrice | Tech & Création', en: 'Co-founder | Tech & Creation', ar: 'الشريكة المؤسسة | التكنولوجيا والإبداع' } as T,
      image: '/team/yassmine.jpg',
      bio: {
        fr: 'Étudiante ingénieure en Intelligence Artificielle et co-fondatrice de OY Creative Agency, Yassmine est le pilier technique et créatif de l\'agence. Elle allie développement web/mobile, UX/UI design, solutions IA et direction créative pour concevoir des produits digitaux innovants et performants. Sa double expertise tech et design lui permet de transformer chaque projet en une expérience digitale sur mesure.',
        en: 'AI engineering student and co-founder of OY Creative Agency, Yassmine is the technical and creative pillar of the agency. She combines web/mobile development, UX/UI design, AI solutions and creative direction to build innovative and high-performing digital products. Her dual tech and design expertise allows her to transform every project into a tailor-made digital experience.',
        ar: 'طالبة هندسة في الذكاء الاصطناعي والشريكة المؤسسة لـ OY Creative Agency، ياسمين هي الركيزة التقنية والإبداعية للوكالة. تجمع بين تطوير الويب والجوال، تصميم تجربة المستخدم، حلول الذكاء الاصطناعي والتوجيه الإبداعي لبناء منتجات رقمية مبتكرة وعالية الأداء.',
      } as T,
      skills: {
        fr: ['Développement web (React, Next.js)', 'Applications mobiles', 'UX/UI Design', 'Solutions IA & automatisation', 'Direction créative'],
        en: ['Web development (React, Next.js)', 'Mobile applications', 'UX/UI Design', 'AI solutions & automation', 'Creative direction'],
        ar: ['تطوير الويب (React, Next.js)', 'تطبيقات الجوال', 'تصميم تجربة المستخدم', 'حلول الذكاء الاصطناعي والأتمتة', 'التوجيه الإبداعي'],
      },
      certifications: {
        fr: ['Deep Learning', 'Meilleure application — Bal des Projets ESPRIT 2026', 'Meilleur jeu — GD3 ESPRIT 2024', 'Hedera Blockchain'],
        en: ['Deep Learning', 'Best Application — Bal des Projets ESPRIT 2026', 'Best Game — GD3 ESPRIT 2024', 'Hedera Blockchain'],
        ar: ['التعلم العميق', 'أفضل تطبيق — Bal des Projets ESPRIT 2026', 'أفضل لعبة — GD3 ESPRIT 2024', 'Hedera Blockchain'],
      },
    },
  ],
  roles: {
    title: { fr: 'Rôles & Fonctionnement', en: 'Roles & Operations', ar: 'الأدوار وآلية العمل' } as T,
    description: {
      fr: 'Oussema et Yassmine travaillent en binôme sur chaque projet. Oussema pilote la stratégie, la relation client et le positionnement marketing. Yassmine gère la conception, le développement et la direction créative. Ensemble, ils assurent un suivi de bout en bout — de la première consultation à la livraison finale — garantissant cohérence, qualité et réactivité.',
      en: 'Oussema and Yassmine work as a duo on every project. Oussema drives strategy, client relations and marketing positioning. Yassmine handles design, development and creative direction. Together, they ensure end-to-end follow-up — from the first consultation to final delivery — guaranteeing consistency, quality and responsiveness.',
      ar: 'يعمل أسامة وياسمين كثنائي في كل مشروع. يقود أسامة الاستراتيجية والعلاقات مع العملاء والتموضع التسويقي. تتولى ياسمين التصميم والتطوير والتوجيه الإبداعي. معًا، يضمنان متابعة شاملة — من الاستشارة الأولى إلى التسليم النهائي — مع ضمان الاتساق والجودة والاستجابة.',
    } as T,
  },
  values: {
    title: { fr: 'Nos valeurs', en: 'Our values', ar: 'قيمنا' } as T,
    items: [
      { icon: 'lightbulb', label: { fr: 'Innovation', en: 'Innovation', ar: 'الابتكار' } as T, description: { fr: 'Toujours à la pointe des tendances et technologies.', en: 'Always at the forefront of trends and technologies.', ar: 'دائمًا في طليعة الاتجاهات والتكنولوجيا.' } as T },
      { icon: 'palette', label: { fr: 'Créativité', en: 'Creativity', ar: 'الإبداع' } as T, description: { fr: 'Des idées originales qui font la différence.', en: 'Original ideas that make a difference.', ar: 'أفكار أصلية تصنع الفرق.' } as T },
      { icon: 'eye', label: { fr: 'Transparence', en: 'Transparency', ar: 'الشفافية' } as T, description: { fr: 'Communication ouverte et honnête à chaque étape.', en: 'Open and honest communication at every step.', ar: 'تواصل مفتوح وصادق في كل خطوة.' } as T },
      { icon: 'trophy', label: { fr: 'Excellence', en: 'Excellence', ar: 'التميز' } as T, description: { fr: 'Rien de moins que le meilleur pour nos clients.', en: 'Nothing less than the best for our clients.', ar: 'لا شيء أقل من الأفضل لعملائنا.' } as T },
    ],
  },
};

// ===== SERVICES DETAILLÉS =====
export const servicesDetailed = {
  pageTitle: { fr: 'Nos services', en: 'Our services', ar: 'خدماتنا' } as T,
  pageSubtitle: {
    fr: 'Des solutions complètes pour votre transformation digitale',
    en: 'Complete solutions for your digital transformation',
    ar: 'حلول شاملة لتحولك الرقمي',
  } as T,
  categories: [
    {
      id: 'digital',
      title: { fr: 'Création digitale', en: 'Digital creation', ar: 'الإبداع الرقمي' } as T,
      description: {
        fr: 'Du concept à la mise en ligne, nous concevons des expériences digitales performantes et mémorables.',
        en: 'From concept to launch, we design performant and memorable digital experiences.',
        ar: 'من المفهوم إلى الإطلاق، نصمم تجارب رقمية عالية الأداء ولا تُنسى.',
      } as T,
      services: [
        {
          title: { fr: 'Sites web professionnels', en: 'Professional websites', ar: 'مواقع ويب احترافية' } as T,
          description: {
            fr: 'Sites vitrine, dynamiques, sur mesure ou refonte complète. Chaque site est optimisé SEO, 100% responsive, rapide et sécurisé. Nous intégrons les meilleures pratiques UX pour convertir vos visiteurs en clients.',
            en: 'Showcase, dynamic, custom websites or complete redesign. Each site is SEO optimized, 100% responsive, fast and secure. We integrate the best UX practices to convert your visitors into clients.',
            ar: 'مواقع عرض، ديناميكية، مخصصة أو إعادة تصميم كاملة. كل موقع محسّن لمحركات البحث، متجاوب 100%، سريع وآمن. ندمج أفضل ممارسات تجربة المستخدم لتحويل زوارك إلى عملاء.',
          } as T,
          deliverables: {
            fr: ['Design UI/UX sur mesure', 'Développement front-end & back-end', 'Pages : accueil, à propos, services, blog, contact', 'Intégration SEO technique', 'Responsive mobile/tablette/desktop', 'Formulaires de contact', 'Analytics & tracking', 'Formation utilisation', 'Hébergement & déploiement', '30 jours de support post-livraison'],
            en: ['Custom UI/UX design', 'Front-end & back-end development', 'Pages: home, about, services, blog, contact', 'Technical SEO integration', 'Mobile/tablet/desktop responsive', 'Contact forms', 'Analytics & tracking', 'Usage training', 'Hosting & deployment', '30-day post-delivery support'],
            ar: ['تصميم UI/UX مخصص', 'تطوير الواجهة الأمامية والخلفية', 'صفحات: الرئيسية، حول، الخدمات، المدونة، اتصل بنا', 'تحسين محركات البحث التقني', 'متجاوب مع الجوال/التابلت/سطح المكتب', 'نماذج الاتصال', 'التحليلات والتتبع', 'تدريب على الاستخدام', 'الاستضافة والنشر', '30 يوم دعم بعد التسليم'],
          },
          process: {
            fr: ['Brief & analyse', 'Maquette & prototype', 'Développement', 'Tests & optimisation', 'Mise en ligne & formation'],
            en: ['Brief & analysis', 'Mockup & prototype', 'Development', 'Testing & optimization', 'Launch & training'],
            ar: ['ملخص وتحليل', 'نموذج أولي', 'التطوير', 'الاختبار والتحسين', 'الإطلاق والتدريب'],
          },
        },
        {
          title: { fr: 'Applications web & mobiles', en: 'Web & mobile applications', ar: 'تطبيقات الويب والجوال' } as T,
          description: {
            fr: 'Applications métiers, dashboards, plateformes SaaS, applications mobiles iOS/Android. Nous développons des solutions robustes avec les technologies modernes (React, Next.js, React Native, Node.js).',
            en: 'Business applications, dashboards, SaaS platforms, iOS/Android mobile apps. We develop robust solutions with modern technologies (React, Next.js, React Native, Node.js).',
            ar: 'تطبيقات الأعمال، لوحات التحكم، منصات SaaS، تطبيقات iOS/Android. نطور حلولًا قوية بتقنيات حديثة (React, Next.js, React Native, Node.js).',
          } as T,
          deliverables: {
            fr: ['Architecture technique', 'API REST / GraphQL', 'Interface utilisateur intuitive', 'Base de données optimisée', 'Authentification sécurisée', 'Tests automatisés', 'Déploiement CI/CD', 'Documentation technique', 'Maintenance & support'],
            en: ['Technical architecture', 'REST / GraphQL API', 'Intuitive user interface', 'Optimized database', 'Secure authentication', 'Automated tests', 'CI/CD deployment', 'Technical documentation', 'Maintenance & support'],
            ar: ['الهندسة التقنية', 'API REST / GraphQL', 'واجهة مستخدم بديهية', 'قاعدة بيانات محسّنة', 'مصادقة آمنة', 'اختبارات آلية', 'نشر CI/CD', 'التوثيق التقني', 'الصيانة والدعم'],
          },
          process: {
            fr: ['Cadrage & spécifications', 'Conception UX/UI', 'Sprint développement', 'Tests QA', 'Déploiement & monitoring'],
            en: ['Scoping & specifications', 'UX/UI design', 'Development sprints', 'QA testing', 'Deployment & monitoring'],
            ar: ['التحديد والمواصفات', 'تصميم UX/UI', 'سباقات التطوير', 'اختبار الجودة', 'النشر والمراقبة'],
          },
        },
        {
          title: { fr: 'UX/UI Design', en: 'UX/UI Design', ar: 'تصميم UX/UI' } as T,
          description: {
            fr: 'Design d\'interfaces centrées utilisateur. Recherche UX, wireframes, prototypes interactifs, design systems et tests utilisateurs pour des expériences fluides et engageantes.',
            en: 'User-centered interface design. UX research, wireframes, interactive prototypes, design systems and user testing for smooth and engaging experiences.',
            ar: 'تصميم واجهات تتمحور حول المستخدم. أبحاث تجربة المستخدم، إطارات سلكية، نماذج تفاعلية، أنظمة تصميم واختبارات مستخدم لتجارب سلسة وجذابة.',
          } as T,
          deliverables: {
            fr: ['Audit UX existant', 'Personas & parcours utilisateur', 'Wireframes', 'Maquettes haute fidélité (Figma)', 'Prototype interactif', 'Design system', 'Tests utilisateurs', 'Handoff développement'],
            en: ['Existing UX audit', 'Personas & user journeys', 'Wireframes', 'High-fidelity mockups (Figma)', 'Interactive prototype', 'Design system', 'User testing', 'Development handoff'],
            ar: ['تدقيق تجربة المستخدم', 'شخصيات المستخدم ورحلاتهم', 'إطارات سلكية', 'نماذج عالية الدقة (Figma)', 'نموذج تفاعلي', 'نظام التصميم', 'اختبارات المستخدم', 'تسليم التطوير'],
          },
          process: {
            fr: ['Recherche & analyse', 'Idéation & wireframes', 'Design visuel', 'Prototype & tests', 'Itération & livraison'],
            en: ['Research & analysis', 'Ideation & wireframes', 'Visual design', 'Prototype & testing', 'Iteration & delivery'],
            ar: ['البحث والتحليل', 'التفكير والإطارات السلكية', 'التصميم البصري', 'النموذج والاختبار', 'التكرار والتسليم'],
          },
        },
        {
          title: { fr: 'Solutions IA', en: 'AI Solutions', ar: 'حلول الذكاء الاصطناعي' } as T,
          description: {
            fr: 'Chatbots intelligents, assistants IA personnalisés, automatisation de workflows. Nous intégrons l\'intelligence artificielle dans vos processus pour gagner en efficacité et en productivité.',
            en: 'Smart chatbots, custom AI assistants, workflow automation. We integrate artificial intelligence into your processes to gain efficiency and productivity.',
            ar: 'روبوتات محادثة ذكية، مساعدات ذكاء اصطناعي مخصصة، أتمتة سير العمل. ندمج الذكاء الاصطناعي في عملياتك لزيادة الكفاءة والإنتاجية.',
          } as T,
          deliverables: {
            fr: ['Audit des besoins IA', 'Conception de la solution', 'Développement & intégration', 'Entraînement du modèle', 'Interface d\'administration', 'Tests & optimisation', 'Déploiement', 'Formation équipe'],
            en: ['AI needs audit', 'Solution design', 'Development & integration', 'Model training', 'Admin interface', 'Testing & optimization', 'Deployment', 'Team training'],
            ar: ['تدقيق احتياجات الذكاء الاصطناعي', 'تصميم الحل', 'التطوير والتكامل', 'تدريب النموذج', 'واجهة الإدارة', 'الاختبار والتحسين', 'النشر', 'تدريب الفريق'],
          },
          process: {
            fr: ['Analyse des cas d\'usage', 'POC / Proof of Concept', 'Développement', 'Test & validation', 'Déploiement & suivi'],
            en: ['Use case analysis', 'POC / Proof of Concept', 'Development', 'Test & validation', 'Deployment & monitoring'],
            ar: ['تحليل حالات الاستخدام', 'إثبات المفهوم', 'التطوير', 'الاختبار والتحقق', 'النشر والمتابعة'],
          },
        },
      ],
    },
    {
      id: 'marketing',
      title: { fr: 'Marketing & Branding', en: 'Marketing & Branding', ar: 'التسويق والعلامة التجارية' } as T,
      description: {
        fr: 'Construisez une marque forte et une présence digitale qui convertit.',
        en: 'Build a strong brand and a digital presence that converts.',
        ar: 'ابنِ علامة تجارية قوية وحضورًا رقميًا يحقق النتائج.',
      } as T,
      services: [
        {
          title: { fr: 'Identité visuelle', en: 'Visual identity', ar: 'الهوية البصرية' } as T,
          description: {
            fr: 'Logo, charte graphique, univers de marque complet. Nous créons une identité visuelle cohérente et mémorable qui reflète vos valeurs et se démarque de la concurrence.',
            en: 'Logo, brand guidelines, complete brand universe. We create a coherent and memorable visual identity that reflects your values and stands out from the competition.',
            ar: 'شعار، دليل العلامة التجارية، عالم العلامة الكامل. نبتكر هوية بصرية متماسكة ولا تُنسى تعكس قيمك وتتميز عن المنافسة.',
          } as T,
          deliverables: {
            fr: ['Logo (variations)', 'Charte graphique complète', 'Palette de couleurs', 'Typographie', 'Éléments graphiques', 'Templates réseaux sociaux', 'Papeterie (carte de visite, en-tête)', 'Guide d\'utilisation de la marque'],
            en: ['Logo (variations)', 'Complete brand guidelines', 'Color palette', 'Typography', 'Graphic elements', 'Social media templates', 'Stationery (business card, letterhead)', 'Brand usage guide'],
            ar: ['الشعار (تنويعات)', 'دليل العلامة التجارية الكامل', 'لوحة الألوان', 'الطباعة', 'العناصر الرسومية', 'قوالب وسائل التواصل', 'قرطاسية (بطاقة عمل، ترويسة)', 'دليل استخدام العلامة'],
          },
          process: {
            fr: ['Brief créatif', 'Recherche & inspiration', 'Propositions créatives', 'Affinement', 'Livraison finale & guide'],
            en: ['Creative brief', 'Research & inspiration', 'Creative proposals', 'Refinement', 'Final delivery & guide'],
            ar: ['ملخص إبداعي', 'البحث والإلهام', 'المقترحات الإبداعية', 'التنقيح', 'التسليم النهائي والدليل'],
          },
        },
        {
          title: { fr: 'Stratégie digitale', en: 'Digital strategy', ar: 'الاستراتيجية الرقمية' } as T,
          description: {
            fr: 'Plan marketing complet, positionnement, objectifs SMART, KPIs et roadmap de croissance digitale adaptée à votre secteur et vos ambitions.',
            en: 'Complete marketing plan, positioning, SMART goals, KPIs and digital growth roadmap tailored to your sector and ambitions.',
            ar: 'خطة تسويق شاملة، تموضع، أهداف SMART، مؤشرات أداء وخارطة طريق نمو رقمي مصممة لقطاعك وطموحاتك.',
          } as T,
          deliverables: { fr: ['Audit digital complet', 'Analyse concurrentielle', 'Personas', 'Stratégie de contenu', 'Plan media', 'KPIs & tableau de bord', 'Roadmap trimestrielle'], en: ['Complete digital audit', 'Competitive analysis', 'Personas', 'Content strategy', 'Media plan', 'KPIs & dashboard', 'Quarterly roadmap'], ar: ['تدقيق رقمي شامل', 'تحليل المنافسين', 'شخصيات المستخدم', 'استراتيجية المحتوى', 'خطة الوسائط', 'مؤشرات الأداء ولوحة التحكم', 'خارطة طريق ربع سنوية'] },
          process: { fr: ['Audit & diagnostic', 'Définition stratégique', 'Plan d\'action', 'Implémentation', 'Suivi & optimisation'], en: ['Audit & diagnosis', 'Strategic definition', 'Action plan', 'Implementation', 'Monitoring & optimization'], ar: ['التدقيق والتشخيص', 'التحديد الاستراتيجي', 'خطة العمل', 'التنفيذ', 'المتابعة والتحسين'] },
        },
        {
          title: { fr: 'Community management', en: 'Community management', ar: 'إدارة المجتمع' } as T,
          description: {
            fr: 'Gestion complète de vos réseaux sociaux : création de contenu, planification, interaction avec votre communauté, analyse des performances et croissance organique.',
            en: 'Complete management of your social media: content creation, planning, community interaction, performance analysis and organic growth.',
            ar: 'إدارة شاملة لوسائل التواصل الاجتماعي: إنشاء المحتوى، التخطيط، التفاعل مع المجتمع، تحليل الأداء والنمو العضوي.',
          } as T,
          deliverables: { fr: ['Calendrier éditorial', 'Création de posts (visuels + textes)', 'Stories & Reels', 'Gestion commentaires & messages', 'Reporting mensuel', 'Veille & tendances'], en: ['Editorial calendar', 'Post creation (visuals + text)', 'Stories & Reels', 'Comment & message management', 'Monthly reporting', 'Trends monitoring'], ar: ['التقويم التحريري', 'إنشاء المنشورات (مرئيات + نصوص)', 'ستوريز وريلز', 'إدارة التعليقات والرسائل', 'التقرير الشهري', 'مراقبة الاتجاهات'] },
          process: { fr: ['Audit des réseaux', 'Stratégie éditoriale', 'Création & planification', 'Publication & interaction', 'Analyse & optimisation'], en: ['Social audit', 'Editorial strategy', 'Creation & planning', 'Publishing & interaction', 'Analysis & optimization'], ar: ['تدقيق الشبكات', 'الاستراتيجية التحريرية', 'الإنشاء والتخطيط', 'النشر والتفاعل', 'التحليل والتحسين'] },
        },
        {
          title: { fr: 'Publicité Meta Ads / Google Ads', en: 'Meta Ads / Google Ads advertising', ar: 'إعلانات ميتا / جوجل' } as T,
          description: {
            fr: 'Campagnes publicitaires ciblées sur Facebook, Instagram et Google. Stratégie d\'enchères, ciblage avancé, A/B testing et optimisation continue pour maximiser votre ROI.',
            en: 'Targeted advertising campaigns on Facebook, Instagram and Google. Bidding strategy, advanced targeting, A/B testing and continuous optimization to maximize your ROI.',
            ar: 'حملات إعلانية مستهدفة على فيسبوك وإنستغرام وجوجل. استراتيجية المزايدة، استهداف متقدم، اختبار A/B وتحسين مستمر لتعظيم عائد الاستثمار.',
          } as T,
          deliverables: { fr: ['Stratégie publicitaire', 'Création des visuels & copies', 'Configuration des campagnes', 'Ciblage audiences', 'A/B testing', 'Tracking & pixels', 'Reporting hebdomadaire', 'Optimisation continue'], en: ['Advertising strategy', 'Visual & copy creation', 'Campaign setup', 'Audience targeting', 'A/B testing', 'Tracking & pixels', 'Weekly reporting', 'Continuous optimization'], ar: ['استراتيجية إعلانية', 'إنشاء المرئيات والنصوص', 'إعداد الحملات', 'استهداف الجمهور', 'اختبار A/B', 'التتبع والبكسل', 'تقرير أسبوعي', 'تحسين مستمر'] },
          process: { fr: ['Analyse & objectifs', 'Création campagnes', 'Lancement & monitoring', 'Optimisation', 'Reporting & scaling'], en: ['Analysis & goals', 'Campaign creation', 'Launch & monitoring', 'Optimization', 'Reporting & scaling'], ar: ['التحليل والأهداف', 'إنشاء الحملات', 'الإطلاق والمراقبة', 'التحسين', 'التقارير والتوسع'] },
        },
      ],
    },
    {
      id: 'content',
      title: { fr: 'Contenu & Visibilité', en: 'Content & Visibility', ar: 'المحتوى والظهور' } as T,
      description: {
        fr: 'Du contenu qui capte l\'attention et amplifie votre message.',
        en: 'Content that captures attention and amplifies your message.',
        ar: 'محتوى يجذب الانتباه ويضخم رسالتك.',
      } as T,
      services: [
        {
          title: { fr: 'Création de contenus', en: 'Content creation', ar: 'إنشاء المحتوى' } as T,
          description: { fr: 'Rédaction web, articles de blog, newsletters, scripts vidéo. Un contenu optimisé SEO qui engage votre audience et renforce votre autorité.', en: 'Web copywriting, blog articles, newsletters, video scripts. SEO-optimized content that engages your audience and strengthens your authority.', ar: 'كتابة محتوى الويب، مقالات المدونة، النشرات الإخبارية، نصوص الفيديو. محتوى محسّن لمحركات البحث يجذب جمهورك ويعزز مكانتك.' } as T,
          deliverables: { fr: ['Articles de blog SEO', 'Pages web', 'Newsletters', 'Scripts vidéo', 'Légendes réseaux sociaux', 'E-books & guides'], en: ['SEO blog articles', 'Web pages', 'Newsletters', 'Video scripts', 'Social media captions', 'E-books & guides'], ar: ['مقالات مدونة SEO', 'صفحات ويب', 'نشرات إخبارية', 'نصوص فيديو', 'تعليقات وسائل التواصل', 'كتب إلكترونية وأدلة'] },
          process: { fr: ['Brief éditorial', 'Recherche & rédaction', 'Révision', 'Optimisation SEO', 'Publication'], en: ['Editorial brief', 'Research & writing', 'Review', 'SEO optimization', 'Publishing'], ar: ['ملخص تحريري', 'البحث والكتابة', 'المراجعة', 'تحسين SEO', 'النشر'] },
        },
        {
          title: { fr: 'Visuels & design graphique', en: 'Visuals & graphic design', ar: 'المرئيات والتصميم الجرافيكي' } as T,
          description: { fr: 'Visuels pour réseaux sociaux, bannières, infographies, présentations. Des créations percutantes qui renforcent votre identité visuelle.', en: 'Visuals for social media, banners, infographics, presentations. Impactful creations that reinforce your visual identity.', ar: 'مرئيات لوسائل التواصل، لافتات، رسوم بيانية، عروض تقديمية. إبداعات مؤثرة تعزز هويتك البصرية.' } as T,
          deliverables: { fr: ['Posts réseaux sociaux', 'Bannières web', 'Infographies', 'Présentations', 'Visuels publicitaires', 'Supports print'], en: ['Social media posts', 'Web banners', 'Infographics', 'Presentations', 'Ad visuals', 'Print materials'], ar: ['منشورات وسائل التواصل', 'لافتات ويب', 'رسوم بيانية', 'عروض تقديمية', 'مرئيات إعلانية', 'مواد مطبوعة'] },
          process: { fr: ['Brief créatif', 'Moodboard', 'Création', 'Révisions', 'Livraison multi-formats'], en: ['Creative brief', 'Moodboard', 'Creation', 'Revisions', 'Multi-format delivery'], ar: ['ملخص إبداعي', 'لوحة المزاج', 'الإبداع', 'المراجعات', 'تسليم متعدد الصيغ'] },
        },
        {
          title: { fr: 'Vidéos courtes & Reels', en: 'Short videos & Reels', ar: 'فيديوهات قصيرة وريلز' } as T,
          description: { fr: 'Contenu vidéo court et engageant pour Instagram Reels, TikTok, YouTube Shorts. Captez l\'attention en quelques secondes.', en: 'Short, engaging video content for Instagram Reels, TikTok, YouTube Shorts. Capture attention in seconds.', ar: 'محتوى فيديو قصير وجذاب لإنستغرام ريلز وتيك توك ويوتيوب شورتس. اجذب الانتباه في ثوانٍ.' } as T,
          deliverables: { fr: ['Script & storyboard', 'Tournage ou montage stock', 'Montage & effets', 'Sous-titres', 'Adaptation multi-plateformes'], en: ['Script & storyboard', 'Filming or stock editing', 'Editing & effects', 'Subtitles', 'Multi-platform adaptation'], ar: ['سيناريو وقصة مصورة', 'تصوير أو مونتاج', 'مونتاج وتأثيرات', 'ترجمة', 'تكييف متعدد المنصات'] },
          process: { fr: ['Concept & script', 'Production', 'Montage', 'Validation', 'Publication optimisée'], en: ['Concept & script', 'Production', 'Editing', 'Validation', 'Optimized publishing'], ar: ['المفهوم والسيناريو', 'الإنتاج', 'المونتاج', 'التحقق', 'نشر محسّن'] },
        },
        {
          title: { fr: 'Storytelling de marque', en: 'Brand storytelling', ar: 'سرد قصة العلامة' } as T,
          description: { fr: 'Racontez votre histoire de façon authentique et captivante. Nous créons un narratif de marque qui résonne avec votre audience et crée un lien émotionnel durable.', en: 'Tell your story authentically and captivatingly. We create a brand narrative that resonates with your audience and creates a lasting emotional connection.', ar: 'اروِ قصتك بأصالة وجاذبية. نبتكر سردًا للعلامة يتردد صداه مع جمهورك ويخلق رابطًا عاطفيًا دائمًا.' } as T,
          deliverables: { fr: ['Histoire de marque', 'Manifeste', 'Ton de voix', 'Messages clés', 'Contenu narratif'], en: ['Brand story', 'Manifesto', 'Tone of voice', 'Key messages', 'Narrative content'], ar: ['قصة العلامة', 'البيان', 'نبرة الصوت', 'الرسائل الرئيسية', 'المحتوى السردي'] },
          process: { fr: ['Interviews & recherche', 'Définition narratif', 'Rédaction', 'Validation', 'Déploiement'], en: ['Interviews & research', 'Narrative definition', 'Writing', 'Validation', 'Deployment'], ar: ['المقابلات والبحث', 'تحديد السرد', 'الكتابة', 'التحقق', 'النشر'] },
        },
      ],
    },
    {
      id: 'production',
      title: { fr: 'Production audiovisuelle', en: 'Audiovisual production', ar: 'الإنتاج السمعي البصري' } as T,
      description: {
        fr: 'Des productions visuelles haut de gamme pour marquer les esprits.',
        en: 'High-end visual productions to make a lasting impression.',
        ar: 'إنتاجات بصرية عالية الجودة تترك أثرًا دائمًا.',
      } as T,
      services: [
        {
          title: { fr: 'Shooting photo', en: 'Photo shooting', ar: 'التصوير الفوتوغرافي' } as T,
          description: { fr: 'Shooting produit, corporate, événementiel ou lifestyle. Des photos professionnelles qui subliment votre image de marque.', en: 'Product, corporate, event or lifestyle photography. Professional photos that elevate your brand image.', ar: 'تصوير المنتجات، المؤسسات، الفعاليات أو نمط الحياة. صور احترافية ترتقي بصورة علامتك.' } as T,
          deliverables: { fr: ['Direction artistique', 'Shooting professionnel', 'Retouche & post-production', 'Livraison haute résolution', 'Versions web optimisées'], en: ['Art direction', 'Professional shooting', 'Retouching & post-production', 'High-resolution delivery', 'Web-optimized versions'], ar: ['التوجيه الفني', 'تصوير احترافي', 'تعديل وإنتاج لاحق', 'تسليم عالي الدقة', 'نسخ محسّنة للويب'] },
          process: { fr: ['Brief & direction artistique', 'Organisation shooting', 'Shooting', 'Post-production', 'Livraison'], en: ['Brief & art direction', 'Shooting organization', 'Shooting', 'Post-production', 'Delivery'], ar: ['ملخص وتوجيه فني', 'تنظيم التصوير', 'التصوير', 'الإنتاج اللاحق', 'التسليم'] },
        },
        {
          title: { fr: 'Vidéo publicitaire & corporate', en: 'Advertising & corporate video', ar: 'فيديو إعلاني ومؤسسي' } as T,
          description: { fr: 'Vidéos publicitaires, films corporate, témoignages clients, vidéos de présentation. Production complète du script au montage final.', en: 'Advertising videos, corporate films, client testimonials, presentation videos. Complete production from script to final edit.', ar: 'فيديوهات إعلانية، أفلام مؤسسية، شهادات العملاء، فيديوهات تقديمية. إنتاج كامل من السيناريو إلى المونتاج النهائي.' } as T,
          deliverables: { fr: ['Script & storyboard', 'Production (tournage)', 'Montage professionnel', 'Étalonnage couleur', 'Sound design', 'Versions multi-formats'], en: ['Script & storyboard', 'Production (filming)', 'Professional editing', 'Color grading', 'Sound design', 'Multi-format versions'], ar: ['سيناريو وقصة مصورة', 'الإنتاج (التصوير)', 'مونتاج احترافي', 'تدريج الألوان', 'تصميم الصوت', 'نسخ متعددة الصيغ'] },
          process: { fr: ['Pré-production', 'Tournage', 'Montage', 'Post-production', 'Livraison & diffusion'], en: ['Pre-production', 'Filming', 'Editing', 'Post-production', 'Delivery & distribution'], ar: ['ما قبل الإنتاج', 'التصوير', 'المونتاج', 'ما بعد الإنتاج', 'التسليم والتوزيع'] },
        },
        {
          title: { fr: 'Montage vidéo', en: 'Video editing', ar: 'مونتاج الفيديو' } as T,
          description: { fr: 'Montage professionnel de vos rushes existants. Nous transformons vos séquences brutes en contenus dynamiques et engageants.', en: 'Professional editing of your existing footage. We transform your raw sequences into dynamic and engaging content.', ar: 'مونتاج احترافي للقطاتك الموجودة. نحوّل تسجيلاتك الخام إلى محتوى ديناميكي وجذاب.' } as T,
          deliverables: { fr: ['Montage professionnel', 'Transitions & effets', 'Sous-titrage', 'Musique & sound design', 'Export multi-formats'], en: ['Professional editing', 'Transitions & effects', 'Subtitling', 'Music & sound design', 'Multi-format export'], ar: ['مونتاج احترافي', 'انتقالات وتأثيرات', 'ترجمة', 'موسيقى وتصميم صوت', 'تصدير متعدد الصيغ'] },
          process: { fr: ['Réception rushes', 'Dérushage', 'Montage', 'Révisions', 'Export final'], en: ['Footage reception', 'Logging', 'Editing', 'Revisions', 'Final export'], ar: ['استلام اللقطات', 'الفرز', 'المونتاج', 'المراجعات', 'التصدير النهائي'] },
        },
        {
          title: { fr: 'Motion design', en: 'Motion design', ar: 'موشن ديزاين' } as T,
          description: { fr: 'Animations graphiques pour vos intros, logos animés, infographies animées et contenus explicatifs. Du mouvement pour capter l\'attention.', en: 'Graphic animations for your intros, animated logos, animated infographics and explainer content. Motion to capture attention.', ar: 'رسوم متحركة لمقدماتك، شعارات متحركة، رسوم بيانية متحركة ومحتوى توضيحي. حركة لجذب الانتباه.' } as T,
          deliverables: { fr: ['Concept & storyboard', 'Design des éléments', 'Animation', 'Sound design', 'Livraison multi-formats'], en: ['Concept & storyboard', 'Element design', 'Animation', 'Sound design', 'Multi-format delivery'], ar: ['المفهوم والقصة المصورة', 'تصميم العناصر', 'التحريك', 'تصميم الصوت', 'تسليم متعدد الصيغ'] },
          process: { fr: ['Brief & concept', 'Design', 'Animation', 'Révisions', 'Export'], en: ['Brief & concept', 'Design', 'Animation', 'Revisions', 'Export'], ar: ['ملخص ومفهوم', 'التصميم', 'التحريك', 'المراجعات', 'التصدير'] },
        },
      ],
    },
  ],
};

// ===== PACKS =====
export const packs = [
  {
    name: { fr: 'Starter', en: 'Starter', ar: 'ستارتر' } as T,
    tagline: { fr: 'L\'essentiel pour démarrer', en: 'The essentials to get started', ar: 'الأساسيات للبداية' } as T,
    description: {
      fr: 'Parfait pour les entrepreneurs et petites entreprises qui veulent poser les bases de leur présence digitale.',
      en: 'Perfect for entrepreneurs and small businesses wanting to establish their digital presence foundations.',
      ar: 'مثالي لرواد الأعمال والشركات الصغيرة الراغبين في تأسيس حضورهم الرقمي.',
    } as T,
    includes: {
      fr: ['Site vitrine (5 pages)', 'Logo + charte graphique basique', 'Configuration réseaux sociaux', 'SEO de base', 'Support 15 jours'],
      en: ['Showcase website (5 pages)', 'Logo + basic brand guidelines', 'Social media setup', 'Basic SEO', '15-day support'],
      ar: ['موقع عرض (5 صفحات)', 'شعار + دليل علامة أساسي', 'إعداد وسائل التواصل', 'SEO أساسي', 'دعم 15 يومًا'],
    },
    popular: false,
  },
  {
    name: { fr: 'Growth', en: 'Growth', ar: 'النمو' } as T,
    tagline: { fr: 'Accélérez votre croissance digitale', en: 'Accelerate your digital growth', ar: 'سرّع نموك الرقمي' } as T,
    description: {
      fr: 'Pour les entreprises prêtes à scaler. Un accompagnement complet marketing + web pour des résultats mesurables.',
      en: 'For businesses ready to scale. Complete marketing + web support for measurable results.',
      ar: 'للشركات المستعدة للتوسع. دعم شامل في التسويق والويب لنتائج قابلة للقياس.',
    } as T,
    includes: {
      fr: ['Site web professionnel (10+ pages)', 'Identité visuelle complète', 'Stratégie digitale', 'Community management (3 mois)', 'Campagne publicitaire setup', 'SEO avancé', 'Reporting mensuel', 'Support 30 jours'],
      en: ['Professional website (10+ pages)', 'Complete visual identity', 'Digital strategy', 'Community management (3 months)', 'Ad campaign setup', 'Advanced SEO', 'Monthly reporting', '30-day support'],
      ar: ['موقع احترافي (10+ صفحات)', 'هوية بصرية كاملة', 'استراتيجية رقمية', 'إدارة المجتمع (3 أشهر)', 'إعداد حملة إعلانية', 'SEO متقدم', 'تقرير شهري', 'دعم 30 يومًا'],
    },
    popular: true,
  },
  {
    name: { fr: 'Performance', en: 'Performance', ar: 'الأداء' } as T,
    tagline: { fr: 'Marketing avancé orienté ROI', en: 'Advanced ROI-driven marketing', ar: 'تسويق متقدم موجه نحو العائد' } as T,
    description: {
      fr: 'Maximisez votre retour sur investissement avec des campagnes publicitaires avancées et un suivi data-driven.',
      en: 'Maximize your ROI with advanced advertising campaigns and data-driven monitoring.',
      ar: 'عظّم عائد استثمارك مع حملات إعلانية متقدمة ومتابعة مبنية على البيانات.',
    } as T,
    includes: {
      fr: ['Audit digital complet', 'Stratégie d\'acquisition', 'Campagnes Meta Ads + Google Ads', 'Landing pages optimisées', 'A/B testing', 'Tracking avancé (pixels, conversions)', 'Reporting hebdomadaire', 'Optimisation continue (3 mois)'],
      en: ['Complete digital audit', 'Acquisition strategy', 'Meta Ads + Google Ads campaigns', 'Optimized landing pages', 'A/B testing', 'Advanced tracking (pixels, conversions)', 'Weekly reporting', 'Continuous optimization (3 months)'],
      ar: ['تدقيق رقمي شامل', 'استراتيجية الاستحواذ', 'حملات ميتا + جوجل', 'صفحات هبوط محسّنة', 'اختبار A/B', 'تتبع متقدم (بكسل، تحويلات)', 'تقرير أسبوعي', 'تحسين مستمر (3 أشهر)'],
    },
    popular: false,
  },
  {
    name: { fr: 'E-commerce', en: 'E-commerce', ar: 'التجارة الإلكترونية' } as T,
    tagline: { fr: 'Votre boutique en ligne clé en main', en: 'Your turnkey online store', ar: 'متجرك الإلكتروني الجاهز' } as T,
    description: {
      fr: 'Solution e-commerce complète : de la boutique au marketing, tout pour vendre en ligne efficacement.',
      en: 'Complete e-commerce solution: from store to marketing, everything to sell online effectively.',
      ar: 'حل تجارة إلكترونية شامل: من المتجر إلى التسويق، كل ما تحتاجه للبيع عبر الإنترنت.',
    } as T,
    includes: {
      fr: ['Boutique en ligne complète', 'Design UX/UI e-commerce', 'Catalogue produits', 'Paiement en ligne sécurisé', 'Gestion des commandes', 'SEO e-commerce', 'Campagne de lancement', 'Formation gestion boutique', 'Support 60 jours'],
      en: ['Complete online store', 'E-commerce UX/UI design', 'Product catalog', 'Secure online payment', 'Order management', 'E-commerce SEO', 'Launch campaign', 'Store management training', '60-day support'],
      ar: ['متجر إلكتروني كامل', 'تصميم UX/UI للتجارة', 'كتالوج المنتجات', 'دفع آمن عبر الإنترنت', 'إدارة الطلبات', 'SEO للتجارة الإلكترونية', 'حملة إطلاق', 'تدريب إدارة المتجر', 'دعم 60 يومًا'],
    },
    popular: false,
  },
  {
    name: { fr: 'Full Stack Brand', en: 'Full Stack Brand', ar: 'علامة تجارية شاملة' } as T,
    tagline: { fr: 'Branding complet 360°', en: 'Complete 360° branding', ar: 'علامة تجارية كاملة 360°' } as T,
    description: {
      fr: 'Le pack ultime pour les marques ambitieuses. Identité, site, contenu, marketing, production — tout est inclus.',
      en: 'The ultimate pack for ambitious brands. Identity, site, content, marketing, production — everything included.',
      ar: 'الباقة المثالية للعلامات الطموحة. الهوية، الموقع، المحتوى، التسويق، الإنتاج — كل شيء مشمول.',
    } as T,
    includes: {
      fr: ['Identité visuelle premium', 'Site web sur mesure', 'Application mobile', 'Stratégie digitale complète', 'Community management (6 mois)', 'Campagnes publicitaires', 'Shooting photo professionnel', 'Vidéo corporate', 'Contenu mensuel', 'Support & maintenance 6 mois'],
      en: ['Premium visual identity', 'Custom website', 'Mobile application', 'Complete digital strategy', 'Community management (6 months)', 'Ad campaigns', 'Professional photo shoot', 'Corporate video', 'Monthly content', '6-month support & maintenance'],
      ar: ['هوية بصرية متميزة', 'موقع ويب مخصص', 'تطبيق جوال', 'استراتيجية رقمية شاملة', 'إدارة المجتمع (6 أشهر)', 'حملات إعلانية', 'تصوير فوتوغرافي احترافي', 'فيديو مؤسسي', 'محتوى شهري', 'دعم وصيانة 6 أشهر'],
    },
    popular: false,
  },
];

// ===== SHOP =====
export const shopItems = [
  {
    category: { fr: 'Cartes de visite', en: 'Business cards', ar: 'بطاقات العمل' } as T,
    items: [
      { name: { fr: 'Carte de visite classique', en: 'Classic business card', ar: 'بطاقة عمل كلاسيكية' } as T, description: { fr: 'Design professionnel, impression recto/verso, papier premium 350g.', en: 'Professional design, double-sided printing, premium 350g paper.', ar: 'تصميم احترافي، طباعة على الوجهين، ورق ممتاز 350 جرام.' } as T, variants: { fr: ['Mat', 'Brillant', 'Soft touch'], en: ['Matte', 'Glossy', 'Soft touch'], ar: ['مطفي', 'لامع', 'ناعم الملمس'] }, delay: { fr: '3-5 jours', en: '3-5 days', ar: '3-5 أيام' } as T, image: '/images/shop/carte-visite-classic.jpg' },
      { name: { fr: 'Carte de visite premium', en: 'Premium business card', ar: 'بطاقة عمل فاخرة' } as T, description: { fr: 'Design sur mesure, finition dorure à chaud, papier texturé 400g.', en: 'Custom design, hot foil stamping, textured 400g paper.', ar: 'تصميم مخصص، ختم ذهبي ساخن، ورق مزخرف 400 جرام.' } as T, variants: { fr: ['Dorure or', 'Dorure argent', 'Embossage'], en: ['Gold foil', 'Silver foil', 'Embossing'], ar: ['ذهبي', 'فضي', 'نقش بارز'] }, delay: { fr: '5-7 jours', en: '5-7 days', ar: '5-7 أيام' } as T, image: '/images/shop/carte-visite-premium.jpg' },
    ],
  },
  {
    category: { fr: 'Flyers & Brochures', en: 'Flyers & Brochures', ar: 'منشورات وكتيبات' } as T,
    items: [
      { name: { fr: 'Flyer A5 / A4', en: 'A5 / A4 Flyer', ar: 'منشور A5 / A4' } as T, description: { fr: 'Design percutant, impression haute qualité, idéal pour événements et promotions.', en: 'Impactful design, high-quality printing, ideal for events and promotions.', ar: 'تصميم مؤثر، طباعة عالية الجودة، مثالي للفعاليات والعروض الترويجية.' } as T, variants: { fr: ['Recto', 'Recto/Verso', 'Pliable'], en: ['Single-sided', 'Double-sided', 'Foldable'], ar: ['وجه واحد', 'وجهين', 'قابل للطي'] }, delay: { fr: '3-5 jours', en: '3-5 days', ar: '3-5 أيام' } as T, image: '/images/shop/flyer.jpg' },
      { name: { fr: 'Brochure 3 volets', en: 'Tri-fold brochure', ar: 'كتيب ثلاثي الطيات' } as T, description: { fr: 'Brochure professionnelle idéale pour présenter vos services de façon détaillée.', en: 'Professional brochure ideal for presenting your services in detail.', ar: 'كتيب احترافي مثالي لعرض خدماتك بالتفصيل.' } as T, variants: { fr: ['Standard', 'Premium (papier épais)'], en: ['Standard', 'Premium (thick paper)'], ar: ['قياسي', 'فاخر (ورق سميك)'] }, delay: { fr: '5-7 jours', en: '5-7 days', ar: '5-7 أيام' } as T, image: '/images/shop/brochure.jpg' },
    ],
  },
  {
    category: { fr: 'Menus restaurant', en: 'Restaurant menus', ar: 'قوائم المطاعم' } as T,
    items: [
      { name: { fr: 'Menu simple', en: 'Simple menu', ar: 'قائمة بسيطة' } as T, description: { fr: 'Design élégant, format A4 ou A3, impression plastifiée ou papier.', en: 'Elegant design, A4 or A3 format, laminated or paper printing.', ar: 'تصميم أنيق، حجم A4 أو A3، طباعة مغلفة أو ورقية.' } as T, variants: { fr: ['A4', 'A3', 'Plastifié'], en: ['A4', 'A3', 'Laminated'], ar: ['A4', 'A3', 'مغلف'] }, delay: { fr: '3-5 jours', en: '3-5 days', ar: '3-5 أيام' } as T, image: '/images/shop/menu-simple.jpg' },
      { name: { fr: 'Menu premium', en: 'Premium menu', ar: 'قائمة فاخرة' } as T, description: { fr: 'Design gastronomique, support rigide, finition haut de gamme.', en: 'Gastronomic design, rigid support, high-end finish.', ar: 'تصميم ذواقة، دعم صلب، تشطيب راقٍ.' } as T, variants: { fr: ['Cartonné', 'Bois', 'Cuir synthétique'], en: ['Cardboard', 'Wood', 'Synthetic leather'], ar: ['كرتون', 'خشب', 'جلد صناعي'] }, delay: { fr: '7-10 jours', en: '7-10 days', ar: '7-10 أيام' } as T, image: '/images/shop/menu-premium.jpg' },
    ],
  },
  {
    category: { fr: 'Packaging', en: 'Packaging', ar: 'التغليف' } as T,
    items: [
      { name: { fr: 'Packaging produit', en: 'Product packaging', ar: 'تغليف المنتج' } as T, description: { fr: 'Design de packaging sur mesure pour vos produits. De la boîte au sac, en passant par l\'étiquette.', en: 'Custom packaging design for your products. From box to bag, including labels.', ar: 'تصميم تغليف مخصص لمنتجاتك. من الصندوق إلى الحقيبة، بما في ذلك الملصقات.' } as T, variants: { fr: ['Boîte', 'Sachet', 'Étiquette', 'Coffret'], en: ['Box', 'Pouch', 'Label', 'Gift box'], ar: ['صندوق', 'كيس', 'ملصق', 'علبة هدايا'] }, delay: { fr: '7-14 jours', en: '7-14 days', ar: '7-14 يومًا' } as T, image: '/images/shop/packaging.jpg' },
    ],
  },
  {
    category: { fr: 'Identité visuelle print', en: 'Print visual identity', ar: 'هوية بصرية مطبوعة' } as T,
    items: [
      { name: { fr: 'Kit papeterie complet', en: 'Complete stationery kit', ar: 'مجموعة قرطاسية كاملة' } as T, description: { fr: 'Carte de visite + en-tête + enveloppe + tampon. Cohérence visuelle garantie.', en: 'Business card + letterhead + envelope + stamp. Visual consistency guaranteed.', ar: 'بطاقة عمل + ترويسة + مغلف + ختم. اتساق بصري مضمون.' } as T, variants: { fr: ['Standard', 'Premium'], en: ['Standard', 'Premium'], ar: ['قياسي', 'فاخر'] }, delay: { fr: '7-10 jours', en: '7-10 days', ar: '7-10 أيام' } as T, image: '/images/shop/identite-visuelle.jpg' },
    ],
  },
  {
    category: { fr: 'Templates réseaux sociaux', en: 'Social media templates', ar: 'قوالب وسائل التواصل' } as T,
    items: [
      { name: { fr: 'Pack templates Instagram', en: 'Instagram templates pack', ar: 'مجموعة قوالب إنستغرام' } as T, description: { fr: '12 templates personnalisables pour posts et stories Instagram, format Canva ou Figma.', en: '12 customizable templates for Instagram posts and stories, Canva or Figma format.', ar: '12 قالب قابل للتخصيص للمنشورات والستوريز على إنستغرام، بصيغة Canva أو Figma.' } as T, variants: { fr: ['Canva', 'Figma', 'Photoshop'], en: ['Canva', 'Figma', 'Photoshop'], ar: ['Canva', 'Figma', 'Photoshop'] }, delay: { fr: '3-5 jours', en: '3-5 days', ar: '3-5 أيام' } as T, image: '/images/shop/templates-instagram.jpg' },
      { name: { fr: 'Pack multi-plateformes', en: 'Multi-platform pack', ar: 'مجموعة متعددة المنصات' } as T, description: { fr: 'Templates pour Instagram, Facebook, LinkedIn et TikTok. Cohérence visuelle cross-platform.', en: 'Templates for Instagram, Facebook, LinkedIn and TikTok. Cross-platform visual consistency.', ar: 'قوالب لإنستغرام وفيسبوك ولينكدإن وتيك توك. اتساق بصري عبر المنصات.' } as T, variants: { fr: ['Pack 20', 'Pack 40', 'Illimité (abonnement)'], en: ['20 Pack', '40 Pack', 'Unlimited (subscription)'], ar: ['مجموعة 20', 'مجموعة 40', 'غير محدود (اشتراك)'] }, delay: { fr: '5-7 jours', en: '5-7 days', ar: '5-7 أيام' } as T, image: '/images/shop/templates-multi.jpg' },
    ],
  },
];

// ===== PORTFOLIO =====
export const portfolioProjects = [
  {
    title: { fr: 'IBSAR Voice — Plateforme inclusive', en: 'IBSAR Voice — Inclusive Platform', ar: 'IBSAR Voice — منصة شاملة' } as T,
    category: { fr: 'Web', en: 'Web', ar: 'ويب' } as T,
    description: { fr: 'Plateforme web inclusive conçue pour les personnes malvoyantes, intégrant un assistant vocal, des services bancaires accessibles et une navigation autonome grâce à la technologie vocale.', en: 'Inclusive web platform designed for visually impaired users, featuring a voice assistant, accessible banking services and autonomous navigation through voice technology.', ar: 'منصة ويب شاملة مصممة للأشخاص ضعاف البصر، تتضمن مساعدًا صوتيًا وخدمات مصرفية متاحة وتصفحًا مستقلًا بتقنية الصوت.' } as T,
    tags: ['Next.js', 'Accessibilité', 'UX/UI', 'Voice AI'],
    image: '/images/content/portfolio-ibsar.png',
  },
  {
    title: { fr: 'Uniboard — Plateforme d\'apprentissage IA', en: 'Uniboard — AI Learning Platform', ar: 'Uniboard — منصة تعلم بالذكاء الاصطناعي' } as T,
    category: { fr: 'Web', en: 'Web', ar: 'ويب' } as T,
    description: { fr: 'Plateforme d\'apprentissage tout-en-un révolutionnant l\'éducation grâce à l\'IA. Cours, notes, formations en leadership et soft skills réunis en un seul endroit.', en: 'All-in-one learning platform revolutionizing education through AI. Courses, notes, leadership and soft skills training all in one place.', ar: 'منصة تعلم شاملة تحدث ثورة في التعليم بفضل الذكاء الاصطناعي. دورات وملاحظات وتدريب على القيادة والمهارات في مكان واحد.' } as T,
    tags: ['React', 'IA', 'EdTech', 'UX/UI'],
    image: '/images/content/portfolio-uniboard.png',
  },
  {
    title: { fr: 'AZ Airlines — Dashboard Analytics ML', en: 'AZ Airlines — ML Analytics Dashboard', ar: 'AZ Airlines — لوحة تحليلات ML' } as T,
    category: { fr: 'Apps', en: 'Apps', ar: 'تطبيقات' } as T,
    description: { fr: 'Dashboard de segmentation et prédiction client pour compagnie aérienne. Analyse des transactions, scores de service par segment et prédiction de la valeur vie client grâce au Machine Learning.', en: 'Customer segmentation and prediction dashboard for an airline. Transaction analysis, service scores by segment and customer lifetime value prediction using Machine Learning.', ar: 'لوحة تحكم لتقسيم العملاء والتنبؤ لشركة طيران. تحليل المعاملات ودرجات الخدمة والتنبؤ بقيمة العميل باستخدام التعلم الآلي.' } as T,
    tags: ['Python', 'Machine Learning', 'Dashboard', 'Data Science'],
    image: '/images/content/portfolio-az-airlines.png',
  },
  {
    title: { fr: 'Eat & Fit — Site web nutrition', en: 'Eat & Fit — Nutrition Website', ar: 'Eat & Fit — موقع تغذية' } as T,
    category: { fr: 'Web', en: 'Web', ar: 'ويب' } as T,
    description: { fr: 'Site web dédié à la nutrition et l\'alimentation saine. Design vibrant et moderne mettant en avant des recettes équilibrées, des conseils nutritionnels et un mode de vie healthy.', en: 'Website dedicated to nutrition and healthy eating. Vibrant and modern design showcasing balanced recipes, nutritional tips and a healthy lifestyle.', ar: 'موقع ويب مخصص للتغذية والأكل الصحي. تصميم حيوي وعصري يعرض وصفات متوازنة ونصائح غذائية ونمط حياة صحي.' } as T,
    tags: ['Web Design', 'UI/UX', 'Nutrition', 'Responsive'],
    image: '/images/content/portfolio-eat-fit.png',
  },
  {
    title: { fr: 'Stratégie de Branding — Identité de marque', en: 'Branding Strategy — Brand Identity', ar: 'استراتيجية العلامة التجارية — هوية العلامة' } as T,
    category: { fr: 'Branding', en: 'Branding', ar: 'العلامة التجارية' } as T,
    description: { fr: 'Conception d\'une stratégie de branding complète : mission & valeurs, nom & slogan, charte graphique, storytelling, expérience client et cohérence de présence sur tous les canaux.', en: 'Design of a complete branding strategy: mission & values, name & slogan, graphic charter, storytelling, customer experience and consistent presence across all channels.', ar: 'تصميم استراتيجية علامة تجارية متكاملة: الرسالة والقيم، الاسم والشعار، الهوية البصرية، السرد، تجربة العميل والتواجد المتسق.' } as T,
    tags: ['Branding', 'Identité visuelle', 'Storytelling'],
    image: '/images/content/portfolio-branding-strategy.png',
  },
  {
    title: { fr: 'Stratégie de Contenu — Calendrier 30 jours', en: 'Content Strategy — 30-Day Calendar', ar: 'استراتيجية المحتوى — تقويم 30 يومًا' } as T,
    category: { fr: 'Marketing', en: 'Marketing', ar: 'تسويق' } as T,
    description: { fr: 'Élaboration d\'une stratégie de contenu structurée avec calendrier éditorial de 30 jours, templates de posts, scripts reels et planification multiformat (posts, reels, stories, sorties).', en: 'Development of a structured content strategy with a 30-day editorial calendar, post templates, reel scripts and multi-format planning (posts, reels, stories, releases).', ar: 'تطوير استراتيجية محتوى منظمة مع تقويم تحريري لـ30 يومًا، قوالب منشورات، نصوص ريلز وتخطيط متعدد الصيغ.' } as T,
    tags: ['Content Marketing', 'Calendrier éditorial', 'Réseaux sociaux'],
    image: '/images/content/portfolio-content-strategy.png',
  },
  {
    title: { fr: 'Publicité Meta/Ads — Campagne digitale', en: 'Meta/Ads Campaign — Digital Advertising', ar: 'إعلانات Meta — حملة رقمية' } as T,
    category: { fr: 'Marketing', en: 'Marketing', ar: 'تسويق' } as T,
    description: { fr: 'Conception et pilotage de campagnes publicitaires Meta Ads avec suivi des KPIs (CTR, CPA, ROAS), stratégie full-funnel TOFU/MOFU/BOFU et optimisation continue des performances.', en: 'Design and management of Meta Ads campaigns with KPI tracking (CTR, CPA, ROAS), full-funnel TOFU/MOFU/BOFU strategy and continuous performance optimization.', ar: 'تصميم وإدارة حملات إعلانية Meta مع تتبع مؤشرات الأداء (CTR، CPA، ROAS) واستراتيجية قمع كامل وتحسين مستمر.' } as T,
    tags: ['Meta Ads', 'KPIs', 'Performance'],
    image: '/images/content/portfolio-meta-ads.png',
  },
  {
    title: { fr: 'Funnel de Conversion — Stratégie d\'acquisition', en: 'Conversion Funnel — Acquisition Strategy', ar: 'قمع التحويل — استراتيجية الاستقطاب' } as T,
    category: { fr: 'Marketing', en: 'Marketing', ar: 'تسويق' } as T,
    description: { fr: 'Modélisation d\'un funnel de conversion complet : du trafic à la conversion client, en passant par le lead nurturing, les offres ciblées et le copywriting stratégique.', en: 'Modeling of a complete conversion funnel: from traffic to customer conversion, including lead nurturing, targeted offers and strategic copywriting.', ar: 'نمذجة قمع تحويل كامل: من الزيارات إلى تحويل العملاء، مرورًا برعاية العملاء المحتملين والعروض المستهدفة.' } as T,
    tags: ['Funnel', 'Lead Generation', 'Copywriting'],
    image: '/images/content/portfolio-funnel.png',
  },
  {
    title: { fr: 'Personas & Parcours Client', en: 'Personas & Customer Journey', ar: 'شخصيات العملاء ورحلة العميل' } as T,
    category: { fr: 'Marketing', en: 'Marketing', ar: 'تسويق' } as T,
    description: { fr: 'Création de personas détaillés et cartographie du parcours client : de la découverte à la fidélisation, avec segmentation comportementale et stratégie de ciblage personnalisée.', en: 'Creation of detailed personas and customer journey mapping: from discovery to loyalty, with behavioral segmentation and personalized targeting strategy.', ar: 'إنشاء شخصيات مفصلة ورسم خرائط رحلة العميل: من الاكتشاف إلى الولاء، مع تقسيم سلوكي واستراتيجية استهداف مخصصة.' } as T,
    tags: ['Personas', 'Customer Journey', 'UX Research'],
    image: '/images/content/portfolio-personas.png',
  },
  {
    title: { fr: 'Boost Coaching & Natura — Sites web', en: 'Boost Coaching & Natura — Websites', ar: 'Boost Coaching & Natura — مواقع ويب' } as T,
    category: { fr: 'Web', en: 'Web', ar: 'ويب' } as T,
    description: { fr: 'Conception de deux sites web : Boost Coaching (développement personnel et coaching de carrière) et Natura Bien-être (santé naturelle, nutrition et relaxation). Design moderne et parcours utilisateur optimisé.', en: 'Design of two websites: Boost Coaching (personal development and career coaching) and Natura Wellness (natural health, nutrition and relaxation). Modern design with optimized user journey.', ar: 'تصميم موقعين: Boost Coaching (التطوير الشخصي والتدريب المهني) وNatura (الصحة الطبيعية والتغذية والاسترخاء). تصميم عصري ورحلة مستخدم محسّنة.' } as T,
    tags: ['Web Design', 'UI/UX', 'Bien-être', 'Coaching'],
    image: '/images/content/portfolio-boost-natura.png',
  },
  {
    title: { fr: 'Stratégie de Marketing — Plan d\'actions', en: 'Marketing Strategy — Action Plan', ar: 'استراتيجية التسويق — خطة عمل' } as T,
    category: { fr: 'Marketing', en: 'Marketing', ar: 'تسويق' } as T,
    description: { fr: 'Élaboration d\'une stratégie marketing globale : analyse de marché, définition des objectifs SMART, ciblage personas, plan d\'actions multicanal (contenu, social media, email, publicité, SEO) et suivi ROI.', en: 'Development of a global marketing strategy: market analysis, SMART objectives, persona targeting, multichannel action plan (content, social media, email, advertising, SEO) and ROI tracking.', ar: 'تطوير استراتيجية تسويق شاملة: تحليل السوق، أهداف SMART، استهداف الشخصيات، خطة عمل متعددة القنوات وتتبع العائد.' } as T,
    tags: ['Stratégie', 'Marketing digital', 'SEO', 'ROI'],
    image: '/images/content/portfolio-marketing-strategy.png',
  },
];

// ===== CONTACT =====
export const contactContent = {
  title: { fr: 'Contactez-nous', en: 'Contact us', ar: 'اتصل بنا' } as T,
  subtitle: {
    fr: 'Prêt à transformer votre présence digitale ? Parlons de votre projet.',
    en: 'Ready to transform your digital presence? Let\'s talk about your project.',
    ar: 'مستعد لتحويل حضورك الرقمي؟ لنتحدث عن مشروعك.',
  } as T,
  form: {
    name: { fr: 'Nom complet', en: 'Full name', ar: 'الاسم الكامل' } as T,
    email: { fr: 'Email', en: 'Email', ar: 'البريد الإلكتروني' } as T,
    subject: { fr: 'Sujet', en: 'Subject', ar: 'الموضوع' } as T,
    message: { fr: 'Message', en: 'Message', ar: 'الرسالة' } as T,
    send: { fr: 'Envoyer', en: 'Send', ar: 'إرسال' } as T,
    success: { fr: 'Message envoyé avec succès !', en: 'Message sent successfully!', ar: 'تم إرسال الرسالة بنجاح!' } as T,
  },
  info: {
    email: 'oycreatifagency@outlook.com',
    phone: '+216 XX XXX XXX',
    address: { fr: 'Tunis, Tunisie', en: 'Tunis, Tunisia', ar: 'تونس، تونس' } as T,
  },
};

// ===== FOOTER =====
export const footerContent = {
  description: {
    fr: 'OY Creative Agency — Agence hybride alliant marketing, création et technologie pour propulser votre marque vers le succès.',
    en: 'OY Creative Agency — Hybrid agency combining marketing, creation and technology to propel your brand to success.',
    ar: 'OY Creative Agency — وكالة شاملة تجمع بين التسويق والإبداع والتكنولوجيا لدفع علامتك نحو النجاح.',
  } as T,
  newsletter: {
    title: { fr: 'Newsletter', en: 'Newsletter', ar: 'النشرة الإخبارية' } as T,
    placeholder: { fr: 'Votre email', en: 'Your email', ar: 'بريدك الإلكتروني' } as T,
    button: { fr: 'S\'abonner', en: 'Subscribe', ar: 'اشترك' } as T,
  },
  copyright: {
    fr: '© 2026 OY Creative Agency. Tous droits réservés.',
    en: '© 2026 OY Creative Agency. All rights reserved.',
    ar: '© 2026 OY Creative Agency. جميع الحقوق محفوظة.',
  } as T,
};

// ===== HERO TAGLINES (TypewriterText) =====
export const heroTaglines: Record<Lang, string[]> = {
  fr: [
    'Créons ensemble votre impact digital',
    'Du branding qui marque les esprits',
    'Des solutions tech qui propulsent',
    'Un marketing qui convertit',
  ],
  en: [
    "Let's create your digital impact together",
    'Branding that makes an impression',
    'Tech solutions that propel',
    'Marketing that converts',
  ],
  ar: [
    'لنصنع معًا تأثيرك الرقمي',
    'علامة تجارية تترك أثرًا',
    'حلول تقنية تدفع أعمالك',
    'تسويق يحقق النتائج',
  ],
};

// ===== MARQUEE ITEMS =====
export const marqueeItems = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Figma', 'Tailwind CSS',
  'React Native', 'PostgreSQL', 'Vercel', 'Framer Motion',
  'Adobe Creative Suite', 'Premiere Pro', 'After Effects', 'Meta Ads', 'Google Ads', 'SEO',
];

// ===== COMMON =====
export const common = {
  learnMore: { fr: 'En savoir plus', en: 'Learn more', ar: 'اعرف المزيد' } as T,
  viewAll: { fr: 'Voir tout', en: 'View all', ar: 'عرض الكل' } as T,
  requestQuote: { fr: 'Demander un devis', en: 'Request a quote', ar: 'طلب عرض سعر' } as T,
  viewInstagram: { fr: 'Voir Instagram', en: 'View Instagram', ar: 'عرض إنستغرام' } as T,
  scheduleCall: { fr: 'Planifier un appel', en: 'Schedule a call', ar: 'جدولة مكالمة' } as T,
  chatWhatsapp: { fr: 'Discuter sur WhatsApp', en: 'Chat on WhatsApp', ar: 'محادثة واتساب' } as T,
  backToTop: { fr: 'Retour en haut', en: 'Back to top', ar: 'العودة للأعلى' } as T,
};
