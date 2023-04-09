const organizeIssuesByDay = (issues) => {
  const initialData = [
    { x: 'Mon', y: 0 },
    { x: 'Tue', y: 0 },
    { x: 'Wed', y: 0 },
    { x: 'Thu', y: 0 },
    { x: 'Fri', y: 0 },
    { x: 'Sat', y: 0 },
    { x: 'Sun', y: 0 },
  ];

  const countByDay = issues.reduce((acc, issue) => {
    const createdOnDate = new Date(issue.createdOn);
    const dayOfWeek = createdOnDate.toLocaleString('en-US', { weekday: 'short' });

    const dayData = acc.find((d) => d.x === dayOfWeek);
    if (dayData) {
      dayData.y += 1;
    }
    return acc;
  }, initialData);

  return [
    {
      id: 'errors',
      data: countByDay,
    },
  ];
};

export default organizeIssuesByDay;
