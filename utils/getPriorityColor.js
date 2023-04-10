const getPriorityColor = (priority) => {
  const priorities = {
    low: 'success',
    medium: 'warning',
    high: 'error',
  };
  return priorities[priority];
};

export default getPriorityColor;