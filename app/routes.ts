import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/chat", "routes/chat.tsx"),
  route("/chat/:slug", "routes/chat.$slug.tsx"),
] satisfies RouteConfig;
