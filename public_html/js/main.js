/*Method to run on page-load*/
function OnLoad()
{
  //If the browser supports localStorage:
  if (typeof(Storage) !== 'undefined') {
    var offerNewGame = true;
    //If no room number exists:
    if (localStorage.roomNumber === undefined){
      localStorage.roomNumber = JSON.stringify(6);
      offerNewGame = false;
    }
    //If no array of known rooms exists:
    if (localStorage.knownRooms === undefined){
      var theArray = [2, 3, 4, 5, 6, 9, 10, 13, 14, 15, 16, 17, 18, 19, 22, 24, 25, 26, 27, 28, 30, 32, 33];
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
      document.getElementById('messages').innerHTML = '';
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
function SelectRoom(roomIndex, clearMessage)
{
  if (clearMessage)
    document.getElementById('messages').innerHTML = '<div style="height:110px"/>';

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

    if (varRooms[roomIndex].doors[i].keys.length != 0){
      theClass = theClass + ' disabled';
    }

    if (varRooms[varRooms[roomIndex].doors[i].leadsTo] != undefined)/*DEBUG ONLY*/
    if (varKnownRooms.indexOf(varRooms[roomIndex].doors[i].leadsTo) == -1){
      theValue = 'Unknown Room';
    }
    else{
      theValue = varRooms[varRooms[roomIndex].doors[i].leadsTo].name;
    }

		document.getElementById('roomDoors').innerHTML += '<a type="button" class="' + theClass + '" onClick="SelectRoom(' + varRooms[roomIndex].doors[i].leadsTo + ', true)">' + theValue + '</a>';
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

    /*if (varRooms[roomIndex].tasks[i].results.length === 0) {
      theClass = theClass + ' hidden';
    }*/

    theValue = varRooms[roomIndex].tasks[i].name;

		document.getElementById('roomTasks').innerHTML += '<a type="button" class="' + theClass + '" onClick="RunTask(' + i + ')">' + theValue + '</a>';
	}

  if (!contains(varKnownRooms, roomIndex))
    varKnownRooms.push(roomIndex);

  //Save the current data
  localStorage.roomNumber = JSON.stringify(roomIndex);
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

/*Method to run code when an inventory item's action is clicked on*/
function RunAction(itemSnowflake, actionSnowflake)
{
  var varRooms = JSON.parse(localStorage.rooms);
  var varRoomNumber = JSON.parse(localStorage.roomNumber);
  var varInventory = JSON.parse(localStorage.inventory);

  switch (itemSnowflake) {
    case "001":
      switch (actionSnowflake) {
        case 0:
          AddItem({
              snowflake:"017",
              name:"Hospital gown",
              description:"This is the hospital gown you were wearing",
              actions:[
                {
                  snowflake:"0",
                  roomIndex:-1,
                  name:"Wear"
                }
              ]
            });
          RemoveItem("001");
          break;
      }
      break;
    case "017":
      switch (actionSnowflake) {
        case 0:
          AddItem({
              snowflake:"001",
              name:"Clothes",
              description:"You guess these are your clothes, they look like they fit",
              actions:[
                {
                  snowflake:"0",
                  roomIndex:-1,
                  name:"Wear"
                }
              ]
            });
          RemoveItem("017");
          break;
        }
      break;
  }

  localStorage.rooms = JSON.stringify(varRooms);
  localStorage.roomNumber = JSON.stringify(varRoomNumber);

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

/*Method to remove an item from the player's inventory via a snowflake*/
function RemoveItem(snowflake)
{
  var varInventory = JSON.parse(localStorage.inventory);

  for (var i = 0; i < varInventory.length; i++) {
    if (varInventory[i].snowflake == snowflake) {
      varInventory.splice(i, 1);
      break;
    }
  }
  localStorage.inventory = JSON.stringify(varInventory);
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
      if (varInventory[i].actions[ii].roomIndex == -1 || varInventory[i].actions[ii].roomIndex == varRoomNumber) {
        var action = document.getElementById('tmp_action').cloneNode(true);
        action.ID = '';
        action.childNodes[0].href = 'javascript:RunAction("' + varInventory[i].snowflake + '", ' + varInventory[i].actions[ii].snowflake + ');'
        action.childNodes[0].innerHTML = varInventory[i].actions[ii].name;
        node.getElementsByClassName('dropdown-menu')[0].appendChild(action);
      }
    }

    document.getElementById('inventory').appendChild(node);
  }
}

/*Method to detect if an array contains an object.
I'm using this rather than 'Array.indexOf' for compatibility reasons*/
function contains(a, obj)
{
    for (var i = 0; i < a.length; i++) {
        if (a[i] == obj) {
            return true;
        }
    }
    return false;
}
