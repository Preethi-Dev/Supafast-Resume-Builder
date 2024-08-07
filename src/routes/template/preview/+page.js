import { redirect } from "@sveltejs/kit";
import { get } from "svelte/store";
import {
  userInfo,
  completeUserInfo,
  repos,
  currentRepos,
} from "../../../stores/store";

export async function load({ fetch }) {
  const user = get(userInfo);

  if (!user) {
    throw redirect(302, "/"); // Redirect to home if userInfo is empty
  }
}
