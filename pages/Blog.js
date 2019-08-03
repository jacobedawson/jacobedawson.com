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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        consectetur iste fugiat nobis repellendus impedit nesciunt sapiente,
        similique totam libero molestiae, qui quod incidunt illum sit cupiditate
        error, dolorum voluptatibus?
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
