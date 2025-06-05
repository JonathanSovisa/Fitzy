

const HasilGeneratePresenter = {
  init() {
    const resultData = JSON.parse(localStorage.getItem('fitzyResult'));
    if (!resultData) {
      document.querySelector('.result-section').innerHTML = '<p>Data tidak ditemukan. Coba ulangi test.</p>';
      return;
    }

    const user = resultData.userInfo;
    const analysis = resultData.analysis;
    const rec = resultData.recommendations?.[0];

    const personalDataEl = document.querySelector('.personal-data ul');
    personalDataEl.innerHTML = `
      <li>${user.name}</li>
      <li>Usia - ${user.age} Tahun</li>
      <li>Tinggi Badan - ${user.height} cm</li>
      <li>Berat Badan - ${user.weight} kg</li>
      <li>Sit Up Counts - ${user.sitUpCounts} Kali</li>
      <li>Broad Jump - ${user.broadJump} cm</li>
    `;

    const recommendationBox = document.querySelector('.recommendation-box');
    if (rec) {
      recommendationBox.innerHTML = `
        <h4>${rec.title}</h4>
        <p>${rec.message}</p>
        <ul>${rec.tips.map((tip) => `<li>${tip}</li>`).join('')}</ul>
      `;
    } else {
      recommendationBox.innerHTML = '<p>Tidak ada rekomendasi tersedia.</p>';
    }

    const categoryBox = document.querySelector('.category-box');
    categoryBox.innerHTML = `ANDA MASUK KE KELAS KATEGORI “<b>${analysis.fitnessClass}</b>”`;
  },
};

export default HasilGeneratePresenter;