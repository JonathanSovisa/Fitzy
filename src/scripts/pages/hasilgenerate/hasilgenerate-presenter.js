const HasilGeneratePresenter = {
  init() {
    const resultData = JSON.parse(localStorage.getItem('fitzyResult'));
    if (!resultData || !resultData.prediction || !resultData.record) {
      document.querySelector('.result-section').innerHTML = '<p>Data tidak ditemukan. Coba ulangi test.</p>';
      return;
    }

    const user = resultData.record;
    const prediction = resultData.prediction;
    const recommendations = resultData.recommendations;

    // Personal Data
    const personalDataEl = document.querySelector('.personal-data ul');
    personalDataEl.innerHTML = `
      <li>${user.name}</li>
      <li>Usia - ${user.age} Tahun</li>
      <li>Tinggi Badan - ${user.height_cm} cm</li>
      <li>Berat Badan - ${user.weight_kg} kg</li>
      <li>Sit Up Counts - ${user.situps_count} Kali</li>
      <li>Broad Jump - ${user.broad_jump_cm} cm</li>
    `;

    // Recommendation Box
    const recommendationBox = document.querySelector('.recommendation-box');
    recommendationBox.innerHTML = `
      <div class="category-section">
        <div class="category-box">Latihan</div>
        <ul>${recommendations.exercises.map((tip) => `<li>${tip}</li>`).join('')}</ul>
      </div>

      <div class="category-section">
        <div class="category-box">Target</div>
        <ul>${recommendations.goals.map((tip) => `<li>${tip}</li>`).join('')}</ul>
      </div>
    `;

    // Ini yang bener untuk kategori kelas
    const categoryStatus = document.querySelector('.category-status');
    categoryStatus.innerHTML = `
      <div class="category-box">
        ANDA MASUK KE KELAS KATEGORI “<b>${prediction.class}</b>”
      </div>`;
  },
};

export default HasilGeneratePresenter;
