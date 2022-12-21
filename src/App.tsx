import { Component, ErrorBoundary } from "solid-js";

import UsernameInput from "./components/username-input";
import Profile from "./components/profile";

const App: Component = () => {
  return (
    <div class="flex flex-col gap-2">
      <nav class="bg-blue-500 text-3xl p-2 font-bold text-white">
        Github profiles
      </nav>

      <main class="flex flex-col gap-2 p-2 max-w-[1200px] w-full mx-auto">
        <UsernameInput />

        <ErrorBoundary fallback={(err) => err}>
          <Profile />
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default App;
