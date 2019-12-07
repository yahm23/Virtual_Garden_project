const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const parser = require('body-parser');
app.use(parser.json());