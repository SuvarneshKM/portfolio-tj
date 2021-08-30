import Head from 'next/head'
import Banner from './components/Banner'
import Header from './components/Header'
import WorkCard from './components/WorkCard';
import Playground from './components/Playground';
import About from './components/About';
import Contact from './components/Contact';
import HeartFillIcon from 'remixicon-react/HeartFillIcon';

export default function Home() {
  return (
    <div className="bg-light" id="home">
      <Head>
        <title>Akhil T J</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-[1240px] mx-auto">
        <section className="pt-[100px] lg:pt-[200px]" id="featured">
          <h2 className="text-[36px] text-left lg:text-center font-semibold pb-5 text-accent">
            Featured Works
          </h2>
          <WorkCard />
        </section>

        <section className="pt-[100px] lg:pt-[200px]" id="playground">
          <h2 className="text-[36px] text-left lg:text-center font-semibold text-accent">
            Playground
          </h2>
          <Playground />
        </section>
        <section className="pt-[100px] lg:pt-[200px]" id="about">
          <h2 className="text-[36px] text-left lg:text-center font-semibold text-accent">
            About Me
          </h2>
          <About />
        </section>
        <section className="pt-[100px] lg:pt-[200px]" id="contact">
          <h2 className="text-[36px] text-left lg:text-center font-semibold text-accent">
            Contact
          </h2>
          <p className="text-[20px] text-left lg:text-center font-normal text-dark">
            I’m always interested about cool stuff. Need help? Let’s talk.
          </p>
          <Contact />
        </section>
        <footer className="text-center">
          <p className="text-center inline-flex text-dark pb-[30px] pt-[40px] lg:pt-[150px]">
            Made With&nbsp;&nbsp;
            <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.8335 7.70012C1.83327 6.37126 2.36735 5.09811 3.31557 4.16713C4.2638 3.23614 5.54653 2.72551 6.87516 2.75012C8.44937 2.74176 9.9515 3.40937 11.0002 4.58345C12.0488 3.40937 13.551 2.74176 15.1252 2.75012C16.4538 2.72551 17.7366 3.23614 18.6848 4.16713C19.633 5.09811 20.167 6.37126 20.1668 7.70012C20.1668 12.6098 14.3194 16.3168 11.0002 19.2501C7.68825 16.292 1.8335 12.6134 1.8335 7.70012Z" fill="#F6490D" />
            </svg>
            &nbsp;&nbsp;Akhil T J</p>
        </footer>
      </main>
    </div>
  )
}
