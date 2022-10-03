import { PieChart } from 'react-minimal-pie-chart';
import ReactTooltip from 'react-tooltip';
import { useState } from 'react';

const DataPie = ({ data }) => {

  const [hovered, setHovered] = useState(undefined);

  const makeTooltipContent = (entry) => {
    return `Sector ${entry.title} has value ${entry.value}`;
  };

  const dataForPie = data.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        // label: entry.value,
        color: 'grey',
      };
    }
    return entry;
  });

  return(
    <div data-tip="" data-for="chart" >
      <PieChart
        animate= {true}
        lineWidth={100}
        radius={PieChart.defaultProps.radius - 6}
        segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
        segmentsShift={ 1 }
        onMouseOver={(_, index) => {
          setHovered(index);
        }}
        onMouseOut={() => {
          setHovered(null);
        }}
        // onClick={(event, index) => {
        // // action('CLICK')(event, index);
        //   console.log('CLICK', { event, index });
        // // setSelected(index === selected ? undefined : index);
        // }}
        labelStyle={{ 'fontSize': '0.6em', 'fontWeight': '500' }}
        label={({ dataEntry }) => dataEntry.title}
        data={dataForPie}
      />
      <ReactTooltip
        id="chart"
        getContent={() =>
          typeof hovered === 'number' ? makeTooltipContent(data[hovered]) : null
        }
      />
    </div>
  );
};
export default DataPie;
