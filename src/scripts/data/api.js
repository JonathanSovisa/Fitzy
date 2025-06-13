import CONFIG from '../config';

const ENDPOINTS = {
  PREDICT: `${CONFIG.BASE_URL}/predict`,
};

const API = {
  async predictFitness(payload) {
    const response = await fetch(ENDPOINTS.PREDICT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    console.log('API Response:', result);

    if (!response.ok || result.success === false) {
      // Default fallback message
      let errorMessage = 'Mohon isi semua data anjing benar sesuai rentang nilai.';

      // Jika ada array errors, ambil semua msg-nya
      if (Array.isArray(result.errors) && result.errors.length > 0) {
        errorMessage = result.errors.map(err => err.msg).join(', ');
      }

      // Jika tidak ada errors[] tapi ada field message
      else if (typeof result.message === 'string') {
        errorMessage = result.message;
      }

      // Jika masih tidak ada, pakai result.error
      else if (typeof result.error === 'string') {
        errorMessage = result.error;
      }

      throw new Error(errorMessage);
    }

    return result;
  },
};

export default API;
