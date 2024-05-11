import { css } from "@emotion/css";
import { Grid, Typography } from "@mui/material";
import { BIG_MEDIA } from "features/common/constants/media";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import CardContent from "./CardContent";
import { CONTENT_FACILITY } from "./ConstContent";

import chunk from "lodash/chunk";

function IntroFacility() {
  const [showList, setList] = useState(3);

  useEffect(() => {
    if (window.innerWidth <= BIG_MEDIA) {
      setList(1);
    }
  }, []);

  const chunkedList = chunk(CONTENT_FACILITY, 3);

  return (
    <div style={{ marginTop: 50 }}>
      <section className={styles.headFacility}>
        <Typography variant={"h4"}>{`Pelayanan Klinik`}</Typography>
        <Typography variant={"body1"} style={{ marginTop: "24px" }}>
          {`Kami menyediakan berbagai macam jenis pelayanan medis. Pilih sesuai kebutuhan Anda`}
        </Typography>
      </section>
      <Grid className={styles.cardwraper}>
        <Carousel
          autoPlay
          indicators
          cycleNavigation
          navButtonsAlwaysVisible
          duration={500}
          interval={5000}
          animation={"slide"}
        >
          {chunkedList.map((listArr, idx) => {
            return (
              <div key={idx} className={styles.gridCard}>
                {listArr.map((val) => {
                  return (
                    <CardContent
                      content={val.content}
                      href={val.href}
                      imageSrc={val.imgSrc}
                      title={val.title}
                      key={val.title}
                    />
                  );
                })}
              </div>
            );
          })}
        </Carousel>
      </Grid>
    </div>
  );
}

export default IntroFacility;

const styles = {
  headFacility: css({
    textAlign: "center",
  }),
  gridCard: css({
    display: "grid",
    gap: 8,
    gridTemplateColumns: `1fr 1fr 1fr`,
  }),
  cardwraper: css({
    display: "block",
    maxWidth: "85%",
    marginTop: 38,
    marginBottom: 38,
    marginLeft: "auto",
    marginRight: "auto",
  }),

  card: css({
    alignItems: "center",
  }),

  media: css({
    objectFit: "cover",
    width: "100%",
    height: 180,
  }),
};
