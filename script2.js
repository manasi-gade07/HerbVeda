function showCategory(category) {
    var modal = document.getElementById("categoryModal");
    var modalContent = document.getElementById("modal-content");
  
    if (category === 'skinCare') {
      modalContent.innerHTML = `
        <h3>Skin Care</h3>
        <ul>
          <li>🌿 Aloe Vera</li>
          <li>🌿 Neem</li>
          <li>🌿 Turmeric</li>
          <li>🌿 Tulsi</li>
        </ul>
        <button onclick="closeModal()">Close</button>
      `;
    } else if (category === 'hairCare') {
      modalContent.innerHTML = `
        <h3>Hair Care</h3>
        <ul>
          <li>🌿 Hibiscus</li>
          <li>🌿 Amla</li>
          <li>🌿 Fenugreek</li>
          <li>🌿 Bhringraj</li>
        </ul>
        <button onclick="closeModal()">Close</button>
      `;
    } else if (category === 'diseases') {
      modalContent.innerHTML = `
        <h3>Diseases</h3>
        <ul>
          <li>🌿 Echinacea</li>
          <li>🌿 Garlic</li>
          <li>🌿 Ginger</li>
          <li>🌿 Elderberry</li>
        </ul>
        <button onclick="closeModal()">Close</button>
      `;
    } else if (category === 'nutrition') {
      modalContent.innerHTML = `
        <h3>Nutrition</h3>
        <ul>
          <li>🌿 Moringa</li>
          <li>🌿 Spirulina</li>
          <li>🌿 Chlorella</li>
          <li>🌿 Flaxseeds</li>
        </ul>
        <button onclick="closeModal()">Close</button>
      `;
    } else if (category === 'fitness') {
      modalContent.innerHTML = `
        <h3>Fitness</h3>
        <ul>
          <li>🌿 Ashwagandha</li>
          <li>🌿 Ginseng</li>
          <li>🌿 Rhodiola</li>
          <li>🌿 Maca Root</li>
        </ul>
        <button onclick="closeModal()">Close</button>
      `;
    } else if (category === 'mentalHealth') {
      modalContent.innerHTML = `
        <h3>Mental Health</h3>
        <ul>
          <li>🌿 Lavender</li>
          <li>🌿 Chamomile</li>
          <li>🌿 St. John's Wort</li>
          <li>🌿 Lemon Balm</li>
        </ul>
        <button onclick="closeModal()">Close</button>
      `;
    }
  
    modal.style.display = "block";
  }
  
  function closeModal() {
    var modal = document.getElementById("categoryModal");
    modal.style.display = "none";
  }
  