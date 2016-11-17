(function($){
  $(function(){
      $('.button-collapse').sideNav({
        menuWidth: 300,
        edge: 'left',
        closeOnClick: true
      });

      $(".dropdown-button").dropdown();

      $(document).ready(function(){
        $('ul.tabs').tabs();
      });
  });
})(jQuery);
