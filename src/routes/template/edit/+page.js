import { redirect } from "@sveltejs/kit";
import { get } from "svelte/store";
import { userInfo, completeUserInfo } from "../../../stores/store";

export async function load() {
  const user = get(userInfo);

  if (!user) {
    throw redirect(302, "/"); // Redirect to home if userInfo is empty
  } else {
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
        location: user.location,
      },
    }));
  }

  // If you need to return data, do it here
  return {};
}
