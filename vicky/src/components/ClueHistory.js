import * as React from 'react';

export default ({cluesToShow}) => (
  <div>
    {cluesToShow.map((clue, index) => {
      return <div key={index}>Well done! Your next clue is <span className="clue">{clue.output}</span></div>
    })}
  </div>
)
