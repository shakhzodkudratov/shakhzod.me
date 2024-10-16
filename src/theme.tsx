import CommentsComponent from "@/components/comments";
import CurrentlyListeningComponent from "@/components/currently-listening";
import StreamScheduleComponent from "@/components/stream-schedule";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { NextraThemeLayoutProps } from "nextra";
import { MDXProvider } from "nextra/mdx";

export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
  const { title, frontMatter } = pageOpts;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="og:image" content={frontMatter.image} />
      </Head>
      <MDXProvider
        components={{
          wrapper: Wrapper,
          Comments: dynamic(() => import("@/components/comments"), {
            ssr: true,
          }),
          CurrentlyListening: dynamic(
            () => import("@/components/currently-listening"),
            { ssr: true },
          ),
          StreamSchedule: StreamScheduleComponent,
        }}
      >
        {children}
      </MDXProvider>
    </>
  );
}

const Wrapper: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <main className="prose">
      <div className="flex flex-col px-5">
        <Link href="/">
          <Image
            src="/long-website-logo.svg"
            height={111}
            width={624}
            alt="shakhzod's lab"
          />
        </Link>
      </div>
      <article className="p-5">{children}</article>
    </main>
  );
};
