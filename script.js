/**
 * ROCH FERMETURES - SCRIPT PRINCIPAL
 * Gestion de la navigation, des données produits, des animations
 * et de la validation du formulaire.
 */

/* ==========================================================================
   DONNÉES (Produits & Avis)
   ========================================================================== */

const productsData = [
    {
        id: 'fenetres',
        title: 'Fenêtres',
        category: 'Menuiserie',
        image: 'https://static.wixstatic.com/media/082b83_bbf4389b5582478c900e7a9b5ad27f2d~mv2.png/v1/fill/w_800,h_600,al_c,q_90,enc_avif,quality_auto/fenetre.png',
        desc: 'PVC, Aluminium ou Bois. Nos fenêtres allient haute performance thermique, acoustique et esthétique contemporaine pour illuminer votre intérieur.'
    },
    {
        id: 'portes',
        title: 'Portes d\'Entrée',
        category: 'Menuiserie',
        image: 'https://static.wixstatic.com/media/082b83_1978f41ec39440c99d84160d26bd2e1f~mv2.png/v1/fill/w_800,h_600,al_c,q_90,enc_avif,quality_auto/porte.png',
        desc: 'La signature de votre façade. Sécurité renforcée, design moderne ou classique, nos portes d\'entrée accueillent vos invités avec élégance.'
    },
    {
        id: 'volets',
        title: 'Volets',
        category: 'Fermetures',
        image: 'https://static.wixstatic.com/media/082b83_227dfec3d5b44f878e8f4571045c4ba4~mv2.png/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/volets.png',
        desc: 'Volets roulants ou battants. Une isolation supplémentaire et une obscurité totale pour vos nuits, pilotables à distance.'
    },
    {
        id: 'stores',
        title: 'Stores',
        category: 'Protection Solaire',
        image: 'https://static.wixstatic.com/media/082b83_b8b82e81eeea4dda910a8c92df9b1ca5~mv2.png/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/stores.png',
        desc: 'Stores bannes pour la terrasse ou stores intérieurs. Gérez la luminosité et protégez-vous des UV avec style.'
    },
    {
        id: 'grilles',
        title: 'Grilles Métalliques',
        category: 'Sécurité Pro',
        image: 'https://static.wixstatic.com/media/082b83_2505228f98ad4b6bb4adc940cabe3a4d~mv2.jpg/v1/fill/w_800,h_600,al_c,q_80,enc_avif,quality_auto/grilles.jpg',
        desc: 'Solutions de sécurité robustes pour commerces et habitations. Rideaux métalliques et grilles extensibles sur mesure.'
    },
    {
        id: 'garages',
        title: 'Portes de Garage',
        category: 'Fermetures',
        image: 'https://static.wixstatic.com/media/082b83_69d27e9d3a7a470683eb6482340392ab~mv2.jpg/v1/fill/w_800,h_600,al_c,q_80,enc_avif,quality_auto/garage.jpg',
        desc: 'Sectionnelles, basculantes ou enroulables. Optimisez l\'espace de votre garage avec une isolation performante.'
    },
    {
        id: 'portails',
        title: 'Portails',
        category: 'Extérieur',
        image: 'https://static.wixstatic.com/media/082b83_3388b5fc8f484056a0728228a70148aa~mv2.png/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/portail.png',
        desc: 'Coulissants ou battants, en Aluminium inaltérable. Motorisation intégrée pour un confort d\'accès total.'
    },
    {
        id: 'bso',
        title: 'BSO',
        category: 'Protection Solaire',
        image: 'https://static.wixstatic.com/media/082b83_93b79431feb0459e91aa5a9023909a9d~mv2.png/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/bso.png',
        desc: 'Brise-Soleil Orientables. Le must de l\'architecture moderne pour moduler la lumière naturelle sans surchauffer.'
    },
    {
        id: 'gardecorps',
        title: 'Garde-Corps',
        category: 'Sécurité',
        image: 'https://static.wixstatic.com/media/082b83_f31743b7da6d496d99323154eb130d6a~mv2.jpg/v1/fill/w_800,h_600,al_c,q_80,enc_avif,quality_auto/gardecorps.jpg',
        desc: 'Sécurisez vos terrasses et balcons avec transparence. Verre, inox ou aluminium pour un design épuré.'
    },
    {
        id: 'pergolas',
        title: 'Pergolas',
        category: 'Outdoor Living',
        image: 'https://static.wixstatic.com/media/082b83_9a8fbb245f7d435495ddaf7c8c0abab6~mv2_d_1396_1200_s_2.jpg/v1/fill/w_800,h_600,al_c,q_80,enc_avif,quality_auto/pergola.jpg',
        desc: 'Pergolas bioclimatiques à lames orientables. Créez une nouvelle pièce de vie à l\'extérieur, utilisable toute l\'année.'
    },
    {
        id: 'verrieres',
        title: 'Verrières',
        category: 'Design Intérieur',
        image: 'https://static.wixstatic.com/media/082b83_b3aca071b6e049729a174439267106c0~mv2.jpg/v1/fill/w_800,h_600,al_c,q_80,enc_avif,quality_auto/verriere.jpg',
        desc: 'L\'esprit atelier d\'artiste. Séparez vos espaces sans perdre la lumière avec nos verrières sur mesure en alu ou acier.'
    }
];

