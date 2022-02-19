export const SmallButton = ({ text, classes = '' }) => {
  return (
    <div
      aria-label='button'
      className={`btn-sm btn-color text-center ${classes}`}>
      {text}
    </div>
  );
};

export const primaryButton = ({ text, classes = '' }) => {
  return <div></div>;
};
