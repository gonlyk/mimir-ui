const path = require('path')
const { execSync } = require('child_process')

const res = execSync('cp -r ./style/ ./dist/style', {
    cwd: path.resolve(__dirname, '..')
})