const reviewsData = [
    { name: 'Marc D.', text: "Travail impeccable pour le changement de mes fenêtres. L'équipe est pro, ponctuelle et le chantier a été laissé très propre.", initial: 'M', color: 'bg-brand-dark' },
    { name: 'Sophie L.', text: "Très bons conseils pour notre pergola. Le commercial a pris le temps d'étudier notre terrasse. Le résultat est magnifique.", initial: 'S', color: 'bg-brand-accent' },
    { name: 'Pierre V.', text: "Portail motorisé installé la semaine dernière. Matériel de qualité, entreprise sérieuse et réactive. Merci à toute l'équipe.", initial: 'P', color: 'bg-gray-400' },
    { name: 'Julie A.', text: "Nous avons fait installer des BSO sur toute la maison. Isolation thermique au top cet été. Je recommande Roch Fermetures.", initial: 'J', color: 'bg-blue-600' },
    { name: 'Thomas R.', text: "Remplacement de porte de garage. Délais respectés et pose soignée. Le technicien a pris le temps de tout m'expliquer.", initial: 'T', color: 'bg-green-600' },
    { name: 'Élodie M.', text: "Super showroom à Publier qui permet de bien voir les produits. L'accueil est chaleureux et professionnel.", initial: 'E', color: 'bg-purple-600' },
    { name: 'Karim B.', text: "Rénovation complète de mes menuiseries. Excellent rapport qualité/prix par rapport à la concurrence locale.", initial: 'K', color: 'bg-yellow-600' },
    { name: 'Chantal P.', text: "Un SAV très réactif suite à un petit réglage nécessaire sur mon volet. C'est rassurant d'avoir des pros à proximité.", initial: 'C', color: 'bg-red-500' },
    { name: 'Nicolas F.', text: "Projet de véranda mené à bien malgré les contraintes techniques. Une équipe à l'écoute et force de proposition.", initial: 'N', color: 'bg-indigo-600' },
];

/* ==========================================================================
   INITIALISATION DU DOM
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initProductsGrid();
    initReviewsCarousel();
    initMobileMenu();
    initFormValidation();
});

/* ==========================================================================
   FONCTIONNALITÉS PRODUITS
   ========================================================================== */

