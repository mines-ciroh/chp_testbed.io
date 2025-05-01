import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'
import * as path from 'path'
import toml from 'toml'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Define the directory path where your files are located
    const directoryPath = path.join(process.cwd(), 'data')
    const files = fs.readdirSync(directoryPath)

    const tomlFiles = files.filter(file => file.endsWith('.toml'))

    const data = tomlFiles.map(file => {
        const filePath = path.join(directoryPath, file)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const parsedData = toml.parse(fileContent)
        return {
            fileName: file,
            data: parsedData
        }
    })
    
    res.status(200).json({ files: data })

  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}