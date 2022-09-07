const getEmail = document.getElementById("email"),
          getTextarea = document.querySelector("textarea"),
          getBtn = document.querySelector(".btn"),
          getEmailContainer = document.querySelector(".email-container");



getEmail.focus();  // cursor

getEmail.addEventListener('keyup',function(e){
        // createemaillist(this);       // no need to event type. ( this keyword doesn't work in arrow function.it works only in regular function)
        // createemaillist(this.value);
         // createemaillist(e.target);
        createemaillist(e.target.value);
});


function createemaillist(inputText) {
                // console.log(inputText);

                // split by (' , ')
                // const emaiItems = inputText.split(',');  // you can use any separate para instead of comma such as / \ etc.
                // console.log(emaiItems);   // return array

                // remove empty and empty(space)
                // syntax method 1                                                     // multi            // single
                // const emaiItems = inputText.split(',').filter(removeEmpty => removeEmpty.trim() !== '');
                // console.log(emaiItems);

                // syntax method 2
                // const emaiItems = inputText.split(' , ');
                // var abc = emaiItems.filter(function(emaiItem){

                // });




                // remove space and empty both in front and end before words.
                const emaiItems = inputText.split(',').filter(removeEmpty=>removeEmpty.trim() !== '').map(removeEmpty=>removeEmpty.trim());
                // console.log(emaiItems);

                getEmailContainer.innerHTML = ''; // remove exact span tag.just only take the last words value.

                emaiItems.forEach(function(emaiItem){
                        // console.log(emaiItem);
                        const setNewSpanTag = document.createElement("span");
                        setNewSpanTag.textContent = emaiItem;
                        setNewSpanTag.classList.add("email-item");
                        // console.log(setNewSpanTag);
                        getEmailContainer.appendChild(setNewSpanTag);
                });

}

                                        // submit (reload error)
getBtn.addEventListener('click',function(e){
        sendEmail();

        e.preventDefault();
});

function sendEmail(){
        // console.log("heee");
        const getTextValue = getTextarea.value;
        // console.log(getTextValue);
        const getAddresses = document.querySelectorAll(".email-item");
        // console.log(getAddressValue);

        var persons = [ ];


        // step 1
        /* getAddresses.forEach((getAddress) => {
                persons.push({
                        email:getAddress.textContent,
                        message:getTextValue
                });
        });

        console.log(persons);
 */



        // step 2
        if(getAddresses.length > 0 && getTextValue){
                getAddresses.forEach((getAddress) => {
                        persons.push({
                                eamil:getAddress.textContent,
                                message:getTextValue
                        });
                        // e.preventDefault();
                });
                console.log(persons);
        }else{
                window.alert("You must be including some messages !");
                getTextarea.focus();
        }
}