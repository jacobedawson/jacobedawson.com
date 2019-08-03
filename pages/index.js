import Layout from "components/Layout";
import ContentLink from "components/ContentLink";
import Posts from "./posts/index";

const Index = () => {
  const posts = Posts.map(({ meta }) => ({
    title: meta.title,
    published: meta.publishDate,
    url: meta.slug,
    id: meta.id
  }));
  return (
    <Layout>
      <h6>Blog Posts</h6>
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

export default Index;
