import { MdArrowOutward } from "react-icons/md";

const ProjDetail = ({
  projectImg,
  projectTitle,
  projectDes,
  liveProjectCheckContent,
  liveProjectCheckUrl,
}) => {
  return (
    <div className="card bg-[#0000001A] w-[20rem] sm:[22rem] md:w-[23rem] shadow-sm font-manrope">
      <figure className="px-5 pt-5">
        <img
          src={`/src/Media/${projectImg}`}
          alt="Image"
          className="rounded-xl w-[35rem] h-[10rem]"
        />
      </figure>
      <div className="my-0 py-4 px-6 ">
        <h2 className=" text-start text-xl my-0 py-0 font-tektur  font-semibold">
          {projectTitle}
        </h2>
        <p className="text-justify text-base line-clamp-2 font-manrope">
          {projectDes}
        </p>

        <div className="flex justify-start md:justify-end font-semibold w-full my-3">
          <a
            href={liveProjectCheckUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex justify-end font-manrope items-center bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 bg-clip-text text-transparent">
              <span> {liveProjectCheckContent}</span>
              <span className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 bg-clip-text text-transparent">
                {" "}
                <MdArrowOutward className="text-[#8800FF]" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjDetail;
