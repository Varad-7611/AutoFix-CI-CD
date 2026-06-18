const express = require('express');
const http = require('http');
const app = express();
app.get('/', (req, res) => res.send('Hello World!'));

const server = app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
    
    http.get('http://localhost:5000/', (res) => {
        console.log(`Status: ${res.statusCode}`);
        if (res.statusCode === 200) {
            console.log('Test passed: Server is responding correctly.');
            server.close();
            process.exit(0);    
        } else {
            server.close(); 
            process.exit(1);
        }

    }).on('error', (err) => {
        console.error(`Test failed: ${err.message}`);
        server.close();
        process.exit(1);
    });
});