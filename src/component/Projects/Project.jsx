import { useState, useEffect } from "react";
import projectsDetails from "../../ProjectDetails/ProjectDetails";
import ProjDetail from "../ProjDetail/ProjDetail";
import { FaArrowRight } from "react-icons/fa6";

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const [isXLScreen, setIsXLScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsXLScreen(window.innerWidth >= 1280);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const visibleProjects =
    isXLScreen || showAll ? projectsDetails : projectsDetails.slice(0, 4);

  return (
    <div className="w-full px-4 pt-3 pb-8 min-h-screen">
      <h1 className="text-center text-3xl lg:text-6xl font-semibold font-tektur pt-3 pb-10">
        Featured{" "}
        <span className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 bg-clip-text text-transparent">
          Projects
        </span>
      </h1>

      <div className="flex flex-col w-full justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {visibleProjects.map((p) => (
            <ProjDetail
              key={p._id}
              projectImg={p.projectImg}
              projectTitle={p.projectTitle}
              projectDes={p.projectDes}
              liveProjectCheckContent={p.liveProjectCheckContent}
              liveProjectCheckUrl={p.liveProjectCheckUrl}
            />
          ))}
        </div>

        {/* Show button on smaller to lg screens */}
        {!isXLScreen && (
          <div className="flex justify-center mt-2">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="flex items-center mt-4 gap-2 font-semibold text-white bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 px-5 py-3 rounded-full"
            >
              <span>{showAll ? "LOAD LESS" : "LOAD MORE"}</span>
              <FaArrowRight
                className={`transition-transform ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
