"use client";

import { useTheme } from "next-themes";
import Giscus from "@giscus/react";
import { usePathname } from "next/navigation";

const Comments: React.FC = () => {
  const theme = useTheme();
  const currentTheme = theme.theme ?? theme.systemTheme ?? "dark";
  const giscusTheme = `https://shakhzod.me/giscus/${currentTheme}.css`;
  const path = usePathname();

  return (
    <Giscus
      id="comments"
      repo="shakhzodkudratov/shakhzod.me"
      repoId="R_kgDOI5Bvew"
      category="General"
      categoryId="DIC_kwDOI5Bve84CT91m"
      mapping="specific"
      term={`https://shakhzod.me${path}`}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={giscusTheme}
      lang="en"
      loading="lazy"
    />
  );
};

export default Comments;
