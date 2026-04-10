
const cardDesigns = [
    { id: 1, name: "Snow White Classic", image: "https://placehold.co/400x300/f0f4f8/2c3e66?text=Snow+White+Classic", description: "Elegant white and gold design" },
    { id: 2, name: "Royal Blue", image: "https://placehold.co/400x300/2c3e66/ffffff?text=Royal+Blue", description: "Deep blue with golden accents" },
    { id: 3, name: "Rose Gold", image: "https://placehold.co/400x300/c9a84c/ffffff?text=Rose+Gold", description: "Warm rose gold elegance" },
    { id: 4, name: "Minimal Ivory", image: "https://placehold.co/400x300/f8f9fa/2c3e66?text=Minimal+Ivory", description: "Simple & modern design" },
    { id: 5, name: "Traditional Red", image: "https://placehold.co/400x300/8b1e1e/f8f9fa?text=Traditional+Red", description: "Classic red wedding card" },
    { id: 6, name: "Floral Bliss", image: "https://placehold.co/400x300/e8d5c4/2c3e66?text=Floral+Bliss", description: "Beautiful floral patterns" }
];


function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = cardDesigns.map(card => `
        <div class="card-item">
            <img src="${card.image}" alt="${card.name}">
            <div class="card-info">
                <h3>${card.name}</h3>
                <p>${card.description}</p>
                <a href="https://wa.me/917012485280?text=Hi%21%20I%27m%20interested%20in%20${encodeURIComponent(card.name)}%20wedding%20card.%20Please%20share%20price%20and%20details." class="card-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> Order on WhatsApp
                </a>
            </div>
        </div>
    `).join('');
}


function initSmoothScroll() {
    document.querySelectorAll('.nav-links a, .btn-primary[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#') && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}


document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
    initSmoothScroll();
});
