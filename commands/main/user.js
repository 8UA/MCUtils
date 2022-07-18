module.exports = ({
    
    name: "user",
    code: `
    $title[$api[https://api.mojang.com/users/profiles/minecraft/$message[];name]'s UUID.]
    
    $thumbnail[http://cravatar.eu/avatar/$message[]/64.png]
    $description[$api[https://api.mojang.com/users/profiles/minecraft/$message[];id]]
    
    $color[#123123]
    `

})