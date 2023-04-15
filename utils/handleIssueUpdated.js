export const handleIssueUpdated = ({ updatedIssue, allIssues, setAllIssues, isDelete = false }) => {
  const issueIndex = allIssues.findIndex((issue) => issue.id === updatedIssue.id);

  if (issueIndex !== -1) {
    const updatedIssues = [...allIssues];
    if (isDelete) {
      updatedIssues.splice(issueIndex, 1);
    } else {
      updatedIssues[issueIndex] = updatedIssue;
    }
    setAllIssues(updatedIssues);
  }
};

export default handleIssueUpdated;
