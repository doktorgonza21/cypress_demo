class RandomPage {
  constructor() {}

  // Valid data generators

  validEmailGenerator(generatedEmail) {
    const symbols = "abcdefghijklmnopqrstuvwxyz1234567890";
    let string = "";
    for (let x = 0; x < 15; x++) {
      string += symbols[Math.floor(Math.random() * symbols.length)];
    }
    generatedEmail = string + "@gmail.com";
    return generatedEmail;
  }

  validUsernameGenerator(generatedUsername) {
    const symbols = "abcdefghijklmnopqrstuvwxyz1234567890";
    let string = "";

    for (let x = 0; x < 15; x++) {
      string += symbols[Math.floor(Math.random() * symbols.length)];
    }
    generatedUsername = string[0].toUpperCase() + string.slice(1);
    return generatedUsername;
  }

  validPasswordGenerator(generatedPassword) {
    const symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890..!!@@##$$%%^^&&**(())__";
    let string = "";
    for (let x = 0; x < 20; x++) {
      string += symbols[Math.floor(Math.random() * symbols.length)];
    }
    generatedPassword = string;
    return generatedPassword;
  }

  validPasswordGeneratorForTelnyx(generatedPassword) {
    const symbols = ".!@#$%^&*_";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890";
    let stringone = "";
    let stringtwo = "";
    let stringthree = "";
    let stringfour = "";
    for (let x = 0; x < 1; x++) {
      stringone += symbols[Math.floor(Math.random() * symbols.length)];
    }
    for (let a = 0; a < 2; a++) {
      stringtwo += uppercase[Math.floor(Math.random() * symbols.length)];
    }
    for (let b = 0; b < 5; b++) {
      stringthree += numbers[Math.floor(Math.random() * symbols.length)];
    }
    for (let y = 0; y < 5; y++) {
      stringfour += lowercase[Math.floor(Math.random() * symbols.length)];
    }
    generatedPassword = stringone + stringtwo + stringthree + stringfour + stringone;
    return generatedPassword;
  }

  validPhoneGenerator(generatedPhone) {
    const symbols = "1234567890";
    let string = "";
    for (let x = 0; x < 20; x++) {
      string += symbols[Math.floor(Math.random() * symbols.length)];
    }
    generatedPhone = string;
    return generatedPhone;
  }

  validNameSurnameGenerator(generatedUsername) {
    const symbols = "abcdefghijklmnopqrstuvwxyz";
    let string = "";
    for (let x = 0; x < 15; x++) {
      string += symbols[Math.floor(Math.random() * symbols.length)];
    }
    generatedUsername = string[0].toUpperCase() + string.slice(1);
    return generatedUsername;
  }

  validFullNameGenerator(generatedUsername) {
    const symbols = "abcdefghijklmnopqrstuvwxyz";
    let stringtwo = "";
    let stringone = "";
    for (let x = 0; x < 7; x++) {
      stringone += symbols[Math.floor(Math.random() * symbols.length)];
    }
    for (let y = 0; y < 8; y++) {
      stringtwo += symbols[Math.floor(Math.random() * symbols.length)]
    }
    generatedUsername = stringone[0].toUpperCase() + stringone.slice(1) + ' ' + stringtwo[0].toUpperCase() + stringtwo.slice(1);
    return generatedUsername;
  }

  // Invalid data generators

  invalidEmailGenerator(generatedEmail) {
    const symbols = "!@#$%^&*(";
    let string = "";
    for (let x = 0; x < 15; x++) {
      string += symbols[Math.floor(Math.random() * symbols.length)];
    }
    generatedEmail = string + "gmail.com";
    return generatedEmail;
  }

  invalidUsernameGenerator(generatedUsername) {
    const symbols = "!@#$%^&*(";
    let string = "";

    for (let x = 0; x < 15; x++) {
      string += symbols[Math.floor(Math.random() * symbols.length)];
    }
    generatedUsername = string[0].toUpperCase() + string.slice(1);
    return generatedUsername;
  }

  invalidPasswordGenerator(generatedPassword) {
    const symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.!";
    let string = "";
    for (let x = 0; x < 3; x++) {
      string += symbols[Math.floor(Math.random() * symbols.length)];
    }
    generatedPassword = string;
    return generatedPassword;
  }

  invalidPhoneGenerator(generatedPhone) {
    const symbols = "abcdefghijklmnopqrstuvwxyz";
    let string = "";
    for (let x = 0; x < 20; x++) {
      string += symbols[Math.floor(Math.random() * symbols.length)];
    }
    generatedPhone = string;
    return generatedPhone;
  }

  invalidNameSurnameGenerator(generatedUsername) {
    const symbols = "!@#$%^&*(";
    let string = "";
    for (let x = 0; x < 15; x++) {
      string += symbols[Math.floor(Math.random() * symbols.length)];
    }
    generatedUsername = string[0].toUpperCase() + string.slice(1);
    return generatedUsername;
  }
};

export default RandomPage
