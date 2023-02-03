import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';
import path from 'path';
import glob from 'glob';
import * as fs from 'fs';
import rehypeAttr from 'rehype-attr';
import Head from 'next/head';
import Link from 'next/link';
import CommentsComponent from '@/components/comments';
import CurrentlyListeningComponent from '@/components/currently-listening';

const rootDir = path.join(process.cwd(), 'content');
const allPagesWithPath = async () =>
  new Promise<string[]>((resolve) => {
    glob(rootDir + '/**/*.mdx', {}, (error, files) => {
      if (error) {
        resolve([]);
      } else {
        resolve(files.map((file) => file.slice(rootDir.length + 1)));
      }
    });
  });

const components = {
  Link,
  Comments: CommentsComponent,
  CurrentlyListening: CurrentlyListeningComponent,
};

export default function Page({
  mdxSource,
}: {
  mdxSource: MDXRemoteSerializeResult;
}) {
  const meta = mdxSource.frontmatter || {};

  return (
    <>
      <Head>
        <title>{meta.title ?? "shakhzod's website"}</title>
        <meta
          name="description"
          content={meta.description ?? "shakhzod's website"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <React.StrictMode>
        <article className="prose p-5">
          <MDXRemote {...mdxSource} components={components} />
        </article>
      </React.StrictMode>
    </>
  );
}

export async function getStaticProps({
  params,
}: {
  params: {
    page: string[];
  };
}) {
  const source = await new Promise<string>((resolve) => {
    try {
      const pagePath = params.page ? params.page.join('/') : 'index';
      const path = rootDir + '/' + pagePath + '.mdx';
      resolve(fs.readFileSync(path).toString());
    } catch {
      resolve('');
    }
  });

  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [rehypeAttr],
    },
  });
  return { props: { mdxSource } };
}

export const getStaticPaths = async () => {
  const paths = (await allPagesWithPath())
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((path) => ({
      params: {
        page: path == 'index' ? [] : path.split('/'),
      },
    }));

  return {
    paths,
    fallback: false,
  };
};
