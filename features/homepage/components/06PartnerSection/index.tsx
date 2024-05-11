import { css, keyframes } from "@emotion/css";
import { Typography } from "@mui/material";
import { Fragment } from "react";
import { PARTNER_LOGO } from "./PartnerConst";

function PartnerSection() {
  return (
    <div className={styles.sectionPartner}>
      <div className={styles.headPartner}>
        <Typography variant={"h4"}>{`Partner`}</Typography>
      </div>
      <div className={styles.partnerWrapper}>
        {PARTNER_LOGO.map((val, idx) => {
          return (
            <div key={idx} className={styles.photosWrap}>
              <img className={styles.photos} alt={val.alt} src={val.src} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PartnerSection;

const logoloop = keyframes({
  ["from"]: {
    transform: `translateX(0)`,
  },
  ["to"]: {
    transform: `translateX(100%)`,
  },
});
const styles = {
  sectionPartner: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  headPartner: css({
    display: "flex",
  }),
  partnerWrapper: css({
    display: "flex",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-around",
    overflow: "hidden",
    overflowX: "auto",
    width: `85%`,
    // animation: `${logoloop} 5s linear infinite`,
  }),
  photosWrap: css({
    width: 100,
  }),
  photos: css({
    width: "100%",
    objectFit: "contain",
  }),
};
