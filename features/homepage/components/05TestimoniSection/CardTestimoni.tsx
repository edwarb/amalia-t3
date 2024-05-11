import { css } from "@emotion/css";
import { Avatar, Typography } from "@mui/material";

type Props = {
  image: string;
  name: string;
  text: string;
};
function CardTestimoni(props: Props) {
  const { image, name, text } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.ava}>
        <Avatar style={{ width: 75, height: 75 }} src={image} />
        <Typography variant={"caption"}>{name}</Typography>
      </div>
      <Typography variant={"subtitle2"} className={styles.text}>
        {text}
      </Typography>
    </div>
  );
}

export default CardTestimoni;

const styles = {
  wrapper: css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 30,
    height: 200,
    width: 600,
  }),
  ava: css({
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  }),
  text: css({
    alignSelf: "center",
    paddingLeft: 12,
  }),
};
