const COUNTRIES = {
    AFG: "Afghanistan",
    ALB: "Albania",
    DZA: "Algeria",
    ASM: "American Samoa",
    AND: "Andorra",
    AGO: "Angola",
    AIA: "Anguilla",
    ATA: "Antarctica",
    ATG: "Antigua and Barbuda",
    ARG: "Argentina",
    ARM: "Armenia",
    ABW: "Aruba",
    AUS: "Australia",
    AUT: "Austria",
    AZE: "Azerbaijan",
    BHS: "Bahamas",
    BHR: "Bahrain",
    BGD: "Bangladesh",
    BRB: "Barbados",
    BLR: "Belarus",
    BEL: "Belgium",
    BLZ: "Belize",
    BEN: "Benin",
    BMU: "Bermuda",
    BTN: "Bhutan",
    BOL: "Bolivia",
    BES: "Bonaire, Sint Eustatius and Saba",
    BIH: "Bosnia and Herzegovina",
    BWA: "Botswana",
    BVT: "Bouvet Island",
    BRA: "Brazil",
    IOT: "British Indian Ocean Territory",
    BRN: "Brunei Darussalam",
    BGR: "Bulgaria",
    BFA: "Burkina Faso",
    BDI: "Burundi",
    CPV: "Cabo Verde",
    KHM: "Cambodia",
    CMR: "Cameroon",
    CAN: "Canada",
    CYM: "Cayman Islands",
    CAF: "Central African Republic",
    TCD: "Chad",
    CHL: "Chile",
    CHN: "China",
    CXR: "Christmas Island",
    CCK: "Cocos Islands",
    COL: "Colombia",
    COM: "Comoros",
    COD: "Congo",
    COG: "Congo",
    COK: "Cook Islands",
    CRI: "Costa Rica",
    HRV: "Croatia",
    CUB: "Cuba",
    CUW: "Curaçao",
    CYP: "Cyprus",
    CZE: "Czechia",
    CIV: "Côte d'Ivoire",
    DNK: "Denmark",
    DJI: "Djibouti",
    DMA: "Dominica",
    DOM: "Dominican Republic",
    ECU: "Ecuador",
    EGY: "Egypt",
    SLV: "El Salvador",
    GNQ: "Equatorial Guinea",
    ERI: "Eritrea",
    EST: "Estonia",
    SWZ: "Eswatini",
    ETH: "Ethiopia",
    FLK: "Falkland Islands",
    FRO: "Faroe Islands",
    FJI: "Fiji",
    FIN: "Finland",
    FRA: "France",
    GUF: "French Guiana",
    PYF: "French Polynesia",
    ATF: "French Southern Territories",
    GAB: "Gabon",
    GMB: "Gambia",
    GEO: "Georgia",
    DEU: "Germany",
    GHA: "Ghana",
    GIB: "Gibraltar",
    GRC: "Greece",
    GRL: "Greenland",
    GRD: "Grenada",
    GLP: "Guadeloupe",
    GUM: "Guam",
    GTM: "Guatemala",
    GGY: "Guernsey",
    GIN: "Guinea",
    GNB: "Guinea-Bissau",
    GUY: "Guyana",
    HTI: "Haiti",
    HMD: "Heard Island and McDonald Islands",
    VAT: "Holy See",
    HND: "Honduras",
    HKG: "Hong Kong",
    HUN: "Hungary",
    ISL: "Iceland",
    IND: "India",
    IDN: "Indonesia",
    IRN: "Iran",
    IRQ: "Iraq",
    IRL: "Ireland",
    IMN: "Isle of Man",
    ISR: "Israel",
    ITA: "Italy",
    JAM: "Jamaica",
    JPN: "Japan",
    JEY: "Jersey",
    JOR: "Jordan",
    KAZ: "Kazakhstan",
    KEN: "Kenya",
    KIR: "Kiribati",
    PRK: "Korea",
    KOR: "Korea",
    KWT: "Kuwait",
    KGZ: "Kyrgyzstan",
    LAO: "Lao People's Democratic Republic",
    LVA: "Latvia",
    LBN: "Lebanon",
    LSO: "Lesotho",
    LBR: "Liberia",
    LBY: "Libya",
    LIE: "Liechtenstein",
    LTU: "Lithuania",
    LUX: "Luxembourg",
    MAC: "Macao",
    MDG: "Madagascar",
    MWI: "Malawi",
    MYS: "Malaysia",
    MDV: "Maldives",
    MLI: "Mali",
    MLT: "Malta",
    MHL: "Marshall Islands",
    MTQ: "Martinique",
    MRT: "Mauritania",
    MUS: "Mauritius",
    MYT: "Mayotte",
    MEX: "Mexico",
    FSM: "Micronesia",
    MDA: "Moldova",
    MCO: "Monaco",
    MNG: "Mongolia",
    MNE: "Montenegro",
    MSR: "Montserrat",
    MAR: "Morocco",
    MOZ: "Mozambique",
    MMR: "Myanmar",
    NAM: "Namibia",
    NRU: "Nauru",
    NPL: "Nepal",
    NLD: "Netherlands",
    NCL: "New Caledonia",
    NZL: "New Zealand",
    NIC: "Nicaragua",
    NER: "Niger",
    NGA: "Nigeria",
    NIU: "Niue",
    NFK: "Norfolk Island",
    MNP: "Northern Mariana Islands",
    NOR: "Norway",
    OMN: "Oman",
    PAK: "Pakistan",
    PLW: "Palau",
    PSE: "Palestine, State of",
    PAN: "Panama",
    PNG: "Papua New Guinea",
    PRY: "Paraguay",
    PER: "Peru",
    PHL: "Philippines",
    PCN: "Pitcairn",
    POL: "Poland",
    PRT: "Portugal",
    PRI: "Puerto Rico",
    QAT: "Qatar",
    MKD: "Republic of North Macedonia",
    ROU: "Romania",
    RUS: "Russian Federation",
    RWA: "Rwanda",
    REU: "Réunion",
    BLM: "Saint Barthélemy",
    SHN: "Saint Helena, Ascension and Tristan da Cunha",
    KNA: "Saint Kitts and Nevis",
    LCA: "Saint Lucia",
    MAF: "Saint Martin",
    SPM: "Saint Pierre and Miquelon",
    VCT: "Saint Vincent and the Grenadines",
    WSM: "Samoa",
    SMR: "San Marino",
    STP: "Sao Tome and Principe",
    SAU: "Saudi Arabia",
    SEN: "Senegal",
    SRB: "Serbia",
    SYC: "Seychelles",
    SLE: "Sierra Leone",
    SGP: "Singapore",
    SXM: "Sint Maarten",
    SVK: "Slovakia",
    SVN: "Slovenia",
    SLB: "Solomon Islands",
    SOM: "Somalia",
    ZAF: "South Africa",
    SGS: "South Georgia and the South Sandwich Islands",
    SSD: "South Sudan",
    ESP: "Spain",
    LKA: "Sri Lanka",
    SDN: "Sudan",
    SUR: "Suriname",
    SJM: "Svalbard and Jan Mayen",
    SWE: "Sweden",
    CHE: "Switzerland",
    SYR: "Syrian Arab Republic",
    TWN: "Taiwan",
    TJK: "Tajikistan",
    TZA: "Tanzania, United Republic of",
    THA: "Thailand",
    TLS: "Timor-Leste",
    TGO: "Togo",
    TKL: "Tokelau",
    TON: "Tonga",
    TTO: "Trinidad and Tobago",
    TUN: "Tunisia",
    TUR: "Turkey",
    TKM: "Turkmenistan",
    TCA: "Turks and Caicos Islands",
    TUV: "Tuvalu",
    UGA: "Uganda",
    UKR: "Ukraine",
    ARE: "United Arab Emirates",
    GBR: "United Kingdom of Great Britain and Northern Ireland",
    UMI: "United States Minor Outlying Islands",
    USA: "United States of America",
    URY: "Uruguay",
    UZB: "Uzbekistan",
    VUT: "Vanuatu",
    VEN: "Venezuela",
    VNM: "Viet Nam",
    VGB: "Virgin Islands",
    VIR: "Virgin Islands",
    WLF: "Wallis and Futuna",
    ESH: "Western Sahara",
    YEM: "Yemen",
    ZMB: "Zambia",
    ZWE: "Zimbabwe",
    ALA: "Åland Islands"
}

