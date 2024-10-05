import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((profile) => {
      const [photo, user] = profile;
      console.log(photo.body, user.firstName, user.lastName);
    })
    .catch(() => new Error('Signup system offline'));
}
