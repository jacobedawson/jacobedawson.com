function importAll(r) {
  return r.keys().map(r);
}

const Posts = importAll(require.context("../posts", false, /\.mdx$/));

export default Posts;
