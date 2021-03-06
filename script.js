let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  const main = function() {
    document.getElementById('main-title').innerHTML = 'DOM\'s website';

  }
  main()

  // Part 2

  const body = function() {
    document.querySelector('body').style.backgroundColor = 'lightblue';
  }
  body()
  // Part 3

  const domsFavoriteThings = function() {
    const list = document.getElementById('favorite-things');
    list.removeChild(list.lastElementChild)
  }
  domsFavoriteThings()
  // Part 4
  const special = function() {
    const specialTitle = document.querySelectorAll('special-title');
    for (let title of specialTitle) {
      title.style.fontSize = '2rem';
    }
  }
  special()

  // Part 5
  const past = function() {
    const race = document.querySelector('#past-races');
    race.removeChild(race.children[3])

  }
  past()

  // Part 6
  const addedRace = function() {
    const newRace = document.createElement('li');
    const pastRaces = document.querySelector('#past-races');
    newRace.innerHTML = 'Wellington';
    pastRaces.append(newRace)
  }
  addedRace()

  // Part 7

  //Create a new .blog-post corresponding to the new city added in Part 6.
  //You will have to create a new <div>with class of .blog-post,
  //a new <h2>with text, and a new <p>with some text.
  //Think about what order you want to create the elements,
  //and what order you want to append them in.
  const blog = function(){


//main is where the blog-posts seem to live. Am I wrong?
  let mainClass = document.getElementsByClassName('main')
  let newDiv = document.createElement('div')
  let newH1 = document.createElement('h1');
  newH1.innerHTML = 'Wellington';
  newDiv.append(newH1);
  newDiv.classList.add('blog-post');
  newDiv.classList.add('purple');
  // const lineB = document.createElement('br');
  // newDiv.append(lineB);
  const newP = document.createElement('p');
  newP.innerHTML = 'I drove through a moving ferry and landed on a speedboat!';
  newDiv.append(newP);

  mainClass[0].appendChild(newDiv);


  // console.log(newDiv)
  //******

  // newH1.setAttribute('class','.blog-post');

  //can I create a new element on main?


  // const newH1 = document.createElement('h1').innerHTML = 'Wellington';
  //
  // newDiv.append(newH1);





    //
    // mainClass[0].appendChild(newDiv);

  // const domsAdventures = document.querySelector('#dom-adventures');
  //
  // const newDiv = document.createElement('div');
  // const newH2 = document.createElement('h2').innerHTML = 'Wellington';
  // newDiv.append(newH2);
  // const newP = document.createElement('p').innerHTML = 'Driving in Wellington is insane!';
  // newDiv.append(newP);
  //   //
  //   domsAdventures.appendChild(newDiv); //this shows up at the top


  }

  blog() //Not working properly - do I need a purple square? Also the instructions say to put in an h2, but all of the others are in h1.
  // Part 8


  const click = function() {
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    const quoteTitle = document.querySelector('#quote-title');
    quoteTitle.addEventListener('click', (evt) => {
      randomQuote();
    })
  }
  click()
// // Part 9
//.classList and method .toggle()
//for of to iterate through


const switchColor = function() {
  const blogPosts = document.querySelectorAll('.blog-post');
  for (let words of blogPosts){
    words.addEventListener('mouseout', (evt) => {
      words.classList.toggle('purple');
    })
    words.addEventListener('mouseenter', (evt) => {
      words.classList.toggle('red');
    })
  }

}
switchColor()
// Don't touch these! Seriously, Sarah. Don't.
});