bsturd = {
  url: 'https://en.wikipedia.org/api/rest_v1/page/html/2024_Summer_Olympics_medal_table',

  medals() {
    return fetch(this.url)
      .then(response => {
        return response.text().then(t => this.htmlToJson(t))
      }).catch(e => {
        console.error(e.message)
        return null
      })
  },

  htmlToJson(html) {
    const parser = new DOMParser()
    const wikiDoc = parser.parseFromString(html, 'text/html')
    const parentElement = wikiDoc.getElementById('Medal_table').parentElement
    const jsonString = parentElement.querySelector('[data-mw-deduplicate]').dataset.mw
    const json = JSON.parse(jsonString || '{}')

    return this.extractMedalRanks(json?.parts[0]?.template.params)
  },

  extractMedalRanks(medals) {
    if (!medals) return {}

    const medalCount = this.extractMedal(medals)
    const allCountries = Object.keys(medalCount).reduce((acc, current) => {
      return [
        ...acc,
        { ...medalCount[current], country: current, total: this.mutiplyMedals(medalCount[current]) }
      ]
    }, [])

    return allCountries.sort((a, b) => b.total - a.total)
  },

  extractMedal: (medals) => {
    const regexp = new RegExp('^(gold|silver|bronze)', 'gi')
    return Object.keys(medals).reduce((acc, val) => {
      if (val.match(regexp)) {
        const [medal, country] = val.split('_')
        return { 
          ...acc,
          [country]: { ...acc[country], [medal]: Number(medals[val].wt) }
        }
      }

      return acc
    }, {})
  },

  mutiplyMedals({ gold, silver, bronze}) {
    const g = gold * 3
    const s = silver * 2

    return g + s + bronze
  }
}

