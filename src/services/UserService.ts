import PocketBase from "pocketbase";

const pb = new PocketBase("https://ogm-admin.fly.dev");

export const loginWithPass = async (email: string, pass: string) => {
  try {
    if (!email) {
      window.alert("No email address provided");
      throw new Error("No email address provided");
    } else if (!pass) {
      window.alert("No password provided");
      throw new Error("No password provided");
    }
    const user = await pb.collection("users").authWithPassword(email, pass);
    console.log(user, "::USer collection");
    pb.authStore.exportToCookie({ httpOnly: false }, "pb_auth");
    window.location.href = "http://localhost:3000/user/dashboard";
    // return user.record;
  } catch (e: any) {
    window.alert(e.toString());
    throw new Error(e.message ?? e.toString());
  }
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
    window.alert("Terms and condition not yet accepted");
    throw new Error("Terms and condition not yet accepted");
  } else if (password !== confirmPassword) {
    window.alert("Passwords do not match");
    throw new Error("Passwords do not match");
  }

  const result = await pb.collection("users").create({
    name,
    email,
    password,
    passwordConfirm: confirmPassword,
  });

  console.log(result, ":::New user created");

  return result;
};

export const logout = () => {
  // window.localStorage.removeItem("pocketbase_auth");
  pb.authStore.clear();
  window.location.href = "http://localhost:3000/user";
};

export const isLoggedIn = () => {
  // return !!window.localStorage.getItem("pocketbase_auth");
  return pb.authStore.isValid;
};
