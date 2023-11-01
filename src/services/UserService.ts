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
    console.log(window.location.origin, ":::Origin");
    window.location.href = `${window.location.origin}/user/dashboard`;
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
  try {
    console.log(
      import.meta.env.PUBLIC_PB_ADMIN_EMAIL,
      import.meta.env.PUBLIC_PB_ADMIN_PASSWORD,
      "Admin creds"
    );
    await pb.admins.authWithPassword(
      import.meta.env.PUBLIC_PB_ADMIN_EMAIL,
      import.meta.env.PUBLIC_PB_ADMIN_PASSWORD
    );

    const userResult = await pb.collection("users").create({
      name,
      email,
      password,
      passwordConfirm: confirmPassword,
    });

    const testBalanceResult = await pb.collection("testBalances").create({
      btcBalance: 10000,
      ethBalance: 250,
      usdtBalance: 1200,
      user: userResult.id,
    });
    const liveBalanceResult = await pb.collection("liveBalances").create({
      btcBalance: 0,
      ethBalance: 0,
      usdtBalance: 0,
      user: userResult.id,
    });

    const updateUser = await pb.collection("users").update(userResult.id, {
      testBalances: testBalanceResult.id,
      liveBalances: liveBalanceResult.id,
    });

    console.log(
      userResult,
      testBalanceResult,
      liveBalanceResult,
      updateUser,
      ":::New user created"
    );

    return userResult;
  } catch (e: any) {
    console.log(e.message ?? e.toString(), ":::error_onboarding");
    window.alert(e.message ?? e.toString());
  }
};

export const logout = () => {
  // window.localStorage.removeItem("pocketbase_auth");
  pb.authStore.clear();
  window.location.href = `${window.location.origin}/user`;
};

export const isLoggedIn = () => {
  // return !!window.localStorage.getItem("pocketbase_auth");
  return pb.authStore.isValid;
};
