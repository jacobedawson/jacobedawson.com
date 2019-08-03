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
      <section>
        <h6>Hey!</h6>
        <p>I'm Jake, a Front-End Developer & JavaScript Ecosystem Explorer</p>
        <ul style={{ listStyle: "none" }}>
          <li>
            <p>
              🌏 I'm from from Sydney, Australia and live in Berlin, Germany
            </p>
          </li>
          <li>
            <p>⌨ Currently: Front-End Dev @ 3T Software Labs</p>
          </li>
          <li>
            <p>📈 Formerly: Conversation Rate Optimizer @ Delivery Hero</p>
          </li>
          <li>
            <p>⚛️ 7 Years & Counting as a JS Dev</p>
          </li>
          <li>
            <p>🎸 I have a Bachelor of Music for some reason 🤷</p>
          </li>
        </ul>
      </section>
      <section
        style={{
          marginTop: "2rem"
        }}
      >
        <h6>Blog Posts</h6>
        {posts.map(post => (
          <ContentLink
            url={post.url}
            text={post.title}
            key={post.id}
          ></ContentLink>
        ))}
      </section>
    </Layout>
  );
};

export default Index;
