import Head from "next/head";
import Navbar from "../../components/Navbar";
import ProjectPreview from "../../components/ProjectPreview";
import Dribbble from "../../public/dribbble.svg";
import Instagram from "../../public/instagram.svg";
import Twitter from "../../public/twitter.svg";
import Linkedin from "../../public/linkedin.svg";
import Github from "../../public/github.svg";
import SocialButton from "../../components/SocialButton";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>My portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section className="grid grid-cols-1  gap-4 mb-4">
        <div className="bg-zinc-200 rounded-3xl p-10 flex flex-col gap-16 bg-[url('/gradient-bg.jpg')] bg-cover  text-ellipsis overflow-hidden ...">
          <h1 className="text-4xl m-0 font-semibold">
            Program Developer at Amazon
          </h1>

          <p className="text-base sm:text-xs md:text-md lg:text-lg xl:text-xl ...">
            I specialize in developing web applications using Ruby on Rails,
            Bootstrap, React, Nextjs, TailwindCSS and AWS with GrapgQL. I have
            extensive experience in developing scalable web applications that
            are both user-friendly and visually appealing. At Amazon, I’ve had
            the opportunity to work on a number of exciting projects, including
            developing a Ruby on Rails website that leverages the power of AWS
            to deliver fast, reliable performance.If you’re interested in
            learning more about my work or would like to connect, please don’t
            hesitate to reach out!
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-around">
            <Link href="mailto:jimmy90s@outlook.com">
              <button className="bg-black text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto hover:bg-gray-700">
                Contact me
              </button>
            </Link>

            <div className="flex items-center gap-4">
              <Link href="https://github.com/Jimmy90s" passHref={true}>
                <SocialButton bgColor="dribbble">
                  <Github className="w-5 h-5" />
                </SocialButton>
              </Link>
              <Link
                href="https://www.linkedin.com/in/jameslaurieca/"
                passHref={true}
              >
                <SocialButton bgColor="linkedin">
                  <Linkedin className="w-5 h-5" />
                </SocialButton>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="h-[30rem] rounded-3xl p-8 bg-[url('/profile.jpg')] bg-cover bg-center" /> */}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
        <ProjectPreview
          name="Amplify store"
          websiteLink="https://main.d5kf8k93kaord.amplifyapp.com/"
          gitHubLink="https://github.com/Jimmy90s/amplify"
          description="AWS Nextjs E-commerce website"
          imageUrl="/project-1.png"
          bgColor="#685cdd"
          dark
        />
        <ProjectPreview
          name="Portfolio Website"
          websiteLink="https://jimmy90s.github.io/"
          gitHubLink="https://github.com/Jimmy90s/jimmy90s.github.io"
          description="This site to display my most recent projects"
          imageUrl="/project-2.png"
          bgColor="#4e4e56"
          dark
        />
        {/* <ProjectPreview
          name="Admin Onboarding"
          description="Increase user engagement"
          imageUrl="/project-3.png"
        />
        <ProjectPreview
          name="Project Dashboard"
          description="Project management app"
          bgColor="#4e4e56"
          dark
        />
        <ProjectPreview
          name="Newsy App"
          description="News aggregator app"
          imageUrl="/project-2.png"
          bgColor="#171717"
          dark
        />
        <ProjectPreview
          name="Krypto"
          description="Analyze crypto currency"
          imageUrl="/project-3.png"
        /> */}
      </section>
    </>
  );
}
