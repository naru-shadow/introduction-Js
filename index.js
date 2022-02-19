//DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

//関数（メソッド）
function addList(user) {
    const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list);
};

//データの受取
async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await res.json();
    return users;
}

//データの中の名前を取得
async function listUsers() {
    const users = await getUsers();
    users.forEach(addList);
};

//イベント
window.addEventListener("load", listUsers); 
button.addEventListener("click", listUsers); 