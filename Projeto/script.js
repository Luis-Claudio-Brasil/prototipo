// Dados dos serviços (simulando API)
const services = [
    {
        title: "Alimentos",
        description: "Insumos e/ou serviços relacionados a industria alimentícia",
        image: "./images/alimentos.jpg"
    },
    {
        title: "Higiene",
        description: "Insumos e/ou serviços relacionados a higiene",
        image: "./images/higiene.jpg"
    },
    {
        title: "Construção Civil",
        description: "Insumos e/ou serviços de construção civil",
        image: "./images/construcao_civil.jpg"
    },
    {
        title: "Tecnologia da Informação",
        description: "Insumos e/ou serviços de TI",
        image: "./images/ti.jpg"
    }
];

// Gerar cards de serviços
const servicesGrid = document.querySelector('.services-grid');

services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `
        <img src="${service.image}" alt="${service.title}">
        <div class="service-info">
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>
    `;
    servicesGrid.appendChild(card);
});

// Funcionalidade da barra de pesquisa
document.querySelector('.search-bar button').addEventListener('click', () => {
    const searchTerm = document.querySelector('.search-bar input').value;
    if(searchTerm) {
        // Lógica de pesquisa aqui
        alert(`Pesquisando por: ${searchTerm}`);
    }
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});