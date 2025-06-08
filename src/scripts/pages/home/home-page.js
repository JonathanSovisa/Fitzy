import HomePagePresenter from './home-page-presenter';
import API from '../../data/api.js';


export default class HomePage {
  async render() {
    return `
     <section class="hero">
       <img src="./images/wave-lines.png" alt="Wave background" class="hero-bg" />
        <div class="hero-text">
          <h1>WELCOME TO <span>FITZY</span></h1>
          <p>Your AI-powered fitness buddy that builds <span>your workout plan, just for you</span></p>
          <a href="#personalization" class="cta-button">CHECK YOUR CLASS NOW!</a>
        </div>
        <div class="hero-image">
          <img src="./images/fit-guy.png" alt="Fitness Guy" />
        </div>
      </section>

      <section class="main-about">
        <div class="about-container">
          <div id="about" class="about-icon">
            <img src="./images/fitzy-logo.png" alt="Dumbbell Icon" />
          </div>
          <div class="about-content">
            <h2>ABOUT</h2>
            <p>Fitzy adalah platform kebugaran berbasis web yang menggabungkan teknologi kecerdasan buatan (AI) dengan pendekatan personal untuk menciptakan pengalaman latihan yang lebih efektif, menyenangkan, dan relevan bagi setiap individu — terutama pemula. Kami percaya bahwa kebugaran itu bukan soal siapa yang paling kuat, tapi siapa yang paling konsisten dan nyaman menjalani prosesnya.</p>
            <p>Melalui fitur AI-powered training personalization, Fitzy secara otomatis merekomendasikan program latihan dan memprediksi performa pengguna berdasarkan data seperti usia, tinggi, berat badan, serta riwayat latihan. Fitzy hadir sebagai “fitness buddy” yang nggak cuma pintar, tapi juga peduli untuk membantu pengguna membangun rutinitas yang sesuai dengan tubuh dan tujuannya masing-masing.</p>
          </div>
        </div>
      </section>

      <section class="start-from">
        <h2>START FROM</h2>
        <div class="start-from-cards">
          <div class="card">
            <div class="icon-wrapper square">
              <img src="./images/icon-brain.png" alt="Brain Icon" />
            </div>
            <h3>“Capek saat latihan? Bingung mulai dari mana?”</h3>
            <p>Tenang, kami di sini bantu kamu. Ceritain dulu aja kendala kamu, biar kami sesuaikan program terbaik buat kamu.</p>
          </div>
          <div class="card">
            <div class="icon-wrapper circle">
              <img src="./images/icon-chat.png" alt="Chat Icon" />
            </div>
            <h3>“Setiap orang punya cerita, termasuk soal rasa lelah atau bingung di gym.”</h3>
            <p>Yuk, mulai dari ngobrol dulu. Kami siap dengerin dan bantu sesuai kebutuhan kamu.</p>
          </div>
          <div class="card">
            <div class="icon-wrapper triangle">
              <img src="./images/icon-apple.png" alt="Apple Icon" />
            </div>
            <h3>“Lelah, kurang motivasi, atau gak yakin sama teknikmu?”</h3>
            <p>Gak apa-apa kok, semua pernah ngerasain. Kasih tahu kami apa yang kamu rasain, dan kami bantu bikin rencana yang pas.</p>
          </div>
        </div>
    </section>

<section id="personalization" class="personalization-section">
  <h2>PERSONALIZATION</h2>
  <form class="personalization-form" id="personalizationForm">
    
    <div class="form-row">
      <div class="form-group">
        <label for="name">Nama</label>
        <input type="text" id="name" name="name" placeholder="Nama" />
      </div>

      <div class="form-group">
        <label for="age">Umur</label>
        <input type="number" id="age" name="age" placeholder="Age" />
      </div>

      <div class="form-group">
        <label for="weight">Berat Badan (kg)</label>
        <input type="number" id="weight" name="weight" placeholder="Weight" />
      </div>

      <div class="form-group">
        <label for="height">Tinggi Badan (cm)</label>
        <input type="number" id="height" name="height" placeholder="Height" />
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label for="sitUpCounts">Jumlah Sit Up</label>
        <input type="number" id="sitUpCounts" name="sitUpCounts" placeholder="Sit Up Counts" />
      </div>

      <div class="form-group">
        <label for="broadJump">Jarak Broad Jump (cm)</label>
        <input type="number" id="broadJump" name="broadJump" placeholder="Broad Jumps" />
      </div>
    </div>

    <button type="submit">Mulai Test</button>
  </form>
</section>



 <!-- 👇 Ini bagian loading screen -->
      <div id="loading-screen" style="display: none;" class="loading-screen">
        <ul id="loading-steps">
          <li id="step1">🔄 Memproses Data Diri Anda...</li>
          <li id="step2">⏳ Mengklasifikasikan Kelas Anda...</li>
          <li id="step3">⏳ Membuat Hasil Rekomendasi...</li>
        </ul>
      </div>

    `;
  }

  async afterRender() {
    HomePagePresenter.init();

    
  }
}
