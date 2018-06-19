import * as React from 'react';
import 'styles/header.scss';
import andyKanji from 'img/andykanji.png';

export default function Header() {
    return (
      <header className="mainHeader">
        <div>
          <h1><img className="card" alt="Andy written in Japanese script" src={andyKanji} /></h1>
          <h2>andy <span className="mainHeader__highlight">b</span> flynn</h2>
        </div>
      </header>
    );
}
