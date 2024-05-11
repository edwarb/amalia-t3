import { css } from "@emotion/css";
import { Typography } from "@mui/material";
import Image from "next/image";
import YoutubePlayer from "./YoutubePlayer";

function IntroSection() {
  return (
    <section>
      <YoutubePlayer />

      <div className={styles.sectionIntro}>
        <div className={styles.picBig}>
          <Image
            alt={"dokter bidan"}
            width={600}
            height={400}
            src="/img/dokterbidan.png"
            style={{
              objectFit: "contain",
              paddingRight: 16,
            }}
          />
        </div>

        <div className={styles.rightText}>
          <Typography variant={"h4"}>
            {`Selamat Datang di Amalia Medical Center`}
          </Typography>
          <Typography variant={"body1"}>
            {`Amalia Medical Center (AMEC) adalah pusat medical check up & vaksinasi internasional yang berlokasi di Jakarta yang dibangun pada tahun 2000. Kami menyediakan pelayanan kesehatan yang kompetititf untuk customer dengan praktek medis yang berlaku, bersyarat ilmiah dan berstandar internasional. Citra positif dan pengakuandari berbagai institusi di dalam negeri maupun luarnegeri telah kami terima dan berhasil bekerjasama dengan baik.`}
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;

const styles = {
  sectionIntro: css({
    display: `flex`,
    alignItems: "center",
    margin: 30,
    padding: `0 75px`,
    ["@media screen and (max-width: 770px)"]: {
      padding: 0,
      position: "relative",
      display: "flex",
      flexDirection: "column",
    },
  }),
  picBig: css({
    flex: 1,
  }),
  rightText: css({
    display: "flex",
    flexDirection: "column",
    gap: 24,
    flex: 1,
  }),
};
