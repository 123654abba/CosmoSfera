import { defineConfig } from "astro/config";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "astronomy-portal";
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? "local";
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: isGitHubActions ? `https://${owner}.github.io` : "http://localhost:4321",
  base: isGitHubActions ? `/${repo}` : "/",
  output: "static"
});
