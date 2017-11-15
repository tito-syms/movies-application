// /**
//  * es6 modules and imports
//  */
// import sayHello from './hello';
// sayHello('World');


/**
 * require style imports
 */
const {getMovies} = require('./api.js');

const movieDisplay = document.getElementById("movieDisplay");

getMovies().then((movieData) => {

  console.log('Here are all the movies:');
  movieData.forEach(({title, rating, id}) => {
    console.log(`id#${id} - ${title} - rating: ${rating}`);

    movieDisplay.innerHTML = `id#${id} - ${title} - rating: ${rating}`;
  });
  console.log(movieData);

}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});
