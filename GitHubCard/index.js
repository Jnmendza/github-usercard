/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/





/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/




/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/
// const cards = document.querySelector('.cards')

const cardCreator = (event) => {  // Youre creating elements w classes, content & adding them to the site
  // CREATE ELEMENTS
  const card = document.createElement('div'),
        image = document.createElement('img'),
        cardInfo = document.createElement('div'),
        header = document.createElement('h3'),
        username = document.createElement('p'),
        location = document.createElement('p'),
        profile = document.createElement('p'),
        proLink = document.createElement('a'),
        followers = document.createElement('p'),
        following = document.createElement('p'),
        bio = document.createElement('p')

  // ADD LINK IN PROFILE
  proLink.setAttribute = ('href', event.data.html_url);

  // ADD CONTENT
  image.src = event.data.avatar_url;
  header.textContent = event.data.name;
  username.textContent = event.data.login;
  location.textContent = `Location: ${event.data.location}`;
  profile.textContent = `Profile: `;
  proLink.textContent = event.data.html_url;
  followers.textContent = `Followers: ${event.data.followers}`;
  following.textContent = `Following: ${event.data.following}`;
  bio.textContent = `Bio: ${event.data.bio}`;
  // ADD CLASSES
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  header.classList.add('name');
  username.classList.add('username');
  // APPEND
  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(header);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(proLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);


return card
}
/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

//Creating a function that appends the div of new elements to the site
const appendToSite = event => {
  const cards = document.querySelector('.cards');
  cards.appendChild(event)

  return appendToSite
}
// Creating the error messages. You want them to appear so you console.log them.
const errorOut = error => {
  console.log('failed');
  console.log(error);

  return errorOut
}

// You are passing the API into each function you made
axios.get('https://api.github.com/users/Jnmendza')
  .then(cardCreator)
  .then(appendToSite)
  .catch(errorOut)

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// This is the array you will be using
  const followersArray = ['Lfritze', 'BaoPham92', 'seanaleid', 'zeravenyoej', 'mxxt1', 'Marshnme', 'DTJohnson5', 'darrenjcarrillo', 'vishalicious213', 'BrandyBecker', 'MrT3313'];

  // This function will pass every user handle to the end of the link then get the info of that user
  // So now you are holding the API's of each user in the variable called gitLink
  const gitLink = gitHandle => {
    return axios.get(`http://api.github.com/users/${gitHandle}`)
    
  }
  //Item represents each [i] in the array.
// using a forEach you pass every item in the array thru the functions.
// forEach is grabbing each array item from followersArray and throwing them into item
//so now item is holding the usernames and is going to pass it to the gitLink function
// so now the item that was usernames from followersArray becomes the gitHandle which is dropped to ${}
// now you have a username that will go thru each function like your name did.
  followersArray.forEach(item => {
      gitLink(item)
      .then(cardCreator)
      .then(appendToSite)
      .catch(errorOut)
  })

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
