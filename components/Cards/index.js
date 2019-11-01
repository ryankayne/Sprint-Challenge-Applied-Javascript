// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response);
    const test = document.querySelector('.cards-container');
    test.appendChild(Articles(response));
})
.catch( error => {
    console.log(error);
})

function Articles(object) {

    let shortcut = object.data.articles;
    // shortcut.forEach((item => {
    //     console.log(item);
    // }))

    // shortcut.forEach(random => {
    //     console.log('comment', random);
    // })
    console.log('HIIIIIIIIIIIIIIIII', shortcut);

    const card = document.createElement('div');
    const bootstrap = document.createElement('div');
    const javascript = document.createElement('div');
    const jquery = document.createElement('div');
    const node = document.createElement('div');
    const technology = document.createElement('div');
    const author = document.createElement('div');
    const imgCon = document.createElement('div');
    const image = document.createElement('img');
    const authName = document.createElement('span');

    

    card.appendChild(bootstrap);
    card.appendChild(javascript);
    card.appendChild(jquery);
    card.appendChild(node);
    card.appendChild(technology);
    card.appendChild(author);
    author.appendChild(imgCon);
    author.appendChild(authName);
    imgCon.appendChild(image);

    card.classList.add('card');
    bootstrap.classList.add('headline');
    javascript.classList.add('headline');
    jquery.classList.add('headline');
    node.classList.add('headline');
    technology.classList.add('headline');
    author.classList.add('author');
    imgCon.classList.add('img-container');

    bootstrap.textContent = shortcut.bootstrap;
    javascript.textContent = shortcut.javascript;
    jquery.textContent = shortcut.jquery;
    node.textContent = shortcut.node;
    technology.textContent = shortcut.technology;
    // author.textContent = shortcut.;




    
return card;
}
