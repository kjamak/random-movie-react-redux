import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCategory } from "./features/counter/categorySlice";
import axios from "./axios";
import { useHistory } from "react-router-dom";
import "./randomovie.css";
import ReactCountryFlag from "react-country-flag";
import logo from "./favicon.png";

function RandomMovie() {
  const base_url = "https://image.tmdb.org/t/p/original";
  const category = useSelector(selectCategory);
  const [movie, setMovie] = useState();
  const history = useHistory();
  useEffect(() => {
    async function fetchData() {
      if (category !== undefined) {
        const min = Math.ceil(1);
        let max = Math.floor(500);
        let page = 1;

        if (
          category ===
            "/trending/all/week?api_key=c58a31b3011b7dded1cbb74c4a8c035a&language=en-US" ||
          category ===
            "/movie/top_rated?api_key=c58a31b3011b7dded1cbb74c4a8c035a&language=en-US"
        ) {
          page = 1;
        } else if (
          category ===
          "/discover/tv?api_key=c58a31b3011b7dded1cbb74c4a8c035a&with_networks=213"
        ) {
          max = Math.floor(20);
          page = Math.floor(Math.random() * (max - min + 1)) + min;
        } else {
          page = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const movieRand = Math.floor(Math.random() * Math.floor(20));
        const request = await axios.get(`${category}&page=${page}&adult=false`);
        setMovie(request.data.results[movieRand]);
        return request;
      } else {
        history.push("/");
      }
    }
    fetchData();
  }, []);

  const newRandom = () => {
    async function fetchData() {
      if (category !== undefined) {
        const min = Math.ceil(1);
        let max = Math.floor(500);
        let page = 1;
        if (
          category ===
          "/trending/all/week?api_key=c58a31b3011b7dded1cbb74c4a8c035a&language=en-US"
        ) {
          page = 1;
        } else if (
          category ===
          "/discover/tv?api_key=c58a31b3011b7dded1cbb74c4a8c035a&with_networks=213"
        ) {
          max = Math.floor(20);
          page = Math.floor(Math.random() * (max - min + 1)) + min;
        } else if (
          category ===
          "/movie/top_rated?api_key=c58a31b3011b7dded1cbb74c4a8c035a&language=en-US"
        ) {
          max = Math.floor(300);
          page = Math.floor(Math.random() * (max - min + 1)) + min;
        } else {
          page = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const movieRand = Math.floor(Math.random() * Math.floor(20));

        const request = await axios.get(`${category}&page=${page}&adult=false`);
        setMovie(request.data.results[movieRand]);

        return request;
      } else {
        history.push("/");
      }
    }
    fetchData();
  };

  const renderButton = () => {
    if (
      category === "/discover/movie?api_key=c58a31b3011b7dded1cbb74c4a8c035a"
    ) {
      return (
        <>
          <input
            className="button-design  button-color left-element"
            type="button"
            onClick={newRandom}
            value=" Get Another Random Movie *"
          />

          <label>* with all categories included</label>
        </>
      );
    } else {
      return (
        <>
          <input
            className="button-design left-element"
            type="button"
            onClick={newRandom}
            value=" Get Another Random Movie *"
          />

          <label>* from the same category</label>
        </>
      );
    }
  };
  const renderFlag = () => {
    if (movie?.original_language === "en") {
      return (
        <ReactCountryFlag
          style={{
            fontSize: "1.8em",
            lineHeight: "1.8em",
          }}
          countryCode="US"
          svg
        />
      );
    } else {
      return (
        <ReactCountryFlag
          style={{
            fontSize: "1.8em",
            lineHeight: "1.8em",
          }}
          countryCode={movie?.original_language}
          svg
        />
      );
    }
  };

  return (
    <>
      <div className="margincontainer">
        <div className="random-backhome" onClick={() => history.push("/")}>
          {"<"}&nbsp;Go Back Home
        </div>
        <div className="random">
          <div className="random__left">
            <img
              className="poster"
              src={
                movie
                  ? movie.poster_path
                    ? `${base_url}${movie.poster_path}`
                    : "https://i.pinimg.com/736x/30/d5/38/30d53895b7337958e79aff2e974c7a1f.jpg"
                  : ""
              }
            ></img>
          </div>

          <div className="info">
            <div className="random__title">
              {movie?.title ? movie.title : movie?.name}
            </div>
            <div className="information">
              year: &nbsp;&nbsp;&nbsp;
              <div className="year">
                {movie?.release_date ? movie?.release_date?.slice(0, 4) : "-"}
              </div>
              &nbsp;&nbsp;&nbsp;language:&nbsp;&nbsp;&nbsp;
              {renderFlag()}
            </div>

            <div className="random__d">{movie?.overview?.slice(0, 450)}..</div>
            {renderButton()}
          </div>
        </div>
      </div>
      <img
        className="background-container"
        src={`${base_url}${movie?.backdrop_path}`}
      />
    </>
  );
}

export default RandomMovie;
