const url = 'https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=good_barn'

try {
    const data = await fetch(url)
    const res = await data.json()
    const farming = res.skills.find(({ name }) => name === 'Farming')
    console.log(farming)

    const farmingData = { ...farming, timestamp: new Date() }
    Deno.writeTextFileSync('./skills.json', JSON.stringify(res.skills))
    console.log('wrote files')
    Deno.writeTextFileSync('./farming.json', JSON.stringify(farmingData))
    console.log('wrote files')
} catch (err) {
    console.log(err)
}