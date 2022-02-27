const bouncy = require('bouncy')

bouncy(function(req, bounce) {

    if (req.headers.referer) console.log(`${req.method}: ${req.headers.referer} - ${req.headers['x-forwarded-for'] || '*.*.*.*'}`)

    //? Live
    if (req.headers.host === 'www.horizons.gg') return bounce(9080)
    if (req.headers.host === 'api.horizons.gg') return bounce(9081)
    if (req.headers.host === 'discord.horizons.gg') return bounce(9082)
    if (req.headers.host === '2mef.net') return bounce(9083)
    if (req.headers.host === 'www.2mef.net') return bounce(9083)

    //? Software
    if (req.headers.host === 'grafana.horizons.gg') return bounce(3000)
    if (req.headers.host === 'eco.horizons.gg') return bounce(3001)
    if (req.headers.host === 'se.horizons.gg') return bounce(8090)


    //? Development
    if (req.headers.host === 'dev.horizons.gg') return bounce(8080)

}).listen(80)



setTimeout(() => { process.exit(0) }, 1000 * 60 * 60)