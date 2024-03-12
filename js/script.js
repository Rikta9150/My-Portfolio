const form = document.querySelector("form");
const Name = document.querySelector("#Name");

const email = document.querySelector("#Email");
const Subject = document.querySelector("#Subject");
const Message = document.querySelector("#Message");

form.addEventListener("submit", formHandler);


function formHandler(e){
    e.preventDefault();
    

    const formInfo = {
        Name: Name.value,
       
        Email: email.value,
        Subject: Subject.value,
        Message: Message.value
    }

    console.log(formInfo);

    Name.vlue = "",
    
    email = "",
    Subject.value = "",
    Message.value = ""
}