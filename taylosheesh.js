var encryptor = require('file-encryptor');

var key = 'Taylor Swift';

// Encrypt file.
 encryptor.encryptFile('input_file.txt', 'encrypted.dat', key, function(err) {
  console.log('File is encrypted');
  // Encryption complete.
});


// Decrypt file.
encryptor.decryptFile('encrypted.dat', 'output_file.txt', key, function(err) {
  // Decryption complete.
})