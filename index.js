// const express = require('express');
// const multer = require('multer');
// const AWS = require('aws-sdk');
// const { v4: uuidv4 } = require('uuid');
// const cors = require("cors");
// const aws = require("aws-sdk/global");
// const bodyParser=require("body-parser");  
// const multerS3 = require("multer-s3");

// const {Configuration, OpenAIApi}=require('openai');

// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use(bodyParser.json());
// // const upload = multer({ dest: 'uploads/' });

// // const s3 = new AWS.S3({
// //   accessKeyId: 'AKIAXBG4DZZ26XZQKV65',
// //   secretAccessKey: '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',
// // });

// //


// const config = new Configuration({
//   organization: "org-org-Zh60JmV1YtuRjHpnsU92LCfI",
//   apiKey: "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",
// });
// const openai = new OpenAIApi(config);


// app.post('/chat',async(req,resp)=>{
//   const{prompt}=req.body
//   console.log(prompt)
//   const complication=await openai.createCompletion({
//     model:"gpt-3.5-turbo",
//     max_tokens:512,
//     temperature:0,
//     prompt:prompt
//   })
//   resp.send(complication.data.choices[0].text)
// })


// app.listen(8000, () => {
//   console.log('Server running on port 8000');
// });


const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(config);

// Setup server

const app = express();
app.use(bodyParser.json());
app.use(cors());

// endpoint for ChatGPT

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
    prompt: prompt,
  });
  res.send(completion.data.choices[0].text);
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
