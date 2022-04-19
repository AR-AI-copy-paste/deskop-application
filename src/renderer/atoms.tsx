import { atom } from "recoil";

export const pageState = atom({
  key: "pageState",
  default: "Explore",
});

export const logState = atom({
  key: "logState",
  default: false,
});

export const createAccountState = atom({
  key: "createAccountState",
  default: false,
});

export const userNameState = atom({
  key: "userNameState",
  default: "KhalilSelyan",
});

export const emailState = atom({
  key: "emailState",
  default: "khalilselyan@gmail.com",
});

export const fullSizeViewState = atom({
  key: "fullSizeViewState",
  default: false,
});

export const fullSizeViewLinkState = atom({
  key: "fullSizeViewLinkState",
  default: "",
});

export const settingsTypeState = atom({
  key: "settingsTypeState",
  default: "App Settings",
});

export const colorSchemeState = atom({
  key: "colorSchemeState",
  default: "light",
});

export const resolutionState = atom({
  key: "resolutionState",
  default: { width: 1300, height: 700 },
});
