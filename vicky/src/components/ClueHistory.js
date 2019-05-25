import * as React from 'react';

export default ({cluesToShow, isFinal}) => (
  <div>
    {cluesToShow.map((clue, index) => {
      return <div key={index}>Well done! Your {isFinal ? 'final' : 'next'} clue is <span className="clue">{clue.output}</span></div>
    })}
  </div>
)
