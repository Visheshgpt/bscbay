export const getMonth = (num) => {
  const arr = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return arr[num];
};

export const MyDiv = ({ classes = '', type = '', children }) => {
  let posclass = '';
  if (type === 'center') posclass = 'justify-content-center';
  if (type === 'between') posclass = 'justify-content-between';
  if (type === 'around') posclass = 'justify-content-around';
  return (
    <div className={`d-flex align-items-center ${posclass} ${classes}`}>
      {children}
    </div>
  );
};
