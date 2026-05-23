const leads = [
  {
    id: 1,
    name: "Иван",
    course: "JavaScript",
    budget: 30000,
    status: "new"
  },
  {
    id: 2,
    name: "Анна",
    course: "Python",
    budget: 45000,
    status: "inWork"
  },
  {
    id: 3,
    name: "Максим",
    course: "AI",
    budget: 70000,
    status: "hot"
  },
  {
    id: 4,
    name: "Елена",
    course: "JavaScript",
    budget: 25000,
    status: "closed"
  },
  {
    id: 5,
    name: "Олег",
    course: "AI",
    budget: 90000,
    status: "hot"
  }
]

function getStatusColorClass(status) {
    switch (status) {
        case "new": return "status-new";
        case "inWork": return "status-inWork";
        case "closed": return "status-closed";
        case "hot": return "status-hot";
        default: return "";
    }
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(amount);
}

function createLeadCard(lead) {
    return `
        <div class="lead-card" data-id="${lead.id}">
        <div class="lead-header">
            <h3 class="lead-name">${lead.name}</h3>
            <span class="lead-status ${getStatusColorClass(lead.status)}">${lead.status}</span>
        </div>
        <div class="lead-details">
            <p><strong>Курс:</strong> ${lead.course}</p>
            <p><strong>Бюджет:</strong> ${formatCurrency(lead.budget)}</p>
        </div>
        </div>
    `;
}

function renderLeads(leadsToRender) {
    const leadsContainer = document.getElementById('leads-container');
    leadsContainer.innerHTML = '';
    leadsToRender.forEach(lead => {
        leadsContainer.innerHTML += createLeadCard(lead);
    });
}

function updateLeadsDisplay() {
    let currentLeads = [...leads]; // Создаем копию, чтобы не изменять оригинал при фильтрации


    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        currentLeads = currentLeads.filter(lead =>
        lead.name.toLowerCase().includes(searchTerm)
        );
    }

    const statusFilter = document.getElementById('status-filter').value;
    if (statusFilter) {
        currentLeads = currentLeads.filter(lead => lead.status === statusFilter);
    }


    const sortBy = document.getElementById('sort-by').value;
    if (sortBy) {
        currentLeads.sort((a, b) => {
            if (sortBy === 'budget-asc') {
                return a.budget - b.budget;
            } else if (sortBy === 'budget-desc') {
                return b.budget - a.budget;
            } else if (sortBy === 'name-asc') {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'name-desc') {
                return b.name.localeCompare(a.name);
            } else if (sortBy === 'status-asc') {
                return a.status.localeCompare(b.status);
            } else if (sortBy === 'status-desc') {
                return b.status.localeCompare(a.status);
            }
        });
    }

  renderLeads(currentLeads);
}

// Поиск
document.getElementById('search-input').addEventListener('input', updateLeadsDisplay);
document.getElementById('status-filter').addEventListener('change', updateLeadsDisplay);
document.getElementById('sort-by').addEventListener('change', updateLeadsDisplay);

document.addEventListener('DOMContentLoaded', () => {
  updateLeadsDisplay();
});