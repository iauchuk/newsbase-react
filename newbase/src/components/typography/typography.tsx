import React from "react";
import "./typography.scss";

interface TypographyProps {
  text: string | number | string[] | undefined | null;
}

const Typography = (props: TypographyProps) => {
  const { text } = props;
  return <p className="text-wrapper">{text}</p>;
};

export default Typography;
