function todo() {
    const input = document.querySelector("#task").value;
    const container = document.querySelector(".container-2");
    const delal = document.querySelector('.delal')
    const del_all = document.querySelector('.del-all')
    if (input === "" || !input.trim()) {
        alert("Please enter a task");
    } else {
        // setting local storage
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push({ text: input, completed: false });
        localStorage.setItem("tasks", JSON.stringify(tasks));


        //creating list
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <ul><li>${input}<button class='delete'>x</button></li></ul>
        `;
        container.style.border = '1px solid black';


        //single delete button
        card.querySelector(".delete").addEventListener("click", function () {
            container.removeChild(card);
            container.style.border = 'none';
        });

        // delete all
        del_all.addEventListener('click', function () {
            container.removeChild(card)
            delal.style.display = 'none'
            container.style.border = 'none';
        })

        //apending element
        container.appendChild(card);
        delal.style.display = 'flex';
        delal.style.justifyContent = 'center';
    }
}
