import type { ReactNode } from "react";

const layout = ({
  children,
  archive,
  latest,
}: {
  children: ReactNode;
  archive: ReactNode;
  latest: ReactNode;
}) => {
  return (
    <>
      <div id="archive-filter">{archive}</div>
      <div id="archive-latest">{latest}</div>
    </>
  );
};

export default layout;
