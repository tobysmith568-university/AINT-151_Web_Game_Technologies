/*Method to run on page-load*/
function OnLoad()
{
  //If the browser supports localStorage:
  if (typeof(Storage) !== 'undefined') {
    var offerNewGame = true;
    //If no room number exists:
    if (localStorage.roomNumber === undefined){
      localStorage.roomNumber = JSON.stringify(0);
      offerNewGame = false;
    }
    //If no array of known rooms exists:
    if (localStorage.knownRooms === undefined){
      var theArray = [0, 3, 4, 5, 6, 12, 14, 15, 16, 17, 18, 19, 24, 26, 27, 28, 29, 30];
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
      //document.getElementById('messages').innerHTML = '';

      var node = document.getElementById('tmp_newGame').cloneNode(true);
      node.id = '';
      document.getElementById('messages').appendChild(node);
    }
  }
  //Else, if the browser doesn't support localStorage:
  else {
    //Redirect them to error.html
    window.location.replace('error.html');
  }
  //Send the player to the current room
	SelectRoom(JSON.parse(localStorage.roomNumber));
}

/*Method to change the information to the current room*/
function SelectRoom(roomIndex)
{
  //Read from the localStorage
  var varRooms = JSON.parse(localStorage.rooms);
  var varKnownRooms = JSON.parse(localStorage.knownRooms);
  var varRoomNumber = JSON.parse(localStorage.roomNumber);

  //Set the current room information
	document.getElementById('roomTitle').innerHTML = varRooms[roomIndex].name;
	document.getElementById('roomText').innerHTML = varRooms[roomIndex].description;

  //Set the current room's doors
	document.getElementById('roomDoors').innerHTML = '';
	for (var i = 0; i < varRooms[roomIndex].doors.length; i++)
	{
    var theClass = 'btn btn-info door';
    var theValue = '';

    if (varRooms[roomIndex].doors[i].keySnowflakes.length != 0){
      theClass = theClass + ' disabled';
    }

    if (varKnownRooms.indexOf(varRooms[roomIndex].doors[i].leadsTo) == -1){
      theValue = 'Unknown Room';
    }
    else{
      theValue = varRooms[varRooms[roomIndex].doors[i].leadsTo].name;
    }

		document.getElementById('roomDoors').innerHTML += '<a type="button" class="' + theClass + '" onClick="SelectRoom(' + varRooms[roomIndex].doors[i].leadsTo + ')">' + theValue + '</a>';
  }

  //Get the current room's tasks
	document.getElementById('roomTasks').innerHTML = '';
	for (var i = 0; i < varRooms[roomIndex].tasks.length; i++)
	{
    var theClass = 'btn btn-info task';
    var theValue = '';

    if (varRooms[roomIndex].tasks[i].keys.length > 0){
      theClass = theClass + ' disabled';
    }

    if (varRooms[roomIndex].tasks[i].results.length === 0) {
      theClass = theClass + ' hidden';
    }

    theValue = varRooms[roomIndex].tasks[i].name;

		document.getElementById('roomTasks').innerHTML += '<a type="button" class="' + theClass + '" onClick="RunTask(' + i + ')">' + theValue + '</a>';
	}

  //Save the current data
  localStorage.roomNumber = JSON.stringify(roomIndex);
  varKnownRooms.push(roomIndex);
  localStorage.knownRooms = JSON.stringify(varKnownRooms);
  localStorage.rooms = JSON.stringify(varRooms);

  ShowInventory();
}

/*Method to calculate what happens when a task is ran*/
function RunTask(taskIndex)
{
    /*Read from the localStorage*/
    var varRooms = JSON.parse(localStorage.rooms);
    var varRoomNumber = JSON.parse(localStorage.roomNumber);

    /*Add any items to the inventory that should be added and display them in a message*/
    var lines = '';
    //For each possible result for the task being run:
    for (var i = 0; i < varRooms[varRoomNumber].tasks[taskIndex].results.length; i++) {
      var chance = Math.floor((Math.random() * 100) + 1);
      //Calcuate if the result happens, if it does: add the item and message
      if (chance <= varRooms[varRoomNumber].tasks[taskIndex].results[i].chance){
        AddItem(varRooms[varRoomNumber].tasks[taskIndex].results[i].item);
        lines += '\n' + varRooms[varRoomNumber].tasks[taskIndex].results[i].message;

        //If the result can only happen once: remove it from the task
        if (varRooms[varRoomNumber].tasks[taskIndex].results[i].isRepeatable == false) {
          var results = varRooms[varRoomNumber].tasks[taskIndex].results;
          results.splice(i, 1);
          varRooms[varRoomNumber].tasks[taskIndex].results = results;
        }
      }
    }
    //If there is no result: add a blank result
    if (lines === '') lines = 'You find nothing.';
    //Show the message with either the results or the blank one
    AddMessage(varRooms[varRoomNumber].tasks[taskIndex].name + '...', lines);

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
    localStorage.roomNumber = JSON.stringify(varRoomNumber);
    localStorage.rooms = JSON.stringify(varRooms);

    SelectRoom(varRoomNumber);
}

/*Method to add an item to the players inventory*/
function AddItem(item)
{
  if (item != null) {
    var varInventory = JSON.parse(localStorage.inventory);
    varInventory.push(item);
    localStorage.inventory = JSON.stringify(varInventory);

    ShowInventory();
  }
}

/*Method to display a message to the user at the top of the screen*/
function AddMessage(title, message)
{
  document.getElementById('messages').innerHTML = '';

  var node = document.getElementById('tmp_message').cloneNode(true);
  node.id = 'theMessage';
  node.getElementsByClassName('panel-heading')[0].innerHTML = title + node.getElementsByClassName('panel-heading')[0].innerHTML;
  node.getElementsByClassName('panel-body')[0].innerHTML = message;
  document.getElementById('messages').appendChild(node);
}

/*Method to remove a task from a room*/
/*CURRENTLY UNUSED*/
function RemoveTask(roomIndex, taskIndex)
{
  //
}

/*Method to wipe the game data from the browser and reload the page*/
function NewGame()
{
  localStorage.removeItem('roomNumber');
  localStorage.removeItem('knownRooms');
  localStorage.removeItem('rooms');
  localStorage.removeItem('inventory');

  window.location.replace('game.html');
}

/*Method to take all the items in the player's inventory
and shpw them in the onscreen inventory*/
function ShowInventory()
{
  var varInventory = JSON.parse(localStorage.inventory);
  var varRoomNumber = JSON.parse(localStorage.roomNumber);

  document.getElementById('inventory').innerHTML = '';
  for (var i = 0; i < varInventory.length; i++) {
    var node = document.getElementById('tmp_inventory').cloneNode(true);
    node.id = 'item_' + varInventory[i].snowflake;
    node.getElementsByClassName('nohover')[0].innerHTML = varInventory[i].name;
    node.getElementsByClassName('nohover')[0].title = varInventory[i].description;
    for (var ii = 0; ii < varInventory[i].actions.length; ii++) {
      if (varInventory[i].actions[ii].room == -1 || varInventory[i].actions[ii].room == varRoomNumber) {
        var action = document.getElementById('tmp_action').cloneNode(true);
        action.ID = '';
        action.childNodes[0].innerHTML = varInventory[i].actions[ii].name;
        node.getElementsByClassName('dropdown-menu')[0].appendChild(action);
      }
    }

    document.getElementById('inventory').appendChild(node);
  }
}
