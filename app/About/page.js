import Link from 'next/link';

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-5xl font-bold text-white">
        About Me
      </h1>
      <p className="mt-3 text-lg text-gray-300">
        I am a web developer studying at SAIT. I love creating beautiful and functional websites.
      </p>
      <Link href="/">
        <a className="mt-4 text-blue-500">
          Go back to Home
        </a>
      </Link>
    </div>
  );
}

export default About;
