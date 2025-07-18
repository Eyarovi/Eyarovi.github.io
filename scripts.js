document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        themeToggle.textContent = body.classList.contains('dark-theme') 
            ? 'Светлая тема' 
            : 'Темная тема';
    });

    const infoBtn = document.getElementById('infoBtn');
    const storageBtn = document.getElementById('storageBtn');
    const infoSection = document.getElementById('information-section');
    const storageSection = document.getElementById('storage-section');

    infoBtn.classList.add('active');
    infoSection.classList.add('active');

    infoBtn.addEventListener('click', function() {
        this.classList.add('active');
        storageBtn.classList.remove('active');
        infoSection.classList.add('active');
        storageSection.classList.remove('active');
    });

    storageBtn.addEventListener('click', function() {
        this.classList.add('active');
        infoBtn.classList.remove('active');
        storageSection.classList.add('active');
        infoSection.classList.remove('active');
    });

    fetch('storage-data.json')
        .then(response => response.json())
        .then(data => {
            const storageContainer = document.querySelector('.storage-items');
            storageContainer.innerHTML = '';
            
            data.items.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'storage-item';
                itemElement.innerHTML = `
                    <div class="item-icon">${item.icon}</div>
                    <div class="item-info">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                    </div>
                    <a href="${item.downloadUrl}" class="download-btn" download>Скачать</a>
                `;
                storageContainer.appendChild(itemElement);
            });
        });
});