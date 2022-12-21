import { Component } from "solid-js";
import { setUsername } from "../store/main.store";

const UsernameInput: Component = () => {
  return (
    <div class="w-full border rounded p-2">
      <label class="block text-sm font-medium" for="github-username-input">
        Github Username
      </label>
      <input
        class="w-full border rounded border-gray-600 py-1 px-2"
        id="github-username-input"
        onChange={(ev) =>
          setUsername(ev.currentTarget.value?.toLowerCase() ?? "")
        }
      />
    </div>
  );
};

export default UsernameInput;
