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
    console.log(response)
    const test = document.querySelector('.cards-container');
    response.data.articles.bootstrap.forEach(item => {
        test.appendChild(Articles(item.headline, item.authorName, item.authorPhoto))
    });

    response.data.articles.javascript.forEach(item => {
        test.appendChild(Articles(item.headline, item.authorName, item.authorPhoto))
    });

    response.data.articles.jquery.forEach(item => {
        test.appendChild(Articles(item.headline, item.authorName, item.authorPhoto))
    });

    response.data.articles.node.forEach(item => {
        test.appendChild(Articles(item.headline, item.authorName, item.authorPhoto))
    });

    response.data.articles.technology.forEach(item => {
        test.appendChild(Articles(item.headline, item.authorName, item.authorPhoto))
    });
})
.catch( error => {
    console.log(error);
})

function Articles(one, two, three) {

    // let shortcut = object.data.articles;

    // shortcut.bootstrap['0'].forEach(random => {
    //     console.log('comment', random);
    // })

    const card = document.createElement('div');
    const headline = document.createElement('div');
    // const bootstrap = document.createElement('div');
    // const javascript = document.createElement('div');
    // const jquery = document.createElement('div');
    // const node = document.createElement('div');
    // const technology = document.createElement('div');
    const author = document.createElement('div');
    const imgCon = document.createElement('div');
    const image = document.createElement('img');
    const authName = document.createElement('span');

    card.appendChild(headline);
    // card.appendChild(javascript);
    // card.appendChild(jquery);
    // card.appendChild(node);
    // card.appendChild(technology);
    card.appendChild(author);
    author.appendChild(imgCon);
    author.appendChild(authName);
    imgCon.appendChild(image);

    card.classList.add('card');
    headline.classList.add('headline');
    // javascript.classList.add('headline');
    // jquery.classList.add('headline');
    // node.classList.add('headline');
    // technology.classList.add('headline');
    author.classList.add('author');
    imgCon.classList.add('img-container');

    headline.textContent = one;
    authName.textContent = two;
    image.src = three;
    // bootstrap.textContent = shortcut.bootstrap;
    // javascript.textContent = shortcut.javascript;
    // jquery.textContent = shortcut.jquery;
    // node.textContent = shortcut.node;
    // technology.textContent = shortcut.technology;


    // author.textContent = shortcut.;
    // console.log(object.headline)
return card;
}
