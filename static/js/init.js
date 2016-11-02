(function($){
  $(function(){

      $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      });

      $(".dropdown-button").dropdown();

      $('.carousel.carousel-slider').carousel({full_width: true,
                         time_constant: 200});
      window.setInterval(function(){$('.carousel').carousel('next')},5000)


  }); // end of document ready
})(jQuery); // end of jQuery name space