function initProductsGrid() {
    const grid = document.getElementById('products-grid');
    
    productsData.forEach(product => {
        const card = document.createElement('div');
        // Structure de carte "Full Image" avec overlay
        card.className = 'group relative h-[400px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg wow-effect';
        card.onclick = () => router('product', product.id);
        
        card.innerHTML = `
            <!-- Image de fond prenant toute la place -->
            <img src="${product.image}" alt="${product.title}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            
            <!-- Overlay dégradé pour lisibilité texte -->
            <div class="absolute inset-0 product-overlay opacity-80 group-hover:opacity-90 transition-opacity"></div>
            
            <!-- Contenu texte positionné en bas -->
            <div class="absolute bottom-0 left-0 w-full p-8 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span class="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold rounded-full mb-3">${product.category}</span>
                <h4 class="text-3xl font-display font-bold text-white mb-2">${product.title}</h4>
                <div class="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    <p class="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">${product.desc}</p>
                    <div class="mt-4 flex items-center text-brand-accent font-bold text-sm">
                        Voir le produit <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

/* ==========================================================================
   CARROUSEL AVIS (Swipe + Boutons)
   ========================================================================== */

function initReviewsCarousel() {
    const track = document.getElementById('reviews-track');
    const btnPrev = document.getElementById('prev-review');
    const btnNext = document.getElementById('next-review');

    // Génération des cartes avis
    reviewsData.forEach(review => {
        const slide = document.createElement('div');
        slide.className = 'min-w-[85%] md:min-w-[40%] lg:min-w-[30%] snap-center bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-between wow-effect select-none';
        
        slide.innerHTML = `
            <div>
                <div class="text-yellow-400 flex mb-4 text-lg">★★★★★</div>
                <p class="text-gray-600 mb-6 italic text-lg leading-relaxed">"${review.text}"</p>
            </div>
            <div class="flex items-center mt-auto border-t border-gray-50 pt-4">
                <div class="w-12 h-12 ${review.color} rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-md">${review.initial}</div>
                <div>
                    <p class="font-bold text-brand-dark">${review.name}</p>
                    <p class="text-xs text-gray-400 font-medium uppercase tracking-wide">Client Vérifié</p>
                </div>
            </div>
        `;
        track.appendChild(slide);
    });

    // Navigation Boutons
    btnPrev.addEventListener('click', () => {
        track.scrollBy({ left: -400, behavior: 'smooth' });
    });
    
    btnNext.addEventListener('click', () => {
        track.scrollBy({ left: 400, behavior: 'smooth' });
    });

    // Logique Swipe Tactile (Mobile)
    let isDown = false;
    let startX;
    let scrollLeft;

    track.addEventListener('mousedown', (e) => {
        isDown = true;
        track.classList.add('cursor-grabbing');
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
    });
    track.addEventListener('mouseleave', () => {
        isDown = false;
        track.classList.remove('cursor-grabbing');
    });
    track.addEventListener('mouseup', () => {
        isDown = false;
        track.classList.remove('cursor-grabbing');
    });
    track.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 2; // Vitesse du scroll
        track.scrollLeft = scrollLeft - walk;
    });

    // Touch events pour mobile (Swipe natif amélioré)
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    track.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe Left -> Next
            track.scrollBy({ left: 300, behavior: 'smooth' });
        }
        if (touchEndX > touchStartX + 50) {
            // Swipe Right -> Prev
            track.scrollBy({ left: -300, behavior: 'smooth' });
        }
    }
}

/* ==========================================================================
   NAVIGATION & ROUTING
   ========================================================================== */

function router(view, param) {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const homeView = document.getElementById('view-home');
    const productView = document.getElementById('view-product');

    if (view === 'home') {
        productView.classList.add('hidden-page');
        productView.classList.remove('active-page');
        homeView.classList.remove('hidden-page');
        homeView.classList.add('active-page');
        
        if (param) {
            setTimeout(() => {
                const el = document.getElementById(param);
                if(el) {
                    const headerOffset = 100;
                    const elementPosition = el.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
            }, 200);
        }
    } 
    else if (view === 'product') {
        const product = productsData.find(p => p.id === param);
        if (!product) return;

        // Populate details
        document.getElementById('detail-title').innerText = product.title;
        document.getElementById('detail-category').innerText = product.category;
        document.getElementById('detail-desc').innerText = product.desc;
        document.getElementById('detail-image').src = product.image;
        
        // Auto-select in form
        const select = document.getElementById('contact-subject');
        for(let i=0; i<select.options.length; i++){
            if(product.title.includes(select.options[i].text) || select.options[i].text.includes(product.title)){
                select.selectedIndex = i;
                break;
            }
        }

        homeView.classList.add('hidden-page');
        homeView.classList.remove('active-page');
        productView.classList.remove('hidden-page');
        productView.classList.add('active-page');
    }
}

function goToQuote() {
    router('home', 'contact');
}

function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

/* ==========================================================================
   VALIDATION FORMULAIRE & ANIMATION JS
   ========================================================================== */

function initFormValidation() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formContainer = document.getElementById('form-container');
    const successMsg = document.getElementById('success-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required], input[name="nom"], input[name="prenom"], input[name="email"], input[name="phone"], input[name="cp"], input[name="ville"]');
        
        // Reset errors
        document.querySelectorAll('.error-msg').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('input').forEach(el => el.classList.remove('input-error'));

        // Check fields
        requiredFields.forEach(field => {
            const val = field.value.trim();
            const parent = field.closest('.form-group'); // Assurez-vous d'avoir des wrappers form-group
            
            if (!val) {
                isValid = false;
                field.classList.add('input-error');
                // Animation "Shake" sur le champ vide
                field.classList.add('animate-shake');
                setTimeout(() => field.classList.remove('animate-shake'), 500);
                
                if (parent && parent.querySelector('.error-msg')) {
                    parent.querySelector('.error-msg').classList.remove('hidden');
                }
            }
            
            // Validation Email simple
            if (field.type === 'email' && val) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(val)) {
                    isValid = false;
                    field.classList.add('input-error');
                    field.classList.add('animate-shake');
                    setTimeout(() => field.classList.remove('animate-shake'), 500);
                    if (parent) parent.querySelector('.error-msg').classList.remove('hidden');
                }
            }
        });

        if (isValid) {
            // Simulation envoi avec animation bouton
            const btnText = submitBtn.querySelector('span');
            const originalText = btnText.innerText;
            
            btnText.innerText = 'Envoi en cours...';
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-75', 'cursor-not-allowed');

            setTimeout(() => {
                // Succès : Masquer formulaire, afficher message
                form.style.display = 'none';
                formContainer.querySelector('h3').style.display = 'none';
                formContainer.querySelector('p').style.display = 'none';
                
                successMsg.classList.remove('hidden');
                
                // Scroll vers le message si nécessaire
                successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 1500);
        }
    });
    
    // Retirer l'erreur quand l'utilisateur tape
    form.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('input-error');
            const parent = this.closest('.form-group');
            if(parent && parent.querySelector('.error-msg')) {
                parent.querySelector('.error-msg').classList.add('hidden');
            }
        });
    });
}