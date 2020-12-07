import fs from 'fs'

interface Replacement {
  regexp: RegExp,
  replacement: string
}

export const modifyFiles = (files: string[], replacements: Replacement[]) => {
  files.forEach(file => {
    let fileContentModified = fs.readFileSync(file, 'utf8')

    replacements.forEach(v => {
      fileContentModified = fileContentModified.replace(v.regexp, v.replacement)
    })

    fs.writeFileSync(file, fileContentModified, 'utf8')
  })
}
