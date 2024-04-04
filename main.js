 var addButton = document.getElementById("addButton");
 var input = document.getElementById("userInput");
 var ul = document.getElementById("userList"); 

 console.log(input);

function inputLength(){
    return input.value.length;
}


function createListElement(){
    var li= document.createElement("li");
    let inputText= input.value;
    li.appendChild(document.createTextNode (input.value));
    li.addEventListener("click", () => {
        li.classList.toggle("done");
    });

    ul.appendChild(li);
    input.value= "";
    console.log(ul);

     // Créer un bouton X
     let deleteButton = document.createElement('button');
     deleteButton.textContent = 'X';
 
     // Ajouter le bouton à l'élément li créé
     li.appendChild(deleteButton);
 
     // Ajouter un événement click au bouton pour ajouter la classe delete
     deleteButton.addEventListener('click', function() {
         this.classList.add('delete');
         // Vous pouvez ajouter ici d'autres actions à effectuer lors du clic sur le bouton X
     });


}
createListElement();
