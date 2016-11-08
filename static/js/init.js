(function($){
  $(function(){

      $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      });

      $(".dropdown-button").dropdown();

      $('.datepicker').pickadate({
         selectMonths: true, // Creates a dropdown to control month
         selectYears: 100 // Creates a dropdown of 15 years to control year
       });

  }); // end of document ready
})(jQuery); // end of jQuery name space
