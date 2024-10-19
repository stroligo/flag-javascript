let userData = [];

async function loadData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  userData = data;

  const userlist = document.getElementById('userlist');

  userData.forEach((user) => {
    const li = document.createElement('li');
    li.style.cursor = 'pointer';
    li.textContent = `${user.name}`;
    userlist.appendChild(li);
    li.dataset.id = user.id;
    li.dataset.email = user.email;

    li.addEventListener('click', (event) => {
      loadContent(event);
    });
  });
  return data;
}

function loadContent(event) {
  const userDetails = document.getElementById('userDetails');
  userDetails.textContent = `${event.target.dataset.id} - ${event.target.dataset.email}`;
}

loadData();
