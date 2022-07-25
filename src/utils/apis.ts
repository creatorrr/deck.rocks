// utils/apis.ts

import fetch from "cross-fetch";

import { OWEN_ENDPOINT, QUOTES_ENDPOINT } from "../env";

export async function getOwenWow() {
  try {
    const response = await fetch(OWEN_ENDPOINT);
    const [wow] = await response.json();
    return wow;
  } catch (e) {
    console.error(e);

    return {
      video: {
        "1080p":
          "https://videos.ctfassets.net/bs8ntwkklfua/2u2njxy83Z6S7fjeS0RLZf/22d6a3e2270861e8ca942c2ecd22ea4c/Cars_Wow_3_1080p.mp4",
        "720p":
          "https://videos.ctfassets.net/bs8ntwkklfua/6itNyg0a0V6RvQKPDXto5U/7284bc576e1c82e81a8b89a56b8e77a8/Cars_Wow_3_720p.mp4",
        "480p":
          "https://videos.ctfassets.net/bs8ntwkklfua/yhuJmdR7SCjFEwApn3BlU/cb5b2a22c36f8bfca8857206548cacf9/Cars_Wow_3_480p.mp4",
        "360p":
          "https://videos.ctfassets.net/bs8ntwkklfua/3TbrVd96vZdAXRRGGN7W9E/c9ec4acd5e69eb1dc795e77ce5f09ec0/Cars_Wow_3_360p.mp4",
      },
    };
  }
}
