import * as utils from './utils';

export default function handleProfileSignup() {
  return Promise.all([utils.uploadPhoto(), utils.createUser()])
    .then((response) => {
      const upload = response[0];
      const create = response[1];
      console.log(`${upload.body} ${create.firstName} ${create.lastName}`);
    }, () => console.log('Signup system offline'));
}
