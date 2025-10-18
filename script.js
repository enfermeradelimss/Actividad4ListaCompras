const input = document.getElementById('newItemInput');
const addButton = document.getElementById('addItemBtn');
const itemsList = document.getElementById('itemsList');

function addItem() {
  const itemText = input.value.trim();
  if (itemText === '') return;

  const li = document.createElement('li');
  li.textContent = itemText;

  const completeBtn = document.createElement('button');
  completeBtn.className = 'completeBtn material-icons';
  completeBtn.textContent = 'done';
  completeBtn.title = 'Marcar como completado';
  completeBtn.onclick = () => {
    li.classList.toggle('completed');
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'deleteBtn material-icons';
  deleteBtn.textContent = 'close';
  deleteBtn.title = 'Eliminar';
  deleteBtn.onclick = () => {
    itemsList.removeChild(li);
  };

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  itemsList.appendChild(li);

  input.value = '';
  input.focus();
}

addButton.addEventListener('click', addItem);

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addItem();
});