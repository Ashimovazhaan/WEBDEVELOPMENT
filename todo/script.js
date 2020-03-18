<<<<<<< HEAD
function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.style.height = "30pt";
    addItem(cell1);
}
function addItem(cell1){
    var ul = cell1;
    var candidate = document.getElementById("candidate");
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.style.verticalAlign = "middle"; 
    checkbox.style.marginLeft = "15pt";
    checkbox.id = "id";

    var label = document.createElement('label')
    label.htmlFor = "id";
    label.marginLeft = "30pt";
    
    console.log(candidate.value)
    label.appendChild(document.createTextNode(candidate.value));

    ul.appendChild(checkbox);
    ul.appendChild(label);

    var btn = document.createElement('button');
    btn.className = 'btn';
    btn.innerHTML = '<span class="glyphicon glyphicon-trash" style="color:red; font-size:20pt;"></span>';
    btn.style.height = "20pt";
    btn.style.width = "20pt";
    btn.style.float = "right";
    btn.style.padding = "0"
    ul.appendChild(btn);

    btn.onclick = function(){
        ul.removeChild(label);
        ul.removeChild(checkbox);
        ul.removeChild(btn);
        ul.parentNode.removeChild(ul);
    }

    checkbox.onclick = function(){
        if (checkbox.checked == true){
            label.style.textDecoration = "line-through";
        } else {
            label.style.textDecoration = "none";
        }
    }
}
=======
function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.style.height = "30pt";
    addItem(cell1);
}
function addItem(cell1){
    var ul = cell1;
    var candidate = document.getElementById("candidate");
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.style.verticalAlign = "middle"; 
    checkbox.style.marginLeft = "15pt";
    checkbox.id = "id";

    var label = document.createElement('label')
    label.htmlFor = "id";
    label.marginLeft = "30pt";
    
    console.log(candidate.value)
    label.appendChild(document.createTextNode(candidate.value));

    ul.appendChild(checkbox);
    ul.appendChild(label);

    var btn = document.createElement('button');
    btn.className = 'btn';
    btn.innerHTML = '<span class="glyphicon glyphicon-trash" style="color:red; font-size:20pt;"></span>';
    btn.style.height = "20pt";
    btn.style.width = "20pt";
    btn.style.float = "right";
    btn.style.padding = "0"
    ul.appendChild(btn);

    btn.onclick = function(){
        ul.removeChild(label);
        ul.removeChild(checkbox);
        ul.removeChild(btn);
        ul.parentNode.removeChild(ul);
    }

    checkbox.onclick = function(){
        if (checkbox.checked == true){
            label.style.textDecoration = "line-through";
        } else {
            label.style.textDecoration = "none";
        }
    }
}
>>>>>>> 0a1bc93ed919ee559fa506366fa9689182ab2f74
