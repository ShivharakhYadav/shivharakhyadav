export const getAge = () => {
  try {
    const birthDate = new Date(2000, 5, 18); // Year, Month (0-indexed), Day
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }

    console.log(`Your age is: ${age}`);
    return age;
  } catch (error) {
    return 24;
  }
};
