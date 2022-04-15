const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 4000;
const indexRouter = require('./routes/index.js');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json({ strict: false }));
app.use(cookieParser());
app.use(cors());
app.use('/', indexRouter);

// /order, user (routes/index.js)
// /:user_id/buy,sell,borrow 한 곳에? post에 따라? getdp Efk?
// /signout, signin, signup

app.listen(port, () => {
  console.log(`서버가 ${port}번에서 작동중입니다.`);
});
