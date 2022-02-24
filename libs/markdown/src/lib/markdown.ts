import { readFileSync } from 'fs';
import { join } from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export async function renderMarkdownFromFile(
  fileName: string,
  postsPath: string
): Promise<MDXRemoteSerializeResult<Record<string, unknown>>> {
  const fileContent = readFileSync(join(postsPath, `${fileName}.mdx`));
  const mdxSource = await serialize(fileContent.toString(), {
    parseFrontmatter: true,
  });
  return mdxSource;
}
