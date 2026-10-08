import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { TestHubProjectPage } from "./pages/TestHubProjectPage";
import { TrackingToolProjectPage } from "./pages/TrackingToolProjectPage";
import { CountingLandProjectPage } from "./pages/CountingLandProjectPage";
import { CultiveProjectPage } from "./pages/CultiveProjectPage";
import { RemoteSettingsProjectPage } from "./pages/RemoteSettingsProjectPage";
import { GameDesignPage } from "./pages/GameDesignPage";
import { TinyRushProjectPage } from "./pages/TinyRushProjectPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: HomePage,
    },
    {
      path: "/projects",
      Component: ProjectsPage,
    },
    {
      path: "/projects/game-design",
      Component: GameDesignPage,
    },
    {
      path: "/projects/game-design/tiny-rush",
      Component: TinyRushProjectPage,
    },
    {
      path: "/projects/test-hub",
      Component: TestHubProjectPage,
    },
    {
      path: "/projects/remote-settings",
      Component: RemoteSettingsProjectPage,
    },
    {
      path: "/projects/tracking-tool",
      Component: TrackingToolProjectPage,
    },
    {
      path: "/projects/game-design/counting-land",
      Component: CountingLandProjectPage,
    },
    {
      // Old URL, kept so existing links still work.
      path: "/projects/counting-land",
      Component: CountingLandProjectPage,
    },
    {
      path: "/projects/cultive",
      Component: CultiveProjectPage,
    },
  ],
  {
    // Usa o mesmo base que o Vite ("/portfolio/")
    basename: import.meta.env.BASE_URL,
  },
);
