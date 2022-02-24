import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { join } from 'path';
import fs from 'fs';
import { cwd, env } from 'process';
import { renderMarkdownFromFile } from '@chakrakan-dev/markdown';
import { MDXRemote } from 'next-mdx-remote';
import { mdxElements } from '@chakrakan-dev/shared/mdx-elements';
import './index.module.css';

interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

export function Article({ frontMatter, html }) {
  return (
    <div className="m-6">
      <article className="prose prose-lg">
        <h1>{frontMatter.title}</h1>
        <div>by {frontMatter.author.name}</div>
      </article>
      <hr />
      <MDXRemote {...html} components={mdxElements} />
    </div>
  );
}

export const getStaticProps = async ({ params }: { params: ArticleProps }) => {
  const POSTS_PATH = join(cwd(), env.ARTICLES_FOLDER);
  const mdxSource = await renderMarkdownFromFile(params.slug, POSTS_PATH);
  return {
    props: {
      frontMatter: mdxSource.frontmatter,
      html: mdxSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  const POSTS_PATH = join(process.cwd(), env.ARTICLES_FOLDER);
  const paths = fs
    .readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Article;
