const useDateHandler = (time: string): string => {
  const dateString = time.split('T')[0];
  return dateString;
};

export default useDateHandler;
