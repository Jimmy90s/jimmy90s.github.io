import Head from "next/head";
import Navbar from "../../components/Navbar";
import ProjectPreview from "../../components/ProjectPreview";
import Dribbble from "../../public/dribbble.svg";
import Instagram from "../../public/instagram.svg";
import Arrow from "../../public/arrow.svg";
import Linkedin from "../../public/linkedin.svg";
import Github from "../../public/github.svg";
import SocialButton from "../../components/SocialButton";
import Link from "next/link";
import Button from "../../components/Button";
import { useTheme } from "next-themes";

// import { Roboto } from "next/font/google";

// const roboto = Roboto({
//   weight: "400",
//   subsets: ["latin"],
// });

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "light" ? systemTheme : theme;
  return (
    <>
      <Head>
        <title>My portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        className="bg-gray-300 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-2 py-2 text-md md:text-sm  rounded-full ease-in-out flex justify-center items-center absolute top-4 right-4"
      >
        <Arrow />
      </button>

      {/* <h2
        className={`text-4xl sm:text-6xl md:text-9xl text-center text-gray-800`}
      >
        LIGHT MODE
      </h2>
      <h2
        className={`text-4xl sm:text-6xl md:text-9xl text-center text-white `}
      >
        DARK MODE
      </h2> */}
      {/* <button className="bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg absolute bottom-32">
        Toggle Mode
      </button> */}

      <Navbar />

      <section className="grid grid-cols-1  gap-4 mb-4">
        <div className="bg-zinc-200 rounded-3xl p-10 flex flex-col gap-16 bg-[url('/gradient-bg.jpg')] bg-cover  text-ellipsis overflow-hidden ...">
          <h1 className="text-4xl m-0 font-semibold text-center dark:text-black">
            Program Developer - Amazon
          </h1>

          <p className="text-base sm:text-xs md:text-md lg:text-lg xl:text-xl text-gray-700">
            I specialize in developing web applications using Ruby on Rails,
            Bootstrap, React, Nextjs, TailwindCSS and AWS with GraphQL, S3
            buckets, DynamoDB and IAM permissions. I have extensive experience
            in developing scalable web applications that are both user-friendly
            and visually appealing. At Amazon, I’ve had the opportunity to work
            on a number of exciting projects, including developing a Ruby on
            Rails website that leverages the power of AWS to deliver fast,
            reliable performance.If you’re interested in learning more about my
            work or would like to connect, please don’t hesitate to reach out!
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-around">
            <Link href="mailto:jimmy90s@outlook.com">
              <button className="bg-black text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto hover:bg-instagram">
                Contact me
              </button>
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/Jimmy90s"
                passHref={true}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialButton bgColor="dribbble">
                  <Github className="w-5 h-5" />
                </SocialButton>
              </Link>
              <Link
                href="https://www.linkedin.com/in/jameslaurieca/"
                passHref={true}
                target="_blank"
                rel="noopener noreferrer"
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
          name="Amplify Store"
          websiteLink="https://main.d5kf8k93kaord.amplifyapp.com/"
          gitHubLink="https://github.com/Jimmy90s/amplify"
          description="E-commerce website with AWS GraphQL and Nextjs"
          imageUrl="/project-1.png"
          bgColor="#685cdd"
        />
        <ProjectPreview
          name="Social Media Clone"
          websiteLink="https://main.d1f44gpqbavq1z.amplifyapp.com"
          gitHubLink="https://github.com/Jimmy90s/social-clone"
          description="Social media clone with AWS GraphQL and NextJs "
          imageUrl="/project-3.png"
          bgColor="#4e4e56"
        />
        <ProjectPreview
          name="Portfolio Website"
          websiteLink="https://jimmy90s.github.io/"
          gitHubLink="https://github.com/Jimmy90s/jimmy90s.github.io"
          description="This site, used to display my most recent projects"
          imageUrl="/project-2.png"
          bgColor="#4e4e56"
        />
        <ProjectPreview
          name="AWS Data Lake"
          websiteLink="https://public.tableau.com/app/profile/james3436/viz/AWSDataLakeCrimeData/Dashboard1"
          gitHubLink="https://github.com/Jimmy90s/emr-serverless-data-lake"
          description="AWS EMR Data Lake and Tableau"
          imageUrl="/project-1.png"
          bgColor="#685cdd"
        />
        {/* <ProjectPreview
          name="Admin Onboarding"
          description="Increase user engagement"
          imageUrl="/project-3.png"
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
