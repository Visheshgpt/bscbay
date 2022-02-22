import { poolData } from '../data';
import { chainRpcs } from '../chainRPCs';
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

export const getFeaturedPoolsData = () => {
  const featuredPoolData = poolData.filter((item) => item.featured === true);
  featuredPoolData.reverse();

  return featuredPoolData;
};

export const getAddress = () => {
  let addressArray = [];
  poolData.map((item) =>
    addressArray.push({
      address: item.contractAddress,
      id: item.id,
      chainUrl: chainRpcs[item.chain],
    })
  );
  return addressArray;
};

export const currentTimeData = () => {
  const currentTime = new Date();
  const currentTimeDate = Number(Date.parse(currentTime) / 1000);
  return currentTimeDate;
};
