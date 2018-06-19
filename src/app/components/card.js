import * as React from 'react';
import 'styles/card.scss';

export default function Card({name, url, position, dates, children}) {
  return (
    <div className="card">
      <h3><a rel="nofollow" href={url}>{name}</a></h3>
      <p className="card__jobtitle">{position} <span className="card__jobtime">{dates}</span></p>
      {children}
    </div>
  );
}
