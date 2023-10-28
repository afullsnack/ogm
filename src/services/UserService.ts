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

  await pb.admins.authWithPassword(
    import.meta.env.PB_ADMIN_EMAIL,
    import.meta.env.PB_ADMIN_PASSWORD
  );

  const userResult = await pb.collection("users").create({
    name,
    email,
    password,
    passwordConfirm: confirmPassword,
  });

  const testBalanceResult = await pb.collection("testBalance").create({
    btcBalance: 10000,
    ethBalance: 250,
    usdtBalance: 1200,
    user: userResult.id,
  });
  const liveBalanceResult = await pb.collection("liveBalance").create({
    btcBalance: 0,
    ethBalance: 0,
    usdtBalance: 0,
    user: userResult.id,
  });

  const updateUser = await pb.collection("user").update(userResult.id, {
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
