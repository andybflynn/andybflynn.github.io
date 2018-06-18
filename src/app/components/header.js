import * as React from 'react';
import 'styles/header.scss';
import andyKanji from 'img/andykanji.png';

export default function Header() {
    return (
      <header className="mainHeader">
        <div>
          <h1><img alt="Andy written in Japanese script" src={andyKanji} /></h1>
          <h2>andy b flynn</h2>
        </div>
      </header>
    );
}
