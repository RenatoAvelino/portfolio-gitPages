import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Renato Avelino",
  role: "XR & Game Developer",
  introduction: "Computer Engineer specialized in immersive interactive experiences and Game development.",
  description: "I develop immersive interactive experiences using Virtual Reality, WebAR, and game development technologies. My work focuses on combining software development, real-time interaction, and digital heritage through tools such as Unity and 8thWall.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/CV_Renato_Avelino.pdf`,
  links: {
    github: "https://github.com/RenatoAvelino",
    itchIO: "https://renatox99.itch.io/",
    linkedIn: "https://www.linkedin.com/in/renato-avelino/",
  }
};

export const games: Game[] = [
  {
    name: "Winds of Freedom",
    description: "WebAR experience developed for the Dragão do Mar Center of Art and Culture, exploring memory, resistance, and the abolitionist legacy of Ceará through interactive digital monuments and immersive storytelling.",
    genres: ["WebAR", "Interactive Experience", "Digital Heritage"],
    platforms: [Platform.Web],
    engine:  GameEngine.WebAR,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  },
  {
    name: "GAME_NAME",
    description: "GAME_DESCRIPTION",
    genres: ["GAME_GENRE", "GAME_GENRE..."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  }
];