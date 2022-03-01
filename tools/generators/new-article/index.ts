import {
  Tree,
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
} from '@nrwl/devkit';

interface NewArticleSchemaOptions {
  title: string;
  author: string;
  excerpt?: string;
}

export default async function (host: Tree, schema: NewArticleSchemaOptions) {
  generateFiles(
    host,
    joinPathFragments(__dirname, './files'),
    './_articles',
    // variables substituted in the template
    {
      title: schema.title,
      author: schema.author,
      excerpt: schema.excerpt || '',
      normalizedTitle: names(schema.title).fileName,
      creationDate: new Date().toISOString(),
    }
  );

  await formatFiles(host);
}
