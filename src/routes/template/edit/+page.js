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
  } else {
    //fetch repositories
    if (Object.keys(get(completeUserInfo)).length === 0) {
      const response = await fetch(user.repos_url);
      const data = await response.json();
      repos.set(data);

      currentRepos.set(data.filter((repo, index) => index < 3));

      completeUserInfo.update((value) => ({
        ...value,
        name: user.name || user.login,
        designation: user.designation || "Your Designation",
        bio:
          user.bio ||
          "Tell about yourself like (eg: Passionate about creating complex layouts and web components. Enjoy the challenge of continuously refining and improving designs. Technologies I commonly use: HTML, CSS3, JavaScript (async/await), React, Next.js, Redux and even more)",
        avatar: user.avatar_url,
        contacts: {
          phone: "+91-xxxxxxxxxx",
          email: user.email || "name@domain.com",
          links: user.html_url,
          location: user.location || "your location",
        },
      }));
    }
  }

  // If you need to return data, do it here
  return {};
}
