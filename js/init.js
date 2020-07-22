(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

      var numPeopleAnim = new countUp.CountUp('num-people', 10000000000, {duration: 60000});
      var numInvestAnim = new countUp.CountUp('num-investments', 1500000, {duration: 60});
      var numCovidAnim = new countUp.CountUp('num-covid', 3900000, {duration: 60});
      numPeopleAnim.start();
      numInvestAnim.start();
      numCovidAnim.start();

  }); // end of document ready
})(jQuery); // end of jQuery name space
