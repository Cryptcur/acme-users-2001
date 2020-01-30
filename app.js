const header = document.querySelector("#header");
const userList = document.querySelector("#userlist");

const renderUsers = usersArr => {
  const html = usersArr
    .map(user => {
      return `
      <div>
            <div>${user.firstName}</div>
            <div>${user.lastName}</div>
            <div>${user.email}</div>
            <div>${user.title}</div>
        </div>
        `;
    })
    .join("");
  userList.innerHTML = html;
};
const renderLinks = (arrOfUsers, count) => {
  let html = [];
  let currentPage = Math.ceil(count / 50);
  for (let i = 0; i <= currentPage; i++) {
    console.log(currentPage);

    html.push(`
            <a href="#${i - 1}">${i}</a>
        `);
  }
  // html.join('')
  header.innerHTML = html.join("");
};
fetch("https://acme-users-api-rev.herokuapp.com/api/users")
  .then(response => response.json())
  .then(data => {
    const { users, count } = data;
    renderUsers(users);
    renderLinks(users, count);
    console.log(users);
  });
window.addEventListener("hashchange", ev => {
  const id = window.location.hash.slice(1);
  console.log(id);
  fetch(`https://acme-users-api-rev.herokuapp.com/api/users/${id}`)
    .then(response => response.json())
    .then(data => renderUsers(data.users));
});
