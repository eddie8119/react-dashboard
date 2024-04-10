const useDateHandler = (time: string): string => {
  let dateString = time;
  let toDateType = new Date(time); //轉換成Date型別
  dateString = toDateType.toISOString().substring(0, 10);
  return dateString;
};

export default useDateHandler;
