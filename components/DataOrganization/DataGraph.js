import { ResponsiveLine } from '@nivo/line';
import GraphContainer from './GraphContainer';

const DataGraph = ({ data }) => {
  return (
    <GraphContainer>
      <ResponsiveLine
        curve="monotoneX"
        data={data}
        margin={{ top: 20, right: 50, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false
        }}
        yFormat= ">-.0f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickValues: data.reduce((set, { y }) => set.add(y), new Set()).size,
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        enableGridX={false}
        enableGridY={false}
        colors={{ scheme: 'red_grey' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
      />
    </GraphContainer>
  );
};

export default DataGraph;