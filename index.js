// index.js
const core = require('@actions/core');

try {
  // Get the name to greet from the inputs
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello, ${nameToGreet}!`);
  
  // Set the output
  const time = new Date().toTimeString();
  core.setOutput('time', time);
} catch (error) {
  core.setFailed(`Action failed with error ${error}`);
}
