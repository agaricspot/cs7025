


/*// Go through each genre
FOR each genre IN musicLibrary
    DISPLAY genre.genre

    // Go through the musicians in that genre
    FOR each musician IN genre.musicians
        DISPLAY musician.name

        // Go through that musician's songs
        FOR each song IN musician.songs
            DISPLAY song
        END FOR
    END FOR
END FOR*/
 

let library = [
    {//horror
        genre: "Horror",
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
        genre: "Drama",
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
        genre: "Comedy",
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
        genre: "Fantasy",
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
        genre: "War",
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

//dunno if ill use this but its nice for lookup 
let library_map = new Map(
    library.map(({genre, movies}) => [genre, movies])
); 


function display_genre(genre){
    let data = library_map.get(genre); 
    const list = $('#genrelist');
    console.log(3)

    for(movie of data){ 
        const li = document.createElement('li');
        li.textContent = movie.title;
        list.append('li');
        console.log("movie");
    }

    list.hidden = false; 

}

function display_library(){

}


function generate_watchlist(){

}

function add_movie(){ 

}

//console.log(library_map.get("Horror"));