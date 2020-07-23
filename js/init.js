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
      
      let i = 0;
      let images = ["hr", "cto", "cfo", "coo", "gc"];
      for (i = 0; i < images.length; i++) {
          let el = document.getElementById(images[i])
          setTimeout(() => el.src="https://thispersondoesnotexist.com/image?"+(new Date).getTime(), 1500 * i)
      }

      fetch("https://api.covid19api.com/summary")
        .then(response => response.json())
        .then(data => {
            let i = 0;
            for (i = 0; i < data.Countries.length; i++) {
                if (data.Countries[i].CountryCode === "US") {
                    let numCovidAnim = new countUp.CountUp('num-covid', data.Countries[i].TotalConfirmed, {duration: 60});
                    console.log(data.Countries[i].TotalConfirmed);
                    numCovidAnim.start();
                }
            }
        });

  }); // end of document ready
})(jQuery); // end of jQuery name space
