const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  let promptData = req.body.promptData;
  const response = await openai.createCompletion("text-ada-001", {
    prompt: promptData,
    temperature: 0.3,
    max_tokens: 60,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  res.status(200).json({ data: `${response.data.choices[0].text}` });
}
