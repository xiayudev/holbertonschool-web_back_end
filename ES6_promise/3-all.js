import * as utils from './utils';

export default async function handleProfileSignup() {
  const response = await Promise.all([utils.uploadPhoto().catch(() => console.log('Signup system offline')),
    utils.createUser().catch(() => console.log('Signup system offline'))]);
  const upload = response[0];
  const create = response[1];
  console.log(`${upload.body} ${create.firstName} ${create.lastName}`);
}
