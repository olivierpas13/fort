const getInitials = (name) => {
  const nameArr = name.split(' ');

  const initialsArr = nameArr.map(word => word.charAt(0));

  const initials = initialsArr.join('');

  return initials;
};

export default getInitials;