module.exports = ({
    
    name: "server",
    code: `
    $title[$message[]]

    
    $thumbnail[https:\/\/mcstatus.snowdev.com.br\/api\/favicon\/$message[]\/favicon.png]
    $description[$api[https://mcstatus.snowdev.com.br/api/query/v3/$message[];players_online]/$api[https://mcstatus.snowdev.com.br/api/query/v3/$message[];max_players]]
    
    $footer[Version/s: $api[https://mcstatus.snowdev.com.br/api/query/v3/$message[];version] - Ping: $api[https://mcstatus.snowdev.com.br/api/query/v3/$message[];ping]]
    $color[#123123]
    `

})