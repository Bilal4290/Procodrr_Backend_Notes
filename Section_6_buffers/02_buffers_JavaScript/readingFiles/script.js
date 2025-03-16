const inputFile = document.getElementById('inputFile')

inputFile.addEventListener('change',(e) => {
    const file = e.target.files[0]

    const fileReader = new FileReader('file')

    fileReader.addEventListener('load',(e) => {
          const arrayBuffer = e.target.result
          console.log(arrayBuffer);
          console.log('Buffer');
    })

    fileReader.readAsArrayBuffer(file)
})