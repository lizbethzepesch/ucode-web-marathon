window.addEventListener('DOMContentLoaded', function () {
    var socket;
    function loadTableData(items) {
        const table = document.getElementById("testBody");
        let counter = 0;
        items.forEach( item => {
          let row = table.insertRow();
          let name = row.insertCell(0);
          let invite = row.insertCell(1);
          name.innerHTML = item;
          invite.innerHTML = '<button class="send" name = "invite"  onClick="game()" value="'+item+'" ">invite</button>';
          counter++;
        });
      }
    function menu( playerName,  playerClass, playerImg="assets/others/avatar.jpeg"){
        document.getElementById("menu").style = "display: block";
        document.getElementById("first_page").style = "display: none";
        document.getElementById("game").style = "display: none";
        document.getElementById('playerName').innerHTML = playerName;
        document.getElementById('playerClass').innerHTML = playerClass;
        document.getElementById('playerImg').src = playerImg;
    }
  
    document.getElementById('RegisterUser').onclick = function () {
        // новое соединение открываем, если старое соединение закрыто
        if (socket === undefined || socket.readyState !== 1) {
            socket = new WebSocket('ws://127.0.0.1:3434');
        } 
        /*
         * четыре функции обратного вызова: одна при получении данных и три – при изменениях в состоянии соединения
         */
        socket.onmessage = function (event) { // при получении данных от сервера
            try{
                var obj = JSON.parse(event.data);
                if(obj["id"]){
                    console.log(obj);
                }else{
                    menu(obj.username, obj.hero);
                }
            }
            catch
            {
                if(event.data === "Register success!"){
                    let hero, img;
                    switch(document.getElementById('hero').value){
                        case '1':
                            hero = "Penni Parker(Anime)";
                            img = "assets/teams/3.png";
                            break;
                        case '2':
                            hero = "Captain America(Hydra)";
                            img = "assets/teams/2.png"; 
                            break;
                        case '3':
                            hero = "Captain Marvel(LGBT)";
                            img = "assets/teams/1.png";
                            break;
                    }
                    menu(document.getElementById('usernameRegister').value, hero, img);
                }else{
                    alert(event.data);
                }
            }

            

        }
        socket.onopen = function () { // при установке соединения с сервером
            var request = {id:2, username: document.getElementById('usernameRegister').value, password: document.getElementById('passwordRegister').value, id_class: document.getElementById('hero').value };
            var myJSON = JSON.stringify(request);
            socket.send(myJSON);
            
        }
        socket.onerror = function(error) { // если произошла какая-то ошибка
      
        };
        socket.onclose = function(event) { // при закрытии соединения с сервером
     
        };
    };
    document.getElementById('LoginUser').onclick = function () {
        // новое соединение открываем, если старое соединение закрыто
        if (socket === undefined || socket.readyState !== 1) {
            socket = new WebSocket('ws://127.0.0.1:3434');
        } 
        /*
         * четыре функции обратного вызова: одна при получении данных и три – при изменениях в состоянии соединения
         */
        socket.onmessage = function (event) { // при получении данных от сервера
    
            try
            {
                var obj = JSON.parse(event.data);
                console.log();
                if(obj["doing_id"] === 1){
                    console.log(obj);
                }else{
                    menu(obj.username, obj.hero, obj.img);
                }
            }
            catch{
                alert(event.data);
            }

        }
        socket.onopen = function () { // при установке соединения с сервером
            var request = {id:1, username: document.getElementById('usernameLogin').value, password: document.getElementById('passwordLogin').value};
            var myJSON = JSON.stringify(request);
            socket.send(myJSON);
            
        }
        socket.onerror = function(error) { // если произошла какая-то ошибка
      
        };
        socket.onclose = function(event) { // при закрытии соединения с сервером
     
        };
    };
    function clickHandler(elem) {
        if (socket !== undefined && socket.readyState === 1) {
            console.log(elem.value);
            var request = {id:4, secondPlayer:elem.value};
            //console.log(document.getElementsByName('invite')[0].value);
            var myJSON = JSON.stringify(request);
            socket.send(myJSON);
        }
    }
    document.getElementById('showUsers').onclick = function () {
        // новое соединение открываем, если старое соединение закрыто
    

        if (socket !== undefined && socket.readyState === 1) {
            var request = {id:3};
            var myJSON = JSON.stringify(request);
            socket.send(myJSON);
        }
        socket.onmessage = function (event) { 
           
                var obj = JSON.parse(event.data);
                loadTableData(obj);
                  
                /*var elems = document.getElementsByName("invite");
                for (var i = 0; i < elems.length; i++) {
                    elems[i].onclick = clickHandler(elems[i]);
                }*/
       
            
            
        }

    };



    


});



function dropACard(num){
    if(num > 3)
    document.getElementById('card' + num).style = " bottom: 230px; left: -160px;";
    else document.getElementById('card' + num).style = " bottom: 230px;  left: 110px;";
    document.getElementById('card' + num).classList.add('dropped');
}


function dropAnOppnentsCard(num, id, team){ 


    document.getElementById('op_card' + num).setAttribute('onclick', "attacTheCard()");
    
    if(num > 3){
    document.getElementById('op_card' + num).style = "height: 130px; width: 90px;  top: 190px; left: -110px; border: none; margin: 0px;";
    document.getElementById('card_mana_op_' + num).style = " margin-top: -105px; margin-left: -188px; ";
    document.getElementById('card_attac_op_' + num).style = " margin-left: -188px; margin-top: -3px;";
    document.getElementById('card_lives_op_' + num).style = "  margin-top: -3px; margin-left: -123px;";
    


    }
    else {
        document.getElementById('op_card' + num).style = " width: 90px; top: 190px; left: 110px; height: 130px; border: none; margin: 0px;";
        document.getElementById('card_mana_op_' + num).style = "  margin-top: -105px; margin-left: 30px;";
        document.getElementById('card_attac_op_' + num).style = "    margin-top: -3px; margin-left: 97px; ";
        document.getElementById('card_lives_op_' + num).style = " margin-left: 30px; margin-top: -3px;";
    }


    document.getElementById('card_attac_op_' + num).style.display = " inline";
    document.getElementById('card_mana_op_' + num).style.display = " inline";
    document.getElementById('card_lives_op_' + num).style.display = " inline";
    document.getElementById('op_card' + num).src = "./assets/" + team + "/" + id + ".png";
    document.getElementById('op_card' + num).classList.add('dropped_op');
}




function attacTheHero(){
    // document.getElementById('op_card5').style.border = "10px solid deeppink";
}


function attacTheCard(){
    // document.getElementById('op_card5').style.border = "10px solid deeppink";
}

// game()
function success(){
    window.location.href = "";
}

function failed(){
}



function game(){
    document.getElementById("game").style = "display: flex";
    document.getElementById("first_page").style = "display: none";
    document.getElementById("menu").style = "display: none";

    // document.getElementById("body").removeAttribute('style');
   
    document.getElementById("body").style = "display: flex; position: relative; justify-content: center; padding: 5px;  flex-direction: unset; text-align: unset;";
    document.getElementById("html").style = "background: white";
}


////////////////////////////////////////////////////////////////////////////////////////////////

function theFirstTeam(team){
    let card1 = Math.random() * 10;
    let card2 = Math.random() * 10;
    let card3 = Math.random() * 10;
    switch (team){
        case 1:
            
        break

        case 2:


        break

        case 3:


        break
    }
}

function addCard(team){
    let card = Math.random() * 10;
}


function dropACard(){
    
}


theFirstTeam()


////////////////////////////////////////////////////////////////////////////////////////////////

