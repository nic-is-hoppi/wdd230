const list = document.querySelector('ul');
const chapter = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function () { 
     if (chapter.value === ''){

     }else{

        const listItem = document.createElement('li');
        const itemContent = document.createElement('span');
        const deleteBtn = document.createElement('button');

        listItem.appendChild(itemContent);
        itemContent.textContent = chapter.value;
        listItem.appendChild(deleteBtn);
        deleteBtn.textContent = 'X';

        list.appendChild(listItem);

        chapter.value = '';

        deleteBtn.addEventListener('click', function (){
            list.removeChild(listItem);
        });
     }
     chapter.focus();
}  
);

