import { IRepoLanguages, IUser, IUserRepo } from "../types/api";

export const getUser = async (username: string): Promise<IUser> => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return response.json();
};

export const getUserRepos = async (username: string): Promise<IUserRepo[]> => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  return response.json();
};

export const getUserRepoLanguages = async (
  url: string
): Promise<IRepoLanguages> => {
  const response = await fetch(url);
  return response.json();
};
