import { useState } from "react";
import motiongif from "../../assets/darkday-motion.gif";
import MailerLite from "@mailerlite/mailerlite-nodejs";
import toast from "react-hot-toast";

const mailerlite = new MailerLite({
  api_key: import.meta.env.VITE_MAILER_LITE_API_KEY,
});

function Hero() {
  const [email, setEmail] = useState("");
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const addSubscriber = (e) => {
    e.preventDefault();
    const params = {
      email: email,
      groups: ["110885477350901042"],
      status: "active",
    };

    mailerlite.subscribers
      .createOrUpdate(params)
      .then(() => {
        setEmail("");
        toast.success("Drip incoming");
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Try again");
        }
      });
  };

  return (
    <>
      <div className="w-screen h-[20vh] flex justify-start items-center bg-cover bg-center overflow-hidden">
        <div className="flex items-center justify-center flex-col w-screen ">
          <p className="flex justify-center items-center font-bold pl-4 w-full text-[#393939] hero-header text-6xl">
            DARKDAY
          </p>
          {/* <p className="ibm-plex-light font-bold text-[#393939]">
            <span className="font-bold">Debut drop</span>
          </p>
          <p className="ibm-plex-light text-[#393939]">
            Right from the heart of{" "}
          </p> */}
          <p className="ibm-plex-light font-bold text-[#393939]">
            <span className="font-bold">Dubai Design District</span>
            (D3)
          </p>
        </div>
      </div>
      <div className="w-screen flex flex-col items-center justify-center pb-10">
        <div className="mb-4 text-sm">GET NOTIFIED FOR THE DROP</div>
        <div className="flex items-center ">
          <form action="submit" onSubmit={addSubscriber}>
            <input
              type="text"
              placeholder="Email"
              className="w-[200px] rounded-l-lg h-[35px] bg-white border border-slate-100 text-xs indent-4 outline-0"
              onChange={updateEmail}
              value={email}
            />
            <button className="button bg-black rounded-r-lg h-[35px] text-white px-2 text-sm border border-slate-200 m-0">
              Sign up
            </button>
          </form>
        </div>
      </div>
      <div className="w-screen h-[89vh] flex justify-start items-center bg-hero-bg bg-cover bg-center overflow-hidden">
        <div className="flex items-center justify-center flex-col w-screen ">
          <img src={motiongif} />
        </div>
      </div>
    </>
  );
}

export default Hero;
