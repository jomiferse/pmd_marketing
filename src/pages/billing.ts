import type { APIRoute } from "astro";
import { APP_URL } from "../lib/site";

export const GET: APIRoute = () =>
  new Response(null, {
    status: 302,
    headers: {
      Location: `${APP_URL}/app/billing`
    }
  });
