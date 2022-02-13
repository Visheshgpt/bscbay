import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function MobileHighCharts({ setTokenomics }) {
  const getDataOnMouseOver = (e) => {
    setTokenomics(e.target.name);
  };
  const options = {
    title: {
      text: '',
    },
    credits: {
      enabled: false,
    },
    backgroundColor: null,
    chart: {
      width: 380,
      height: 400,
    },
    tooltip: {
      pointFormat: '',
    },

    series: [
      {
        type: 'pie',
        //allowPointSelect: true,
        //keys: ['name', 'color', 'y', 'selected', 'sliced'],

        data: [
          {
            name: 'Presale',
            color: '#ffd366',
            y: 400000000,
            selected: false,
          },
          {
            name: 'Liquidity',
            color: '#222426',
            y: 400000000,
            selected: false,
          },
          {
            name: 'Marketing & Development',
            color: '#5CAA76',
            y: 50000000,
            selected: false,
          },
          {
            name: 'Team',
            color: '#606164',
            y: 50000000,
            selected: false,
          },
          {
            name: 'Exchanges & Partnerships',
            color: '#f1c342',
            y: 30000000,
            selected: false,
          },
          {
            name: 'Strategic Advisors',
            color: '#FFEFCA',
            y: 20000000,
            selected: false,
          },
          {
            name: 'Ecosystem',
            color: '#B4AA99',
            y: 50000000,
            selected: false,
          },
        ],
        showInLegend: false,
      },
    ],
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false,
          distance: -90,
          style: {
            fontWeight: 'bold',
            color: 'white',
            fontSize: '14px',
          },
        },
      },
      series: {
        point: {
          events: {
            mouseOver: getDataOnMouseOver,
          },
        },
      },
    },
  };

  return (
    <div className='mobile_charts'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default MobileHighCharts;
