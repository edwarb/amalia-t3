import { css } from "@emotion/css";
import {
  Favorite,
  Timer,
  Money,
  Public,
  Verified,
  Healing,
} from "@mui/icons-material";
import Card from "../../layout/Card";

function LandingSection() {
  return (
    <div>
      <div className={styles.infoCard} style={{ marginTop: 32 }}>
        <Card
          avatarClass={styles.avatar1}
          icon={<Favorite style={{ fill: "#f03958" }} />}
          title={"Pelayanan Ramah"}
          content={
            "Kami memberikan perhatian penuh terhadap keamanan dan kenyamanan pasien"
          }
        />

        <Card
          avatarClass={styles.avatar2}
          icon={<Timer style={{ fill: "#fbb895" }} />}
          title={"Tenaga Profesional"}
          content={
            "Tenaga ahli kami sangat bertanggung jawab dan siap membantu setiap saat"
          }
        />

        <Card
          avatarClass={styles.avatar3}
          icon={<Money style={{ fill: "#4fd397" }} />}
          title={"Biaya Terjangkau"}
          content={
            "Kini Anda tidak perlu lagi khawatir tabungan akan habis, pastikan keluarga anda tetap sehat"
          }
        />
      </div>
      <div className={styles.infoCard} style={{ marginTop: 32 }}>
        <Card
          avatarClass={styles.avatar4}
          icon={<Public style={{ fill: "#3d85c6" }} />}
          title={"Bertaraf International"}
          content={
            "Amalia Medical Center sudah sejak lama dikenal dan dipercaya oleh kedutaaan berbagai negara dan juga perusahaan multinasional"
          }
        />

        <Card
          avatarClass={styles.avatar5}
          icon={<Verified style={{ fill: "#a64d79" }} />}
          title={"Bersertifikasi"}
          content={
            "ISO sistem manajemen mutu pelayanan kesehatan. ISO sistem manajemen lingkungan / limbah. ISO sistem managemen peralatan kesehatan"
          }
        />

        <Card
          avatarClass={styles.avatar6}
          icon={<Healing style={{ fill: "#ffc371" }} />}
          title={"Melayani Vaksinasi ICV"}
          content={
            "Buku kuning resmi KKP tersedia bagi anda yang ingin vaksinasi/imunisasi untuk kebutuhan perjalanan internasional"
          }
        />
      </div>
    </div>
  );
}

export default LandingSection;

const styles = {
  cardHead: css({
    display: "flex",
    paddingBottom: `0 !important`,
  }),
  avatar: css({
    backgroundColor: "blue",
  }),
  infoCard: css({
    display: "grid",
    gridGap: 44,
    gridTemplateColumns: `1fr 1fr 1fr`,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: `0 60px`,
    ["@media screen and (max-width: 770px)"]: {
      display: "flex",
      flexDirection: "column",
    },
  }),
  rounded: css({
    borderRadius: 16,
  }),

  avatar1: css({
    backgroundColor: `rgb(247, 213, 217) !important`,
    background: `radial-gradient(
    circle,
    rgba(247, 213, 217, 1) 0%,
    rgba(251, 223, 226, 1) 19%,
    rgba(255, 226, 229, 1) 61%,
    rgba(251, 220, 223, 1) 77%,
    rgba(255, 211, 216, 1) 91%
  )`,
  }),
  avatar2: css({
    backgroundColor: `rgb(255, 231, 221) !important`,
    background: `radial-gradient(
        circle,
        rgba(255, 231, 221, 1) 0%,
        rgba(247, 234, 229, 1) 19%,
        rgba(246, 225, 217, 1) 61%,
        rgba(254, 239, 233, 1) 77%,
        rgba(255, 191, 166, 1) 91%
    )`,
  }),

  avatar3: css({
    backgroundColor: `rgb(203, 249, 233) !important`,
    background: `radial-gradient(
        circle,
        rgba(203, 249, 233, 1) 0%,
        rgba(212, 237, 229, 1) 19%,
        rgba(215, 232, 226, 1) 61%,
        rgba(218, 246, 237, 1) 77%,
        rgba(194, 255, 235, 1) 91%
    )`,
  }),

  avatar4: css({
    backgroundColor: `rgb(29, 125, 180) !important`,
    background: `radial-gradient(
        circle,
        rgb(203, 242, 249) 0%,
        rgb(212, 234, 237) 19%,
        rgb(215, 231, 232) 61%,
        rgb(218, 245, 246) 77%,
        rgb(194, 246, 255) 91%
    )`,
  }),

  avatar5: css({
    backgroundColor: `rgb(230, 203, 249) !important`,
    background: `radial-gradient(
        circle,
        rgb(238, 203, 249) 0%,
        rgb(237, 212, 237) 19%,
        rgb(224, 215, 232) 61%,
        rgb(238, 218, 246) 77%,
        rgb(228, 194, 255) 91%
    )`,
  }),

  avatar6: css({
    backgroundColor: `rgb(249, 248, 203) !important`,
    background: `radial-gradient(
        circle,
        rgb(249, 246, 203) 0%,
        rgb(237, 236, 212) 19%,
        rgb(232, 232, 215) 61%,
        rgb(246, 246, 218) 77%,
        rgb(254, 255, 194) 91%
    )`,
  }),
};
