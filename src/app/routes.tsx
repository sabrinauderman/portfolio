import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { CtrlZProjectPage } from "./pages/CtrlZProjectPage";
import { TrackingToolProjectPage } from "./pages/TrackingToolProjectPage";
import { CountingLandProjectPage } from "./pages/CountingLandProjectPage";
import { CultiveProjectPage } from "./pages/CultiveProjectPage";

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
      path: "/projects/ctrl-z",
      Component: CtrlZProjectPage,
    },
    {
      path: "/projects/tracking-tool",
      Component: TrackingToolProjectPage,
    },
    {
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
