const fs = require('fs')

;(async () => {
  const pkg = await fs.readFileSync('./package.json', { encoding: 'utf8'})
  const parsed_file = await JSON.parse(pkg)

  let dep_str = 'npm i -S '
  Object.keys(parsed_file.dependencies).forEach(dep => {
    dep_str += (dep + ' ')
  })
  console.log(dep_str)

  let devdep_str = 'npm i -D '
  Object.keys(parsed_file.devDependencies).forEach(dep => {
      devdep_str += (dep + ' ')
  })
  console.log(devdep_str)
})()