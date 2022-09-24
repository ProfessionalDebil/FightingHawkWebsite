var listhandler = document.getElementById("listhandler");

for (var log in devlogData) {
    let currentLog = devlogData[log];
    
    let li = document.createElement("li");
    let timestamp = document.createElement("p");
    let content = document.createElement("p");
    
    timestamp.innerText = currentLog[0] + "/" + currentLog[1] + "/" + currentLog[2];
    content.innerText = currentLog[3];
    
    timestamp.classList.add("devlogtimestamp");
    content.classList.add("devlogcontent");
    
    if (log % 2 == 0) {
        li.classList.add("devlogeven");
    }
    else {
        li.classList.add("devlogodd");
    }
    
    li.appendChild(timestamp);
    li.appendChild(content);
    listhandler.appendChild(li);
}