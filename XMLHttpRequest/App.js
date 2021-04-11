// URL de estudo https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON


const header = document.querySelector('header')
const section = document.querySelector('section')

const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
    /* Agora precisamos abrir uma nova solicitação usando o método open() . Adicione a seguinte linha: */
const request = new XMLHttpRequest()
request.open('GET', requestURL)

/* aqui estamos definindo o  responseType como JSON, para que o XHR saiba que o servidor retornará o JSON e que 
isso deve ser convertido nos bastidores em um objeto JavaScript. Em seguida, enviamos a solicitação com o método send(): */
request.responseType = 'text'
request.send()

//A última parte desta seção envolve aguardar a resposta retornar do servidor e, em seguida, lidar com ela. 
//Adicione o seguinte código abaixo do seu código anterior:

request.onload = function() {
    const superHeroesText = request.response
    const superHeroes = JSON.parse(superHeroesText)
    populateHeader(superHeroes) //chamando a função, especificando o objeto JSON
    showHeroes(superHeroes)
}

function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1')
    myH1.textContent = jsonObj['squadName']
    header.appendChild(myH1)

    const myPara = document.createElement('p')
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed']
    header.appendChild(myPara)
}

/* Em seguida, adicione a seguinte função na parte inferior do código, que cria e exibe as cartas de super-heróis: */

function showHeroes(jsonObj) {
    const heroes = jsonObj['members'];

    for (let i in heroes) {

        const myArticle = document.createElement('article')
        const myH2 = document.createElement('h2')
        const myPara1 = document.createElement('p')
        const myPara2 = document.createElement('p')
        const myPara3 = document.createElement('p')
        const myList = document.createElement('ul')

        myH2.textContent = heroes[i].name
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity
        myPara2.textContent = 'Age: ' + heroes[i].age
        myPara3.textContent = 'Superpowers:'

        const superPowers = heroes[i].powers
        for (let elem of superPowers) {
            const listItem = document.createElement('li')
            listItem.textContent = elem
            myList.appendChild(listItem)
        }

        myArticle.appendChild(myH2)
        myArticle.appendChild(myPara1)
        myArticle.appendChild(myPara2)
        myArticle.appendChild(myPara3)
        myArticle.appendChild(myList)

        section.appendChild(myArticle);
    }
}

//JSON OBJECT
const myJSON = {
    "name": "Chris",
    "age": "38"
}
console.log(myJSON) //JSON

const myString = JSON.stringify(myJSON) //create Object JSON 
console.log(myString)

const converTJSON = JSON.parse(myString) // create Object Javascript
console.log(converTJSON)