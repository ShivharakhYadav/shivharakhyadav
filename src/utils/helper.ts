export const getCount = (
  day: number,
  month: number,
  year: number,
  showMonth = false
) => {
  try {
    if (month < 0) {
      month == 0;
    }
    const birthDate = new Date(year, month - 1, day); // Year, Month (0-indexed), Day
    const today = new Date();

    let totalCount = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      totalCount--;
    }

    if (showMonth && monthDifference !== 0) {
      return `${totalCount}.${monthDifference}`;
    }
    return totalCount;
  } catch (error) {
    if (showMonth) {
      return 3;
    }
    return 24;
  }
};

// function getAge() {
//   const birthDate = new Date(2022, 1, 1); // Year, Month (0-indexed), Day
//   const today = new Date();

//   let age = today.getFullYear() - birthDate.getFullYear();
//   const monthDifference = today.getMonth() - birthDate.getMonth();
//   console.log(monthDifference)
//   const dayDifference = today.getDate() - birthDate.getDate();

//   // Adjust age if the current date is before the birthdate this year
//   if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
//     age--;
//   }

//   console.log(`${age}.${monthDifference}`);
//   return `${age}.${monthDifference}`;
// }

// getAge();
