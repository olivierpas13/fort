import Image from 'next/image';
import { ResponsiveLine } from '@nivo/line';
import Link from 'next/link';
import { useRouter } from 'next/router';

import StyledProject from './StyledProject';
import { BasicButton } from 'generalStyledComponents/Button';
import { useSession } from 'next-auth/react';

const Project = ({ project }) => {

  const { data: session } = useSession();

  const router = useRouter();

  const data = [
    {
      'id': 'errors',
      'data': [
        {
          'x': 'Monday',
          'y': 10
        },
        {
          'x': 'Tuesday',
          'y': 9
        },
        {
          'x': 'Wednesday',
          'y': 5
        },
        {
          'x': 'Thursday',
          'y': 18
        },
        {
          'x': 'Friday',
          'y': 19
        },
        {
          'x': 'Saturday',
          'y': 2
        },
        {
          'x': 'Sunday',
          'y': 7
        }
      ]
    },
  ];

  const projectUrl = `${router.basePath}/organizations/${session.user.organization}/project/${project.name}/issues`;

  return (
    <StyledProject>
      <Link href={projectUrl}>
        <a>
          <div className='project-name'>
            <Image
              width={60}
              height={60}
              src="/javascriptLogo.png" alt="" />
            <h2>{project.name}</h2>
          </div>
        </a>
      </Link>
      <div className='project-stats'>
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
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Weekly errors count',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          axisLeft={{
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
      </div>
      <div className='project-buttons'>
        <BasicButton onClick={() => router.replace(projectUrl)} >
            See more
        </BasicButton>
      </div>
    </StyledProject>
  );
};

export default Project;