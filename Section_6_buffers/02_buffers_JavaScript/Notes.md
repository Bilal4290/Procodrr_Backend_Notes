=>   Array buffer:

        Array buffer  =>  Array of bytes

        Byte  =>  Memory  =>  Takes space in the Ram

=>  How max we create a array buffer?  

        Around 2GiB
        Not exact 2GiB but 1.99 GiB


=>  How to create array buffer in JS?

        new ArrayBuffer(byteLength)

=>  Properties in ArrayBuffer:

      Four properties
        1. byteLength: 0
        2. detached: false
        3. maxByteLength: 0
        4. resizable: false
   
=>  How to read and write in ArrayBuffer?

      We cannot directly assign value in ArrayBuffer

      let assume, I create an ArrayBuffer:

      const arrBfr = new ArrayBuffer(5)

      arrBfr[0] ❌  We cannot do it.

      To update this, we use two things:
          (1)  Typed Arrays
          (2)  DataView  


=>   Note :

        The data inside text file is positive because of uniCode,the code of unicode starts from 0.


=>  Problem:
           I am reading the binary of file using array buffers in js i have 7.9 gb ram and the by default ram space used is 5.2 gb when i choose file less than 2 gb then array buffer appers when i choose files more than 2 gb then no array buffer apperas and keep in mind that the files i am selecting are the video files:

    Why Files Over 2GB Don't Work:

    (1) Memory Limits:

        Browsers impose a limit on memory allocation for JavaScript, typically around 1-2GB per object in many modern browsers. When you try to load a file larger than this limit, the FileReader fails silently or crashes.

    (2) FileReader's Limitations:
      
        The FileReader API reads the entire file into memory at once. For files larger than the memory allocation limit, this causes the issue you're observing.


=>  Comparison of Methods
               	
     (1) Full FileReader	    
             Memory : High
             Complexity : Easy
             Suitability for Large Files : Not suitable (>2GB files fail)

     (2) Chunked Reading	    
             Memory : Moderate
             Complexity : Medium
             Suitability for Large Files : Suitable

     (3) Streams API	    
             Memory : Low
             Complexity : Medium
             Suitability for Large Files : Ideal for very large files

     (4) Server-Side Processing	    
             Memory : Offloaded
             Complexity : High
             Suitability for Large Files : Best for extremely large files