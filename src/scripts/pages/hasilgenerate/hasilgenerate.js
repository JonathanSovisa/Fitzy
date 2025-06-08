import HasilGeneratePresenter from './hasilgenerate-presenter';

export default class hasilGenerate {
  async render() {
    return `
      <section class="result-section">
        <div class="notebook-wrapper">
         

          <div class="notebook-content">
            <h1><span class="bold">HASIL</span> <span class="pink">ANALISIS</span></h1>

            <div class="result-grid">
              <div class="personal-data">
                <h3>Data Pribadi</h3>
                <ul></ul>
              </div>

              <div class="recommendation">
                <h3>Rekomendasi Latihan</h3>
                <div class="recommendation-box"></div>
              </div>
            </div>

            <div class="category-box"></div>
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    HasilGeneratePresenter.init(); // load data dari localStorage dan render di DOM
  }
}
