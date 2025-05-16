async function movie_search() {
  const container = document.querySelector(".container");
  const search = document.querySelector("#search").value;
  container.innerHTML='';
  function capitalize(search) {
    return search.charAt(0).toUpperCase() + search.slice(1).toLowerCase();
  }

  try {
    const response = await fetch(`http://www.omdbapi.com/?t=${capitalize(search)}&apikey=31e683b5`);
    if (!response.ok) {
      throw new Error("404 not found");
    }
    const data = await response.json();
    console.log(data);
    if (search===''){
        container.innerHTML=`<h1 class='h1'>please search valid movie name</h1>`
        return false;
    }
    else if(data.Response==='False'){
        container.innerHTML=`<h1 class='h1'>Movie not found </h1>`
        return;
    }
    else{
        const card=document.createElement('div')
        card.classList.add('card')
        card.innerHTML=`
        <img src=${data.Poster} alt=${search}></>
        <h2 class='h2'>${data.Title}</h2>
        <p>Director : ${data.Director}</p>
        <p>Year : ${data.Year}</p>
        <p>Released : ${data.Released}</p>
        <p>Actors : ${data.Actors}</p>
        `
        container.appendChild(card)
        
        
    }
  } catch (err) {
    console.error(err);
  }
}
