// Init Lucide Icons
lucide.createIcons();

// --- Data for Services ---
const serviceData = {
    fenetres: {
        title: "Fenêtres et Baies",
        text: `
            <p class="font-bold text-white mb-2">Vous avez le choix, bois/aluminium, PVC ou aluminium ?</p>
            <p>Toutes nos fenêtres offrent une performance thermique et acoustique.</p>
            <p class="italic text-gray-400 mb-4">Si vous ne savez pas vers quelle fenêtre vous orienter, n'hésitez pas à nous contacter pour trouver celle qui correspond le plus à vos besoins.</p>
            
            <ul class="space-y-3 list-disc pl-5">
                <li><strong class="text-brand-accent">Le bois/aluminium</strong> : offrent une alliance parfaite des matières et s'adaptent parfaitement à votre intérieur grâce à un large choix de coloris.</li>
                <li><strong class="text-brand-primary">Les fenêtres PVC</strong> : proposent un excellent rapport qualité prix, conçues avec un renfort métallique interne pour une longue durée de vie.</li>
                <li><strong class="text-white">Les fenêtres aluminium</strong> : très esthétiques, un large choix de couleurs, l'aluminium permet de réaliser des fenêtres de toutes tailles, y compris les plus grandes.</li>
            </ul>
            
            <div class="mt-6 p-4 bg-white/5 rounded-lg border-l-4 border-brand-primary">
                <p class="font-bold">Appelez-nous maintenant</p>
                <p>Agence de Thonon-les-Bains - Rendez-vous dans votre showroom</p>
                <p class="text-sm mt-1">140, rue du Pont de Dranse "La Petite Arche", 74500 Publier</p>
                <p class="text-xs text-gray-500">Situé entre l'usine des Eaux minérales d'Evian et la Spie proche de Vongy</p>
            </div>
        `,
        images: [
            "images/fenetres/bois-alu.avif", 
            "images/fenetres/pvc.avif",
			"images/fenetres/alu.avif"
        ]
    },
    volets: {
        title: "Volets & Protections",
        text: `
            <p class="font-bold text-white mb-2">Sécurité, Confort et Isolation.</p>
            <p>Nos solutions de volets s'adaptent à toutes les configurations de construction, en neuf comme en rénovation.</p>
            
            <ul class="space-y-3 list-disc pl-5 mt-4">
                <li><strong class="text-brand-accent">Volets Roulants</strong> : Motorisation Somfy IO, pilotage à distance via smartphone. Disponible en version Solaire autonome.</li>
                <li><strong class="text-brand-primary">Brise-Soleil Orientables (BSO)</strong> : La gestion idéale de la lumière. Lames orientables pour se protéger du soleil tout en conservant la luminosité.</li>
                <li><strong class="text-white">Volets Battants</strong> : Le charme du traditionnel (Alu ou Bois) avec zéro entretien. Possibilité de motorisation discrète.</li>
            </ul>
            
            <p class="mt-4">Tous nos volets contribuent à l'isolation thermique hiver comme été.</p>
        `,
        images: [
            "images/volets/01.avif", 
            "images/volets/02.avif",
			"images/volets/03.avif"
        ]
    },
    portes: {
        title: "Portes d'Entrée",
        text: `
            <p class="font-bold text-white mb-2">Les portes d'entrées, laquelle choisir ? Sur quoi se baser ?</p>
            
            <div class="space-y-4 mt-4">
                <div>
                    <strong class="text-brand-accent block text-lg">Une porte blindée ?</strong>
                    <p>Elles sont de plus en plus performantes et innovantes en termes de sécurité, elles sont certifiées et sont conçues avec une structure en acier. Elles offrent également une excellente isolation thermique et acoustique.</p>
                </div>
                
                <div>
                    <strong class="text-brand-primary block text-lg">Les portes en PVC ?</strong>
                    <p>Elles contribuent à l'isolation extérieur et répondent en tout points à vos critères esthétiques. De la même manière, elles sont très sécurisées par leurs nombreux points de fermetures.</p>
                </div>
                
                <div>
                    <strong class="text-white block text-lg">Les portes en aluminium ?</strong>
                    <p>Signature unique selon vos goûts, Roch Fermetures travaille avec les produits K-Line qui proposent un choix de design unique répondant aux besoins de chacun.</p>
                </div>
                
                <div>
                    <strong class="text-brand-accent block text-lg">Les portes d'entrées bois/aluminium ?</strong>
                    <p>Chaleureux de l'intérieur, modifiables selon vos envies.</p>
                </div>
            </div>
            
            <p class="mt-6 italic font-bold">Pour être orienté selon vos besoins, prenez contact directement avec nous.</p>
        `,
        images: [
            "images/portes/01.avif", 
            "images/portes/02.avif",
			"images/portes/03.avif"
        ]
    },
    exterieur: {
        title: "Vie Extérieure & Pergolas",
        text: `
            <strong class="text-xl text-brand-accent block mb-2">Pergolas</strong>
            <p class="mb-4">Structure design et innovante, la pergola bioclimatique est équipée de lames orientables jusqu’à 160° pour une maîtrise parfaite de l’ensoleillement.</p>
            
            <p>En pose libre ou murale, en un ou plusieurs modules, la pergola se dote d’un toit plat et de gouttières pour permettre l’évacuation de l’eau.</p>
            
            <p class="mt-2 font-bold text-white">Nombreuses options disponibles :</p>
            <ul class="list-disc pl-5 mb-4 text-sm text-gray-400">
                <li>Éclairage par leds intégré dans les lames</li>
                <li>Système de chauffage</li>
                <li>Stores latéraux zippés</li>
            </ul>
            
            <p class="text-sm bg-brand-dark/50 p-3 rounded border border-white/10">Note : La pergola bioclimatique ne permet pas d’être Hors d’air hors d’eau telle une véranda.</p>
        `,
        images: [
            "images/vieext/01.avif", 
            "images/vieext/02.avif",
			"images/vieext/03.avif"
        ]
    },
    garage: {
        title: "Garage & Portails",
        text: `
            <p class="mb-4">Nos portes de garage s'intègrent à tous les types de garage, vous offrant un choix maximum de finitions, de couleurs et d'accessoires modernes et fonctionnels ainsi qu'un confort de pose et de réglage optimum.</p>
            
            <div class="grid grid-cols-1 gap-4 mb-4">
                <div>
                    <strong class="text-brand-primary block">Plusieurs types de portes de garage :</strong>
                    <ul class="list-disc pl-5">
                        <li>Sectionnelles (plafond ou latérales)</li>
                        <li>Enroulables (gain de place)</li>
                    </ul>
                </div>
                <div>
                    <strong class="text-brand-accent block">Types de manœuvres :</strong>
                    <ul class="list-disc pl-5">
                        <li>Portes motorisées (Somfy)</li>
                        <li>Manuelles</li>
                    </ul>
                </div>
            </div>
            
            <p>Des dizaines d'accessoires sont mis à votre disposition pour personnaliser votre future porte (hublots, portillons intégrés...).</p>
        `,
        images: [
            "images/garage/01.avif", 
            "images/garage/02.avif",
			"images/garage/03.avif"
        ]
    }
};

