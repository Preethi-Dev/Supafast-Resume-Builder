// src/routes/template/edit/+page.js
import { redirect } from "@sveltejs/kit";
import { get } from "svelte/store";
import { userInfo } from "../../../stores/store";

export async function load() {
  const user = get(userInfo);

  if (!user) {
    throw redirect(302, "/"); // Redirect to home if userInfo is empty
  }

  // If you need to return data, do it here
  return {};
}
