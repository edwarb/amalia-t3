import { css } from "@emotion/css";

function FacebookPage() {
  return (
    <div className={styles.wrapper}>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=http%3A%2F%2Fwww.facebook.com%2Famaliamedicalcenter&tabs=timeline&width=380&height=500 &adapt_container_width=true&hide_cover=false&show_facepile=false&appId=157253668024471"
        width="380"
        height="500"
        style={{
          border: "none",
          overflow: "hidden",
        }}
        // scrolling="no"
        // frameborder="0"
        // allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default FacebookPage;

const styles = {
  wrapper: css({
    textAlign: "center",
    // marginTop: "5%",
    // marginBottom: "6%",
  }),
};
