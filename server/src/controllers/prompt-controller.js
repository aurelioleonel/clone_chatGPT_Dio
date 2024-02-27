const openai = require("../config/openai");
const inputPrompt = require("../models/input-prompt");

module.exports = {
  async sendText(req, res) {
    const openaiAPI = openai.configuration();
    const inputModel = new inputPrompt(req.body);

    try {
      const response = await openaiAPI.createChatCompletion(
        openai.textCompletion(inputModel)
      );

      return res.status(200).json({
        sucess: true,
        data: response.data.choices[0].text,
      });
    } catch (error) {
      return res.status(400).json({
        sucess: false,
        eroor: error.response
          ? error.response.data
          : "Houve um erro no servidor!!!",
      });
    }
  },
};

