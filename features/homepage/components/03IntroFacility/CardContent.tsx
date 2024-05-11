import { css } from "@emotion/css";
import {
  Button,
  Card,
  CardActionArea,
  CardContent as CardContentMui,
  Typography,
} from "@mui/material";

type Props = {
  href: string;
  imageSrc: string;
  title: string;
  content: string;
};
function CardContent(props: Props) {
  const { content, href, imageSrc, title } = props;
  return (
    <Card className={styles.card}>
      <CardActionArea>
        <a href={href}>
          <img className={styles.media} src={imageSrc} title={title} />
        </a>
        <CardContentMui>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
            <Button size="small" color="primary" href={href}>
              {"Lebih Lanjut"}
            </Button>
          </Typography>
        </CardContentMui>
      </CardActionArea>
    </Card>
  );
}

export default CardContent;

const styles = {
  card: css({
    alignItems: "center",
  }),

  media: css({
    objectFit: "cover",
    width: "100%",
    height: 180,
  }),
};
