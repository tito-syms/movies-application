/**
 * es6 modules and imports
 */
// import sayHello from './hello';
// sayHello('World');

/**
 * require style imports
 */
const $ = require("jquery");
const {getMovies} = require('./api.js');

getMovies().then((movies) => {
    const $loading = $('#loading').hide();
    $(document)
        .ajaxStart(function () {
            $loading.hide('body');
        })
        .ajaxStop(function () {
            $loading.show('body');
        });

  console.log('Here are all the movies:');
  let movieTitles = "";
  movies.forEach(({title, rating, id}) => {
   movieTitles +=  `<div> ${title} - rating: ${rating} </div>`;
       $('#movies').html(movieTitles);
    console.log(`id#${id} - ${title} - rating: ${rating}`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});

