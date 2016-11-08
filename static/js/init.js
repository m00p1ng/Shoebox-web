(function($){
  $(function(){
      $('.button-collapse').sideNav({
        menuWidth: 300,
        edge: 'left',
        closeOnClick: true
      });

      $(".dropdown-button").dropdown();

      $('.datepicker').pickadate({
         selectMonths: true,
         selectYears: 100
       });
  });
})(jQuery);
