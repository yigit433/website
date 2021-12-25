export default ({ day, month, year, time, gmt }) => {
  const months = [
    "January",
    "February",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const birthString = `${day} ${
    months[Math.floor(Number(month) - 1)]
  } ${year} ${time} ${gmt}`;
  const birthday = new Date(birthString);

  return Math.floor((Date.now() - birthday.getTime()) / 31557600000);
};
