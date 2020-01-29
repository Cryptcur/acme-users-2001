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
fetch("https://acme-users-api-rev.herokuapp.com/api/users")
  .then(response => response.json())
  .then(data => {
    const { users, count } = data;
    renderUsers(data.users);
  });
