import { type HTMLAttributes } from "react";

interface SpotifyProps extends HTMLAttributes<HTMLIFrameElement> {
  [key: string]: any;

  link: string;
  wide?: boolean;
  width?: number | string;
  height?: number | string;
  frameBorder?: number | string;
  allow?: string;
}

const Spotify = ({
  link,
  style = {},
  wide = false,
  width = wide ? "100%" : 300,
  height = wide ? 80 : 380,
  frameBorder = 0,
  allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
  ...props
}: SpotifyProps) => {
  const url = new URL(link);
  // https://open.spotify.com/track/1KFxcj3MZrpBGiGA8ZWriv?si=f024c3aa52294aa1
  // Remove any additional path segments
  url.pathname = url.pathname.replace(/\/intl-\w+\//, "/");
  return (
    <iframe
      title="Spotify Web Player"
      src={`https://open.spotify.com/embed${url.pathname}`}
      width={width}
      height={height}
      frameBorder={frameBorder}
      allow={allow}
      style={{
        borderRadius: 16,
        ...style,
        margin: "16px 0",
      }}
      {...props}
    />
  );
};

export default Spotify;
