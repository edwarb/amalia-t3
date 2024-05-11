import { css } from "@emotion/css";
import Youtube from "react-youtube";

function YoutubePlayer() {
  return (
    <div className={styles.youtube}>
      <Youtube
        videoId="rrkotCv_UEM"
        iframeClassName={styles.player}
        opts={{ playerVars: { controls: 0 } }}
      />
    </div>
  );
}

export default YoutubePlayer;

const styles = {
  youtube: css({
    display: "flex",
    flexShrink: 0,
    width: "100vw",
  }),
  player: css({
    width: "100vw",
    height: "360px",
  }),
};
