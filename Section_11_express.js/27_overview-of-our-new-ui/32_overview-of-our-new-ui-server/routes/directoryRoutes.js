import express from "express";
import { rm, writeFile } from "fs/promises";
import directoriesData from '../directoriesDB.json' with {type: "json"}
import filesData from '../filesDB.json' with {type: "json"}

const router = express.Router();

// Read
router.get("/:id?", async (req, res) => {
  const id  = req.params.id || directoriesData[0].id
  const directoryData = directoriesData.find((directory) => directory.id === id)
  if(!directoryData) return res.status(404).json({message: "Directory not found!"})
  const files = directoryData.files.map((fileId) =>
    filesData.find((file) => file.id === fileId)
  )
  const directories = directoryData.directories.map((dirId) =>
    directoriesData.find((dir) => dir.id === dirId)
  ).map((({ id, name }) => ({ id, name })))
  return res.status(200).json({ ...directoryData, files, directories })
});

router.post("/:parentDirId?", async (req, res, next) => {
  const parentDirId = req.params.parentDirId || directoriesData[0].id
  const dirname = req.headers.dirname || 'New Folder'
  const id = crypto.randomUUID()
  const parentDir = directoriesData.find((dir) => dir.id === parentDirId)
  if(!parentDir) return res.status(404).json({message: "Parent Directory Does not exist!"})
  parentDir.directories.push(id)
  directoriesData.push({
    id,
    name: dirname,
    parentDirId,
    files: [],
    directories: []
  })
  try {
    await writeFile('./directoriesDB.json', JSON.stringify(directoriesData))
    return res.status(200).json({ message: "Directory Created!" })
  } catch (err) {
    next(err)
  }
});

router.patch('/:id', async (req, res, next) => {
  const {id} = req.params
  const {newDirName} = req.body
  const dirData = directoriesData.find((dir) => dir.id === id)
  if(!dirData) res.status(404).json({message: "Directory not found!"})
  dirData.name = newDirName
  try {
    await writeFile('./directoriesDB.json', JSON.stringify(directoriesData))
    res.status(200).json({message: "Directory Renamed!"})
  } catch(err) {
    next(err)
  }
})

router.delete("/:id", async (req, res, next) => {
  const {id} = req.params
  try {
    const dirIndex = directoriesData.findIndex((directory) => directory.id === id)
    const directoryData = directoriesData[dirIndex]
    directoriesData.splice(dirIndex, 1)
    for await (const fileId of directoryData.files) {
      const fileIndex = filesData.findIndex((file) => file.id === fileId)
      const fileData = filesData[fileIndex]
      await rm(`./storage/${fileId}${fileData.extension}`);
      filesData.splice(fileIndex, 1)
    }
    for await (const dirId of directoryData.directories) {
      const dirIndex = directoriesData.findIndex(({id}) => id === dirId)
      directoriesData.splice(dirIndex, 1)
    }
    const parentDirData = directoriesData.find((dirData) => dirData.id === directoryData.parentDirId)
    parentDirData.directories = parentDirData.directories.filter((dirId) => dirId !== id)
    await writeFile('./filesDB.json', JSON.stringify(filesData))
    await writeFile('./directoriesDB.json', JSON.stringify(directoriesData))
    res.status(200).json({ message: "Directory Deleted!" });
  } catch (err) {
    next(err)
  }
});

export default router;
