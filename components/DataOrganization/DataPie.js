import { PieChart } from 'react-minimal-pie-chart';
import ReactTooltip from 'react-tooltip';
import { useState } from 'react';
import isEmpty from 'lodash/isEmpty';

const DataPie = ({ data }) => {

  console.log(data);

  const [hovered, setHovered] = useState(undefined);

  const makeTooltipContent = (entry) => {
    return `Sector ${entry.title} has value ${entry.value}`;
  };

  const dataForPie = data?.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        color: 'grey',
      };
    }
    return entry;
  });

  return(
    <div data-tip="" data-for="chart" >
      {!isEmpty(data) ? <PieChart
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
        labelStyle={{ 'fontSize': '0.4em', 'fontWeight': '500' }}
        label={({ dataEntry }) => dataEntry.title}
        data={dataForPie}
      />
        :
        <h2>No issues found</h2>
      }
      <ReactTooltip
        id="chart"
        getContent={() =>
          typeof hovered === 'number' ? makeTooltipContent(data[hovered]) : null
        }
      />
    </div>);
};
export default DataPie;
