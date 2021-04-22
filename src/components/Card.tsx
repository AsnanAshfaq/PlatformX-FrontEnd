import React, { FC } from "react";

type props = {
  user_image: any;
  user_name: string;
  date: Date;
  text: string;
  post_image?: any;
};

const Card: FC<props> = ({
  date,
  text,
  user_image,
  user_name,
  children,
  post_image,
}) => {
  return (
    <div>
      <p></p>
    </div>
  );
};

export default Card;
