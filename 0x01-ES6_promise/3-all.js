import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.allSettled([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(photo.value.body, user.value.firstName, user.value.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
