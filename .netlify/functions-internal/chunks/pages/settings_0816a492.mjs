/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, F as Fragment } from '../astro_cb3aa52d.mjs';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { QRCodeSVG } from 'qrcode.react';
import { useState, useEffect } from 'react';
import speakeasy from 'speakeasy';
import { $ as $$Sectionhead } from './about_2d5c339b.mjs';
import { a as logout, i as isLoggedIn, $ as $$DashboardLayout } from './dashboard_953be533.mjs';
import { atom } from 'nanostores';
import 'html-escaper';
import './404_3d16713a.mjs';
import 'svgo';
/* empty css                           *//* empty css                               */import '@nanostores/react';
import '@nanostores/persistent';
import 'lucide-react';
import 'pocketbase';

const QRCodeComp = () => {
  const generatedSecret = () => speakeasy.generateSecret({ length: 20 });
  return /* @__PURE__ */ jsx("div", { class: "p-2 bg-white flex items-center justify-center", children: /* @__PURE__ */ jsx(QRCodeSVG, { value: generatedSecret(), size: 280 }) });
};

const WithdrawalCard = ({ item }) => {
  const [collapsed, setCollapsed] = useState(false);
  return /* @__PURE__ */ jsxs("div", { class: "h-auto w-full my-3 grid items-center justify-center justify-items-center bg-slate-800 border-gray-400/50 rounded-md border py-1 text-white outline-none", children: [
    /* @__PURE__ */ jsxs("div", { class: "grid grid-cols-3 w-[inherit]", children: [
      /* @__PURE__ */ jsxs("div", { class: "text-start grid gap-1", children: [
        /* @__PURE__ */ jsx("span", { class: "text-base", children: item?.type === "wallet" ? "WALLET" : item?.type === "bank" ? "BANK TRANSFER" : "PAYPAL" }),
        /* @__PURE__ */ jsx("span", { class: "text-xs font-light text-start", children: item?.type === "wallet" ? "CRYPTOCURRENCY NAME" : item?.type === "bank" ? "BANK ACCOUNT NUMBER/IBAN" : "PAYPAL EMAIL" }),
        /* @__PURE__ */ jsx("span", { class: "text-sm font-normal text-start", children: item?.type === "wallet" ? item?.name : item?.type === "bank" ? item?.bankAccountNumber : item?.email })
      ] }),
      /* @__PURE__ */ jsx("div", { class: "text-center flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { children: "ADDRESS" }) }),
      /* @__PURE__ */ jsx("div", { class: "grid items-end justify-end justify-items-end", children: /* @__PURE__ */ jsx(
        "button",
        {
          class: "px-2 py-1 bg-blue-400 rounded-sm",
          onClick: setCollapsed((_prev) => !_prev),
          children: "DETAILS"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { class: "w-full" })
  ] });
};

const $withdrawals = atom([]);

const LogoutButton = () => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      class: "bg-red-500 text-white hover:bg-red-400 px-2 py-1 w-full h-10 active:bg-red-600 tracking-wide mx-auto",
      onClick: () => {
        logout();
      },
      children: "LOGOUT"
    }
  );
};

const UserSettingsDetails = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "miraclef60@gmail.com"
  });
  useEffect(() => {
    const userModel = window.localStorage.getItem("pocketbase_auth");
    if (userModel) {
      console.log(JSON.parse(userModel)["model"], ":::Life");
      setUser(JSON.parse(userModel)["model"]);
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "w-[400px] grid grid-cols-2 gap-4 text-white", children: [
    /* @__PURE__ */ jsxs("label", { className: "grid items-start", children: [
      /* @__PURE__ */ jsx("span", { className: "capitalize lg:text-xs text-sm mb-1", children: "YOUR NAME" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          className: "bg-slate-800 border-gray-400/50 rounded-md caret-current border px-2 py-1 text-white outline-none font-medium",
          defaultValue: user["name"],
          placeholder: "John Doe"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "grid items-start", children: [
      /* @__PURE__ */ jsx("span", { className: "capitalize lg:text-xs text-sm mb-1", children: "YOUR EMAIL" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          className: "bg-slate-800 border-gray-400/50 rounded-md caret-current border px-2 py-1 text-white outline-none font-medium",
          defaultValue: user["email"],
          placeholder: "john@doe.xyz"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "grid items-start", children: [
      /* @__PURE__ */ jsx("span", { className: "capitalize lg:text-xs text-sm mb-1", children: "LANGUAGE" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          className: "bg-slate-800 border-gray-400/50 rounded-md caret-current border px-2 py-1 text-white outline-none font-medium",
          placeholder: "ENGLISH"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "grid items-start", children: [
      /* @__PURE__ */ jsx("span", { className: "capitalize lg:text-xs text-sm mb-1", children: "CURRENCY" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          className: "bg-slate-800 border-gray-400/50 rounded-md caret-current border px-2 py-1 text-white outline-none font-medium",
          placeholder: "USD"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "grid items-start", children: [
      /* @__PURE__ */ jsx("span", { className: "capitalize lg:text-xs text-sm mb-1", children: "CHANGE YOUR PASSWORD" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "password",
          className: "bg-slate-800 border-gray-400/50 rounded-md caret-current border px-2 py-1 text-white outline-none font-medium",
          placeholder: "password"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "grid items-start", children: [
      /* @__PURE__ */ jsx("span", { className: "capitalize lg:text-xs text-sm mb-1", children: "REPEAT YOUR PASSWORD" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "password",
          className: "bg-slate-800 border-gray-400/50 rounded-md caret-current border px-2 py-1 text-white outline-none font-medium",
          placeholder: "password"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "grid items-start col-span-2", children: [
      /* @__PURE__ */ jsx("span", { className: "capitalize lg:text-xs text-sm mb-1", children: "REFERAL LINK" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          readOnly: true,
          className: "bg-slate-800 border-gray-400/50 rounded-md caret-current border px-2 py-1 text-white outline-none font-medium",
          value: `https://optigrowthmarkets.com/user?ref=${user["id"]}`
        }
      )
    ] })
  ] });
};

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Settings = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Settings;
  console.log($withdrawals.get().length, ":::Length");
  if (!isLoggedIn()) {
    Astro2.redirect("/user");
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="bg-slate-900 p-4 max-w-4xl my-1 mx-auto">${renderComponent($$result2, "Sectionhead", $$Sectionhead, { "align": "center" }, { "desc": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result4) => renderTemplate`${"Users email"}` })}`, "title": ($$result3) => renderTemplate`<h1 class="text-3xl text-white font-bold">${"Users name"}</h1>` })}<div class="w-full grid gap-3 relative items-start justify-center mt-5">${renderComponent($$result2, "UserSettingsDetails", UserSettingsDetails, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ui/UserSettingsDetails", "client:component-export": "default" })}</div>${renderComponent($$result2, "Sectionhead", $$Sectionhead, { "align": "center" }, { "desc": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result4) => renderTemplate`Secure your account with <b class="text-white">Google Authenticator</b>` })}`, "title": ($$result3) => renderTemplate`<h1 class="text-3xl text-white font-bold">${"Security"}</h1>` })}<div class="w-full grid gap-3 relative items-start justify-center mb-12 mt-5"><div class="my-8 flex items-center justify-between gap-2"><a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en" target="_blank" class="px-3 py-2 bg-black text-white hover:bg-black/70 hover:text-blue-600 flex-1 text-center">Download on Android</a><a href="https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8" target="_blank" class="px-3 py-2 bg-black text-white hover:bg-black/70 hover:text-blue-600 flex-1 text-center">Download on iOS</a></div><hr class="my-2 text-gray-400"><div class="w-[400px] grid gap-4 text-white items-center justify-center"><span class="text-center font-normal text-sm w-[280px]">Scan the QRcode with the <b>Google Authenticator</b> app, enter the code that appears and validate</span>${renderComponent($$result2, "QRCodeComp", QRCodeComp, {})}<input type="password" placeholder="*****" class="w-full mx-auto h-10 bg-slate-800 border-gray-400/50 rounded-md caret-current border flex items-center justify-center px-2 text-xl font-medium text-center tracking-[.8em] text-white outline-none"><button class="bg-blue-500 text-white hover:bg-blue-400 px-2 py-1 w-full h-10 active:bg-blue-600 tracking-wide mx-auto">VALIDATE</button></div></div>${renderComponent($$result2, "Sectionhead", $$Sectionhead, { "align": "center" }, { "desc": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "desc", "class:list": "w-[280px]" }, { "default": ($$result4) => renderTemplate`Add withdrawal addresses or bank accounts` })}`, "title": ($$result3) => renderTemplate`<h1 class="text-3xl text-white font-bold">${"Withdraw / Wallets"}</h1>` })}<div class="flex items-center justify-center gap-2 mt-2 mb-5"><div class="px-2 py-1 bg-white rounded-sm hover:cursor-pointer"><div class="w-40 h-16 bg-white bg-no-repeat bg-contain bg-center" style="background-image: url(/paypal.svg);"></div></div><div class="px-2 py-1 bg-white rounded-sm hover:cursor-pointer"><div class="w-40 h-16 bg-white bg-no-repeat bg-contain bg-center" style="background-image: url(/banktransfert.svg);"></div></div><div class="px-2 py-1 bg-white rounded-sm hover:cursor-pointer"><div class="w-40 h-16 bg-white bg-no-repeat bg-contain bg-center" style="background-image: url(/cryptocurrencies.svg);"></div></div></div><div>${$withdrawals.get().map((item, index) => renderTemplate`${renderComponent($$result2, "WithdrawalCard", WithdrawalCard, { "item": item, "key": index })}`)}</div>${renderComponent($$result2, "Sectionhead", $$Sectionhead, { "align": "center" }, { "desc": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result4) => renderTemplate`Logout of your account` })}`, "title": ($$result3) => renderTemplate`<h1 class="text-3xl text-white font-bold">${"Logout"}</h1>` })}<div class="flex items-center justify-center gap-2 mt-2 mb-5">${renderComponent($$result2, "LogoutButton", LogoutButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ui/LogoutButton", "client:component-export": "default" })}</div></div>` })}`;
}, "/Users/fullsnack/Documents/play/bun/ogm/src/pages/user/settings.astro", void 0);

const $$file = "/Users/fullsnack/Documents/play/bun/ogm/src/pages/user/settings.astro";
const $$url = "/user/settings";

export { $$Settings as default, $$file as file, $$url as url };
