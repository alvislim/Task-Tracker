export const getCurrentDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${year}-${month}-${day}`;

  return currentDate;
};

export const generateTaskNumber = () => {
  return crypto.randomUUID();
};

export const isEpicSection = (section?: string) => {
  return section === "epic";
};
