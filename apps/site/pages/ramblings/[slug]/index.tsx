import {
  Client,
  APIErrorCode,
  LogLevel,
  ClientErrorCode,
  isNotionClientError,
} from '@notionhq/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import './index.module.css';

/* eslint-disable-next-line */
export interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

export function Article(props: ArticleProps) {
  return (
    <div>
      <h1>Visitng, {props.slug}</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
}: {
  params: ArticleProps;
}) => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
    logLevel: LogLevel.DEBUG,
  });

  try {
    const data = await notion.blocks.children.list({
      block_id: process.env.PAGE_ID,
    });
    console.log(data);
  } catch (err: unknown) {
    if (isNotionClientError(err)) {
      switch (err.code) {
        case ClientErrorCode.RequestTimeout:
          console.error('Notion Request Timeout');
          break;
        case APIErrorCode.ObjectNotFound:
          console.error('Notion Object not found', err.message);
          break;
        case APIErrorCode.Unauthorized:
          console.error('Unauthorized attempt to access to Notion');
          break;
        default:
          console.error(err);
      }
    }
  }

  return {
    props: {
      slug: params.slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  return {
    paths: [
      {
        params: {
          slug: 'page1',
        },
      },
      {
        params: {
          slug: 'page2',
        },
      },
    ],
    fallback: false,
  };
};

export default Article;
