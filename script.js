let movies = [
    {
        name :"Avengers",
        rating :"8.7",
        poster : "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
        description:"The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos"
    },

    {
        name : "RRR",
        rating : "7.8",
        poster :"https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        description :"A fearless revolutionary and an officer in the British force"
    },

    
    {
        name :"Laila Majnu",
        rating:"7.7",
        poster:"https://m.media-amazon.com/images/M/MV5BZmZmZDc0ZTUtNzY1MS00OWQwLTg1MjctYWVlYzQ4NTk0YTU4XkEyXkFqcGc@._V1_.jpg",
        description:"Two lovers, Qais and Laila, from Kashmir"
    },
    {
        name :"Joker",
        rating:"8.4",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP7TzsGto_FJI2I9IibPV1GWd--ki-_NAAYQ&s",
        description:"Arthur Fleck, a party clown"
    },
    {
        name:"Harry Pooter",
        rating:"8",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQudt5t_EZf55GHHTHhDogYg1HvLhU3-3Y6bQ&s"

    },
    {
        name:"Oppenheimer",
        rating:"8.6",
        poster:"https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000"

    },{
        name:"Moon Light",
        rating:"6.8",
        poster:"https://posterhouse.org/wp-content/uploads/2021/05/moonlight_0.jpg"
        
    }
];



function searchMovie()
{
    let movieName = document.getElementById('search').value;
    console.log(movieName);

}