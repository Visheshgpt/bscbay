import React from "react";
import { useParams } from "react-router-dom";
import IncupadNavbar from "../incupad/section/IncupadNavBar";
import PageNotFound from "../PageNotFound/PageNotFound";
import UpcommingPoolsBanner from "./section/UpcommingPoolsBanner";
import UpcommingPoolsInformation from "./section/UpcommingPoolsInformation";

const upcomingPoolData = [
  {
    title: "CyberTrade",
    tag: "First Phase",
    img: "../assets/is-card-1.svg",
    description:
      " CyberTrade is an upcoming open-world MMO RPG game built on Binance Smart Chain.",
    time: "48 Hours",
    tokenDistribution: "BSUD",
    tokenPrice: 456,
    minAllocation: 0.01,
    maxAllocation: 2644.09,
    symbol: "CCASH",
    decimals: 18,
    allocationType: "BUSD",
    totalSupply: 380000,
    accessType: "Private",
    about: [
      "CyberTrade is an upcoming open-world MMO RPG game built on Binance Smart Chain. The Metaverse will be a next-gen AAA sandbox experience never seen before in crypto gaming. The gameplay includes basic open world games features and third person camera view.",
      "CyberTrade is an upcoming open-world MMO RPG game built on Binance Smart Chain. The Metaverse will be a next-gen AAA sandbox experience never seen before in crypto gaming. The gameplay includes basic open world games features and third person camera view. ",
    ],
    address: "TBA",
  },
  {
    title: "CyberTrade 1",
    tag: "First Phase",
    img: "../assets/is-card-1.svg",
    description:
      " CyberTrade is an upcoming open-world MMO RPG game built on Binance Smart Chain.",
    time: "48 Hours",
    tokenDistribution: "",
    tokenPrice: 456,
    minAllocation: 0.01,
    maxAllocation: 2644.09,
    symbol: "CCASH",
    decimals: 18,
    allocationType: "BUSD",
    totalSupply: 380000,
    accessType: "Private",
    about: [ "CyberTrade is an upcoming open-world MMO RPG game built on Binance Smart Chain. The Metaverse will be a next-gen AAA sandbox experience never seen before in crypto gaming. The gameplay includes basic open world games features and third person camera view.",
    "CyberTrade is an upcoming open-world MMO RPG game built on Binance Smart Chain. The Metaverse will be a next-gen AAA sandbox experience never seen before in crypto gaming. The gameplay includes basic open world games features and third person camera view. ",],
    address: "TBA",
  },
  {
    title: "CyberTrade 2",
    tag: "First Phase",
    img: "../assets/is-card-1.svg",
    description:
      " CyberTrade is an upcoming open-world MMO RPG game built on Binance Smart Chain.",
    time: "48 Hours",
    tokenDistribution: "",
    tokenPrice: 456,
    minAllocation: 0.01,
    maxAllocation: 2644.09,
    symbol: "CCASH",
    decimals: 18,
    allocationType: "BUSD",
    totalSupply: 380000,
    accessType: "Private",
    about: ["hjvdlhvgbdfhvb", "ujdhvidbsv"],
    address: "TBA",
  },
  {
    title: "CyberTrade 3",
    tag: "First Phase",
    img: "../assets/is-card-1.svg",
    description:
      " CyberTrade is an upcoming open-world MMO RPG game built on Binance Smart Chain.",
    time: "48 Hours",
    tokenDistribution: "",
    tokenPrice: 456,
    minAllocation: 0.01,
    maxAllocation: 2644.09,
    symbol: "CCASH",
    decimals: 18,
    allocationType: "BUSD",
    totalSupply: 380000,
    accessType: "Private",
    about: ["hjvdlhvgbdfhvb", "ujdhvidbsv"],
    address: "TBA",
  },
  {
    title: "CyberTrade 4",
    tag: "First Phase",
    img: "../assets/is-card-1.svg",
    description:
      " CyberTrade is an upcoming open-world MMO RPG game built on Binance Smart Chain.",
    time: "48 Hours",
    tokenDistribution: "",
    tokenPrice: 456,
    minAllocation: 0.01,
    maxAllocation: 2644.09,
    symbol: "CCASH",
    decimals: 18,
    allocationType: "BUSD",
    totalSupply: 380000,
    accessType: "Private",
    about: ["hjvdlhvgbdfhvb", "ujdhvidbsv"],
    address: "TBA",
  },
];

const UpcommingPools = () => {
  const { title } = useParams();
  const activePool = upcomingPoolData.find((item) => item.title === title);

  return activePool !== undefined ? (
    <section>
      <IncupadNavbar />
      <UpcommingPoolsBanner activePool={activePool} />
      <UpcommingPoolsInformation activePool={activePool} />
    </section>
  ) : (
    
    <PageNotFound />
  );
};

export default UpcommingPools;
