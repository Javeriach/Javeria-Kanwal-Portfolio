import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Javeria_Kanwal_resume from "../../Media/Javeria_Kanwal_resume.pdf";

const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sg0naxl", "template_rvb3srm", form.current, {
        publicKey: "vOQ920oyVBUNagdGh",
      })
      .then(
        () => {
          toast.success("Message Sent!!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send. Try again.");
        }
      );
  };

  return (
    <>
      <div className="bg-gradientColor1 py-10 w-full flex justify-center items-center">
        <div className="w-[85vw] flex max-[900px]:flex-col max-[900px]:items-center justify-center">
          {/* Left Section */}
          <div className="max-[900px]:w-full w-[40vw] max-[900px]:px-3 mb-5">
            <h1 className="text-5xl max-[900px]:text-3xl font-tektur font-semibold max-[900px]:text-center text-start">
              Let's{" "}
              <span className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="font-manrope py-2 max-[900px]:text-center text-start">
              <span className="text-[#686868]">Contact me at</span>{" "}
              <a
                href="mailto:javeriakanwal383@gmail.com"
                className="font-semibold cursor-pointer"
              >
                javeriakanwal383@gmail.com
              </a>
            </p>
            <p className="font-manrope pb-2 max-[900px]:text-center text-start">
              <span className="text-[#686868]">For more info, here's my</span>{" "}
              <a
                href={Javeria_Kanwal_resume}
                download="resume"
                className="font-semibold cursor-pointer"
              >
                resume
              </a>
            </p>

            <div className="flex items-center gap-4 pt-2 max-[900px]:justify-center text-start">
              <a href="https://www.linkedin.com/in/javeria-kanwal-bbb4b3243" target="_blank" rel="noopener noreferrer">
                <IoLogoLinkedin className="text-3xl text-[#8800FF]" />
              </a>
              <a href="https://github.com/Javeriach" target="_blank" rel="noopener noreferrer">
                <FaSquareGithub className="text-3xl text-[#8800FF]" />
              </a>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-[45vw] max-[900px]:w-full max-[900px]:px-5">
            <form ref={form} onSubmit={sendEmail} className="font-manrope">
              <div className="flex flex-col gap-3">
                <label>Name</label>
                <input
                  name="user_name"
                  placeholder="Enter your name here..."
                  type="text"
                  className="rounded"
                  required
                />
              </div>
              <div className="flex flex-col gap-3 mt-2">
                <label>Email</label>
                <input
                  name="user_email"
                  placeholder="Enter your email here..."
                  type="email"
                  className="rounded"
                  required
                />
              </div>
              <div className="flex flex-col gap-3 mt-2">
                <label>Subject</label>
                <input
                  name="subject"
                  placeholder="Enter your subject here..."
                  type="text"
                  className="rounded"
                  required
                />
              </div>
              <div className="flex flex-col gap-3 mt-2">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Enter your message here..."
                  className="rounded"
                  required
                />
              </div>

              <div className="flex justify-center mt-3 lg:justify-start">
                <button
                  type="submit"
                  className="flex items-center mt-4 gap-1 font-semi text-white bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 px-4 py-3 rounded-full"
                >
                  <span>SUBMIT</span>
                  <IoMdArrowRoundForward />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
