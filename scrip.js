const input = document.getElementById('newItemInput');
const addBtn = document.getElementById('addItemBtn');
const list = document.getElementById('itemsList');

addBtn.addEventListener('click', addItem);
input.addEventListener('keypress', e => e.key === 'Enter' && addItem());

function addItem() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.textContent = text;

  const done = document.createElement('button');
  done.className = 'completeBtn material-icons';
  done.textContent = 'done';
  done.onclick = () => li.classList.toggle('completed');

  const del = document.createElement('button');
  del.className = 'deleteBtn material-icons';
  del.textContent = 'close';
  del.onclick = () => li.remove();

  li.append(done, del);
  list.appendChild(li);
  input.value = '';
}