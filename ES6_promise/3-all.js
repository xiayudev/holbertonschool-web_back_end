import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((response) => {
    const upload = response[0];
    const create = response[1];
    console.log(`${upload.body} ${create.firstName} ${create.lastName}`);
  }).catch(() => console.log('Signup system offline'));
}
