"use client";
const FilterError = ({
  error,
}: {
  error: Error ;
}) => {
  return (
    <>
      <h1 className="text-2xl font-bold">Error</h1>
      <p className="text-gray-500">{error.message}</p>
    </>
  );
};

export default FilterError;
