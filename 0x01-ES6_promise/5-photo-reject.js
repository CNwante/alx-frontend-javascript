export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    // Simulate a condition for rejection
    const isRejected = true;

    if (isRejected) {
      reject(new Error(`${filename} cannot be processed`));
    } else {
      resolve(filename);
    }
  });
}
