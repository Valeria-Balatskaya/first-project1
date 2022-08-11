
        function join(){
        let name = prompt("What is your name?");
        let email = prompt("What is your email");
        alert("Thank you" + " " + name + "!" + " " + "We will be in touch.");
      }
      let joinButton = document.querySelector("button");
      joinButton.addEventListener("click", join)