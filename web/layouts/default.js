import Head from "next/head";
import Link from "next/link";
import {
  faGithub,
  faTwitter,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Layout({ title, children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{title || "Replicate"}</title>
      </Head>

      <div className="layout">
        {children}
        <footer>
          <h2>
            <div>
              <Link href="/docs">
                <a className="button">Get started</a>
              </Link>
            </div>
            <div> or, </div>
            <div>
              <Link href="/docs/learn/how-it-works">
                <a>learn more about how Replicate works</a>
              </Link>
            </div>
          </h2>
          <div id="replicate">
            <h2>
              <span>Everyone uses version control for software, but it's much&nbsp;less common in&nbsp;machine learning.</span> Why&nbsp;is&nbsp;this?
            </h2>
            <div id="mission">
              <p>We think it’s because:</p>
              <ol>
                <li><strong>There need to be better tools.</strong> ML researchers feel guilty that they aren’t doing things “properly”. But it’s not their fault&nbsp;&mdash;&nbsp;the tools aren’t good enough yet.</li>
                <li><strong>Git (or a band-aid on top of Git) is not the right solution.</strong> Git doesn’t handle large files or structured metadata, and it doesn’t commit automatically.</li>
                <li><strong>It needs to be open source and a community effort.</strong> Such a core piece of infrastructure needs to be open and collaborative.</li>
                <li><strong>It needs to be small, easy to use, and extensible.</strong> We don’t use big “software platforms” any longer, so why do we use “AI Platforms”? We want to make a tool that does one thing well and can be combined with other tools to produce the system you need.</li>
              </ol>
              <p>We want this to be Git for machine learning. But, version control systems are complex, and to make this a reality we need your help.</p>
            </div>
            <div id="team">
              <h3>Core team</h3>
              <div className="us">
                <figure>
                  <div
                    style={{ backgroundImage: "url(" + "/images/ben.jpg" + ")" }}
                  ></div>
                  <figcaption>
                    <h4>Ben Firshman</h4>
                    <p>Product at Docker, creator of Docker&nbsp;Compose.
                      <a href="https://github.com/bfirsh" className="link">
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                      <a href="https://twitter.com/bfirsh" className="link">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </p>
                  </figcaption>
                </figure>
                <figure>
                  <div
                    style={{
                      backgroundImage: "url(" + "/images/andreas.jpg" + ")",
                    }}
                  ></div>
                  <figcaption>
                    <h4>Andreas Jansson</h4>
                    <p>ML infrastructure and research at&nbsp;Spotify.
                      <a
                        href="https://github.com/andreasjansson"
                        className="link"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </p>
                  </figcaption>
                </figure>
              </div>
              <p>
                We also built{" "}
                <a href="https://www.arxiv-vanity.com/">arXiv Vanity</a>, which
                lets you read arXiv papers as responsive web pages.
              </p>
            </div>
            <div id="get-involved">
              <h3>Get involved with Replicate</h3>
              <p>Have you strung together some shell scripts to build this for yourself? Are you interested in the problem of making machine learning reproducible?</p>
              <p>Join us, and let’s build a better system for everyone.</p>
            </div>
          </div>
          <nav>
            <Link href="/docs">
              <a>Docs</a>
            </Link>
            <a href="https://github.com/replicate/replicate">GitHub</a>
            <a href="mailto:team@replicate.ai">team@replicate.ai</a>
          </nav>
          <p className="tagline">
            <strong>Replicate</strong> Version control for machine&nbsp;learning
          </p>
        </footer>
      </div>
    </>
  );
}

export default Layout;
