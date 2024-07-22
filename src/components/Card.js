import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoPlayBackCircleSharp } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri';
import { BiChevronDown } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';

function Card({ movieDta }) {
  const [onHovered, setOnHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <CardContainer 
      onMouseEnter={() => setOnHovered(true)} 
      onMouseLeave={() => setOnHovered(false)}
    >
      <img 
        onClick={() => navigate('/player')} 
        src={`https://image.tmdb.org/t/p/w500${movieDta.image}`} 
        alt={movieDta.name}
      />
      {onHovered && (
        <div className="hover">
          <div className="image-video-wrapper">
            <img 
              onClick={() => navigate('/player')} 
              src={`https://image.tmdb.org/t/p/w500${movieDta.image}`} 
              alt="movie poster"
            />
            <video src="../video/sample.mp4" autoPlay loop controls />
          </div>
          <div className="info-container">
            <h3 className="moviename" onClick={() => navigate('/player')}> {movieDta.name} </h3>
            <div className="icons">
              <div className="controls">
                <IoPlayBackCircleSharp title="play" onClick={() => navigate('/player')} />
                <RiThumbUpFill title="like" />
                <RiThumbDownFill title="Dislike" />
                <BsCheck title="Remove from List" />
                <AiOutlinePlus title="Add to my List" />
              </div>
              <div className="info">
                <BiChevronDown title="More info" />
              </div>
            </div>
            <div className="genres">
              <ul>
                {movieDta.genres.map((genre) => (
                  <li key={genre}> {genre} </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </CardContainer>
  );
}

const CardContainer = styled.div`
  margin-top: 1rem;
  max-width: 230px;
  width: 230px;
  height: 100%;
  cursor: pointer;

  img {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  .hover {
    z-index: 99;
    height: 300px;
    width: 20rem;
    position: absolute;
    top: -200px;  // Adjust the position as needed
    left: 0;
    border-radius: 0.2rem;
    border: 0.1rem solid gray;
    background-color: #181818;
    transition: 0.3s ease-out;
  }

  .image-video-wrapper {
    position: relative;
    height: 140px;
    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 0.3rem;
      top: 0;
      z-index: 4;
      position: absolute;
    }
    video {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 0.3rem;
      top: 0;
      z-index: 4;
      position: absolute;
    }
  }

  .info-container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
    
    .moviename {
      color: white;
    }
  }

  .icons {
    display: flex;
    justify-content: space-between;

    .controls {
      display: flex;
      gap: 1rem;
    }
  }

  svg {
    color: white;
    border: 0.1rem solid white;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.3s ease-out;
    &:hover {
      color: #b8b8b8;
    }
  }

  .genres {
    display: flex;
    color: white;
    ul {
      display: flex;
      gap: 1rem;
      li {
        padding-right: 0.7rem;
        &:first-of-type {
          list-style-type: none;
        }
      }
    }
  }
`;

export default Card;
