import { FC, ReactNode, useState } from "react";

type IForm = {
  children: ReactNode;
};

const OnboardForms: FC<IForm> = ({ children }) => {
  const [term, setTerm] = useState(false);
  const [view, setView] = useState<"login" | "register">("login");
  const [name, setName] = useState();
  const [regEmail, setRegEmail] = useState();
  const [regPassword, setRegPassword] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      {view === "login" && (
        <>
          <input
            type="email"
            placeholder="Enter email address"
            className="flex items-center justify-center justify-items-center p-4 outline-1 text-black border border-gray-300 w-full"
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <label forHtml="password">
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="flex items-center justify-center justify-items-center p-4 outline-1 text-black border border-gray-300 w-full mt-4"
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </label>
          <div className="w-full text-black justify-between items-center mt-2 px-1">
            <span className="text-gray-400 text-sm mr-10 hover:cursor-pointer">
              Forgot password?
            </span>
            <button className="py-2 px-4 bg-blue-400 text-white">LOGIN</button>
          </div>
          <span className="text-center text-black text-xs mx-auto my-1 px-4 mt-5">
            Not yet a member?
          </span>
          <button
            onClick={() => setView("register")}
            className="py-2 px-4 bg-blue-400 text-white mt-10 hover:bg-yellow-600/80">
            REGISTER HERE
          </button>
        </>
      )}

      {view === "register" && (
        <>
          <span className="">
            To make things easier for you, we've simplified the Registration
            page. You can complete your profile after registration anytime.
          </span>
          <input
            type="text"
            placeholder="First & Last name"
            className="flex items-center justify-center justify-items-center p-4 outline-1 text-black border border-gray-300 w-full"
            onChange={(e: any) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter email address"
            className="flex items-center justify-center justify-items-center p-4 outline-1 text-black border border-gray-300 w-full mt-4"
            onChange={(e: any) => setRegEmail(e.target.value)}
          />
          <label htmlFor="password">
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="flex items-center justify-center justify-items-center p-4 outline-1 text-black border border-gray-300 w-full mt-4"
              onChange={(e: any) => setRegPassword(e.target.value)}
            />
          </label>
          <label htmlFor="cpassword">
            <input
              id="cpassword"
              type="password"
              placeholder="Confirm password"
              className="flex items-center justify-center justify-items-center p-4 outline-1 text-black border border-gray-300 w-full mt-4"
              onChange={(e: any) => setConfirmPass(e.target.value)}
            />
          </label>
          <div className="w-full flex justify-start mt-2 items-center justify-items-center">
            <input
              type="check"
              // checked={true}
              onChange={(e: any) =>
                setTerm((_prev: boolean) => !e.target.check)
              }
              className="w-4 h-4 text-black bg-white hover:cursor-pointer mr-2 rounded-sm border border-gray-500"
            />
            <span className="text-black">
              I agree to the <a href="#">Terms</a>
            </span>
          </div>
          <div className="w-full text-black justify-between items-center mt-2 px-1">
            <span
              className="text-gray-400 text-sm mr-10 hover:cursor-pointer"
              onClick={() => setView("login")}>
              Already a user?
            </span>
            <button
              className="py-2 px-4 bg-blue-400 text-white"
              onClick={() => {
                console.log(
                  name,
                  regEmail,
                  regPassword,
                  confirmPass,
                  ":::Details of registration"
                );
              }}>
              SIGN IN
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default OnboardForms;
