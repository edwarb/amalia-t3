import { css } from "@emotion/css";
import { Typography } from "@mui/material";
import { chunk } from "lodash";
import Carousel from "react-material-ui-carousel";
import CardTestimoni from "./CardTestimoni";
import { TESTIMONI_ARRAY } from "./TestimoniConst";

function TestimoniSection() {
  const chunkedList = chunk(TESTIMONI_ARRAY, 2);
  return (
    <div className={styles.sectionTestimoni}>
      <div className={styles.headTestimoni}>
        <Typography variant={"h4"}>{`Testimonial`}</Typography>
        <Typography variant={"body1"} style={{ marginTop: "24px" }}>
          {`Kepuasan pasien adalah kepuasan kami. Berikut beberapa testimoni dari pasien-pasien kami`}
        </Typography>
      </div>
      <div className={styles.testimoniWrapper}>
        <Carousel
          autoPlay
          indicators
          cycleNavigation
          duration={500}
          interval={6000}
          animation={"slide"}
        >
          {chunkedList.map((listArr, idx) => {
            return (
              <div key={idx} className={styles.grid2}>
                {listArr.map((val) => {
                  return (
                    <CardTestimoni
                      key={val.name}
                      image={val.image}
                      name={val.name}
                      text={val.text}
                    />
                  );
                })}
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default TestimoniSection;

const styles = {
  sectionTestimoni: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 30,
  }),
  headTestimoni: css({
    textAlign: "center",
  }),
  testimoniWrapper: css({
    width: "90%",
  }),
  grid2: css({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 8,
  }),
};
