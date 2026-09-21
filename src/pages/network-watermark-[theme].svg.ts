import type { APIRoute, GetStaticPaths } from "astro";
import { WATERMARK_THEMES, watermarkSvg, type WatermarkTheme } from "../lib/network-watermark";

export const getStaticPaths: GetStaticPaths = () =>
  Object.keys(WATERMARK_THEMES).map((theme) => ({ params: { theme } }));

export const GET: APIRoute = ({ params }) => {
  const stroke = WATERMARK_THEMES[params.theme as WatermarkTheme];
  if (!stroke) return new Response("Not found", { status: 404 });
  return new Response(watermarkSvg(stroke), {
    headers: { "Content-Type": "image/svg+xml; charset=utf-8" },
  });
};
