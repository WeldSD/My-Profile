

export default function Home() {
  return (
    <main className="flex flex-col justify-between h-screen w-full animated-gradient">
      <div className="w-full"></div>
      <div className="text-white text-6xl font-serif mb-5">
        <div className="flex flex-col items-center justify-center flex-grow">
          Welcome to my Profile!
          <div className="flex items-center justify-center h-full">
            <div className="text-base text-center px-52 font-serif">
              Hello! I am currently studying at SAIT. This is a way of
              showcasing my work and projects. I am always looking for new
              opportunities and challenges. Feel free to connect with me on
              LinkedIn or Github.
              <div className="text-xl text-center px-82 font-serif">"Meron."</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://www.linkedin.com/in/meron-weld-b282a1254"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            My LinkedIn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          &quot;Connect With me on LinkedIn.&quot;
          </p>
        </a>

        <a
          href="https://github.com/WeldSD"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            My Github{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          My repositories on Github!
          </p>
        </a>

        <a
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About me{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Learn more.</p>
        </a>
      </div>
    </main>
  );
}
