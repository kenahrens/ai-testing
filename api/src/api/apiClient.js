import got from 'got';

const apiClient = {
  async chatCompletions(prompt, max_tokens) {
    try {
      // Note: from .env file locally or ENV VAR in K8S
      const url = process.env.TGI_API_URL;
      
      // See TGI documentation
      // https://github.com/huggingface/text-generation-inference
      const data = {
        'json': {
          'model': 'tgi',
          'messages': [
            {
              'role': 'user',
              'content': prompt,
            }
          ],
          'max_tokens': max_tokens,
        }
      }
      const response = await got.post(url, data).json();
      return response;
    } catch (error) {
      console.error('API call failed:', error.message);
      throw error; // Rethrow to handle it in the calling function
    }
  }
};

export default apiClient;