let currentActiveCategory = null;

function openService(category, element) {
    const panel = document.getElementById('details-panel');
    const title = document.getElementById('detail-title');
    const text = document.getElementById('detail-text');
    const img1 = document.getElementById('detail-img-1');
    const img2 = document.getElementById('detail-img-2');
    const img3 = document.getElementById('detail-img-3');
    
    // Gestion des classes actives sur les cartes (bordure bleue)
    document.querySelectorAll('.service-card').forEach(el => el.classList.remove('active-card'));

    // Si on clique sur la même catégorie déjà ouverte, on ferme
    if (currentActiveCategory === category) {
        closeDetails();
        return;
    }

    // Populate Content
    const data = serviceData[category];
    if (!data) return;

    title.innerText = data.title;
    text.innerHTML = data.text;
    
    // Assignation des sources
    if(data.images[0]) img1.src = data.images[0];
    if(data.images[1]) img2.src = data.images[1];
    if(data.images[2]) img3.src = data.images[2];

    // --- NOUVEAU CODE POUR GÉRER LE REDIMENSIONNEMENT ---
    const images = [img1, img2, img3];
    images.forEach(img => {
        // On s'assure que l'image a des sources avant d'appliquer les styles
        if(img.src) {
             // 1. On nettoie les classes qui pourraient forcer un "crop" ou une hauteur fixe
            img.classList.remove('object-cover', 'h-48', 'h-64', 'h-full', 'h-32');
            
            // 2. On applique les classes pour un redimensionnement proportionnel
            // w-full : Prend toute la largeur du conteneur parent
            // h-auto : La hauteur s'adapte automatiquement selon le ratio de l'image
            img.classList.add('w-full', 'h-auto', 'rounded-lg', 'block');
        }
    });
    // ----------------------------------------------------

    // Show Panel
    panel.classList.add('open');
    element.classList.add('active-card');
    
    // Scroll to panel slightly offset
    setTimeout(() => {
        panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);

    currentActiveCategory = category;
}

function closeDetails() {
    const panel = document.getElementById('details-panel');
    panel.classList.remove('open');
    document.querySelectorAll('.service-card').forEach(el => el.classList.remove('active-card'));
    currentActiveCategory = null;
}
// ... Le reste du script (Navbar, Menu Mobile, Observer) reste identique ...
// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
if(navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('py-2');
            if(navbar.firstElementChild) {
                navbar.firstElementChild.classList.add('bg-brand-dark/90');
                navbar.firstElementChild.classList.replace('glass-panel', 'bg-brand-dark');
            }
        } else {
            navbar.classList.remove('py-2');
            if(navbar.firstElementChild) {
                navbar.firstElementChild.classList.remove('bg-brand-dark/90');
                navbar.firstElementChild.classList.replace('bg-brand-dark', 'glass-panel');
            }
        }
    });
}

// Mobile Menu
const mobileBtn = document.getElementById('mobile-menu-btn');
const closeBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    if(!mobileMenu) return;
    const isClosed = mobileMenu.classList.contains('translate-x-full');
    if (isClosed) {
        mobileMenu.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
    } else {
        mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = '';
    }
}

if(mobileBtn) mobileBtn.addEventListener('click', toggleMenu);
if(closeBtn) closeBtn.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// Intersection Observer for Fade In Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, observerOptions);

document.querySelectorAll('section > div').forEach((el) => {
    el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
    observer.observe(el);
});