import type { ReactNode } from "react";

const NewsDetailLayout = ({
  children,
  modal,
  Details,
}: {
  children: ReactNode;
  modal: ReactNode;
  Details: ReactNode;
}) => {
  return (
    <>
      {children}
      {modal}
      {Details}
    </>
  );
};

export default NewsDetailLayout;
