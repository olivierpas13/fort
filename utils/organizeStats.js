import isEmpty from 'lodash/isEmpty';

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
  ].filter(stat => stat.value !== 0);
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
  ].filter(stat => stat.value !== 0);

  if(!isEmpty(stats.projectsIssues)){
    return ({
      priorityStats,
      statusStats,
      projectsIssuesStats: stats.projectsIssues,
      totalIssues: stats.totalIssues

    });
  }
  return ({
    priorityStats,
    statusStats,
    name: stats.projectName,
    users: stats.users,
    totalIssues: stats.totalIssues
  });
};