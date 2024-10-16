import React, { useEffect, useRef } from "react";

export default function CommentsComponent() {
  const wrapper = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (document.getElementById("comments")) return;
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "shakhzodkudratov/shakhzod.me");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "gruvbox-dark");
    script.crossOrigin = "anonymous";
    script.async = true;
    script.id = "comments";
    wrapper.current?.appendChild(script);
  }, []);
  return (
    <>
      <div ref={wrapper} />
    </>
  );
}
