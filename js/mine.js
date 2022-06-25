$(document).ready(function () {

    $(".loadingScreen").fadeOut(1500)

})

// Side bar
$(".sideBarBox i").click(function () {

    let sBLeft = $(".sideBarBox").css("left");
    let ulWidth = $(".navBar").outerWidth()

    if (sBLeft == "0px") {
        // hide
        $(".sideBarBox").animate({
            left: `-${ulWidth}`
        }, 700)

        $(".navBar .nav1").animate({
            opacity: "0",
            paddingTop: "500px"
        }, 1100)
        $(".navBar .nav2").animate({
            opacity: "0",
            paddingTop: "500px"
        }, 1200)
        $(".navBar .nav3").animate({
            opacity: "0",
            paddingTop: "500px"
        }, 1300)
        $(".navBar .nav4").animate({
            opacity: "0",
            paddingTop: "500px"
        }, 1400)
        $(".navBar .nav5").animate({
            opacity: "0",
            paddingTop: "500px"
        }, 1500)
        $(".navBar .nav6").animate({
            opacity: "0",
            paddingTop: "500px"
        }, 1600)
        $(".navBar .nav7").animate({
            opacity: "0",
            paddingTop: "500px"
        }, 1600)


    } else {
        // show
        $(".sideBarBox").animate({
            left: `0px`
        }, 700)

        $(".navBar .nav1").animate({
            opacity: "1",
            paddingTop: "16px"
        }, 1100)
        $(".navBar .nav2").animate({
            opacity: "1",
            paddingTop: "10px"
        }, 1200)
        $(".navBar .nav3").animate({
            opacity: "1",
            paddingTop: "10px"
        }, 1300)
        $(".navBar .nav4").animate({
            opacity: "1",
            paddingTop: "10px"
        }, 1400)
        $(".navBar .nav5").animate({
            opacity: "1",
            paddingTop: "10px"
        }, 1500)
        $(".navBar .nav6").animate({
            opacity: "1",
            paddingTop: "10px"
        }, 1600)
        $(".navBar .nav7").animate({
            opacity: "1",
            paddingTop: "10px"
        }, 1700)

    }
})


let imgPath = "https://image.tmdb.org/t/p/w500",
    trendingAPI = "https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
    popularURL = "https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
    topAPI = "https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
    upcomingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
    NowURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
    API = "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44",

    navCategory = document.querySelectorAll(".nav-category"),

    allMovies,
    movieCategory = ``;

getMovies()



for (let i = 0; i < navCategory.length; i++) {
    navCategory[i].addEventListener("click", (e) => {
        if ("Now playing" == (movieCategory = e.target.innerHTML)) {
            (API = NowURL, getMovies());
            $(".heading h3").html(e.target.innerHTML)
        } else if ("Popular" == movieCategory) {
            API = popularURL, getMovies();
            $(".heading h3").html(e.target.innerHTML)

        } else if ("Top Rated" == movieCategory) {
            API = topAPI, getMovies();
            $(".heading h3").html(e.target.innerHTML)

        } else if ("Trending" == movieCategory) {
            API = trendingAPI, getMovies();
            $(".heading h3").html(e.target.innerHTML)

        } else {
            API = upcomingURL, getMovies();
            $(".heading h3").html(e.target.innerHTML)

        }
    });
}

async function getMovies() {
    let response = await fetch(API);
    let finalResult = await response.json();
    //    console.log(finalResult);
    allMovies = finalResult.results;
    return allMovies, displayMovies(allMovies);
}


async function searchMovie(movie) {
    if (movie != "") {
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false`);
        let finalResult = await response.json();

        let allMovies = finalResult.results;
        console.log(allMovies)
        return allMovies, displayMovies(allMovies);
    } else {
        // i added any character to search for it to avoid any null errors in the console
        searchMovie("d");
    }

}

$("#movieSearch").keyup(function () {
    let movieName = $(this).val();
    searchMovie(movieName);
});


// Realtime search
$("#realSearch").keyup(function () {
    let char = $(this).val();
    let storage = ``;

    for (var i = 0; i < allMovies.length; i++) {
        if (allMovies[i].original_title.toLowerCase().includes(char.toLowerCase())) {
            storage += `<div class="col-md-3 my-3 col-sm-6 ">
         <div class="movie-box">
             <img src=${imgPath}${allMovies[i].poster_path} alt="${allMovies[i].title}" class="img-fluid rounded">
             <div class="movie-overlay overlay">
                 <div class="info">

                     <h2>${allMovies[i].title}</h2>
                     <p>${allMovies[i].overview}</p>
                     <span class="rating">
                     ${allMovies[i].vote_average}
                     <i class="fas fa-star star-rate"></i>
                 </span>
                     <p>${allMovies[i].release_date}</p>

                 </div>
             </div>
         </div>
     </div> `
        }
    }

    $("#movie-body").html(storage);


})




function displayMovies(data) {
    let storage = ``;
    for (let i = 0; i < data.length; i++) {

        storage += `<div class="col-md-3 my-3 col-sm-6 ">
        <div class="movie-box">
            <img src=${imgPath}${data[i].poster_path} alt="${data[i].title}" class="img-fluid rounded">
            <div class="movie-overlay overlay">
                <span class="rating position-absolute top-0 end-0">
                    ${data[i].vote_average}
                    <i class="fas fa-star star-rate"></i>
                </span>
                <div class="info text-center p-2 ">

                    <h2>${data[i].title}</h2>
                    <p>${data[i].overview}</p>

                </div>
            </div>
        </div>
    </div> `
    }
    $("#movie-body").html(storage);

}