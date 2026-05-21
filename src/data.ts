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
      { source: LinkImageSource.LED, url: "https://www.led-rx.com/windsoffreedom" },
    ],
    media: [
      { source: "/images/games/winds-of-freedom/img_1.avif", type: MediaType.Image },
      { source: "/images/games/winds-of-freedom/img_2.avif", type: MediaType.Image },
      { source: "/images/games/winds-of-freedom/img_3.avif", type: MediaType.Image },
    ],
  },
  {
    name: "Lights of Time",
    description: "WebAR public-space intervention created for the Church of São Pedro dos Pescadores, exploring memory, time, and urban transformation through interactive storytelling and augmented reality.",
    genres: ["WebAR", "Interactive Experience", "Digital Heritage"],
    platforms: [Platform.Web],
    engine:  GameEngine.WebAR,
    links: [
      { source: LinkImageSource.LED, url: "https://www.led-rx.com/lightsoftime" },
    ],
    media: [
      { source: "/images/games/lights-of-time/img_1.avif", type: MediaType.Image },
      { source: "/images/games/lights-of-time/img_2.avif", type: MediaType.Image },
      { source: "/images/games/lights-of-time/img_3.avif", type: MediaType.Image },
      { source: "/images/games/lights-of-time/img_4.avif", type: MediaType.Image },
    ],
  },
  {
    name: "Phantom Architecture – Palácio Plácido",
    description: "Mixed Reality experience that reconstructs the lost Palácio Plácido through immersive 3D environments and historical storytelling, allowing visitors to explore different temporal layers of Praça Luíza Távora.",
    genres: ["VR", "Mixed Reality", "Digital Heritage"],
    platforms: [Platform.Windows],
    engine:  GameEngine.Unity,
    links: [
      { source: LinkImageSource.LED, url: "https://www.led-rx.com/pal%C3%A1ciopl%C3%A1cido" },
    ],
    media: [
      { source: "/images/games/PhantomArchitecture/img_1.avif", type: MediaType.Image },
      { source: "/images/games/PhantomArchitecture/img_2.avif", type: MediaType.Image },
      { source: "/images/games/PhantomArchitecture/img_3.avif", type: MediaType.Image },
    ],
  },
  {
    name: "Call of the Racket",
    description: "Action game where players explore ancient dungeons alongside a mysterious magical racket, battling enemies and uncovering the secrets of the lost Makalanian civilization.",
    genres: ["Action", "Dungeon Crawler", "Adventure"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://tgdstudio.itch.io/call-of-the-racket" },
    ],
    media: [
      { source: "/images/games/call-of-the-racket/img_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/watch?v=XLkLFGK3qx8", type: MediaType.YouTube },
      { source: "/images/games/call-of-the-racket/img_2.png", type: MediaType.Image },
      { source: "/images/games/call-of-the-racket/img_3.png", type: MediaType.Image },
    ],
  },
  {
    name: "Super Gattai",
    description: "Mobile action game focused on defending a city from weekly monster attacks using customizable giant robots called Mekagears, combining strategic builds with fast-paced combat.",
    genres: ["Action", "Mecha", "Roguelike"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://negative-one.itch.io/super-gattai" },
    ],
    media: [
      { source: "/images/games/super-gattai/img_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/watch?v=qw2i1EQCnTQ", type: MediaType.YouTube },
      { source: "/images/games/super-gattai/img_2.png", type: MediaType.Image },
      { source: "/images/games/super-gattai/img_3.png", type: MediaType.Image },
    ],
  }
];