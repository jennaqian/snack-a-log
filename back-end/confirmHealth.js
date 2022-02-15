const confirmHealth = (snack) => {
    const {fiber, protein, added_sugar } = snack;
    // if(typeof fiber !== "number" && typeof protein !== "number" && typeof added_sugar !== "number") return null;
    
    // if(fiber >= 5 && added_sugar < 5) return true; // "Snack Health: ♥ Enough fiber";
    // if(protein >= 5 && added_sugar < 5) return true; // "Snack Health: ♥ Enough protein";
    // if(fiber >= 5 && added_sugar < 5 || protein >= 5 && added_sugar < 5) return true; // "Snack Health: ♥ Enough fiber and protein";

    // if(fiber >= 5 && added_sugar >= 5) return false; // "Snack Health: ♡ Enough fiber, too much sugar";
    // if(protein >= 5 && added_sugar >= 5) return false; // "Snack Health: ♡ Enough protein, too much sugar";
    // if(protein < 5 || fiber < 5 && added_sugar >= 5) return false; // "Snack Health: ♡ Not enough protein nor fiber, too much sugar";

    // if(protein < 5 && fiber < 5 && added_sugar < 5) return false; // "Snack Health: ♡ Not enough protein nor fiber, nor too much sugar";

    if(added_sugar > 5) return false;
    if(protein >= 5) return true;
    if(fiber >= 5) return true;
    if(protein < 5 && fiber < 5) return false;

    return null;

};


module.exports = confirmHealth;
