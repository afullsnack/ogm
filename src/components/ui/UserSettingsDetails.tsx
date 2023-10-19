import { FC, useEffect, useState } from "react";

const UserSettingsDetails: FC = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "miraclef60@gmail.com",
  });

  useEffect(() => {
    const userModel = window.localStorage.getItem("pocketbase_auth");
    if (userModel) {
      console.log(JSON.parse(userModel)["model"], ":::Life");
      setUser(JSON.parse(userModel)["model"]);
    }
  }, []);

  return (
    <div className="w-[400px] grid grid-cols-2 gap-4 text-white">
      <label className="grid items-start">
        <span className="capitalize lg:text-xs text-sm mb-1">YOUR NAME</span>
        <input
          type="text"
          className="bg-slate-800 border-gray-400/50 rounded-md caret-current border px-2 py-1 text-white outline-none font-medium"
          defaultValue={user["name"]}
          placeholder="John Doe"
        />
      </label>
      <label className="grid items-start">
        <span className="capitalize lg:text-xs text-sm mb-1">YOUR EMAIL</span>
        <input
          type="email"
          className="bg-slate-800 border-gray-400/50 rounded-md caret-current border px-2 py-1 text-white outline-none font-medium"
          defaultValue={user["email"]}
          placeholder="john@doe.xyz"
        />
      </label>
      <label className="grid items-start">
        <span className="capitalize lg:text-xs text-sm mb-1">LANGUAGE</span>
        <input
          type="text"
          className="bg-slate-800 border-gray-400/50 rounded-md caret-current border px-2 py-1 text-white outline-none font-medium"
          placeholder="ENGLISH"
        />
      </label>
      <label className="grid items-start">
        <span className="capitalize lg:text-xs text-sm mb-1">CURRENCY</span>
        <input
          type="text"
          className="bg-slate-800 border-gray-400/50 rounded-md caret-current border px-2 py-1 text-white outline-none font-medium"
          placeholder="USD"
        />
      </label>
      <label className="grid items-start">
        <span className="capitalize lg:text-xs text-sm mb-1">
          CHANGE YOUR PASSWORD
        </span>
        <input
          type="password"
          className="bg-slate-800 border-gray-400/50 rounded-md caret-current border px-2 py-1 text-white outline-none font-medium"
          placeholder="password"
        />
      </label>
      <label className="grid items-start">
        <span className="capitalize lg:text-xs text-sm mb-1">
          REPEAT YOUR PASSWORD
        </span>
        <input
          type="password"
          className="bg-slate-800 border-gray-400/50 rounded-md caret-current border px-2 py-1 text-white outline-none font-medium"
          placeholder="password"
        />
      </label>
      <label className="grid items-start col-span-2">
        <span className="capitalize lg:text-xs text-sm mb-1">REFERAL LINK</span>
        <input
          type="text"
          readOnly
          className="bg-slate-800 border-gray-400/50 rounded-md caret-current border px-2 py-1 text-white outline-none font-medium"
          value={`https://optigrowthmarkets.com/user?ref=${user["id"]}`}
        />
      </label>
    </div>
  );
};

export default UserSettingsDetails;
