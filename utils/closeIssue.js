import editIssue from 'services/issues';

const closeIssue = async (issue) => {

  const issueToClose = {
    ...issue,
    ticketStatus: 'closed'
  };

  const closedIssue = await editIssue(issueToClose);
  return closedIssue;
};

export default closeIssue;