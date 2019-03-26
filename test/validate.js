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
    path.join(__dirname, '../sample')
  ])

  if (report.errorCount > 0) {
    console.log(report.results[0].messages)
  }

  t.ok(report.errorCount === 0)
  t.end()
})
