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
    const jsonString = parentElement.querySelector('link:last-of-type').dataset.mw
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
    const g = gold * 4
    const s = silver * 2

    return g + s + bronze
  }
}

bsturd.getFlagEmoji = countryCode => {
  if (!window.COUNTRIES[countryCode]) {
    return countryCode
  }
  
  const codePoints = window.COUNTRIES[countryCode]
    .toUpperCase()
    .split('')
    .map(char =>  127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)
}

bsturd.paint = medals => {
  const first = medals[0]
  const topTen = medals.slice(0, 10)
  const body = document.body
  const main = body.querySelector('.main')

  Object.keys(first).forEach(item => {
    if (body.querySelector(`[data-text="${item}"]`)) {
      if (item === 'country') {
        const flag = bsturd.getFlagEmoji(first[item])
        body.querySelector(`[data-text="${item}"]`).textContent = flag
        main.textContent = flag
      } else {
        body.querySelector(`[data-text="${item}"]`).textContent = first[item]
      }
    }
  })

  topTen.forEach(item => {
    const li = document.createElement('li')
    const div = document.createElement('div')
    li.textContent = `${bsturd.getFlagEmoji(item.country)} ${item.total}`
    div.innerHTML = `<b>${item.country}</b> Gold: ${item.gold}; Silver: ${item.silver}; Bronze: ${item.bronze}`
    li.append(div)
    body.querySelector('ol').append(li)
  })
}

bsturd.randomInt = (min, max) => {
  return Math.random() * (max - min + 1) + min;
}

bsturd.move = () => {
  const height = document.body.clientHeight / 2
  const width = document.body.clientWidth / 2
  const x = bsturd.randomInt(width * -1, width)
  const y = bsturd.randomInt(height * -1, height)
  const z = bsturd.randomInt(1, 100)
  const r = bsturd.randomInt(-90, 90)

  return { x, y, z, r}
}

bsturd.animate = () => {
  const main = document.querySelector('.main')
  const { x, y, z, r } = bsturd.move()
  main.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotate(${r}deg)`

  setInterval(() => {
    const { x, y, z, r } = bsturd.move()
    main.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotate(${r}deg)`
  }, 10000)
}

bsturd.addMetaTags = medal => {
  const numImages = 6
  const image = Math.floor(Math.random() * numImages) + 1
  const imageSrc = `https://s3.amazonaws.com/media.sturd.online/olympics/${image}.webp`
  const metaData = [
    { name: 'og:description', content: `Gold: ${medal.gold}, Silver: ${medal.silver}, Bronze: ${medal.bronze}` },
    { name: 'description', content: `Gold: ${medal.gold}, Silver: ${medal.silver}, Bronze: ${medal.bronze}` },
    { name: 'og:image', content: imageSrc },
    { name: 'og:title', content: `${bsturd.getFlagEmoji(medal.country)} is the top Olympic country` },
  ]

  document.head.querySelector('title').textContent = `${bsturd.getFlagEmoji(medal.country)} is the top Olympic country`;
  metaData.forEach(meta => {
    const metaTag = document.createElement('meta')
    metaTag.setAttribute('name', meta.name)
    metaTag.setAttribute('content', meta.content)
    document.head.appendChild(metaTag)
  })
}
