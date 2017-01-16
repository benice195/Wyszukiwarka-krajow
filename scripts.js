var url = 'https://restcountries.eu/rest/v1/name/';

var countriesList = $('#countries');
$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
            url: url + countryName,
            method: 'GET',
            success: showCountriesList
        });
    };
function showCountriesList(resp) {
  	countriesList.empty();
    if (resp.length === 1) {
        resp.forEach(function(item) {
   		$('<div id="country">').appendTo(countriesList)
           .append($('<h2>').text('Country: ' + item.name))
           .append($('<h3>').text('Country data:'))
           .append($('<li>').text('Capital: ' + item.capital))
           .append($('<li>').text('Region: ' + item.region))
           .append($('<li>').text('Population: ' + item.population))
           .append($('<li>').text('Language: ' + item.languages))
           .append($('<li>').text('Currency: ' + item.currencies))
        });
    } else {
        resp.forEach(function(item) {
   		$('<div id="country">').appendTo(countriesList)
           .append($('<h2 id="show">').text('Country: ' + item.name))
           .append($('<h3>').text('Country data:'))
           .append($('<li>').text('Capital: ' + item.capital))
           .append($('<li>').text('Region: ' + item.region))
           .append($('<li>').text('Population: ' + item.population))
           .append($('<li>').text('Language: ' + item.languages))
           .append($('<li>').text('Currency: ' + item.currencies))
           $('li').hide();
           $('h3').hide();
        });

    }
    $("#show").click(function(){
        $('h3').show();
        $('li').show();
    });
};

      /*
      
      <<<<---->>> Nie działa 

      $('<div id="country">').appendTo(countriesList)
           $("#country").append($('<h2>').text('Country: ' + item.name));
           $("#country").append($('<h3>').text('Country data:'));
           $("#country").append($('<li>').text('Capital: ' + item.capital));
           $("#country").append($('<li>').text('Region: ' + item.region));
           $("#country").append($('<li>').text('Population: ' + item.population));
           $("#country").append($('<li>').text('Language: ' + item.languages));
           $("#country").append($('<li>').text('Currency: ' + item.currencies));
      
      $('<div id="country">').appendTo(countriesList)
           $('<h2>').text('Country: ' + item.name).append($("#country"));
      <<<--->>>
      

      


        $('<h2>').text('Country: ' + item.name).appendTo(countriesList);
        $('<h3>').text('Country data:').appendTo(countriesList);
        $('<li>').text('Capital: ' + item.capital).appendTo(countriesList);
        $('<li>').text('Region: ' + item.region).appendTo(countriesList);
        $('<li>').text('Population: ' + item.population).appendTo(countriesList);
        $('<li>').text('Language: ' + item.languages).appendTo(countriesList);
        $('<li>').text('Currency: ' + item.currencies).appendTo(countriesList);
        
        >>>>>>>>>>>>>>>>>>>>>> dzialajaca strona


        var url = 'https://restcountries.eu/rest/v1/name/';

var countriesList = $('#countries');
$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
            url: url + countryName,
            method: 'GET',
            success: showCountriesList
        });
    };
function showCountriesList(resp) {
  	countriesList.empty();
    if (resp.length === 1) {
        resp.forEach(function(item) {
   		$('<div id="country">').appendTo(countriesList)
           .append($('<h2>').text('Country: ' + item.name))
           .append($('<h3>').text('Country data:'))
           .append($('<li>').text('Capital: ' + item.capital))
           .append($('<li>').text('Region: ' + item.region))
           .append($('<li>').text('Population: ' + item.population))
           .append($('<li>').text('Language: ' + item.languages))
           .append($('<li>').text('Currency: ' + item.currencies))
        });
    } else {
        resp.forEach(function(item) {
   		$('<div id="country">').appendTo(countriesList)
           .append($('<h2 id="show">').text('Country: ' + item.name))
        });

    }

};

<<<<<<<<<<<<<<<<<<<<< koniec dzialajacej strony
        
        
        
        
        
        
        
        
        */