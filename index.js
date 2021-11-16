

//exo11

// let 
// const fct = (chn) => {
//       let chFinal=""
//       for(let i=1;i<chn.length-1;i++)
//       {
//       //  if(i !==0 && i !== chn.length-1)
//                     chFinal+=chn[i]
//        }
//       return chFinal 

// }

// console.log(fct("hello"))

  



// //exo 12 

// const operation = (p1,p2,op) => {

//   if(op==="*")
//       return p1*p2
//   if(op==="/")
//       return p1/p2

// }

//  const res = operation(6,8,"*")
//  console.log(res)
//  const res2 = operation(64,8,"/")
//  console.log(res2)

//  //ex013
//  const compareMax = (arr) =>{
//      let max=0
//      for(let i=0;i<arr.length;i++)
//      {
//         if(arr[i] > max)
//             max =arr[i]
//      }
//      return max
//  }
 
//  console.log(compareMax([10,3,5,11]))

//exo14

// const repeatString = (nbr,chn) => {
//         let res=""
//         for (x=0;x<nbr;x++){
//             res+=chn
//         }
//         return res
//   }
   
//   console.log(repeatString(5,"hello"))

// //exo15
// const reverse = (chn) => {
// let res=""
//     for(x=chn.length-1;x>=0;x--)
//     { 
//       res += chn[x]
//     }
//     return res
// }
// console.log(reverse("gilles"))

//exo16

// const mul = arr => {
//   let total=1
//   for(let i=0;i<arr.length;i++){
//       total *= arr[i]
//   }
//    console.log(total)
// }
//   const arr=[10,2,3]
//   mul(arr)

//   //ex017

//   const fct = (x,y) => {
//       let res=""
//       let end=y
//       for(start=x;start<=end;start++)
//         {
//           res += start + " "
//         }
//         return res
//   }

//   console.log(fct(14,65))


//exo18

// const compareMax = (arr) =>{
//        let max=0
//        let min =0
//        for(let i=0;i<arr.length;i++)
//        {
//           if(arr[i] > max)
//               max =arr[i]
//           if(arr[i]<min || min===0)
//                 min =arr[i]

//        }
//         console.log(`le plus petit nombre est : ${min} ... le plus grand nombre est ${max}`)
//    }
//    compareMax([12,3,5,11]) 

// //exo19
// const str="Bonjour. J'adore l'algorithmie. Mon prof est d'ailleurs génial."
// const repl = (str) =>{
//   let nouvelle = ""
//   for(x=0;x<str.length;x++){

//     if(str[x] === ".")
//         nouvelle +="!"
//     else
//        nouvelle += str[x]
//   }
//   return nouvelle
// }

// console.log(repl(str))

//exo20 

// const panier = [
//     {
//       id: 0,
//       product: 'shoes',
//       price: 70
//     },
//     {
//       id: 1,
//       product: 'screen',
//       price: 90
//     },
//     {
//       id: 2,
//       product: 'playstation V',
//       price: 499
//     },
//     {
//       id: 3,
//       product: 'jean',
//       price: 50
//     }
//   ]

//   const totalPanier = panier =>{
//       let total =0
//       for(let i=0;i< panier.length;i++) {

//         total += panier[i].price
//       }
//       return total

//   } 
//   console.log(totalPanier(panier))

// //exo21

// const articleMoinsCher = panier => {

//   let min = panier[0] 
//       for(let i=0;i< panier.length;i++) {
         
//         if(panier[i].price < min.price)
//              min = panier[i]
//       }
//       return min

// }
//    console.log(articleMoinsCher(panier)) 

//    //exo22 

//    const createKey = panier => 
//    {
//     for(let i=0;i< panier.length;i++) {

//       let stock =Math.round(Math.random())
//       panier[i].stock=stock?true:false
      
//     }
//    }

//     createKey(panier)
//     console.log(panier)

// //exo23

// const afficheStockOk = panier => 
//    {
//     for(let i=0;i< panier.length;i++) {

 
//         panier[i].stock ?console.log(panier[i].product): 
       
      
    
//      }
//    }
//    console.log("Le stock positif :")
//    afficheStockOk(panier)


///  exo 24 du 15/11

// const phrase1 = "Bonjour tout le monde"
// const phrase2 = "Je suis développeur Web"
// let res=""

// for(let  i=0;i<10;i++)
// {
//   res += phrase1[i]
// }
// res +=" "
// for(let  i=0;i<10;i++)
// {
//     res += phrase2[i]
// }

// console.log(res) 

// exo 25

// const arr = ["gilles","marc","pierre"]
// let resul =""
// for(let i=0;i<arr.length-1;i++)
// {
//   resul += arr[i] +"***"
// }
// resul += arr[arr.length-1]
// console.log(resul)

//ex026

// const products = [
//     {
//       produit: 12,
//       quantite: 3,
//       prix: 12.0,
//     },
//     {
//       produit: 9,
//       quantite: 2,
//       prix: 5.0,
//     },
//     {
//       produit: 5,
//       quantite: 1,
//       prix: 15.0,
//     },
//   ]
//   let resprod=  products
//   for(let i =0;i<products.length;i++)
//   {
//     resprod[i].total = resprod[i].quantite * resprod[i].prix
     
//   }
//   console.log(resprod)


//exo28 

// const jeu = () => {

//   const a = Math.round(Math.random()*6)
//   const b = Math.floor(Math.random()*5+1)
//   console.log(a,b)
//   if(a>b)
//       console.log("joueur1 a gagné")
//   else
//     console.log("joueur2 a gagné")
// }
// jeu()


// tp du 16/11/2021