import CONFIG from '../config';

const ENDPOINTS = {
  PREDICT: `${CONFIG.BASE_URL}/api/prediction/predict`,
};

const API = {
  async predictFitness(payload) {
    try {
      const response = await fetch(ENDPOINTS.PREDICT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        // Jika status error, lempar pesan error dari response details jika ada
        if (result.details && Array.isArray(result.details)) {
          // Ambil semua message dari details dan gabungkan jadi satu string
          const messages = result.details.map(d => d.message).join(', ');
          throw new Error(messages);
        }
        // Jika tidak ada details, lempar pesan umum
        throw new Error(result.message || `HTTP error! status: ${response.status}`);
      }

      if (result.success) {
        return result.data;
      } else {
        throw new Error(result.message || 'Prediction failed');
      }
    } catch (error) {
      console.error('Prediction error:', error);
      throw error;
    }
  },
};

export default API;
