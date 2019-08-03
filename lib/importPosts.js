function importAll(r) {
  return r.keys().map(r);
}

const metaArray = importAll(require.context("../pages/posts", false, /\.mdx$/));

export function getSome(num) {
  return metaArray
    .map(({ meta }) => meta)
    .sort((a, b) => new Date(b.published) - new Date(a.published))
    .slice(0, num);
}

export function getAll() {
  return metaArray
    .map(({ meta }) => meta)
    .map(meta => {
      return meta;
    })
    .sort((a, b) => new Date(b.published) - new Date(a.published));
}
