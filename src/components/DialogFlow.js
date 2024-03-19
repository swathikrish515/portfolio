const dialogflow = require('@google-cloud/dialogflow');
// dialogflow.js
const { v4: uuidv4 } = require('uuid');


const projectId = 'botagentswathiportfolio'; // Replace with your Dialogflow project ID
const sessionId =  uuidv4(); // Generate a unique session ID for each user
const languageCode = 'en-US'; // Language code (e.g., 'en-US')

const sessionClient = new dialogflow.SessionsClient();

async function detectIntent(text) {
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: text,
        languageCode: languageCode,
      },
    },
  };

  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;
  return result.fulfillmentText;
}

module.exports = {
  detectIntent,
};
