
export function taskFirst() {
  const task = 'I prefer const when I can.'; 
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let'; // use let since we are going to reassign the value
  combination += getLast(); // reassigning combination

  return combination;
}
