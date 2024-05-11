import {
  Avatar,
  Card as CardMUI,
  CardHeader,
  CardContent,
  Typography,
  css,
} from "@mui/material";
import { CSSProperties } from "react";


type Props = {
  icon: React.ReactNode;
  title: string;
  content: string;
  avatarClass: string;
};


const Card = ({ icon, title, content, avatarClass }: Props) => {
  const avatarStyle = avatarClass ?? styles.avatar;
  return (
    <CardMUI style={{ borderRadius: 16 }}>
      <CardHeader
        avatar={<Avatar className={avatarStyle}>{icon}</Avatar>}
        title={title}
        titleTypographyProps={{
          style: { fontWeight: "bold" },
        }}
      />
      <CardContent>
        <Typography>{content}</Typography>
      </CardContent>
    </CardMUI>
  );
};

export default Card;

const styles = {
  avatar: css({
    backgroundColor: `blue`,
  }),
  cardHead: css({
    display: `flex`,
    paddingBottom: `0 !important`,
  }),
};
