import Layout from "../components/Layout";
import Posts from "./posts/index";
import Link from "next/link";

const Index = () => {
  const posts = Posts.map(({ meta }) => ({
    title: meta.title,
    published: meta.publishDate,
    url: meta.slug,
    id: meta.id
  }));
  console.log(posts);
  return (
    <Layout>
      {posts.map(post => (
        <Link href={post.url} key={post.id}>
          <a>{post.title}</a>
        </Link>
      ))}
    </Layout>
  );
};

export default Index;
