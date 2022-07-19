module.exports = ({
    
    name: "user",
    code: `
    $title[$api[https://api.mojang.com/users/profiles/minecraft/$message[];name]'s UUID.]
    $thumbnail[https://minotar.net/avatar/$message[]]
    
    $description[
                $api[https://api.mojang.com/users/profiles/minecraft/$message[];id]

                $addField[Links;
                    {hyper:Download Skin:https://minotar.net/download/$message[]}
                    {hyper:NameMC:https://it.namemc.com/profile/$message[]}
                    {hyper:Plancke.io:https://plancke.io/hypixel/player/stats/$message[]}]
    ]

    $color[#123123]
    `
})