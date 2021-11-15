import React from "react";
import styledTypography from "./typography.styles";

interface TypographyProps {
  text: string | number | string[] | undefined | null;
}

const Typography = (props: TypographyProps) => {
  const { text } = props;
  const typographyStyle = styledTypography();
  return <p className={typographyStyle.textWrapper}>{text}</p>;
};

export default Typography;
