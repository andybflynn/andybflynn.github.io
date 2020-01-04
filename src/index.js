import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from 'components/header';
import Section from 'components/section';
import Card from 'components/card';
import Footer from 'components/footer';
import Contact from 'components/contact';
import 'styles/base.scss';
import 'styles/portfolio.scss';

ReactDOM.render(
  <div>
    <Header />
    <main>
      <p>
        Hi, I'm Andy. I work as a web developer and a software engineer. I've been programming since around 2005 when I started at The University of Exeter, and have been developing software and websites ever since.
      </p>
      <p>
        If you're interested in chatting about any of the work I've done previously, please <a data-scroll href="#contact">contact me!</a>
      </p>
      <p>If you'd like to try something a little different, try running <pre>npx @andybflynn/resume</pre> in your terminal for an interactive CLI version of this document.</p>
      <Section title="Experience" classes={['experience']}>
        <div>
          <h4>I'm great at these:</h4>
          <ul>
              <li>JavaScript ES6</li>
              <li>React/Redux</li>
              <li>CSS/SCSS</li>
              <li>Responsive design (Bootstrap/Foundation)</li>
              <li>Optimising for mobile performance</li>
              <li>Gulp/Webpack</li>
              <li><a href="https://xkcd.com/208/">Regular Expressions</a></li>
              <li>Git</li>              
          </ul>
        </div>
        <div>
          <h4>I'm also proficient at:</h4>
          <ul>
            <li>Node JS/Express</li>
            <li>Vue JS</li>
            <li>Setting up build pipelines</li>
            <li>JIRA/Confluence/Bitbucket</li>
            <li>Technical arcitecture</li>
            <li>Agile methodologies (Scrum/Kanban)</li>
          </ul>
        </div>
        <section>
          <div className="cards">
            <Card name="RSA Group" url="https://www.rsagroup.com/" position="Front End Team Lead / Senior Front End Developer" dates="2016 - Present">
              <p>Leading my team to deliver responsive front end solutions for a variety of use cases, using appropriate technologies (Angular, React, Django CMS). Delivered a new CMS driven brochureware site in <a rel="nofollow" href="https://www.morethan.com">Morethan.com</a>, and spearheaded functional, efficient and reusable component driven design with React.js and webpack. Ran regular "Dojo" sessions with the team as part of a learning and development program.</p>
            </Card>
            <Card name="TUI Group SHG" url="https://www.tuigroup.com/en-en" position="Front End Web Developer" dates="2013 - 2016">
              <p>Working as part of the Front End development team on <a rel="nofollow" href="https://www.hayesandjarvis.co.uk">Hayes and Jarvis</a> and <a rel="nofollow" href="https://www.citalia.com">Citalia</a> for Specialist Holidays Group (SHG). Coding standards compliant HTML and CSS, based on UX designs and liaising with the back end team for data pull-through from Hybris CMS. Efficient and optimized JavaScript/jQuery code required for progressive enhancement. A heavy focus on mobile pages with responsive CSS.</p>
            </Card>
            <Card name="APH" url="https://www.aph.com" position="Web Developer" dates="2010 - 2013">
              <p>Primarily company facing software development, with a focus on web technologies (SQL, Javascript/JQuery, ASP.Net) and some customer facing web maintenance of the current APH website. In 2012 my team completed the launch of our new creative with no down time and no major errors. </p>
            </Card>
            <Card name="Mobius Solutions Ltd" url="https://www.linkedin.com/company-beta/572171/" position="Software Developer" dates="2009 - 2010">
              <p>Role mainly focusing on new and upcoming web technologies, some desktop development software. Role also included database set up and administration, client relations, development of MS Office integration modules.</p>
            </Card>
          </div>
        </section>
      </Section>
      <Section title="Portfolio" classes={['portfolio']}>
        <h4>Calculator</h4>
        <p>A basic calculator with keyboard support. Made with React hooks, <a href="https://www.react-spring.io/" rel="nofollow">React Spring</a> for animations, <a href="https://www.styled-components.com/" rel="nofollow">Styled Components</a>, and built with <a href="https://parceljs.org" rel="nofollow">Parcel</a>. Play with the calculator below to see it in action. Keyboard events work when focussed. Hold shift+C to clear all.</p>
        <p>Check out the source code at <a href="https://github.com/andybflynn/Calculator">https://github.com/andybflynn/Calculator</a></p>
        <iframe className="calculator-frame" src="https://andybflynn.github.io/portfolio/calculator/"></iframe>
      </Section>
      <Section title="About Me" classes={['aboutMe']}>
      <p>I have an interest in all new technology, especially with regard to new web development areas.</p>
      <p>I specialise in programming with JavaScript and I've been spending a lot of time with <a href="https://facebook.github.io/react/">React</a> recently.</p>
      <p>I've also recently revisited the <a href="https://nodejs.org/">nodejs</a> framework, a fantastically simple way to get a back end up and running in a language that I'm immensely familiar with.</p>
      <p>In my time at RSA I have been involved in project arcitecture, set up a forum for technical governance, implemented a component library and design system with my UI/UX colleagues and have also helped my team set up efficient build pipelines for development.</p>
      <p>In addition to this, I'm also fully agile! I value getting things done quickly and iteratively, and focusing on delivery over comprehensive documentation. I can work to sprint deadlines, prioritise like a champ, and have honed my team stand-up speaking voice.</p>
      </Section>
      <Section title="Education">
        <div className="cards">
          <Card name="University of Southampton" url="https://www.soton.ac.uk/" position="MSc Risk Management" dates="2008-2009">
            <p>A one year Master's course in Risk Management which covered a wide range of topics including <i>Business Ethics</i>, <i>Game Theory</i> and <i>Project Risk Management.</i></p>
          </Card>
          <Card name="University of Exeter" url="https://www.exeter.ac.uk/" position="BSc Internet Computing" dates="2005-2008">
            <p>A three year batchelor of sciences course which taught web development, design, and Java based programming skills. Particularly interesting were the topics on <i>Nature Inspired Computing</i> and <i>User Experience and Accessibility</i></p>
          </Card>
        </div>
      </Section>
      <Contact />
    </main>
    <Footer />
  </div>
, document.getElementById('app'));
