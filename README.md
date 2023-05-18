# Ethereum Bootcamp
Ethereum bootcamp by Alchemy University.

## Chapter 1:
  ### Steps - Find a color using hash value:
      1) Setup a new NodeJs project with Typescript.
        yarn init
        yarn add @types/node typescript 
        yarn add -D ts-node  
        // create tsconfig file
        yarn tsc --init --rootDir src --outDir ./bin --esModuleInterop --lib ES2019 --module commonjs --noImplicitAny true

      2) Setup testing library
        npm install chai mocha ts-node @types/chai @types/mocha --save-dev
      
      3) Setup script config
        "scripts": {
            "build": "tsc",
            "start": "node ./bin/app.js",
            "dev": "ts-node ./src/app.ts",
            "test": "env TS_NODE_COMPILER_OPTIONS='{\"module\": \"commonjs\" }' mocha -r ts-node/register 'src/tests/**/*.ts'"
          },
       4) Setup ethereum cryptography libray
           yarn add ethereum-cryptography
           
   ### Problem:
        Given a SHA256 hash, find the color input that would generate that hash. You can assume that all the hashes be generated only from colors provided in the COLORS array.

        To take the hash of a color, first use utf8ToBytes to translate the string to bytes. Then, use sha256 to hash it.
        When you want to compare two hashes, first use toHex to turn each hash from a Uint8Array to a string of hexadecimal characters.

   ### Solution:
        function findColor(hash:any) {
          return (COLORS.find((x) => (toHex(sha256(utf8ToBytes(x)))) === toHex(hash)))
        }
        
  ### Note:
      -> toHex,sha256,utf8ToBytes - those algorithm used from ethereum-cryptography library.
      -> find - is JavaScript method, which return once each element of the array predicted true by ascending order.
      -> Process of mining:  Input -> Bytes -> hash -> hex. 
        

