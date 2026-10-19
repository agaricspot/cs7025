let library = [
    {//horror
        genre: "horror",
        movies:[
            {
                title: "The Shining",
                leads:["Jack Nicholson", "Shelley Duvall"]
            },
            {
                title: "Alien",
                leads: ["Sigourney Weaver"]
            },
            {
                title: "The Silence of the Lambs",
                leads:["Anthony Hopkins", "Jodie Foster", "Ted Levine"]
            },
            {
                title: "The Thing",
                leads:["Kurt Russel", "Wilford Brimley", "Keith David"]
            },
            {
                title: "The VVitch",
                leads:["Anya Taylor-Joy", "Ralph Ineson", "Kate Dickie"]
            }
        ]
    },
    {//drama
        genre: "drama",
        movies:[
            {
                title: "Forrest Gump",
                leads:["Tom Hanks", "Robin Wright", "Gary Sinise"]
            },
            {
                title: "The Godfather",
                leads: ["Al Pacino", "Marlon Brando"]
            },
            {
                title: "The Truman Show",
                leads:["Jim Carrey", "Laura Linney"]
            },
            {
                title: "Good Will Hunting",
                leads:["Matt Damon", "Ben Affleck"]
            },
            {
                title: "Dead Poets Society",
                leads:["Robin Williams", "Ethan Hawke", "Robert Sean Leonard"]
            }
        ]
    },
    {//comedy
        genre: "comedy",
        movies:[
            {
                title: "Being John Malkovich",
                leads:["John Malkovich", "John Cusack", "Catherine Keener"]
            },
            {
                title: "Life is Beautiful",
                leads: ["Roberto Benigni", "Nicoletta Braschi", "Giorgio Cantarini"]
            },
            {
                title: "The Big Lebowski",
                leads:["Jeff Bridges", "John Goodman", "Steve Buschemi"]
            },
            {
                title: "Blazing Saddles",
                leads:["Mel Brooks", "Gene Wilder", "Cleavon Little"]
            },
            {
                title: "Monty Python and the Holy Grail",
                leads:["Terry Jones", "John Cleese", "Eric Idle"]
            }
        ]
    },
    { //fantasy
        genre: "fantasy",
        movies:[
            {
                title: "Being John Malkovich",
                leads:["John Malkovich", "John Cusack", "Catherine Keener"]
            },
            {
                title: "The Lord of the Rings: Fellowship of the Ring",
                leads: ["Elijah Wood", "Sean Astin", "Ian McKellen", "Viggo Mortensen"]
            },
            {
                title: "Bridge to Terabithia",
                leads:["Josh Hutcherson", "AnnaSophia Robb"]
            },
            {
                title: "Pan's Labyrith",
                leads:["Ivana Baquero", "Doug Jones", "Ariadna Gill"]
            },
            {
                title: "Kubo and the Two Strings",
                leads:["Art Parkinson", "Charlize Theron", "Matthew McConaughey"]
            }
        ]
    },
    { //war
        genre: "war",
        movies:[
            {
                title: "Life is Beautiful",
                leads: ["Roberto Benigni", "Nicoletta Braschi", "Giorgio Cantarini"]
            },
            {
                title: "Pan's Labyrith",
                leads:["Ivana Baquero", "Doug Jones", "Ariadna Gill"]
            },
            {
                title: "All Quiet on the Western Front",
                leads:["Lew Ayres", "Louis Wolheim"]
            },
            {
                title: "Apocalypse Now",
                leads:["Martin Sheen", "Marlon Brando", "Robert Duvall"]
            },
            {
                title: "1917",
                leads:["Dean-Charles Chapman", "George McKay", "Daniel Mays"]
            }
        ]
    },
   
];

let library_map = new Map(
    library.map(({genre, movies}) => [genre, movies])
); 


function display_genre(genre){
    let data = library_map.get(genre.toLowerCase()); 
    const list = $('#genrelist');
    list.empty();
    list.prop('hidden', false);

    if (data === undefined){
       list.text('genre not found');
        return;
    }
    
    for(const movie of data){ 
        const li = document.createElement('li');
        li.textContent = movie.title;
        list.append(li);
        //console.log("movie");
    }

}

function display_library(){
    const list = $('#genrelist');
    list.empty(); 
    list.prop('hidden', false); 

    const shownTitles = new Set();
    for (const {movies} of library){
        for (const movie of movies){
            const titleKey = movie.title.trim().toLowerCase();
            if (shownTitles.has(titleKey)){
                continue;
            }
            shownTitles.add(titleKey);

            const li = document.createElement('li');
            li.textContent = movie.title;
            list.append(li);
        }
    }

}


function generate_watchlist(){
    const list = $('#watchlist');
    list.empty();
    list.prop('hidden', false); 

    const shownTitles = new Set();

    for (const [genre, movies] of library_map){
        const candidates = movies.filter(movie =>
            !shownTitles.has(movie.title.trim().toLowerCase())
        );

        if (candidates.length === 0){
            continue;
        }

        const movie = candidates[Math.floor(Math.random() * candidates.length)];
        shownTitles.add(movie.title.trim().toLowerCase());

        const li = document.createElement('li');
        li.textContent = `${movie.title} (${genre})`;
        list.append(li);
    }
}

function add_movie(){ 
    let title_input = $('#title').val();
    let genre_input = $('#genre').val();
    let act_input = $('#actors').val();

    let title = title_input.trim();
    let genres = genre_input.split(',')
        .map(item => item.trim().toLowerCase()).filter(Boolean);
    let leads = act_input.split(',').map(actor => actor.trim()).filter(Boolean);

    for(const item of genres){
        let movies = library_map.get(item); 
        if(!movies){
            movies = [];
            library.push({genre: item, movies});
            library_map.set(item, movies); 
        }

        const alreadyInGenre = movies.some(movie =>
            movie.title.trim().toLowerCase() === title.toLowerCase()
        );
        if (!alreadyInGenre){
            movies.push({title, leads});
        }
    }

    if (genres.length > 0){
        display_genre(genres[0]);
    }

    $('#title').val('');
    $('#genre').val('');
    $('#actors').val('');
    


}
console.log(library_map.keys());
