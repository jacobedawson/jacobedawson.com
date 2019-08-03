import Layout from "components/Layout";
import ContentLink from "components/ContentLink";
import * as Posts from "lib/importPosts";
import Styled from "styled-components";
import { mediaQueries } from "style/mediaQueries";

const StyledUL = Styled.ul`
    list-style: none;
    @media ${mediaQueries.mobile} {
        padding: 0;
    }
`;

const Index = () => {
  const posts = Posts.getSome(3).map(post => ({
    title: post.title,
    published: post.publishDate,
    url: post.slug,
    id: post.id
  }));
  return (
    <Layout
      title="Jacob E. Dawson | Home"
      description="Jacob E. Dawson | Front-End Developer"
    >
      <section>
        <h1>Hey!</h1>
        <p>
          I&apos;m Jake, a Front-End Developer & JavaScript Ecosystem Explorer
        </p>
        <StyledUL>
          <li>
            <p>
              🌏 I&apos;m from Sydney, Australia and live in Berlin, Germany
            </p>
          </li>
          <li>
            <p>⌨ Currently: Front-End Dev @ 3T Software Labs</p>
          </li>
          <li>
            <p>📈 Formerly: Conversion Rate Optimizer @ Delivery Hero</p>
          </li>
          <li>
            <p>⚛️ 7 Years & Counting as a JS Dev</p>
          </li>
          <li>
            <p>🎸 I have a Bachelor of Music for some reason 🤷</p>
          </li>
        </StyledUL>
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
