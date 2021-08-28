import Head from 'next/head'
import Banner from './components/Banner'
import Header from './components/Header'
import WorkCard from './components/WorkCard';
import Playground from './components/Playground';
import About from './components/About';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="bg-light">
      <Head>
        <title>Akhil T J</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-2">
          <h2 className="text-[36px] text-left lg:text-center font-semibold pb-5 text-accent">
            Featured Works
          </h2>
          <WorkCard />
        </section>

        <section className="pt-[100px] lg:pt-[200px]">
          <h2 className="text-[36px] text-left lg:text-center font-semibold text-accent">
            Playground
          </h2>
          <Playground />
        </section>
        <section className="pt-[100px] lg:pt-[200px]">
          <h2 className="text-[36px] text-left lg:text-center font-semibold text-accent">
            About Me
          </h2>
          <About />
        </section>
        <section className="pt-[100px] lg:pt-[200px]">
          <h2 className="text-[36px] text-left lg:text-center font-semibold text-accent">
            Contact
          </h2>
          <p className="text-[20px] text-left lg:text-center font-normal text-dark">
            I’m always interested about cool stuff. Need help? Let’s talk.
          </p>
          <Contact />
        </section>
      </main>
    </div>
  )
}
