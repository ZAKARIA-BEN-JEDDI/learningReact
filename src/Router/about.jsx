import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

export default function About() {
  const { name } = useParams(); // Destructure name directly from useParams
  return (
    <Fragment>
      <div>About</div>
      <p>Bien venue dans la page About, {name}</p>
    </Fragment>
  );
}
