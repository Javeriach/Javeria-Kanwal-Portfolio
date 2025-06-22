import { useState } from "react";

const About = () => {
  const [seeLess, setSeeLess] = useState(false);
  return (
    <div className=" mt-6 sm:flex sm:flex-col lg:flex-row  items-center   justify-center mb-10 w-full">
      <div className="sm:w-[80vw] lg:w-[40vw]">
        <h1 className="text-center lg:text-start  text-4xl lg:text-6xl font-semibold font-tektur">
          About{" "}
          <span className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 bg-clip-text text-transparent">
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
          I am a full stack mern developer based in Pakistan
        </h1>
        <p className="mt-6 font-manrope font-normal text-base px-8 lg:px-0 text-justify  ">
          {" "}
          I'm a Full Stack MERN Developer with a strong interest in building
          clean, responsive, and user-friendly web applications using HTML, CSS,
          JavaScript, React.js, and Tailwind CSS. I implement secure
          authentication with Firebase and develop robust backend systems using
          Node.js, Express.js, and MongoDB. I enjoy turning ideas into
          real-world solutions that are both scalable and efficient.{" "}
          <span
            onClick={() => setSeeLess(!seeLess)}
            className="font-semibold cursor-pointer bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 bg-clip-text text-transparent"
          >
            {seeLess ? <>See More ...</> : <> </>}
          </span>{" "}
          {seeLess ? (
            ""
          ) : (
            <>
              I write clean code with a focus on the DRY{" "}
              <span className="font-semibold">(Don't Repeat Yourself)</span>{" "}
              principle ensuring maintainable and well-structured applications.
              I'm always eager to learn new technologies and grow as a
              developer.{" "}
              <span
                onClick={() => setSeeLess(!seeLess)}
                className="font-semibold cursor-pointer bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 bg-clip-text text-transparent"
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
