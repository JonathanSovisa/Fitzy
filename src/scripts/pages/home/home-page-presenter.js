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

      // Ambil formData apa adanya
      const formData = new FormData(form);
      const payload = {
        name: formData.get('name').trim(),
        age: Number(formData.get('age')),
        height_cm: Number(formData.get('height')),
        weight_kg: Number(formData.get('weight')),
        situps_count: Number(formData.get('situps_count')),
        broad_jump_cm: Number(formData.get('broad_jump_cm')),
      };

      console.log('Payload ke API:', payload);

      loadingScreen.style.display = 'flex';

      try {
        // Tampilkan animasi loading
        await runLoadingSteps();

        // Kirim ke API, biar API melakukan semua validasi
        const result = await API.predictFitness(payload);

        // Jika sukses
        localStorage.setItem('fitzyResult', JSON.stringify(result));
        window.location.hash = '#/hasil';
      } catch (error) {
        // Tampilkan pesan error langsung dari API
        alert(error.message);
        console.error('Error saat submit:', error);
      } finally {
        loadingScreen.style.display = 'none';
      }
    });
  },
};

async function runLoadingSteps() {
  const steps = ['step1', 'step2', 'step3'];
  for (const stepId of steps) {
    const step = document.getElementById(stepId);
    step.classList.add('active');
    await delay(1000);
    step.classList.remove('active');
    step.classList.add('done');
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default HomePagePresenter;
