import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setCategory } from "./features/counter/categorySlice";
import "./home.css";
import shape from "./home-shape.svg";
import logo from "./favicon.png";

function Home() {
  const history = useHistory();

  const KEY = "c58a31b3011b7dded1cbb74c4a8c035a";
  const requests = {
    fetchTrending: `/trending/all/week?api_key=${KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${KEY}&with_genres=99`,
    trulyRandom: `/discover/movie?api_key=${KEY}`,
    fetchAdventureMovies: `/discover/movie?api_key=${KEY}&with_genres=12`,
    fetchAnimationMovies: `/discover/movie?api_key=${KEY}&with_genres=16`,
    fetchCrimeMovies: `/discover/movie?api_key=${KEY}&with_genres=80`,

    fetchDramaMovies: `/discover/movie?api_key=${KEY}&with_genres=18`,
    fetchFamilyMovies: `/discover/movie?api_key=${KEY}&with_genres=10751`,
    fetchFantasyMovies: `/discover/movie?api_key=${KEY}&with_genres=14`,
    fetchHistoryMovies: `/discover/movie?api_key=${KEY}&with_genres=36`,
    fetchMusicMovies: `/discover/movie?api_key=${KEY}&with_genres=10402`,
    fetchMysteryMovies: `/discover/movie?api_key=${KEY}&with_genres=9648`,
    fetchScienceMovies: `/discover/movie?api_key=${KEY}&with_genres=878`,
    fetchThrillerMovies: `/discover/movie?api_key=${KEY}&with_genres=53`,
    fetchWarMovies: `/discover/movie?api_key=${KEY}&with_genres=10752`,
    fetchWesternMovies: `/discover/movie?api_key=${KEY}&with_genres=37`,
  };
  const [cat, setCat] = useState(requests.fetchTrending);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(setCategory(cat));

    history.push("random-movie");
  };
  return (
    <>
      <div className="main-container">
        <div className="column-container">
          <div className="title">Random</div>
          <div className="title title-2"> Movie.</div>
        </div>
      </div>

      <div className="button-container">
        <div>
          <form className="left-container" onSubmit={handleSubmit}>
            <label className="left-element">Choose Movie Category:</label>
            <select
              className="left-element button-design select-color"
              value={cat}
              onChange={(e) => setCat(e.target.value)}
            >
              <option value={requests.fetchTrending}>Trending Movies</option>
              <option value={requests.fetchNetflixOriginals}>
                Netflix Originals
              </option>
              <option value={requests.fetchTopRated}>Top Rated Movies</option>
              <option value={requests.fetchActionMovies}>Action</option>
              <option value={requests.fetchComedyMovies}>Comedy</option>
              <option value={requests.fetchHorrorMovies}>Horror</option>
              <option value={requests.fetchRomanceMovies}>Romance</option>
              <option value={requests.fetchDocumentaries}>Documentaries</option>
              <option value={requests.fetchAdventureMovies}>Adventure</option>
              <option value={requests.fetchAnimationMovies}>Animation</option>
              <option value={requests.fetchCrimeMovies}>Crime</option>
              <option value={requests.fetchDramaMovies}>Drama</option>
              <option value={requests.fetchFamilyMovies}>Family</option>
              <option value={requests.fetchFantasyMovies}>Fantasy</option>
              <option value={requests.fetchHistoryMovies}>History</option>
              <option value={requests.fetchMusicMovies}>Music</option>
              <option value={requests.fetchMysteryMovies}>Mystery</option>
              <option value={requests.fetchScienceMovies}>Science</option>
              <option value={requests.fetchThrillerMovies}>Thriller</option>
              <option value={requests.fetchWarMovies}>War</option>
              <option value={requests.fetchWesternMovies}>Western</option>
            </select>

            <input
              className="left-element button-design"
              type="submit"
              value="Get Random Movie"
            />
          </form>
        </div>
        <div className="or-title">or</div>
        <div className="right-container">
          <input
            className="button-design button-color left-element"
            type="button"
            onClick={() => {
              dispatch(setCategory(requests.trulyRandom));
              history.push("/random-movie");
            }}
            value=" Get Random Movie *"
          />

          <label>* with all categories included</label>
        </div>
      </div>
      <img className="shape" src={shape} />

      <div className="footer">
        <a href="https://kenanjamakovic.com">@KENANJAMAKOVIC</a>
      </div>
    </>
  );
}

export default Home;
