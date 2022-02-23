import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function HighCharts({ setTokenomics }) {
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
      height: 600,
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
            name: 'Liquidities and Burn',
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
    <div className='desktop_highcharts'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default HighCharts;
