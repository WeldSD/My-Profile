import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Learn more about me, my background and my projects." />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="mt-4 text-xl">
          I am a web developer studying at SAIT. I love creating beautiful and functional websites. Here you can learn more about my projects and professional background.
        </p>
        <Link href="/">
          <a className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-md text-white">Go Back to Home</a>
        </Link>
      </div>
    </>
  );
}
