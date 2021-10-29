fetch('https://rickandmortyapi.com/api/character/',
 { method: 'GET' }) 
 .then(response => response.json()) 
 .then(function(json){ console.log(json) 
    var container = document.querySelector('.container');
    
    for (let i=1; i<=2; i++) {
         container.innerHTML += 
             "<div class='card'> <img src="+json.results[i]['image']+'> </div>'
             +"<h3>"+json.results[i]['name']+"</h3>"
             +"<h3> Status: "+json.results[i]['status']+"</h3>"
             +"<h3> Planeta: "+json.results[i]['origin']['name']+"</h3>"
             +"<h3> Episódio: "+json.results[i]['episode']['length']+"</h3>"}
             
            
    })


    


