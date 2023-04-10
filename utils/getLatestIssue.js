const getLatestIssue = (project) => {
  return project.issues.reduce((latestIssue, currentIssue) => {
    return latestIssue === undefined || new Date(currentIssue.createdOn) > new Date(latestIssue.createdOn)
      ? currentIssue
      : latestIssue;
  }, undefined);
};
export default getLatestIssue;