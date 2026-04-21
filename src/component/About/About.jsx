import { useState } from "react";

const About = () => {
  const [seeLess, setSeeLess] = useState(false);
  return (
    <div className=" mt-6 sm:flex sm:flex-col lg:flex-row  items-center   justify-center mb-10 w-full">
      <div className="sm:w-[80vw] lg:w-[40vw]">
        <h1 className="text-center lg:text-start text-3xl lg:text-5xl font-semibold font-tektur">
          About{" "}
          <span className="bg-gradient-to-b from-black via-gray-700 to-gray-400 bg-clip-text text-transparent">
            me
          </span>
        </h1>
        <div className="flex justify-center lg:flex-none lg:justify-start">
          {" "}
          <img
            src="/mern.png"
            alt="img"
            className="cursor-pointer mt-5 lg:mt-20 ms-0 w-72"
          />
        </div>
      </div>
      <div className="sm:w-[80vw] lg:w-[40vw] py-4 ">
        <h1 className="font-semibold  text-xl  px-8 lg:px-0 lg:text-2xl text-center lg:text-start">
          Full Stack Software Engineer specializing in Node.js and Nest.js
        </h1>
        <p className="mt-6 font-manrope font-normal text-base px-8 lg:px-0 text-start sm:text-justify  ">
          {" "}
          I'm a Full Stack Software Engineer with a year of experience specializing in building scalable APIs, AI-powered platforms, and cloud deployments on AWS. I have a deep expertise in designing backend systems, CI/CD pipelines, and full-stack architectures for production applications.{" "}
          <span
            onClick={() => setSeeLess(!seeLess)}
            className="font-semibold cursor-pointer bg-gradient-to-b from-black via-gray-700 to-gray-400 bg-clip-text text-transparent"
          >
            {seeLess ? <>See More ...</> : <> </>}
          </span>{" "}
          {seeLess ? (
            ""
          ) : (
            <>
              Skilled in Node.js, Nest.js, React.js, and Next.js, with extensive experience managing production infrastructure on AWS (EC2, RDS, ElastiCache, ECR). I focus on delivering reliable, efficient, and scalable technical solutions.{" "}
              <span
                onClick={() => setSeeLess(!seeLess)}
                className="font-semibold cursor-pointer bg-gradient-to-b from-black via-gray-700 to-gray-400 bg-clip-text text-transparent"
              >
                {!seeLess ? <>See Less ...</> : <> </>}
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default About;
