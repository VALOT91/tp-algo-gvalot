// --------------
// Exercice 01
// --------------
// Créer une fonction, qui prendra en paramètre deux nombres
// Et qui affichera dans le terminal la multiplication de ces 2 nombres
// Exemple: mult(5, 3) => nous affichera 15

const  mul = (par1,par2) => {
  return par1*par2
}
console.log(`\nexo 1 : ${mul(5,2)}\n`)

// --------------
// Exercice 02
// --------------

// Déclarer un array, avec plusieurs nombres
// ex: [1, 8, 588, 64, 25]
// Afficher dans le terminal, chaque nombre multiplié par 4

const arr=[1, 8, 588, 64, 25]
console.log(`exo 2 :\n`)
for(let i=0;i< arr.length;i++)
{
   console.log(arr[i]*4)
}
console.log("\n") 
// --------------
// Exercice 03
// --------------

// Créer un objet avec pour clés votre prénom et votre age 
// (vous avez le droit de tricher pour votre age).
// Exemple:
// const user = {
//   firstName: 'Julien',
//   age: 24
// }
// Si la valeur de la clé age est supérieur à 28, 
// afficher dans le terminal ("Je suis dans la fleur de l'âge")
// Sinon, afficher ("Je suis en train de me bonifier")

const user = {
    firstName: 'Gilles',
    age: 45
  }
  console.log(`exo 3 :\n`)
  if(user.age >28) 
       console.log("Je suis dans la fleur de l'âge \n")
  else
  console.log("Je suis en train de me bonifier \n")

  // --------------
// Exercice 04
// --------------

// const users = [
//   {
//     firstname: 'john',
//     age: 34
//   },
//   {
//     firstname: 'clara',
//     age: 26
//   },
//   {
//     firstname: 'sarah',
//     age: 29
//   }
// ]

// A l'aide de cet array
// Afficher dans le terminal la somme de leur age.

const users = [
  {
    firstname: 'john',
    age: 34
  },
  {
    firstname: 'clara',
    age: 26
  },
  {
    firstname: 'sarah',
    age: 29
  }
]

let totalAge=0
for(let i=0;i<users.length;i++)
{
  totalAge += users[i].age
}
console.log( `Exo 4: \n`)
console.log( `Total: ${totalAge}\n`)

// --------------
// Exercice 05
// --------------

// const users = [
//   {
//     firstname : 'laurent'
//   },
//   {
//     firstname : 'david'
//   },
//   {
//     firstname : 'caroline'
//   }
// ]

// Créer une fonction, qui prend en paramètre un prénom
// et qui va ajouter un nouvel objet, avec son prénom, dans cet array
// Afficher ensuite l'array dans le terminal.
// Attention, si le prénom est déjà présent, afficher à la place:
// "Prénom déjà présent, merci d'en choisir un autre"

const users2 = [
    {
      firstname : 'laurent'
    },
    {
      firstname : 'david'
    },
    {
      firstname : 'caroline'
    }
  ]

const addFirsname = prenom => {
 
    // recherche la présence du prénom
    for(let i=0;i<users2.length;i++)
      {
          if(users2[i].firstname===prenom.firstname)
                return console.log(`\nPrénom ${prenom.firstname} déjà présent, merci d'en choisir un autre\n`)
      }
      users2.push(prenom)
      console.log(users2)
}
console.log("\nExo 5 :\n")

addFirsname({firstname : 'gilles'})
addFirsname({firstname : 'laurent'})
addFirsname({firstname : 'max'})

//--------------
// Exercice06
// --------------

// Créer une fonction qui va calculer le nombre de 'a' dans une String
// (afficher le résultat dans le terminal. Exemple: "Il y a ... de lettres 'a' dans la phrase")
// Puis remplacer tous les 'a' d'une String par des 'z'
// ex: "Sayonara! Oui, j'ai des origines japonaises."
// résultat attendu: "Szyonzrz! Oui, j'zi des origines jzponzises."

console.log( "\nExo 6")

const replacea= (param) => {
    let total=0
    let newString=""
    for(let i=0;i<param.length;i++)
    {
      if(param[i]==="a"){
        total++
        newString +="z"
      }
      else
      {
        newString += param[i]
      }
         
    }
    console.log(`\nIl y a ${total} lettres 'a' dans la phrase`)
    console.log(`\nNouvelle phrase : ${newString}\n`)

}

replacea("Sayonara! Oui, j'ai des origines japonaises.")

// --------------
// Exercice 07
// --------------

// Créer un array avec plusieurs chiffres/nombres de votre choix
// Créer une fonction qui, TOTALEMENT AU HASARD
// nous MULTIPLIERA ou DIVISERA ces nombres les uns à la suite des autres
// exemple1: [1, 4, 32, 8] => 1 * 4 / 32 * 8 = 1024
// exemple2: [1, 4, 32, 8] => 1 / 4 * 32 * 8 = 

