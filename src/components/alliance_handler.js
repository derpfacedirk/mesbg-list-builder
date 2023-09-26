var factions = []
export function add_faction(faction){
    factions[factions.length] = faction;
}

export function get_alliance_level(){
    let level = 2;
    for(let i =0; i<factions.length;i++){
        for(let j = i+1;j<factions.length;j++){
            //TODO: check alliance level of factions[i] and factions[j]
        }
    }
    return level;
}

