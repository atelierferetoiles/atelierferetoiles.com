const formatDate = (datestr: string): string => {
  const date = new Date(datestr);
  return date.toLocaleDateString('fr');
};

export default formatDate;