console.log( "\nExo 7\n")

const randomMulDiv = arr =>{

    let res = arr[0]
    let trace=arr[0]
    for(let i=1;i<arr.length;i++)
    {
      if(Math.round(Math.random()))
      {
          //true pour mul
          res *= arr[i]
          trace +=   " * "  + arr[i]
      }
      else{
        res /= arr[i]
        trace +=   " / " + arr[i]

      }
}
      console.log(`${trace} =  ${res} \n` )
}
randomMulDiv( [1, 4, 32, 8])
randomMulDiv( [1, 4, 32, 8])

// --------------
// Exercice 08
// --------------

// Un utilisateur vient de s'inscrire sur votre site.
// Malheureusement, il inscrit son prénom de façon 'hasardeuse'
// ex: oLivieR
// Créer une fonction, qui prendra en paramètre un prénom
// Cette fonction mettra la première lettre en majuscule
// Puis le reste du prénom en minuscule.
// résultat attendu: Olivier

console.log( "\nExo 8\n")

const formatString = firstName => {
    let res=firstName[0].toUpperCase()
    for(let i=1;i<firstName.length;i++)
    {
        res += firstName[i].toLowerCase()
    }
    return res
}
console.log(formatString("mIcHelINE"))
console.log(formatString("oLivieR"))

// --------------
// Exercice 09
// --------------

// Créer une fonction qui fait office de calculatrice
// Cette fonction peut additionner, multiplier, soustraire, ou diviser 2 nombres
// Elle accepte 3 paramètres:
// Les 2 premiers paramètres seront vos chiffres/nombres
// Le 3ème paramètre sera le signe représentant le calcul.
// ex: (5, 10, '*') => résultat: 50
// ex: (8, 4, '+') => résultat: 12
// ex: (77, 33, '-') => résultat: 44
// BONUS: si un calcul n'est pas réalisable, indiquez: 'Calcul impossible'
// ex: (8, 'k', '-') => résultat: 'Calcul impossible'
// ex: (13, '45', 'plus') => résultat: 'Calcul impossible'
// Aide: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/isNaN

console.log( "\nExo 9\n")

const calc = (arg1,arg2,op) => {

      if (op==="+")
      { 
        return arg1+arg2
      }
      
      if(op==="-")
      {
        return arg1 - arg2
      }

      if(op==="*")
      {
        return arg1 * arg2
      }
      
      if(op==="/")
      {
        if(!arg2)
          return "Division par zéro impossible"
        else
          return arg1 / arg2
        }

        return "Opérateur inconnu"
   }
    
   
   console.log(calc(2,3,"+"))
   console.log(calc(20,3,"-"))
   console.log(calc(6,3,"*"))
   console.log(calc(21,3,"/"))
   console.log(calc(20,0,"/"))
   console.log(calc(20,3,"!"))
  


// --------------
// Exercice 10
// --------------

// Créer une fonction nommée generateStep
// Cette fonction prend 3 paramètres: (min, max, step)
// Grâce à ces arguments, créez un array composé de nombres
// Le premier sera 'min' (le nombre le plus petit)
// Le dernier sera 'max' (le nombre le plus grand)
// Afficher entre ces 2 nombres les étapes (step)
// ex: generateStep(2, 10, 2) // doit retourner [2, 4, 6, 8, 10]
// ex: generateStep(1, 13, 3) // doit retourner [1, 4, 7, 10, 13]
// ATTENTION: le paramètre max n'est pas affiché, si le nombre suivant le dépasse
// ex: generateStep(1, 12, 3) // doit retourner [1, 4, 7, 10]


   console.log( "\nExo 10\n")

 const generateStep =  (min, max, step) =>{
   
   let arr=[]

  for(let i=min;i<max+1;i+=step)
   {
    arr.push(i)
   }
    console.log(arr) 
 }
  
 generateStep(2, 10, 2)
 generateStep(1, 13, 3)
 generateStep(1, 12, 3)
 generateStep(1, 12, 1)


// --------------
// Exercice 11
// --------------

// Fibonacci
// La suite de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// Vous commencez l'exercice avec cet array: [0, 1]
// Créez une fonction qui va créer la suite de Fibonacci à l'intérieur de cet array
// avec en paramètre un nombre 'x', qui définira le nombre d'élément à afficher
// ex: fibo(5) => 0, 1, 1, 2, 3, 5, 8
// ex: fibo(8) => 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// afficher le résultat dans le terminal

console.log( "\nExo 11\n")

const Fibonacci = (x) => {

   let array =  [0, 1]
   for( let i=1;i<x-1;i++)
   {
      array.push(array[i-1]+array[i])
   }
   return array

}
console.log(Fibonacci(10))

