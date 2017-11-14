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

