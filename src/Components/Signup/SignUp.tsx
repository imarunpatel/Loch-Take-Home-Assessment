import React, { FC, useState } from "react";
import "./SignUp.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const SignUp: FC<Props> = (props) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  

  const validateEmail = (input: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
    if (submitted) setIsValid(validateEmail(email));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    if (!validateEmail(email)) return;
    window.location.href = `https://app.loch.one/welcome.?email=${email}`;

  };

  return (
    <div
      className={`signup lg:w-[440px] xl:w-[500px] 2xl:w-[700px] flex items-center justify-center sidebar ${
        props.isOpen ? "open" : ""
      }`}
    >
      <button
        onClick={props.onClose}
        className="absolute top-3 right-3 z-50 lg:hidden block"
      >
        Close
      </button>

      <div className="w-[364px] flex flex-col gap-6">
        <div className="text-gray-300 text-3xl font-medium mb-2 mx-3">
          Signup for exclusive access.
        </div>
        <div className="mx-3 flex flex-col relative">
          <input
            type="text"
            className=" w-full email-input focus:border-blue-500 focus:outline-none hover:border-blue-500"
            placeholder="Your email address"
            onChange={handleEmailInput}
          />
          {isValid ? null : (
            <small className="text-red-500 absolute -bottom-6">Please enter a valid email</small>
          )}
        </div>
        <button onClick={handleSubmit} className="btn-getstarted mx-3 mt-3">
          Get started
        </button>
        <p className="m-[18px] text-[#19191A] font-semibold">
          You'll receive an email with an invite link to join
        </p>
      </div>
    </div>
  );
};

const styles = {
  signup: {
    backgroundColor: "red",
  },
};

export default SignUp;
