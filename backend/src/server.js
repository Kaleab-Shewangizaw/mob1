import express from 'express';



const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log('Received a request at /');
})  


app.listen(5000, () => {
    console.log('Server is running on port 5000');
})