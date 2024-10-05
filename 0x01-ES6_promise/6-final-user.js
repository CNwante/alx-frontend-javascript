import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const output = []; // Create an empty array for results

      for (const item of results) { // Use a for loop to iterate
        if (item.status === 'fulfilled') {
          output.push({
            status: item.status,
            value: item.value,
          });
        } else {
          output.push({
            status: item.status,
            value: item.reason,
          });
        }
      }

      return output; // Return the results array
    });
}
