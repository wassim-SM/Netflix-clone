import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Topnav from "../components/Topnav";
import { fetchMovie, getGenres } from "../store";
import Slidecomponent from "../components/Slidecomponent";

function Netflix() {
  const navigate = useNavigate();
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.netflix.movies);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovie({ type: 'all' }));
    }
  }, [genresLoaded, dispatch]);

  console.log(movies);

  return (
    <HeroContainer>
      <div className="hero">
        <Topnav />
        <img
          className="heroimg"
          src="https://t4.ftcdn.net/jpg/04/95/73/99/360_F_495739993_IJD80fF1POOd7KTyFT4LH7rDzgIpZluo.jpg"
          alt="No internet"
        />
        <div className="container">
          <div className="title">
            <h1>Super Man</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose injected humour and the like.
            </p>
          </div>
          <div className="buttons">
            <button onClick={() => navigate("/player")} className="playbtn">
              Play
            </button>
            <button className="morebtn"> More</button>
          </div>
        </div>
      </div>
      <Slidecomponent movies={movies} />
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .heroimg {
      height: 70vh;
      width: 100%;
    }
  }
  .container {
    position: absolute;
    bottom: 1rem;
    .title {
      h1 {
        margin-left: 5rem;
        text-transform: uppercase;
        font-size: 73px;
        background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      p {
        margin-bottom: -100px;
        width: 640px;
        margin-left: 5rem;
        font-family: "Lexend Deca", sans-serif;
        color: white;
      }
    }
    .buttons {
      margin-top: 9rem;
      margin-left: 5rem;
      display: flex;
      gap: 2rem;
    }
    .playbtn {
      display: flex;
      align-items: center;
      justify-content: center;
      color: red;
      border-radius: 1rem;
      font-size: 1.4rem;
      gap: 1rem;
      padding: 0.9rem;
      padding-left: 2rem;
      padding-right: 2.4rem;
      border: none;
      cursor: pointer;
    }
    .morebtn {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      background-color: black;
      border-radius: 1rem;
      font-size: 1.4rem;
      gap: 1rem;
      padding: 0.9rem;
      padding-left: 2rem;
      padding-right: 2.4rem;
      border: none;
      cursor: pointer;
    }
  }
`;

export default Netflix;
