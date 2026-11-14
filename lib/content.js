import { verses } from "./verses";
export const collaborators = [
  { image: "", name: "Nzukam Tchapdeu Divin Hans", role: "Fondateur · Missionnaire évangéliste" },
  { image: "", name: "Maman Anne", role: "Mère spirituelle" },
  { image: "", name: "Blondel", role: "Membre pionnier" },
  { image: "", name: "Adriane", role: "Membre pionnier" },
  { image: "", name: "Blessing", role: "Membre pionnier" },
  { image: "", name: "Manuella", role: "Membre pionnier" },
  { image: "", name: "Prisille", role: "Membre pionnier" },
  { image: "", name: "Ornella", role: "Membre pionnier" },
  { image: "", name: "Julliette", role: "Membre pionnier" },
];

export const articles = [
  {
    slug: "la-foi", type: "Enseignement", date: "Septembre 2026",
    title: "La foi, une espérance qui se vit",
    summary: "Une méditation sur Hébreux 11:6 et la place de la foi dans nos choix quotidiens.",
    image: "/images/foi.jpg", verse: verses.faith,
    body: [
      "Le thème de septembre invite à réfléchir à ce que signifie avoir foi. Hébreux 11:6 relie la foi à la confiance en Dieu et à la démarche de celui qui le cherche.",
      "L’espérance prend une forme concrète dans nos choix. Prier, persévérer et prendre soin des autres sont autant de façons de vivre cette confiance au quotidien.",
      "Quel choix cette semaine pourrait donner une forme concrète à votre foi ?",
    ],
  },
  {
    slug: "amour-fidele", verse: verses.gratitude, type: "Méditation", date: "Août 2026",
    title: "Qu’est-ce que l’amour fidèle ?",
    summary: "Découvrir le sens de חֶסֶד et ce qu’il change dans notre manière d’aimer.",
    body: [
      "HESED tire son nom du mot hébreu חֶסֶד, associé à la bonté, à la miséricorde et à l’amour fidèle de Dieu. Exode 34:6 et Psaume 136:1 donnent deux points de départ pour découvrir ce thème.",
      "Dans les échanges du mois d’août, le mouvement a proposé de réfléchir à la différence entre l’élan de la passion et l’engagement de la fidélité. Comment Jésus montre-t-il cet amour dans sa vie et jusqu’à la croix ?",
      "Michée 6:8 invite à pratiquer la justice et à aimer la miséricorde. À qui pourriez-vous témoigner de cette bonté aujourd’hui ?",
    ],
  },
  {
    slug: "amour-et-temoignage", type: "Annonce archivée", date: "22 août 2026",
    title: "L’amour fidèle fait de toi un témoignage",
    summary: "Une rencontre en ligne consacrée à la prière, à la louange et à l’enseignement.",
    image: "/images/temoignage.jpg",
    body: [
      "Le Mouvement HESED avait invité le public à une rencontre sur Google Meet le samedi 22 août 2026 autour du thème « L’amour fidèle fait de toi un témoignage ».",
      "L’annonce présentait l’Évangéliste Missionnaire DIVIN comme intervenant et invitait les participants à un temps de prière, de louange et d’exhortation.",
    ],
  },
  {
    slug: "la-misericorde-de-dieu", type: "Méditation", title: "Riche en bonté et en fidélité",
    summary: "Dans Exode 34, Dieu se présente à Moïse comme miséricordieux et compatissant.",
    verse: verses.mercy, artwork: "",
    body: [
      "La rencontre sur le Sinaï survient après l’épisode du veau d’or. Moïse remonte vers Dieu après que le peuple a rompu l’alliance. C’est dans ce contexte que Dieu parle de sa miséricorde et de sa patience.",
      "Cette patience donne du temps à la restauration. Pour la mettre en pratique, pensez à une relation dans laquelle vous pourriez écouter davantage ou faire un premier pas vers la réconciliation.",
    ],
  },
  {
    slug: "marcher-avec-dieu", type: "Enseignement", title: "Pratiquer la justice au quotidien",
    summary: "La justice, la miséricorde et l’humilité dans le livre de Michée.",
    verse: verses.justice, artwork: "✧",
    body: [
      "Michée 6 commence comme un procès. Après avoir rappelé ce que Dieu a fait pour son peuple, le texte interroge la manière de lui répondre. Le verset 8 ramène la réponse à trois gestes : pratiquer la justice, aimer la miséricorde et marcher humblement avec Dieu.",
      "Ces gestes peuvent commencer dans une conversation ordinaire. Vous pouvez écouter une personne que l’on interrompt, reconnaître une erreur ou prendre du temps pour quelqu’un qui en a besoin.",
    ],
  },
  {
    slug: "rendre-grace", type: "Méditation", title: "Apprendre à rendre grâce",
    summary: "Une lecture du refrain de Psaume 136 sur la bonté de Dieu.",
    verse: verses.gratitude, artwork: "☼",
    body: [
      "Le Psaume 136 répète son refrain à mesure qu’il raconte la création et l’histoire du peuple. La répétition invite le lecteur à s’arrêter sur chaque épisode et à y reconnaître la bonté de Dieu.",
      "Pour prolonger cette lecture, relisez les premiers versets à voix haute. Puis prenez un moment pour nommer une chose précise pour laquelle vous voulez remercier Dieu aujourd’hui.",
    ],
  },
];

