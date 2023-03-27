
export const organizeStats = (stats) => {
  const priorityStats = [
    {
      title: 'High',
      value: stats.highPriorityIssues,
      color: '#BD1A09'
    },
    {
      title: 'Medium',
      value: stats.mediumPriorityIssues,
      color: '#CEC010'
    },
    {
      title: 'Low',
      value: stats.lowPriorityIssues,
      color: '#57A009'
    }
  ];
  const statusStats = [
    {
      title: 'Open',
      value: stats.openIssues,
      color: '#1A933B'
    },
    {
      title: 'Closed',
      value: stats.closedIssues,
      color: '#4E6D7F'
    },
  ];

  if(stats.projectsIssues?.length !== 0){

    const projectsIssuesStats = stats?.projectsIssues?.map((project) => {
      if(project.projectIssues !== 0){
        return{
          title: project.projectName,
          value: project.projectIssues,
          color: '#777'
        };
      }
    }
    ).filter(stat => stat !== undefined);
    return ({
      priorityStats,
      statusStats,
      projectsIssuesStats
    });
  }
  return ({
    priorityStats,
    statusStats,
    name: stats.projectName,
    users: stats.users
  });
};