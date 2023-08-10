const eventDate = "2023-8-31";

const calculateRemainingDays = (eventDate) => {
  const currentDate = new Date();
  const eventStartDate = new Date(eventDate);

  const timeDifference = eventStartDate - currentDate;
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
};

console.log(`${calculateRemainingDays(eventDate)} days Remaining`);