bsturd.getFlagEmoji = countryCode => {
  const codePoints = countryCode
    .slice(0, 2)
    .toUpperCase()
    .split('')
    .map(char =>  127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)
}

bsturd.paint = medals => {
  const first = medals[0]
  const topTen = medals.slice(0, 10)
  const body = document.body

  Object.keys(first).forEach(item => {
    if (body.querySelector(`[data-text="${item}"]`)) {
      if (item === 'country') {
        body.querySelector(`[data-text="${item}"]`).textContent = bsturd.getFlagEmoji(first[item])
      } else {
        body.querySelector(`[data-text="${item}"]`).textContent = first[item]
      }
    }
  })

  topTen.forEach(item => {
    const li = document.createElement('li')
    li.textContent = `${bsturd.getFlagEmoji(item.country)} ${item.total}`
    body.querySelector('ol').append(li)
  })
}

bsturd.addMetaTags = medal => {
  const numImages = 6
  const image = Math.floor(Math.random() * numImages)
  const imageSrc = `./assets/${image}.webp)`
  const metaData = [
    { name: 'og:description', content: `Gold: ${medal.gold}, Silver: ${medal.silver}, Bronze: ${medal.bronze}` },
    { name: 'og:image', content: imageSrc },
  ]

  document.head.querySelector('title').innerText = `${bsturd.getFlagEmoji(medal.country)} is the top Olympic country`;
  metaData.forEach(meta => {
    const metaTag = document.createElement('meta')
    metaTag.setAttribute('name', meta.name)
    metaTag.setAttribute('content', meta.content)
    document.head.appendChild(metaTag)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  bsturd.medals().then(medals => {
    bsturd.addMetaTags(medals[0])
    bsturd.paint(medals)
  })
})