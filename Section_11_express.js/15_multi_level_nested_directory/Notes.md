📂 Multi-Level Nested Directory:

    Definition: A multi-level directory means multiple levels of folders inside each other.

Example Structure:

    /public
    ├── folder1
    │     ├── subfolderA
    │     │       ├── fileX.txt
    │     ├── fileB.txt
    ├── folder2
    │     ├── subfolderB
    │     │       ├── subSubFolder
    │     │       │       ├── fileY.txt


    URL Format: /directory/folder1/subfolderA

How It's Handled in Code:

    app.get('/directory/*', async (req, res) => {
        const { 0: dirPath } = req.params; // Get full directory path
        const fullDirPath = `${import.meta.dirname}/public/${dirPath}`;

        try {
            const filesList = await readdir(fullDirPath);
            const filesArr = [];

            for (const file of filesList) {
                const stats = await stat(`${fullDirPath}/${file}`);
                filesArr.push({ name: file, isDirectory: stats.isDirectory() });
            }

            res.send(filesArr);
        } catch (error) {
            res.status(404).send('Directory not found');
        }
    });


Example Request & Response:

    Request: GET /directory/folder1/subfolderA
    
    Response:

        [
        { "name": "fileX.txt", "isDirectory": false }
        ]