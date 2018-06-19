import * as React from 'react';
import 'styles/section.scss';

export default function Section({ title, classes, id, children }) {
  return (
    <section className="section" id={id}>
      <header>
        <h3>{title}</h3>
      </header>
      <div className={['section__content'].concat(classes).join(' ')}>
        {children}
      </div>
    </section>
  );
}
