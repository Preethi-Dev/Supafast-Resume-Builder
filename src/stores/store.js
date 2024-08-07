import { writable } from "svelte/store";

export const userId = writable(null);

export const userInfo = writable(null);

export const currentTemplate = writable(null);

export const completeUserInfo = writable({});

export const repos = writable([]);

export const currentRepos = writable([]);

export const isEditProjects = writable(false);

export const reposChoosedTemporary = writable([]);
