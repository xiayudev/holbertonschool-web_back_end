import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([uploadPhoto(fileName).catch((err) => err),
    signUpUser(firstName, lastName).catch((err) => err)])
    .then((response) => {
      const data = [...response];
      data[0].value = `Error: ${data[0].value.message}`;
      return data;
    });
}
