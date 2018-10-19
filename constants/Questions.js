export default [
  {
    question: "Geslacht",
    category: "Algemeen",
    options: [{ label: "Man", value: -0.12611 }, { label: "Vrouw", value: 0.0 }]
  },
  {
    question: "Slachtoffer",
    category: "Algemeen",
    options: [{ label: "Ja", value: 0.23639 }, { label: "Nee", value: 0.0 }]
  },
  {
    question: "Leeftijd moeder bij geboorte",
    category: "Huiselijke relaties",
    options: [
      { label: "Jonger dan 20 jaar", value: 0.4515 },
      { label: "20 tot 25 jaar", value: 0.10852 },
      { label: "25 tot 30 jaar", value: -0.08841 },
      { label: "30 tot 35 jaar", value: 0.0 },
      { label: "35 tot 40 jaar", value: 0.23988 },
      { label: "40 jaar en ouder", value: -0.11153 }
    ]
  },
  {
    question: "Leeftijd vader bij geboorte",
    category: "Werk & Opleiding",
    options: [
      { label: "Jonger dan 25 jaar", value: -0.00587 },
      { label: "20 tot 25 jaar", value: 0.03107 },
      { label: "25 tot 30 jaar", value: 0.03107 },
      { label: "30 tot 35 jaar", value: 0.0 },
      { label: "35 tot 40 jaar", value: -0.21624 },
      { label: "40 jaar en ouder", value: -0.32645 }
    ]
  },
  {
    question: "Leeftijdsverschil ouders",
    category: "Werk & Opleiding",

    options: [
      { label: "Minder dan 5 jaar", value: 0.0 },
      { label: "Meer dan 5 jaar", value: 0.28581 }
    ]
  },
  {
    question: "Herkomst ouders",
    category: "Huisvesting",

    options: [
      { label: "Beide ouders Nederlands", value: 0.0 },
      { label: "Beide ouders niet Nederlands", value: 0.16972 },
      {
        label: "Een van de ouders Nederlands en de andere niet Nederlands",
        value: -0.08943
      }
    ]
  },
  {
    question: "Gescheiden ouders",
    category: "Maatschappelijke participatie",

    options: [{ label: "Ja", value: 0.27683 }, { label: "Nee", value: 0.0 }]
  },
  {
    question: "Soort onderwijs",
    category: "Maatschappelijke participatie",

    options: [
      { label: "Regulier onderwijs", value: 0.0 },
      { label: "Onbekend", value: -0.76957 },
      { label: "Niet-regulier onderwijs", value: -0.33031 }
    ]
  },
  {
    question: "Actueel onderwijs niveau",
    category: "Geestelijke gezondheid",

    options: [
      { label: "Basisonderwijs", value: 0.25232 },
      { label: "Onderwijs onbekend", value: 0.0 },
      { label: "Vmbo b/k, mbo 1 of mbo 2", value: 0.87842 },
      { label: "Vmbo g/t, mbo 3 of mbo 4", value: 0.56882 },
      { label: "Havo onderbouw, Havo bovenbouw of Hbo bachelor", value: 0.0 },
      { label: "Vwo of Wo bachelor", value: -0.83566 }
    ]
  },
  {
    question: "Verandering onderwijs niveau",
    category: "Algemeen",

    options: [
      { label: "Opschalen of gelijk blijvend", value: 0.0 },
      { label: "Afschalen", value: 0.58732 },
      { label: "Onbekend", value: -1.11682 }
    ]
  },
  {
    question: "Voortijdig schoolverlaten",
    category: "Algemeen",

    options: [
      { label: "Door in onderwijs", value: 0.0 },
      { label: "Onbekend", value: 0.80564 },
      { label: "Niet van toepassing", value: 0.38736 },
      { label: "Uit onderwijs met startkwalificatie", value: -13.64193 },
      { label: "Voortijdig schoolverlaten", value: 0.34684 }
    ]
  },
  {
    question: "Soort woning",
    category: "Algemeen",

    options: [
      { label: "Eigen woning", value: 0.0 },
      { label: "Huurwoning met huurtoeslag", value: 0.38401 },
      { label: "Huurwoning zonder huurtoeslag", value: 0.4042 },
      { label: "Onbekend", value: 2.40126 }
    ]
  },
  {
    question: "Type huishouden",
    category: "Algemeen",

    options: [
      { label: "Gehuwd paar met kinderen", value: 0.0 },
      { label: "Eenouderhuishouden", value: 0.49608 },
      { label: "Eenpersoonshuishouden", value: 1.71859 },
      { label: "Gehuwd paar zonder kinderen", value: 1.06108 },
      { label: "Institutioneel huishouden", value: 1.92321 },
      { label: "Niet-gehuwd paar met kinderen", value: 0.32694 },
      { label: "Niet-gehuwd paar zonder kinderen", value: -14.1553 },
      { label: "Overig huishouden", value: 0.91365 },
      { label: "Onbekend huishouden", value: -13.81002 }
    ]
  },
  {
    question: "Werk vader",
    category: "Justitie",

    options: [
      { label: "Werkend of overig actief", value: 0.0 },
      { label: "Geen werk en niet actief", value: 0.33772 },
      { label: "Onbekend", value: 0.23486 }
    ]
  },
  {
    question: "Werk moeder",
    category: "Justitie",
    options: [
      { label: "Werkend of overig actief", value: 0.0 },
      { label: "Geen werk en niet actief", value: 0.36958 },
      { label: "Onbekend", value: -0.95012 }
    ]
  },
  {
    question: "Hoogst behaalde diploma vader",
    category: "Justitie",
    options: [
      { label: "Onderwijs onbekend", value: 0.88464 },
      { label: "Vmbo b/k, mbo 1 of mbo 2", value: -0.2163 },
      { label: "Vmbo g/t, mbo 3 of mbo 4", value: 0.67119 },
      {
        label: "Havo onderbouw, Havo bovenbouw, Hbo bachelor of Hbo master",
        value: 0.0
      },
      { label: "Vwo, Wo bachelor of Wo master", value: -12.08995 }
    ]
  },
  {
    question: "Hoogst behaalde diploma moeder",
    category: "Werk & Opleiding",
    options: [
      { label: "Onderwijs onbekend", value: 0.03655 },
      { label: "Vmbo b/k, mbo 1 of mbo 2", value: 0.15936 },
      { label: "Vmbo g/t, mbo 3 of mbo 4", value: 0.03334 },
      {
        label: "Havo onderbouw, Havo bovenbouw, Hbo bachelor of Hbo master",
        value: 0.0
      },
      { label: "Vwo, Wo bachelor of Wo master", value: -13.03162 }
    ]
  },
  {
    question: "Kind verdacht",
    category: "Algemeen",
    options: [{ label: "Ja", value: 0.94738 }, { label: "Nee", value: 0.0 }]
  },
  {
    question: "Halt delict",
    category: "Werk & Opleiding",
    options: [{ label: "Ja", value: 0.36448 }, { label: "Nee", value: 0.0 }]
  },
  {
    question: "Vader of moeder verdacht",
    category: "Werk & Opleiding",
    options: [{ label: "Ja", value: 0.50027 }, { label: "Nee", value: 0.0 }]
  },
  {
    question: "Traject vooraf",
    category: "Werk & Opleiding",
    options: [
      { label: "Geen jeugdhulp zonder verblijf gehad", value: 0.0 },
      { label: "Jeugdhulp zonder verblijf gehad", value: 1.52774 }
    ]
  },
  {
    question: "Zwaar traject",
    category: "Justitie",
    options: [{ label: "Nee", value: 1 }, { label: "Ja", value: 1 }]
  }
];
