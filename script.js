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
    if (!medals) return []

    return {
      gold: this.extractMedal(medals, 'gold'),
      silver: this.extractMedal(medals, 'silver'),
      bronze: this.extractMedal(medals, 'bronze')}
  },

  extractMedal: (medals, type) => {
    const regexp = new RegExp(`${type}_`, 'gi')
    return Object.keys(medals).reduce((acc, val) => {
      if (val.match(regexp)) {
        const country = val.split('_')[1]
        return [...acc, { [country]: Number(medals[val].wt) } ]
      }

      return acc
    }, [])
  }
}

bsturd.medals().then(r => console.log(r))