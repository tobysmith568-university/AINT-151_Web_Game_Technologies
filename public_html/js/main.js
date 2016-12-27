//Method to run on page-load
function OnLoad()
{
  //If the browser supports localStorage:
  if (typeof(Storage) !== "undefined") {
    var offerNewGame = true;
    //If no room number exists:
    if (localStorage.roomNumber === undefined){
      localStorage.roomNumber = JSON.stringify(0);
      offerNewGame = false;
    }
    //If no array of known rooms exists:
    if (localStorage.knownRooms === undefined){
      var theArray = [0, 3, 4, 5, 6, 12, 14, 15, 16, 17, 18, 26, 27, 28, 29, 30];
      localStorage.knownRooms = JSON.stringify(theArray);
      offerNewGame = false;
    }
    //If no array of known inventory items exists:
    if (localStorage.inventory === undefined){
      var theArray = [];
      localStorage.inventory = JSON.stringify(theArray);
      offerNewGame = false;
    }
    //If no array of room data exists:
    if (localStorage.rooms === undefined){
      localStorage.rooms = JSON.stringify(rooms);
      offerNewGame = false;
    }
    //If a game is halfway though
    if (offerNewGame == true){
      document.getElementById("messages").innerHTML = '<div class="alert alert-warning alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Click <a class="alert-link" onClick="newGame()">here</a> to start a new game.</div>'
    }
  }
  //Else, if the browser doesn't support localStorage:
  else {
    //Redirect them to error.html
    window.location.replace("error.html");
  }
  //Send the player to the current room
	SelectRoom(JSON.parse(localStorage.roomNumber));
}

//Method to change the information to the current room
function SelectRoom(roomIndex)
{
  //Read from the localStorage
  var varRooms = JSON.parse(localStorage.rooms);
  var varKnownRooms = JSON.parse(localStorage.knownRooms);
  var varRoomNumber = JSON.parse(localStorage.roomNumber);

  //Clear any message
  document.getElementById('messages').innerHTML = "";

  //Set the current room information
	document.getElementById('roomTitle').innerHTML = varRooms[roomIndex].name;
	document.getElementById('roomText').innerHTML = varRooms[roomIndex].description;

  //Set the current room's doors
	document.getElementById('roomDoors').innerHTML = "";
	for (var i = 0; i < varRooms[roomIndex].doors.length; i++)
	{
    var theClass = "btn btn-info door";
    var theValue = "";

    if (varRooms[roomIndex].doors[i].locked == true){
      theClass = theClass + " disabled";
    }

    if (varKnownRooms.indexOf(varRooms[roomIndex].doors[i].leadsTo) == -1){
      theValue = "Unknown Room";
    }
    else{
      theValue = varRooms[varRooms[roomIndex].doors[i].leadsTo].name;
    }

		document.getElementById('roomDoors').innerHTML += '<a type="button" class="' + theClass + '" onClick="SelectRoom(' + varRooms[roomIndex].doors[i].leadsTo + ')">' + theValue + '</a>';

    ShowInventory();
  }

  //Get the current room's tasks
	document.getElementById('roomTasks').innerHTML = "";
	for (var i = 0; i < varRooms[roomIndex].tasks.length; i++)
	{
    var theClass = "btn btn-info task";
    var theValue = "";

    if (varRooms[roomIndex].tasks[i].keys.length > 0){
      theClass = theClass + " disabled";
    }

    theValue = varRooms[roomIndex].tasks[i].name;

		document.getElementById('roomTasks').innerHTML += '<a type="button" class="' + theClass + '" onClick="RunTask(' + i + ')">' + theValue + '</a>';
	}

  //Save the current data
  localStorage.roomNumber = JSON.stringify(roomIndex);
  varKnownRooms.push(roomIndex);
  localStorage.knownRooms = JSON.stringify(varKnownRooms);
  localStorage.rooms = JSON.stringify(varRooms);
}

function RunTask(taskIndex)
{
    //Read from the localStorage
    var varRooms = JSON.parse(localStorage.rooms);
    var varRoomNumber = JSON.parse(localStorage.roomNumber);

    //Add any items to the inventory that should be added and display them in a message
    var lines = "";
    for (var i = 0; i < varRooms[varRoomNumber].tasks[taskIndex].results.length; i++) {
      var chance = Math.floor((Math.random() * 100) + 1);
      if (chance <= varRooms[varRoomNumber].tasks[taskIndex].results[i].chance){
        AddItem(varRooms[varRoomNumber].tasks[taskIndex].results[i].item);
        lines += "\n" + varRooms[varRoomNumber].tasks[taskIndex].results[i].message;

        if (varRooms[varRoomNumber].tasks[taskIndex].results[i].isRepeatable == false) {
          varRooms[varRoomNumber].tasks[taskIndex].results = varRooms[varRoomNumber].tasks[taskIndex].results.splice(i);
          //NON-FUNCTIONING CODE - NEEDS TO REMOVE TASK RESULTS IF THEY'RE NON-REPEATABLE
        }
      }
    }
    AddMessage(varRooms[varRoomNumber].tasks[taskIndex].name + "...", lines);

    //Do any followup actions for the task
    /*Things here could be like:
    Removing the task from the room
    Saying a message
    Unlocking another room or task
    */
    switch (varRoomNumber)
    {
      case 0:
        switch (taskIndex)
        {
          case 0:

            break;
          case 1:
            /*Do stuff*/
            break;
          case 2:
            /*Do stuff*/
            break;
        }
        break;
      case 1:
        /*Switch for tasks*/
        break;
      case 2:
        /*Switch for tasks*/
        break;
    }

    //Save the current data
    localStorage.roomNumber = JSON.stringify(roomIndex);
    localStorage.rooms = JSON.stringify(varRooms);

    SelectRoom(varRoomNumber);
}

function AddItem(item)
{
  var varInventory = JSON.parse(localStorage.inventory);
  varInventory.push(item);
  localStorage.inventory = JSON.stringify(varInventory);

  ShowInventory();
}

function AddMessage(title, message)
{
  document.getElementById("messages").innerHTML = '<div class="panel panel-primary" id="theMessage"><div class="panel-heading">' + title + '<button type="button" class="close" data-target="#theMessage" data-dismiss="alert">&times;</button></div><div class="panel-body">' + message + '</a>'
}

function RemoveTask(roomIndex, taskIndex)
{

}

function ShowInventory()
{
  var varInventory = JSON.parse(localStorage.inventory);

  document.getElementById("inventory").innerHTML = "";
  for (var i = 0; i < varInventory.length; i++) {

    var node = document.getElementById("tmp_inventory").cloneNode(true);
    node.id = "";
    node.getElementsByClassName("nohover")[0].innerHTML = varInventory[i].name;
    node.getElementsByClassName("nohover")[0].title = varInventory[i].description;
    document.getElementById("inventory").appendChild(node);
  }
}

function NewGame()
{
  localStorage.removeItem("roomNumber");
  localStorage.removeItem("knownRooms");
  localStorage.removeItem("rooms");
  localStorage.removeItem("inventory");

  window.location.replace("game.html");
}
