const handleIssueUpdated = ({ updatedIssue, allIssues, setAllIssues }) => {

  const issueIndex = allIssues.findIndex((issue) => issue.id === updatedIssue.id);

  if (issueIndex !== -1) {
    const updatedIssues = [...allIssues];
    updatedIssues[issueIndex] = updatedIssue;
    setAllIssues(updatedIssues);
  }

};

export default handleIssueUpdated;
