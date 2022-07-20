const fs = require('fs').promises;
const path = require('path')

/*
fs.readdir('./')
    .then(files => console.log(files))
    .catch(e => console.log(e))
*/

async function readdir(rootDir) {
    rootDir = rrotDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

function walk(files) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath)

        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        console.log(file, stats.isDirectory());
    }
}

readdir('')