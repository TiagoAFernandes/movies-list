const movies = [
    {
      image_url: "https://image.api.playstation.com/cdn/UP1018/NPUB50285_00/xZLTc6NTmqH4wZfLYPguWBjcDcolo63Y.png",
      title: 'batman arkham knight',
      rating: '9.1',
      description: 'Batman is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      isfavorite: true  
    },
    {
      image_url: "https://www.ospaparazzi.com/imagem/201208/19204053.jpg",
      title: 'O Auto da Compadecida',
      rating: '9.5',
      description: 'O Auto da Compadecida text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text',
      isfavorite: false  
    },
    {
      image_url: "https://upload.wikimedia.org/wikipedia/pt/6/63/O_Homem_que_Copiava.jpg",
      title: 'O Homem Que Copiava',
      rating: '7.8',
      description: 'O Homem Que Copiava is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      isfavorite: true  
    }
]
var index = 0;

function insertMovie(movie) {
    
    const ulMovies = document.querySelector(".movies");

    const moviesListElement = document.createElement("li");
    
    moviesListElement.classList.add("movies-list");
    
    const movieListImageElement = document.createElement("div");
    const movieImageElement = document.createElement("img");
    
    movieImageElement.setAttribute("src", movies[index].image_url);
    movieImageElement.setAttribute("alt", "");
    movieListImageElement.appendChild(movieImageElement);
    movieListImageElement.classList.add("movies-list__content", "movies-list__image");
    
    const movieListInfoElement = document.createElement("div");
    
    movieListInfoElement.classList.add("movies-list__content", "movies-list__info");
    
    const movieListInfoElementH2 = document.createElement("h2");
    
    movieListInfoElementH2.classList.add("movies-list__info--h2");
    movieListInfoElementH2.textContent = movies[index].title;
    
    const movieListInfoElementClassif = document.createElement("div");
    
    movieListInfoElementClassif.classList.add("movies-list__info--classif");
    movieListInfoElementClassif.textContent = movies[index].rating;
    
    const movieListInfoElementFavorites= document.createElement("div");
    
    movieListInfoElementFavorites.classList.add("movies-list__info--favorites");
    movieListInfoElementFavorites.textContent = "Favoritar";

    if (movies[index].isfavorite === true) {
        movieListInfoElementFavorites.classList.add("active");
    }
    
    movieListInfoElement.appendChild(movieListInfoElementH2);
    movieListInfoElement.appendChild(movieListInfoElementClassif);
    movieListInfoElement.appendChild(movieListInfoElementFavorites);
    
    const movieListDescriptionElement = document.createElement("div");
    
    movieListDescriptionElement.classList.add("movies-list__content", "movies-list__description");
    
    const movieListDescriptionElementParagraph = document.createElement("p");
    
    movieListDescriptionElement.appendChild(movieListDescriptionElementParagraph);
    movieListDescriptionElement.textContent = movies[index].description;    
    moviesListElement.appendChild(movieListImageElement);
    moviesListElement.appendChild(movieListInfoElement);
    moviesListElement.appendChild(movieListDescriptionElement);
    ulMovies.appendChild(moviesListElement);

    index = index + 1;
}

movies.forEach(movie => insertMovie(movie));



async function getMovies() {
  const url = '';
  const fetchResponse = await fetch(url)
  fetchResponse.json();
}

