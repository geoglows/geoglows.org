import type { APIRoute, GetStaticPaths } from "astro";
import { MAP_THEMES, worldBaseSvg, type MapTheme } from "../lib/world-map";

export const getStaticPaths: GetStaticPaths = () =>
  Object.keys(MAP_THEMES).map((theme) => ({ params: { theme } }));

export const GET: APIRoute = ({ params }) => {
  const theme = params.theme as MapTheme;
  if (!MAP_THEMES[theme]) return new Response("Not found", { status: 404 });
  return new Response(worldBaseSvg(theme), {
    headers: { "Content-Type": "image/svg+xml; charset=utf-8" },
  });
};
