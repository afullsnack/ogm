import PocketBase from "pocketbase";

const pb = new PocketBase("https://ogm-admin.fly.dev");

export const loginWithPass = async (email: string, pass: string) => {
  const user = await pb.collection("users").authWithPassword(email, pass);
  console.log(user, "::USer collection");
  window.localStorage.setItem("uid", user.record.id);
};

type NewUser = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  term: boolean;
};
export const registerNewUser = async ({
  name,
  email,
  password,
  confirmPassword,
  term,
}: NewUser) => {
  if (!term) {
    throw new Error("Terms and condition not yet accepted");
  } else if (password !== confirmPassword) {
    throw new Error("Passwords do not match");
  }

  const result = await pb.collection("users").create({
    name,
    email,
    password,
    passwordConfirm: confirmPassword,
  });

  console.log(result, ":::New user created");

  window.localStorage.setItem("uid", result?.id);
  window.localStorage.setItem("uname", result?.name);

  return result;
};

export const logout = () => {
  window.localStorage.removeItem("uid");
};

export const isLogged = () => {
  return !!window.localStorage.getItem("uid");
};
