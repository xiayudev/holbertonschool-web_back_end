import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/* eslint-disable */
export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([uploadPhoto(fileName), signUpUser(firstName, lastName)])
    .then((response) => {
      const responses = [...response];
      responses.forEach((resp) => {
        if (resp.reason) {
          const {name, message} = resp.reason;
          resp.reason = `${name}: ${message}`;
        }
      });
      return responses;
    });
}
