const eslint = require('eslint')
const test = require('tape')
const path = require('path')

test('load config in eslint to validate all rule syntax is correct', function (t) {
  const CLIEngine = eslint.CLIEngine

  const cli = new CLIEngine({
    useEslintrc: false,
    extensions: ['ts'],
    configFile: path.join(__dirname, '../index.js')
  })

  const report = cli.executeOnFiles([
    path.join(__dirname, '../sample'),
    path.join(__dirname, '../index.js'),
  ])

  for (const file of report.results) {
    if (file.errorCount > 0) {
      console.log(file.messages)
    }
  }

  t.ok(report.errorCount === 0)
  t.end()
})
