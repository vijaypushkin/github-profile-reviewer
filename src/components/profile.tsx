import { Component, Show } from "solid-js";
import ProfileSummary from "./profile-summary";
import Repo from "./repo";
import { username } from "../store/main.store";

const Profile: Component = () => {
  return (
    <Show when={username()} fallback={"Type a username"} keyed>
      <ProfileSummary />

      <Repo />
    </Show>
  );
};

export default Profile;
