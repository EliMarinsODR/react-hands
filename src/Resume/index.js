import React from 'react';
import { MainContainer } from './style';
export default function Resume({ name, location, job }) {
  const [dark, setDark] = React.useState(false);

  return (
    <MainContainer dark={dark}>
      <div>
        <h1>{name}</h1>
        <h2> {location} </h2>
        <h3>{job} </h3>
        <button
          onClick={() => {
            setDark(!dark);
          }}
        >
          {' '}
          Change color{' '}
        </button>
      </div>
    </MainContainer>
  );
}
