const fs = require('fs');

function replace(filepath, search, replace) {
  fs.writeFileSync(
    filepath,
    fs.readFileSync(filepath, 'utf8').replace(search, replace),
    'utf8',
  );
}

const name = process.argv[process.argv.length - 1];
console.log(name);
replace('package.json', /nodept/g, name);
replace('package-lock.json', /nodept/g, name);
replace('README.md', /nodept/g, name);
