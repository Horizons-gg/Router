const bouncy = require('bouncy')

bouncy(function (req, bounce) {

    if (req.headers.referer) console.log(`${req.method}: ${req.headers.referer}`)

    //? Live
    if (req.headers.host === 'www.horizons.gg') return bounce(8080)
    if (req.headers.host === 'api.horizons.gg') return bounce(8081)
    if (req.headers.host === 'discord.horizons.gg') return bounce(8082)


    //? Development
    if (req.headers.host === 'dev.horizons.gg') return bounce(8080)

}).listen(80)