import { atom } from "recoil";

export const currentTrackState = atom({
  key: "currentTrackIdState", // unique ID (with respect to other atoms/selections)
  default: null, // default value (aka initial value)
});

export const isPlayingState = atom({
  key: "isPlayingState",
  default: false,
})