import React from "react";
import { Helmet } from "react-helmet-async";

interface Props {
  title?: string;
  description?: string;
}
const Head = ({ title, description }: Props) => {
  const defaultTitle = "LaundryApp";
  const defaultDSescription = "a booking app for laundry ";
  return (
    <Helmet>
      <title>{title ? title : defaultTitle}</title>
      <meta
        name='description'
        content={description ? description : defaultDSescription}
      />
    </Helmet>
  );
};

export default Head;
