// setup your IIFE (Immediately Invoked Function Expression)
// Mid-Term - Bagga - Nishat
// Nishat Bagga
// All Javascript files goes here 

(function (content) {
    let FullName = document.getElementById("FullName");
    let ContactNumber = document.getElementById("ContactNumber");
    let EmailAddress = document.getElementById("EmailAddress");
    let Message = document.getElementById("Message");


    function OutputFormDataToConsole() {
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Data`, "font-weight:bold; font-size: 16px; color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Full Name     : ${FullName.value}`, "color: blue;");
        console.log(`%c Contact Number: ${ContactNumber.value}`, "color: blue;");
        console.log(`%c Email Address : ${EmailAddress.value}`, "color: blue;");
        console.log(`%c Your Message  : ${Message.value}`, "color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");

        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Properties`, "font-weight:bold; font-size: 16px; color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Length     : ${document.forms[0].length}`, "color: blue;");

        for (let index = 0; index < document.forms[0].length; index++) {
            console.log(`%c Form Element ${index}: ${document.forms[0].elements[index].value}`, "color: blue;");

        }

    }

    (function Spetses() {
        <div id="pcontainer">
  <p> Spetses is an affluent island and a municipality in the Islands regional unit,
                             Attica, Greece.[2] It is sometimes included as one of the Saronic Islands.
                              Until 1948, it was part of the old prefecture of Argolidocorinthia, which
                               is now split into Argolis and Corinthia.</p>
</div>
    })
    (function Folegandros() {
        <div id="pcontainer">
  <p>Folegandros is a small Greek island in the Aegean Sea. 
Folegandros' landscape is varied, and includes tall cliffs and a large cave. The "capital" of the island, Chora, is built on the edge of a 200-metre high cliff. 
 Among the notable beaches on Folegandros is Katergo, accessible only by foot or by boat from Karavostasis. </p>
</div>
    })
    (function Alonisos() {
        <div id="pcontainer">
  <p> Alonissos is an island in the Aegean Sea, located close to Skopelos, with lush green vegetation to the point that pine woods sometimes reach the numerous beaches on the island.
 Alonissos island is part of the Sporades islands. Its surface is 66 square kilometres and has approximately 2700 local inhabitants. Alonissos in an isle of outstanding beauty with the most impressing abysses in the Aegean Sea. 
 Alonissos is a peaceful island, quite lively on the Southern area, where there are a number of modest villages with narrow streets and picturesque buildings and houses. Patitiri, the capital of the island, located in this area, offers a variety of transportation services connecting the island with the other islands nearby and the mainland.</p>
</div>
    })
    (function Syros() {
        <div id="pcontainer">
  <p>Syros (/ˈsaɪrɒs, -roʊs/; Greek: Σύρος), or Siros or Syra is a Greek island in the Cyclades, in the Aegean Sea. It is located 78 nautical miles (144 km) south-east of Athens. The area of the island is 83.6 km2 (32 sq mi) and it has 21,507 inhabitants (2011 census).[1]

The largest towns are Ermoupoli, Ano Syros, and Vari (el). Ermoupoli is the capital of the island and of the Cyclades. It has always been a significant port town, and during the 19th century it was even more significant than Piraeus. Other villages are Galissas, Foinikas, Pagos, Manna, Kini and Poseidonia </p>
</div>
    })
    (function Milos() {
        <div id="pcontainer">
  <p>he volcanic activity in ancient years has endowed Milos island with an exciting variety of gorgeous landscapes, consequently offering the visitor a wide range of activities. The funny shapes of the rocks and their wonderful colours at the beautiful white sandy beaches are one expression of the volcanic features of Mílos; the economic activity is another: minerals such as obsidian are excavated here. 
      What is more, one of the most ancient mines in the Mediterranean is on this island.</p>
</div>
    })

    function clearValidationMessages() {
        FullName.setCustomValidity("");
        ContactNumber.setCustomValidity("");
        EmailAddress.setCustomValidity("");
        Message.setCustomValidity("");
    }

    function setEventHandlersForFormElements() {

        for (const element of document.forms[0].elements) {
            if ((element.tagName === "INPUT") || (element.tagName === "TEXTAREA")) {
                element.addEventListener("input", function () {
                    element.setCustomValidity("");
                });
                element.addEventListener("invalid", function () {
                    switch(element.id) {
                        case "FullName":
                        element.setCustomValidity("You must enter an appropriate Full Name with at least 2 characters");
                        break;
                        case "ContactNumber":
                        element.setCustomValidity("You must enter a phone number with the pattern (###) ###-####");
                        break;
                        case "EmailAddress":
                        element.setCustomValidity("Your email address is not valid");
                        break;
                        case "Message":
                        element.setCustomValidity("You must enter a message");
                        break;
                        default:
                        element.setCustomValidity("This Field is Required");
                        break;
                    }
                    
                });
            }

        }
    }

    function ValidateForm() {
        setEventHandlersForFormElements();
    }


    function ContactContent() {
        clearValidationMessages();

        console.log("%c Contact Content Accessed...", "font-weight:bold; font-size: 20px;");


        let SendButton = document.getElementById("SendButton");
        SendButton.addEventListener("click", (event) => {

            if (!document.forms[0].checkValidity()) {
                OutputFormDataToConsole();
                ValidateForm();
            }


        });

    }
    content.ContactContent = ContactContent;

})(content || (content = {}))

