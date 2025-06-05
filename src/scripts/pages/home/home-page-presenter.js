import API from '../../data/api';

const HomePagePresenter = {
  init() {
    const form = document.querySelector('#personalizationForm');
    const loadingScreen = document.getElementById('loading-screen');
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const payload = {
        name: formData.get('name'),
        age: Number(formData.get('age')),
        height: Number(formData.get('height')),
        weight: Number(formData.get('weight')),
        sitUpCounts: Number(formData.get('sitUpCounts')),
        broadJump: Number(formData.get('broadJump')),
      };

      // Tampilkan loading
      loadingScreen.style.display = 'flex';

      try {
        // Step 1: Memproses jawaban
        step1.classList.add('active');
        await delay(1500);
        step1.classList.remove('active');
        step1.classList.add('done');

        // Step 2: Mengklasifikasikan kelas
        step2.classList.add('active');
        await delay(1500);
        step2.classList.remove('active');
        step2.classList.add('done');

        // Step 3: Membuat rekomendasi
        step3.classList.add('active');
        await delay(1500);
        step3.classList.remove('active');
        step3.classList.add('done');

        // Fetch ke API
        const result = await API.predictFitness(payload);
        localStorage.setItem('fitzyResult', JSON.stringify(result));
        window.location.hash = '#/hasil';

      } catch (error) {
        // Tangkap dan tampilkan pesan error dari API jika ada
        console.error('Prediction error:', error);

        // Jika error.message ada, tampilkan itu, kalau tidak tampilkan pesan umum
       alert(`Gagal memproses prediksi. Coba lagi ya!\n${error.message}`);

        loadingScreen.style.display = 'none';
      }
    });
  },
};

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default HomePagePresenter;
