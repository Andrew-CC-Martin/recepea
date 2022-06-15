import { Link } from "react-router-dom";
import { Typography, Button } from "antd";

const { Paragraph } = Typography;

export const NotFound = () => (
  <>
    <Typography>
      <Paragraph>Sorry, we couldn't find that page</Paragraph>
    </Typography>
    <Link to="/">
      <Button type="primary">Take me home</Button>
    </Link>
  </>
);
