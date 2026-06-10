export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${base}${normalizedPath}`;
}

export function assetPath(path: string) {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) {
    return path;
  }

  return withBase(path);
}
