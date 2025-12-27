"use client";

import { useTheme } from "next-themes";
import Giscus from "@giscus/react";

const Comments: React.FC = () => {
  const theme = useTheme();
  const currentTheme = theme.theme ?? theme.systemTheme ?? "dark";
  const giscusTheme = `https://shakhzod.me/giscus/${currentTheme}.css`;

  return (
    <Giscus
      id="comments"
      repo="shakhzodkudratov/shakhzod.me"
      repoId="R_kgDOI5Bvew"
      category="General"
      categoryId="DIC_kwDOI5Bve84CT91m"
      mapping="specific"
      term="welcome to my website"
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
