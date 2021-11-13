import React from "react"
import Helmet from "react-helmet"

export default () => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>Introduction to Kishan Nirghin</title>
        <meta
          name="description"
          content="This website will introduce you to Kishan Nirghin as a professional."
        />
      </Helmet>
      <div
        className="bg-white-black min-h-screen min-v-screen"
        style={{
          background: "url(/images/blob-scene-haikei.svg)",
          backgroundSize: "cover",
        }}
      >
        <main className="py-12 px-16">
          <div className="flex items-start flex-col md:flex-row">
            <div className="p-1 border-4 inline-block rounded-full border-black flex-shrink-0 mb-4 md:mb-0">
              <img
                src="/images/avatar.png"
                alt="Abstract profile image"
                width="150px"
                height="150px"
                className="rounded-full"
              />
            </div>
            <div className="md:ml-8 mb-40 md:mb-0">
              <h1 className="text-3xl font-bold">Kishan Nirghin</h1>
              <h2 className="">Passionate Software Engineer</h2>

              <div className="mt-4 flex">
                <a
                  className="border-2 border-black p-2 rounded-full"
                  href="https://www.linkedin.com/in/kishan-nirghin/"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="/images/linkedin.svg"
                    alt="LinkedIn - Kishan Nirghin"
                    width="20px"
                    height="20px"
                  />
                </a>

                <a
                  className="ml-2 border-2 border-black p-2 rounded-full"
                  href="https://www.github.com/kishanjay"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="/images/github.svg"
                    alt="Github - Kishanjay"
                    width="20px"
                    height="20px"
                  />
                </a>

                <a
                  className="ml-2 border-2 border-black p-2 rounded-full"
                  href="https://www.twitter.com/kishannirghin"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="/images/twitter.svg"
                    alt="Twitter - Kishan Nirghin"
                    width="20px"
                    height="20px"
                  />
                </a>
              </div>

              <p className="mt-8 max-w-xl">
                "Kishan has a highly goal oriented mind-set with the focus of
                adding value to real world obstacles. He is an efficient problem
                solver with an eye for pragmatism which allows him to build and
                design effective solutions. Using his strong fundamental
                knowledge Kishan can come up with high quality solutions for
                burning problems."
              </p>

              <p className="mt-4 max-w-xl">
                Interests: scalability patterns, high performance computing,
                data structures and algorithms, distributed systems, security.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
