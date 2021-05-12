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
    document.querySelector('body').style.backgroundColor = 'blue';
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
  const blog = function(){
    const domsAdventures = document.querySelector('#dom-adventures');
    const newDiv = document.createElement('div');
    newDiv.classList.add('.blog-post');
    const newH2 = document.createElement('h2').innerHTML = 'Wellington';
    newDiv.append(newH2);
    const newP = document.createElement('p').innerHTML = 'Driving in Wellington is insane!';
    newDiv.append(newP);

    domsAdventures.appendChild(newDiv)
    // domsAdventures.appendChild(newDiv);
    // console.log (newDiv)
    // const blogPost =
  }
  blog() //Not working - it's at the top of the list.
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
  // Part 9
  // const toggleColor = function(){
    // const blogsColor = document.querySelectorAll('.blog-post');
    // blogsColor.addEventListener('mouseout', function (event){
    //   event.target.style.color = "orange";
    // });

      // const blogsColor = document.querySelectorAll('.blog-post');
      //
      // blogsColor.addEventListener('mouseout', function(event){
      //   event.target.style.color = 'purple'
      // })
      const blogsColor = document.querySelectorAll('.blog-post');
      console.log(blogsColor)

      // document.querySelectorAll('.blog-post').addEventListener('mouseout', out());
      // blogsColor.addEventListener('mouseout', out());

      // function out() {
      //   blogsColor.style.color = "purple";
      // }

      // function out() {
      //   document.querySelectorAll('.blog-post').style.color = "purple";
      // }

  // }
  // toggleColor()
