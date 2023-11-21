import { FC } from "react";
import BellIcon from "../../assets/icons/Bell.svg";
import Notification from "./components/Notification";
import WhalesImage from "../../assets/images/whales.png";
import EyeIcon from "../../assets/icons/eye.svg";
import Testimonial from "./components/Testimonial";
import "./Main.css";

interface Props {
  handleToggleSidebar: () => void;
}
const Main: FC<Props> = (props) => {
  return (
    <>
      <div className=" px-4 pt-28 pb-20 ">
        <div className="left">
          {/* First Section */}
          <section className="flex flex-col sm:flex-row md:gap-16 mb-20">
            <div className="flex flex-col gap-4 mb-8 md:mb-0">
              <div className="icon">
                <img src={BellIcon} alt="" />
              </div>
              <div className="text-3xl text-white">
                Get notified when a highly correlated whale makes a move
              </div>
              <p className="text-[#F2F2F2] text-base">
                Find out when a certain whale moves more than any preset amount
                on-chain or when a dormant whale you care about becomes active.
              </p>
            </div>
            <Notification />
          </section>

          {/* Second Section */}
          <section className="second-section flex flex-col-reverse items-center md:flex-row gap-9 mb-20">
            <div className="flex justify-center md:justify-start items-center flex-1">
              <img src={WhalesImage} alt="" width={335} />
            </div>
            <div className="flex justify-center gap-4 flex-col items-end flex-1 ">
              <img src={EyeIcon} alt="" />
              <div className="text-3xl text-white text-end">
                Watch what the whales are doing
              </div>
              <p className="text-[#F2F2F2] text-base text-end">
                All whales are not equal. Know exactly what the whales impacting
                YOUR portfolio are doing.
              </p>
            </div>
          </section>

          <div className="text-center mb-20 lg:hidden block ">
            <button
              onClick={props.handleToggleSidebar}
              className="btn-getstarted mx-3 w-60"
            >
              Get started
            </button>
          </div>

          {/* Testimonial heading */}
          <div className="text-center lg:text-end text-2xl text-[#FEFEFE] second-section">
            Testimonials
          </div>
          <hr className="mt-5 mb-14 second-section" />
          {/* Testimonial heading end */}
        </div>

        <section>
          <Testimonial />
        </section>
      </div>
    </>
  );
};

export default Main;
