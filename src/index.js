// import path from 'node:path';
// import fs from 'node:fs/promises';
// import path from 'node:path';

// const currentDirectory = path.join(process.cwd());

// const Oleg = 'Oleg';
// const pathToUserOleg = path.join(currentDirectory, Oleg, 'OlegInf');
// console.log(pathToUserOleg);

// const pathData = path.parse(pathToUserOleg);
// console.log(pathData);

// const randomText = await fs.readFile('TextRandom.txt', 'utf8');
// console.log(randomText);

// const addTextToEnd = fs.appendFile(
//   'randomText.txt',
//   ' Segodnia horoschij den',
//   'utf-8',
// );

// const renameFile = async () => {
//   try {
//     await fs.rename('RandomText.txt', 'TextRandom.txt');
//   } catch (error) {
//     return error.message;
//   }
// };

// renameFile();

// const deleteFile = async () => {
//   try {
//     await fs.unlink('RandomText.txt');
//   } catch (error) {
//     return error.message;
//   }
// };

// deleteFile();

// const viewCurrentDir = async () => {
//   try {
//     const dir = await fs.readdir(path.join(currentDirectory, 'src'));
//     console.log(dir);
//   } catch (error) {
//     return error.message;
//   }
// };

// viewCurrentDir();

// const isHasFile = async () => {
//   const file = 'RandomText.txt';
//   try {
//     await fs.access(file);
//     console.log('File exists');
//   } catch (error) {
//     if (error.code === 'ENOENT') {
//       console.log('File doesn`t exists');
//     }
//     return error.message;
//   }
// };

// isHasFile();

// const readFile = async () => {
//   try {
//     const writedText = await fs.readFile('Text.txt', { encoding: 'utf-8' });
//     const UpperText = await fs.writeFile('Text.txt', writedText.toUpperCase());
//     console.log(UpperText);
//   } catch (error) {
//     return error.message;
//   }
// };

// readFile();

// const appendText = async () => {
//   try {
//     await fs.appendFile('Text.txt', '\nMAZAFAKA SUKA');
//   } catch (error) {
//     return error.message;
//   }
// };

// appendText();

// const deleteFile = async () => {
//   try {
//     await fs.unlink('Text.txt');
//     console.log('Success, file deleted!');
//   } catch (error) {
//     return error.message;
//   }
// };

// deleteFile();
// const currentPath = path.join(process.cwd());

// const isDirectoriHasFile = async () => {
//   try {
//     await fs.access('Text.txt');
//     console.log('File exists');
//   } catch (error) {
//     console.log('File doesn`t exists');
//     return error.message;
//   }
// };

// isDirectoriHasFile();

// deleteFile();

// import path from 'node:path';

// console.log('cwd', process.cwd());
// console.log('join', path.join('src', 'index.js'));
// console.log('resolve', path.resolve('src'));
// const currentPath = path.resolve('src').slice(3);
// console.log('sep', currentPath.split(path.sep));

import { startServer } from './server.js';
import { initMongoDB } from './db/initMongoDB.js';
import { createDirIfNotExist } from './utils/createDirIfNotExist.js';
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constants/index.js';

const bootstrap = async () => {
  await initMongoDB();
  await createDirIfNotExist(TEMP_UPLOAD_DIR);
  await createDirIfNotExist(UPLOAD_DIR);
  startServer();
};

bootstrap();
