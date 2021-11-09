/* 
  For this practice assignment, make a new JavaScript file that you can use to write code that meets the below requirements.
*/

// Create an array of your favorite movies

const movies = [
    {
        id: 1,
        name: "Star Wars",
        boxOfficeRanking: 101
    },
    {
        id: 2,
        name: "Avengers: Infinity War",
        boxOfficeRanking: 5
    },
    {
        id: 3,
        name: "Empire Strikes Back",
        boxOfficeRanking: 199
    },
    {
        id: 4,
        name: "61",
        boxOfficeRanking: "n/a"
    },
    {
        id: 5,
        name: "The Dark Knight",
        boxOfficeRanking: 48
    },
]

// Create a function to add a movie to the array

const addMovie = (movieObject) => {
    const lastIndex = movies.length - 1
    const currentLastMovie = movies[lastIndex]
    const maxId = currentLastMovie.id
    const idForNewMovie = maxId + 1
    movieObject.id = idForNewMovie
    movies.push(movieObject)
}

// Invoke the above function to add a movie to the array

const inception = {
    name: "Inception",
    boxOfficeRanking: 80
}

addMovie(inception)

console.log(movies)

// Create a function that loops through your movie array.  Add a conditional statement to differentiates one or more movies from the array.

for (movie of movies) {
    if(movie.boxOfficeRanking === "n/a") {
        console.log(`${movie.name} is not in the top 200 box office ranking list.`)
    }
}

// Create a function that concatinates three stings and returns that value

const function1 = (string1, string2, string3) => {
    return string1 + string2 + string3
}

// Invoke the function and console log the output

console.log(function1("This is string1", "This is string2", "This is string3"))

// Create a function that console logs the multiplicative of 2 numbers

const multiply = (data1, data2) => {
    console.log(data1*data2)
}

// Invoke the function

multiply (2, 5)
multiply (2, 6)
multiply (2, 7)

// Bonus DataType Practice:
// create a ternary and console log it.

console.log(movies[3].boxOfficeRanking === "n/a"?"This movie is not in the top 200.":"This movie is in the top 200.")
