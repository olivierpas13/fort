const organizeIssuesByDay = (issues) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const data = [
    {
      id: 'issues',
      data: daysOfWeek.map(dayOfWeek => ({
        x: dayOfWeek,
        y: issues.filter(issue => {
          const createdOnDate = new Date(issue.createdOn);
          const issueDayOfWeek = createdOnDate.toLocaleString('en-US', { weekday: 'long' });
          return issueDayOfWeek === dayOfWeek;
        }).length
      }))
    }
  ];

  return data;
};

export default organizeIssuesByDay;
