import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>dev_b.log</title>
      </Head>
      <main className="p-5">
        <article className="prose">
          <h2>hello $guest.</h2>
          <h2>welcome to my website</h2>
          <p>check out some sections out there:</p>
          <ul>
            <li>about me</li>
            <li>music i listen to</li>
            <li>gear i use</li>
            <li>my thoughts in broken English a.k.a. dev_b.log</li>
          </ul>
          <br />
          <p>ofc links too:</p>
          <ul>
            <li>
              <a
                href="https://github.com/shakhzodkudratov"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/shakhzodkudratov"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
          <br />
          <p>
            btw, don't forget to buy me a beer{' '}
            <a
              href="https://www.buymeacoffee.com/shakhzod.me"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
        </article>
      </main>
    </>
  );
}
