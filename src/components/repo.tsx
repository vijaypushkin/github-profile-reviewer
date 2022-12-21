import { Component, createMemo, createResource, For, Show } from "solid-js";
import { username } from "../store/main.store";
import { getUserRepoLanguages, getUserRepos } from "../api/github";
import { IUserRepo } from "../types/api";

const Repo: Component = () => {
  const [repos] = createResource(username, getUserRepos);

  return (
    <Show when={!repos.loading} keyed fallback={"Loading All Public Repos..."}>
      <div class="text-2xl font-bold mt-2">Public Repos</div>

      <For each={repos()}>{(repo) => <EachRepo repo={repo} />}</For>
    </Show>
  );
};

const EachRepo: Component<{ repo: IUserRepo }> = (props) => {
  return (
    <div class="flex flex-col md:flex-row justify-between border p-2 rounded">
      <div class="flex flex-col gap-2 border-b border-gray-100 md:border-b-0 pb-2 mb-2">
        <div class="text-xl">{props.repo.name}</div>

        <div class="text-sm text-gray-600">{props.repo.description}</div>

        <div>
          Stars: {props.repo.stargazers_count} | Forks: {props.repo.forks_count}
        </div>
      </div>

      <RepoLanguages repo={props.repo} />
    </div>
  );
};

const RepoLanguages: Component<{ repo: IUserRepo }> = (props) => {
  const [languages] = createResource(
    props.repo.languages_url,
    getUserRepoLanguages
  );

  const totalLines = createMemo(() => {
    return Object.values(languages() ?? {}).reduce((a, b) => a + b, 0);
  });

  const getPercentage = (lines: number) => {
    return ((lines / totalLines()) * 100).toFixed(2);
  };

  return (
    <Show when={!languages.loading} keyed fallback={""}>
      <div>
        <div>Languages</div>

        <For each={Object.entries(languages() ?? {})}>
          {(lang) => (
            <div class="text-sm text-gray-600 flex justify-between gap-4">
              <div>{lang[0]}:</div> <div>{getPercentage(lang[1])}%</div>
            </div>
          )}
        </For>
      </div>
    </Show>
  );
};

export default Repo;
