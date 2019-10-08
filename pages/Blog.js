import Layout from "components/Layout";
import ContentLink from "components/ContentLink";
import * as Posts from "lib/importPosts";

const Blog = () => {
  const posts = Posts.getAll().map(post => ({
    title: post.title,
    published: post.published,
    url: post.slug,
    id: post.id
  }));
  return (
    <Layout
      title="Jacob E. Dawson | Blog"
      description="Jacob E. Dawson | Front-End Developer"
    >
      <h4>Blog</h4>
      <p>
        In this blog I hope to add code discoveries, TILs, things I've learned
        while learning along with random tidbits I'll publish every now and
        then. Since the blog is basically a collection of mdx posts stored in
        Github you can expect that posts will usually be in a permanent WIP
        state - I'll update them if & when I have the time 👌
      </p>
      <hr style={{ margin: "2rem 0" }} />
      {posts.map(post => (
        <ContentLink
          url={post.url}
          text={post.title}
          key={post.id}
        ></ContentLink>
      ))}
    </Layout>
  );
};

export default Blog;
