//Get the status
$.getJSON('https://minecraftpocket-servers.com/api/?object=servers&element=detail&key=4rRNJguYjVSLFSGgPZCcuz2EdFA7yK15ry', function (body) {
    //Show the version
    var players = body.is_online;
    var playersMax = body.maxplayers;

    //Show a list of players
    //$.each(status.players.list, function(index, player){
    //console.log(player);
    //});
    document.getElementById('players')
        .innerHTML += players + '/' + playersMax + '<br />';
});
(jQuery);

$.getJSON('https://minecraftpocket-servers.com/api/?object=servers&element=detail&key=4rRNJguYjVSLFSGgPZCcuz2EdFA7yK15ry', function (stats) {
    //Show the version
    var vote = stats.votes;
    var rank = stats.rank;

    //Show a list of players
    //$.each(status.players.list, function(index, player){
    //console.log(player);
    //});
    document.getElementById('vote')
        .innerHTML = vote + '<br />';
    document.getElementById('rank')
        .innerHTML = rank + '<br />';

});
(jQuery);
$.getJSON('https://play.anoriamc.eu/json/eXAZT=YuhTfgLmTcX/new.json', function (new_config) {
    //Show the version
    //Title
    var title1 = new_config.title1;
    var title2 = new_config.title2;
    var title3 = new_config.title3;

    //Image
    var img1 = new_config.img1;
    var img2 = new_config.img2;
    var img3 = new_config.img3;

    //Date
    var date1 = new_config.date1;
    var date2 = new_config.date2;
    var date3 = new_config.date3;
    
    //Text
    var text1 = new_config.text1;
    var text2 = new_config.text2;
    var text3 = new_config.text3;


    //Title
    document.getElementById('title1').innerHTML += title1;
    document.getElementById('title2').innerHTML += title2;
    document.getElementById('title3').innerHTML += title3;

    //Image
    document.getElementById('img1').innerHTML += img1;
    document.getElementById('img2').innerHTML += img2;
    document.getElementById('img3').innerHTML += img3;

    //Date
    document.getElementById('date1').innerHTML += date1;
    document.getElementById('date2').innerHTML += date2;
    document.getElementById('date3').innerHTML += date3;

    //Text
    document.getElementById('text1').innerHTML = text1;
    document.getElementById('text2').innerHTML = text2;
    document.getElementById('text3').innerHTML = text3;    
    
});
(jQuery);



