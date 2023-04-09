const countIssues = (issues) => {
  const statusCounts = {
    open: 0,
    closed: 0,
  };
  const priorityCounts = {
    low: 0,
    medium: 0,
    high: 0,
  };

  issues.forEach((issue) => {
    statusCounts[issue.ticketStatus]++;
    priorityCounts[issue.priority]++;
  });

  const statusColors = {
    open: '#1A933B',
    closed: '#555',
  };
  const priorityColors = {
    low: '#57A009',
    medium: '#CEC010',
    high: '#BD1A09',
  };

  const formattedStatusData = Object.entries(statusCounts)
    .filter(([key, value]) => value > 0)
    .map(([key, value]) => ({
      title: key.charAt(0).toUpperCase() + key.slice(1),
      value,
      color: statusColors[key],
    }));

  const formattedPriorityData = Object.entries(priorityCounts)
    .filter(([key, value]) => value > 0)
    .map(([key, value]) => ({
      title: key.charAt(0).toUpperCase() + key.slice(1),
      value,
      color: priorityColors[key],
    }));

  return {
    status: formattedStatusData,
    priority: formattedPriorityData,
  };
};

export default countIssues;
