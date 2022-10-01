var listhandler = document.getElementById("listhandler");

// Get query string values
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

// Check the devlog type filter
var devlogCategory = params.fox; // kon kon

let addedLogs = 0;

for (let log in devlogData) { 
    let currentLog = devlogData[log];

    if (devlogCategory != null && !currentLog[3].includes(Number(devlogCategory))) {
        continue;
    }
    
    let li = document.createElement("li");
    let topPart = document.createElement("div");
    topPart.classList.add("toppart");
    let tagHolder = document.createElement("div");
    tagHolder.classList.add("tagholder");
    

    for (let logIndex in currentLog[3]) {
        let logCategory = currentLog[3][logIndex];
        let tagIcon = document.createElement("a");
        tagIcon.href = "devlog.html?fox=" + logCategory
        tagIcon.innerText = devlogCategories[logCategory];
        tagIcon.classList.add("devlogtag");
        tagHolder.appendChild(tagIcon);
    }
    
    let timestamp = document.createElement("p");
    let content = document.createElement("p");
    let caption = document.createElement("p");
    
    timestamp.innerText = currentLog[0] + "/" + currentLog[1] + "/" + currentLog[2];
    content.innerText = currentLog[4];
    caption.innerText = currentLog[5];
    
    timestamp.classList.add("devlogtimestamp");
    content.classList.add("devlogcontent");
    caption.classList.add("devlogcaption");
    
    if (addedLogs % 2 == 0) {
        li.classList.add("devlogeven");
    }
    else {
        li.classList.add("devlogodd");
    }
    
    topPart.appendChild(tagHolder);
    topPart.appendChild(timestamp);
    
    li.appendChild(topPart);
    li.appendChild(content);
    content.appendChild(caption);
    listhandler.appendChild(li);

    addedLogs++;
}