// Wybieramy elementy DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Funkcja dodająca zadanie
function addTask() {
    const taskText = taskInput.value.trim();  // Pobieramy tekst z inputa i usuwamy białe znaki

    if (taskText === '') {
        alert('Proszę wpisać zadanie!');
        return;
    }

    // Tworzymy nowe zadanie w liście
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Przycisk usuń
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Usuń';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.onclick = () => taskItem.remove();  // Funkcja usuwająca zadanie
    taskItem.appendChild(deleteBtn);

    // Kliknięcie na zadanie oznacza je jako ukończone
    taskItem.onclick = () => {
        taskItem.classList.toggle('completed');
    };

    // Dodajemy zadanie do listy
    taskList.appendChild(taskItem);

    // Czyszczenie pola tekstowego po dodaniu zadania
    taskInput.value = '';
}

// Obsługa kliknięcia przycisku "Dodaj"
addTaskBtn.addEventListener('click', addTask);

// Obsługa naciskania klawisza Enter w polu tekstowym
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
