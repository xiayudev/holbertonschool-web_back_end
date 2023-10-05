import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([uploadPhoto(fileName).catch((err) => err),
    signUpUser(firstName, lastName).catch((err) => err)])
    .then((response) => [
      {
        status: 'rejected',
        value: response[0] || response[0].message,
      },
      {
        status: 'fulfilled',
        value: response[1] || response[1].message,
      },
    ]);
}
