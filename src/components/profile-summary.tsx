import { Component, createResource, Show } from "solid-js";
import { username } from "../store/main.store";
import { getUser } from "../api/github";

const ProfileSummary: Component = () => {
  const [profile] = createResource(username, getUser);

  return (
    <Show when={!profile.loading} fallback={"Loading..."} keyed>
      <div class="border p-2 rounded flex flex-row gap-4">
        <div class="flex flex-col justify-center">
          <img
            src={profile()!.avatar_url}
            alt=""
            class="w-20 h-20 md:w-24 md:h-24 rounded-full"
          />
        </div>

        <div class="flex flex-col gap">
          <div class="text-2xl font-bold">{profile()!.name}</div>
          <div class="text-md text-gray-600">{profile()!.bio}</div>
          <div class="text-sm">{profile()!.company}</div>
          <div class="text-sm">{profile()!.location}</div>
        </div>
      </div>
    </Show>
  );
};

export default ProfileSummary;
