import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from 'components/header';
import Section from 'components/section';
import Footer from 'components/footer';
import Contact from 'components/contact';
import 'styles/base.scss';

ReactDOM.render(
  <div>
    <Header is404 />
    <main>
      <Section title="404">
        <p>Whoops! It looks like the page you've requested doesn't exist yet. Why not head back to the <a href="/">homepage</a> and try again?</p>
      </Section>
      <Contact />
      <Footer />
    </main>
  </div>
, document.getElementById('app'));
