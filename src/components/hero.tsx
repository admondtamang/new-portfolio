import { useEffect, useLayoutEffect, useRef } from "react";
import Highlight from "./highlight";
import { Power2, Power3, gsap, CSSPlugin } from "gsap";
export default function Hero() {
  let container = useRef(null);
  let image = useRef(null);
  var tl = gsap.timeline({ delay: 0.8 });
  // const imageReveal = CSSPlugin.get(".image-container");
  useLayoutEffect(() => {
    //Remove initial flash
    gsap.to(container.current, {
      duration: 1,
      css: { visibility: "visible" },
    });

    tl.from(image.current, {
      duration: 1.2,
      // y: 1280,
      ease: Power3.easeOut,
    }).from(
      image?.current,
      {
        duration: 2,
        scale: 1.2,
        ease: Power3.easeOut,
      },
      "-=1"
    );
  }, [tl]);

  return (
    <section
      className="body-font invisible  text-gray-600 dark:text-gray-200"
      ref={container}
    >
      <div className="container mx-auto flex flex-col items-center px-5 py-12 md:flex-row">
        <div className="mb-16 flex flex-col items-center gap-8 text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <p className="rounded-3xl border-4 border-gray-600 bg-white px-4 py-1 font-bold dark:text-gray-800   ">
            Web Developer
          </p>
          <Highlight className="primary-highlight">
            <h1 className="title-font font-sans text-9xl font-extrabold dark:text-white  sm:text-4xl">
              Admond Tamang
            </h1>
          </Highlight>
          <h1 className="title-font font-sans text-9xl font-extrabold text-gray-700 dark:text-slate-200  sm:text-4xl">
            A Developer based in Nepal
          </h1>
          <p className="mb-8 leading-relaxed dark:text-slate-400">
            I love building and re-thiking what we do.
            <br />
            I&apos;m a competent, youthful developer who prioritizes more on
            <Highlight>human-centered design</Highlight>. <br />
            <br />
            Moreover, a desire to learn
            <Highlight>new technologies and application architecture</Highlight>
            and to <Highlight> collaborate in a team</Highlight>.<br />
            <br />I love <Highlight>learning and building</Highlight> web with
            new architecture and technologies.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/admond-tamang-78a39a134/">
              <button className="text-md rounded border-2 border-black bg-indigo-300 py-2 px-6 shadow-offset-black hover:bg-lime-600 hover:text-lime-50 dark:text-black">
                Linked In
              </button>
            </a>

            <a href="https://github.com/admondtamang">
              <button className="text-md rounded border-2 border-black bg-lime-300 py-2 px-6 shadow-offset-black hover:bg-indigo-600 hover:text-lime-50 dark:text-black">
                Github
              </button>
            </a>
          </div>
        </div>
        <div className="relative h-screen w-5/6  md:w-1/2 lg:w-full lg:max-w-lg">
          <div ref={image}>
            <img
              className="nue absolute top-0 left-0 right-0 bottom-0 rounded object-cover "
              alt="profile"
              src="/profile.jpg"
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
