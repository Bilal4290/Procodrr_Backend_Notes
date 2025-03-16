📂 Single-Level Nested Directory:

    Definition: A single-level directory means a structure where a file or folder exists inside one folder but not deeper.

Example Structure:

    /public
    ├── folder1
    │     ├── fileA.txt
    │     ├── fileB.txt
    ├── folder2
    │     ├── fileC.txt


    URL Format: /directory/folder1


How It's Handled in Code:

    app.get('/directory/:folderName', async (req, res) => {
        const { folderName } = req.params;
        const fullDirPath = `${import.meta.dirname}/public/${folderName}`;

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

    Request: GET /directory/
    
    Response:

        [
        { "name": "fileA.txt", "isDirectory": false },
        { "name": "fileB.txt", "isDirectory": false }
        ]