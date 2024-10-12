export default function createInt8TypedArray(length, postion, value) {
  const buffer = new ArrayBuffer(length);

  const view = new DataView(buffer);

  if (postion >= length || postion < 0) {
    throw new Error('Position outside range');
  }

  view.setInt8(postion, value);

  return view;
}
