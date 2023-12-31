import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/* eslint-disable */
export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([ signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((response) => {
      const responses = [...response];
      responses.forEach((resp) => {
        if (resp.reason) {
          const {name, message} = resp.reason;
          delete resp.reason;
          resp.value = `${name}: ${message}`;
        }
      });
      return responses;
    }).catch(err => err);
}
