
const express = require('express');
const app = express();
const brain = require('brain.js');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/test', function(request, response){
  
  var output = net.run(request.body.input);

  // console.log(output);
  response.send("input: " + request.body.input + "<br/>" + "output: " + JSON.stringify(output));
})

// app.listen(3000);

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

var net = new brain.recurrent.LSTM();

net.train([
  {
    "input": "noisy fan",
    "output": "cooling"
  },
  {
    "input": "my unit test failed",
    "output": "software"
  },
  {
    "input": "tried the program, but it was buggy",
    "output": "software"
  },
  {
    "input": "i need a new power supply",
    "output": "hardware"
  },
  {
    "input": "the drive has a 2TB capacity",
    "output": "hardware"
  },
  {
    "input": "unit-tests",
    "output": "software"
  },
  {
    "input": "program",
    "output": "software"
  },
  {
    "input": "power supply",
    "output": "hardware"
  },
  {
    "input": "drive",
    "output": "hardware"
  },
  {
    "input": "it needs more memory",
    "output": "hardware"
  },
  {
    "input": "code",
    "output": "software"
  },
  {
    "input": "i found some bugs in the code",
    "output": "software"
  },
  {
    "input": "i swapped the memory",
    "output": "hardware"
  },
  {
    "input": "i tested the code",
    "output": "software"
  },
  {
    "input": "i love computers",
    "output": "hardware"
  },
  {
    "input": "programming",
    "output": "software"
  },
  {
    "input": "i broke my pc",
    "output": "hardware"
  },
  {
    "input": "computer",
    "output": "hardware"
  },
  {
      "input": "buy me a laptop",
      "output": "hardware"
  },
  {
      "input": "i love to play games",
      "output": "software"
  }
], {iterations: 10});

