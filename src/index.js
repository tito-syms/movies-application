<<<<<<< HEAD
// /**
//  * es6 modules and imports
//  */
// import sayHello from './hello';
// sayHello('World');

=======
/**
 * es6 modules and imports
 */
// import sayHello from './hello';
// sayHello('World');
>>>>>>> b52febb84a5c15e62940d0a32508a93dd8ab4725

/**
 * require style imports
 */
<<<<<<< HEAD
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
=======
const $ = require("jquery");
const {getMovies} = require('./api.js');

//loading function
 function updateMovies() {
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
             movieTitles += `<div><p>${title} - rating: ${rating}</p></div>`;
             $('#movies').html(movieTitles);
             console.log(`id#${id} - ${title} - rating: ${rating}`);
         });
     }).catch((error) => {
         alert('Oh no! Something went wrong.\nCheck the console for details.');
         console.log(error);
     });
 }
 updateMovies();
//New movie submit
$("#newMovie").click(function(e){

    e.preventDefault();
    let title = $('#movieTitle').val();
    let rating = $('input[name=optradio]:checked').val();
    let formData = {title:title,rating:rating}; //Array
    $('#addMovie').fadeOut(800);
    $.ajax({
        url : "/api/movies",
        type: "POST",
        data : formData,
        success: function() {

            $('#addMovie').fadeIn(2000);

            updateMovies();
            $('#movieTitle').val('');
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            alert('Something is wrong');
        }
    });
});


//Save Changes
$("#editMovie").click(function(e) {

    e.preventDefault();
    let title = $('#movieTitle').val();
    let rating = $('input[name=optradio]:checked').val();
    let formData = {title:title,rating:rating};
    $('#editMovieBtn').fadeOut(800);
    $.ajax({
        url : "/api/movies",
        type: "PUT",
        data : formData,
        success: function() {

            $('#editMovieBtn').fadeIn(2000);

            updateMovies();
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            alert('Something is wrong');
        }
    });


>>>>>>> b52febb84a5c15e62940d0a32508a93dd8ab4725
});

//Delete Movie
$('#deleteMovie').click(function (e) {

    e.preventDefault();
    let title = $('#movieTitle').val();
    let rating = $('input[name=optradio]:checked').val();
    let formData = {title:title,rating:rating};
    $('#deleteMovie').fadeOut(800);
    $.ajax({
        url : "/api/movies",
        type: "DELETE",
        data : formData,
        success: function() {

            $('#deleteMovie').fadeIn(2000);

            updateMovies();
            $('#movieTitle').val('');
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            alert('Something is wrong');
        }
    });



});