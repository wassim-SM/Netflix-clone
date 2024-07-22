import React from 'react';
import styled from 'styled-components';
import Movieslider from './Movieslider';

function Slidecomponent({ movies }) {
  const getMoviesBetween = (start, end) => {
    return movies.slice(start, end);
  };

  return (
    <SlideWrapper>
      <Movieslider data={getMoviesBetween(0, 10)} title="Only on Netflix" />
      <Movieslider data={getMoviesBetween(10, 20)} title="Trending now" />
      <Movieslider data={getMoviesBetween(20, 30)} title="Popular On Netflix" />
      <Movieslider data={getMoviesBetween(30, 40)} title="Romance Movies" />
      <Movieslider data={getMoviesBetween(40, 50)} title="Epic" />
      <Movieslider data={getMoviesBetween(50, 60)} title="New Releases" />
      <Movieslider data={getMoviesBetween(60, 70)} title="Action Movies" />
    </SlideWrapper>
  );
}

const SlideWrapper = styled.div``;

export default Slidecomponent;
