// const checkName =(req, res, next)=>{
//     const {image, name} = req.body;
//     let array = name.split(" ")
//     let formattedNewName = [];
//     for (let word of array) {
//     word.toLowerCase();
    
//     if(word.length <=2) {
//         formattedNewName.push(word.toLowerCase());
        
//     } else {

//         formattedNewName.push(word[0].toUpperCase() + word.slice(1))
//         // console.log(formattedNewName)
//     }

//     return formattedNewName.join(" ")
//     }
//     next();
// }

// module.exports = {checkName};