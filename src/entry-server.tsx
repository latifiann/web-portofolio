import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { projects } from "@content-manifest";
import App from "./App";
import { listStaticRoutes } from "./lib/static-routes";
import type { StaticRoute } from "./lib/static-routes";

export function listRoutes(): StaticRoute[] {
  return listStaticRoutes(projects);
}

export function render(pathname: string): string {
  return renderToString(
    <StaticRouter location={pathname}>
      <App />
    </StaticRouter>,
  );
}
