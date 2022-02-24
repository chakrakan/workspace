import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';

export interface FrontMatter {
  [prop: string]: string;
}

export interface MarkdownRenderingResult {
  frontMatter: FrontMatter;
  html: MDXRemoteSerializeResult;
}
