import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId: string) => {
  const resp = await notion.databases.query({
    database_id: databaseId,
  });
  return resp.results;
};

export const getPage = async (pageId: string) => {
  const resp = await notion.pages.retrieve({ page_id: pageId });
  return resp;
};

export const getBlocks = async (blockId: string) => {
  const blocks = [];
  let cursor;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    });
    blocks.push(...results);

    if (!next_cursor) {
      break;
    }

    cursor = next_cursor;
  }
  return blocks;
};
