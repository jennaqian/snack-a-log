const capitalizationCheck = (req, res , next) => {
  const { image, name } = req.body;
  let splitWords = name.split(" ")
//   console.log(splitWords)
// console.log(`body: ${req.body.name}`)
//   if(name && typeof image === undefined){
//       image = "https://orstx.org/wp-content/uploads/2019/10/no-photo-available-icon-12.jpg"
//   }
    let formattedName = []
    let newName;
    // for(let w of splitWords){
    //     console.log(w)
    //     if(w.length < 3){
    //         console.log(w)
    //     }
    //     w.toLowerCase() 
    //     // console.log(w)
    //     if(w.length < 3){
    //         formattedName.push(w.toLowerCase())
    //     }else {
    //         formattedName.push(w.charAt[0].toUpperCase)
    //     }
    //    console.log(formattedName.join(" "))
    // }
    
//   next();
};

module.exports = capitalizationCheck;
