const passwords = `a 1-5: abcdj\nz 2-4: asfalseiruqwo\nb 3-6: bhhkkbbjjjb`;

function countValidPasswords(input) {
  const passwords = input.split('\n');
  let validCounter = 0;

  for (let i = 0; i < passwords.length; i++) {
    const parameters = passwords[i].split(' ');
    const char = parameters[0];
    const minNumber = parameters[1].split('-')[0];
    const maxNumber = parameters[1].split('-')[1].slice(0, 1);
    const password = parameters[2];

    const regex = new RegExp(`${char}`, 'gi');
    const matches = password.match(regex);
    const matchesLength = matches ? matches.length : 0;

    if (matchesLength >= minNumber && matchesLength <= maxNumber) {
      validCounter++;
    }
  }

  return validCounter;
}

console.log(countValidPasswords(passwords));
