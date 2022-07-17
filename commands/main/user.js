module.exports = ({
    
    name: "user",
    code: `
    $title[$message[]'s UUID.]
    
    $thumbnail[http://cravatar.eu/head/$message[]/64.png]
    $description[$api[https://minecraft-api.com/api/uuid/$message[]/json;uuid]]
    
    $color[#123123]
    `

})