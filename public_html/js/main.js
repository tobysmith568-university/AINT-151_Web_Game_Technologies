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
      var theArray = [2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 22, 24, 25, 26, 27, 28, 30, 32, 33];
      localStorage.knownRooms = JSON.stringify(theArray);
      offerNewGame = false;
    }
    //If no array of known inventory items exists:
    if (localStorage.inventory === undefined){
      var theArray = [{snowflake:"info",wearing:"017"}];
      localStorage.inventory = JSON.stringify(theArray);
      offerNewGame = false;
    }
    //If no array of owned inventory items:
    if (localStorage.items === undefined){
      localStorage.items = JSON.stringify(items);
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
    document.getElementById('messages').innerHTML = '<div style="height:113px"/>';

  //Read from the localStorage
  var varRooms = JSON.parse(localStorage.rooms);
  var varKnownRooms = JSON.parse(localStorage.knownRooms);
  var varRoomNumber = JSON.parse(localStorage.roomNumber);

  //Get the current room's wallText
  var wallText = varRooms[roomIndex].wallText;

  //Set the current room information
	document.getElementById('roomTitle').innerHTML = varRooms[roomIndex].name;
  var description = varRooms[roomIndex].description;
  if (wallText != "") {
      description += "\nOn the wall you have written:\n" + wallText;
  }
	document.getElementById('roomText').innerHTML = description;

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

    theValue = varRooms[roomIndex].tasks[i].name;

		document.getElementById('roomTasks').innerHTML += '<a type="button" class="' + theClass + '" onClick="RunTask(' + i + ')">' + theValue + '</a>';
	}

  //Get the current room's image
  document.getElementById('map').src = 'img/rooms/' + varRooms[roomIndex].image;

  //Save the current data
  if (!contains(varKnownRooms, roomIndex))
    varKnownRooms.push(roomIndex);
  localStorage.roomNumber = JSON.stringify(roomIndex);
  localStorage.knownRooms = JSON.stringify(varKnownRooms);
  ///////////localStorage.rooms = JSON.stringify(varRooms);

  ShowInventory();
}

/*Method to wipe the game data from the browser and reload the page*/
function NewGame()
{
  localStorage.removeItem('roomNumber');
  localStorage.removeItem('knownRooms');
  localStorage.removeItem('rooms');
  localStorage.removeItem('inventory');
  localStorage.removeItem('items');
  localStorage.removeItem('you');

  window.location.replace('game.html');
}

/*Method to take all the items in the player's inventory
and show them in the onscreen inventory*/
function ShowInventory()
{
  //Get the needed data
  var varInventory = JSON.parse(localStorage.inventory);
  var varRoomNumber = JSON.parse(localStorage.roomNumber);

  //Show the inventory
  document.getElementById('inventory').innerHTML = '';
  for (var i = 1; i < varInventory.length; i++) {
    var node = document.getElementById('tmp_inventory').cloneNode(true);
    node.id = 'item_' + varInventory[i].snowflake;
    node.getElementsByClassName('inventoryName')[0].innerHTML = varInventory[i].name;
    node.getElementsByClassName('inventoryName')[0].title = varInventory[i].description;
    node.getElementsByClassName('inventoryName')[0].setAttribute('onclick','AddMessage("' + varInventory[i].name + ':", "' + varInventory[i].description + '")');
    for (var ii = 0; ii < varInventory[i].actions.length; ii++) {
      if (varInventory[i].actions[ii].roomIndex == -1 || varInventory[i].actions[ii].roomIndex == varRoomNumber) {
        var action = document.getElementById('tmp_action').cloneNode(true);
        action.ID = '';
        action.childNodes[0].href = 'javascript:RunAction("' + varInventory[i].snowflake + '", ' + varInventory[i].actions[ii].snowflake + ');'
        action.childNodes[0].innerHTML = varInventory[i].actions[ii].name;
        node.getElementsByClassName('dropdown-menu')[0].appendChild(action);
      }
    }
    if (node.getElementsByClassName('dropdown-menu')[0].children.length == 0) {
      var action = document.getElementById('tmp_action').cloneNode(true);
      action.ID = '';
      action.childNodes[0].innerHTML = 'No actions';
      node.getElementsByClassName('dropdown-menu')[0].appendChild(action);
    }

    document.getElementById('inventory').appendChild(node);
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

/*ITEM STUFF*/

/*Method to add an item to the players inventory from a snowflake*/
function AddItem(snowflake)
{
  //Get the needed data
  var varInventory = JSON.parse(localStorage.inventory);
  var varItems = JSON.parse(localStorage.items);

  //Add the item
  for (var i = 0; i < varItems.length; i++) {
    if (varItems[i].snowflake == snowflake) {
      varInventory.push(varItems[i]);
    }
  }

  //Save the changed data
  localStorage.inventory = JSON.stringify(varInventory);
}

/*Method to remove an item from the player's inventory from a snowflake*/
function RemoveItem(snowflake)
{
  //Get the needed data
  var varInventory = JSON.parse(localStorage.inventory);

  //Remove the item
  for (var i = 0; i < varInventory.length; i++) {
    if (varInventory[i].snowflake == snowflake) {
      varInventory.splice(i, 1);
      break;
    }
  }

  //Save the changed data
  localStorage.inventory = JSON.stringify(varInventory);
}

/*DOOR STUFF*/

/*Method to remove a key from a door*/
function DoorRemoveKey(roomID, doorID, key)
{
  //Get the needed data
  var varRooms = JSON.parse(localStorage.rooms);

  //Remove the key
  for (var i = 0; i < varRooms[roomID].doors[doorID].keys.length; i++) {
    if (varRooms[roomID].doors[doorID].keys[i] == key) {
      varRooms[roomID].doors[doorID].keys.splice(i, 1);
    }
  }

  //Save the changed data
  localStorage.rooms = JSON.stringify(varRooms);
}

/*TASK STUFF*/

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

/*Method to remove a task from a room*/
/*CURRENTLY UNUSED*/
function RemoveTask(roomIndex, taskIndex)
{
  //
}

/*Method to remove a key from an task*/
function TaskRemoveKey(roomID, taskID, key)
{
  //Get the needed data
  var varRooms = JSON.parse(localStorage.rooms);

  //Remove the key
  for (var i = 0; i < varRooms[roomID].tasks[taskID].keys.length; i++) {
    if (varRooms[roomID].tasks[taskID].keys[i] == key) {
      varRooms[roomID].tasks[taskID].keys.splice(i, 1);
    }
  }

  //Save the changed data
  localStorage.rooms = JSON.stringify(varRooms);
}

/*ACTION STUFF*/

/*Method to run code when an inventory item's action is clicked on*/
function RunAction(itemSnowflake, actionSnowflake)
{
  switch (itemSnowflake) {
    case "001":
        switch (actionSnowflake) {
          case 0:
            //Get the needed data
            var varInventory = JSON.parse(localStorage.inventory);

            //Add the new clothes
            AddItem(varInventory[0].wearing);

            //Get the needed data
            var varInventory = JSON.parse(localStorage.inventory);

            //Save the changed data
            varInventory[0].wearing = "001";
            localStorage.inventory = JSON.stringify(varInventory);

            //Remove the old clothes
            RemoveItem("001");
            break;
        }
        break;//001
    case "002":
      switch (actionSnowflake) {
        case 0:
          AddMessage("That was silly...", "Nothing happened because of the power cut.");
          break;
      }
      break;//002
    case "003":
      switch (actionSnowflake) {
        case 0:
          AddMessage("Success!", "You unlock the draw.");
          TaskRemoveKey(2, 1, "003");
          RemoveAction(0, "003");
          RemoveAction(1, "005");
          RemoveAction(2, "013");
          RemoveAction(3, "016");
          break;
        case 1:
          AddMessage("Success!", "You unlock the draw.");
          TaskRemoveKey(3, 1, "003");
          RemoveAction(1, "003");
          RemoveAction(2, "005");
          RemoveAction(3, "013");
          RemoveAction(4, "016");
          break;
        case 2:
          AddMessage("Success!", "You unlock the draw.");
          TaskRemoveKey(4, 1, "003");
          RemoveAction(2, "003");
          RemoveAction(3, "005");
          RemoveAction(4, "013");
          RemoveAction(5, "016");
          break;
        case 3:
          AddMessage("Success!", "You unlock the draw.");
          TaskRemoveKey(5, 1, "003");
          RemoveAction(3, "003");
          RemoveAction(4, "005");
          RemoveAction(5, "013");
          RemoveAction(6, "016");
          break;
        case 4:
          AddMessage("Success!", "You unlock the draw.");
          TaskRemoveKey(6, 1, "003");
          RemoveAction(4, "003");
          RemoveAction(5, "005");
          RemoveAction(6, "013");
          RemoveAction(7, "016");
          break;
        case 5:
          AddMessage("Success!", "You unlock the draw.");
          TaskRemoveKey(13, 1, "003");
          RemoveAction(5, "003");
          RemoveAction(6, "005");
          RemoveAction(7, "013");
          RemoveAction(8, "016");
          break;
        case 6:
          AddMessage("Success!", "You unlock the draw.");
          TaskRemoveKey(14, 1, "003");
          RemoveAction(6, "003");
          RemoveAction(7, "005");
          RemoveAction(8, "013");
          RemoveAction(9, "016");
          break;
        case 7:
          AddMessage("Success!", "You unlock the draw.");
          TaskRemoveKey(15, 1, "003");
          RemoveAction(7, "003");
          RemoveAction(8, "005");
          RemoveAction(9, "013");
          RemoveAction(10, "016");
          break;
        case 8:
          AddMessage("Success!", "You unlock the draw.");
          TaskRemoveKey(16, 1, "003");
          RemoveAction(8, "003");
          RemoveAction(9, "005");
          RemoveAction(10, "013");
          RemoveAction(11, "016");
          break;
        case 9:
          AddMessage("Success!", "You unlock the draw.");
          TaskRemoveKey(17, 1, "003");
          RemoveAction(9, "003");
          RemoveAction(10, "005");
          RemoveAction(11, "013");
          RemoveAction(12, "016");
          break;
        case 10:
          AddMessage("Success!", "You unlock the draw.");
          TaskRemoveKey(24, 1, "003");
          RemoveAction(10, "003");
          RemoveAction(11, "005");
          RemoveAction(12, "013");
          RemoveAction(13, "016");
          break;
        case 11:
          AddMessage("Success!", "You unlock the draw.");
          TaskRemoveKey(25, 1, "003");
          RemoveAction(11, "003");
          RemoveAction(12, "005");
          RemoveAction(13, "013");
          RemoveAction(14, "016");
          break;
        case 12:
          AddMessage("Success!", "You unlock the draw.");
          TaskRemoveKey(26, 1, "003");
          RemoveAction(12, "003");
          RemoveAction(13, "005");
          RemoveAction(14, "013");
          RemoveAction(15, "016");
          break;
        case 13:
          AddMessage("Success!", "You unlock the draw.");
          TaskRemoveKey(27, 1, "003");
          RemoveAction(13, "003");
          RemoveAction(14, "005");
          RemoveAction(15, "013");
          RemoveAction(16, "016");
          break;
        case 14:
          AddMessage("Success!", "You unlock the draw.");
          TaskRemoveKey(278, 1, "003");
          RemoveAction(14, "003");
          RemoveAction(15, "005");
          RemoveAction(16, "013");
          RemoveAction(17, "016");
          break;
        case 15:
          AddMessage("Failure!", "That key does not unlock the door.");
          break;
        case 16:
          AddMessage("Failure!", "That key does not unlock the filing cabinet.");
          break;
        case 17:
          AddMessage("Failure!", "That key does not unlock the second locker.");
          break;
      }
      break;//003
    case "004":
      switch (actionSnowflake) {
        case 0:
          var now = new Date();
          AddMessage("Check the time:", "The current time is " + now.getHours() + ":" + now.getMinutes() + ".");
          break;
      }
      break;//004
    case "005":
      switch (actionSnowflake) {
        case 0:
          AddMessage("Make the horn beep:", "You can hear a faint car horn beep off in the distance...");
          break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
          AddMessage("Failure!", "That key does not unlock the draw.");
          break;
        case 16:
          AddMessage("Failure!", "That key does not unlock the door.");
          break;
        case 17:
          AddMessage("Failure!", "That key does not unlock the filing cabinet.");
          break;
        case 18:
          AddMessage("Failure!", "That key does not unlock the second locker.");
          break
      }
      break;//005
    case "006":
      switch (actionSnowflake) {
        case 0:
          var now = new Date();
          AddMessage("Check the time:", "The current time is " + now.getHours() + ":" + now.getMinutes() + ".");
          break;
      }
      break;//006
    case "007":
      switch (actionSnowflake) {
        case 0:
          var r = confirm("Are you sure you want to assume this is you?\nThis cannot be reversed.");
          if (r == true) {
            localStorage.you = JSON.stringify({name:"Toby Smith", image:"img/avatars/avatar0.jpg", age:"19", gender:"Male", height:"190cm", set:true});
            RemoveAction(0, "007");
            RemoveAction(0, "008");
            RemoveAction(0, "009");
            RemoveAction(0, "010");
            AddMessage("Assume this is you:", "You are now the person in this patient file. You can view your profile <a href='profile.html'>here<a>.");
          }
          break;
      }
      break;//007
    case "008":
      switch (actionSnowflake) {
        case 0:
          var r = confirm("Are you sure you want to assume this is you?\nThis cannot be reversed.");
          if (r == true) {
            localStorage.you = JSON.stringify({name:"Jess Jones", image:"img/avatars/avatar2.jpg", age:"24", gender:"Female", height:"165cm", set:true});
            RemoveAction(0, "007");
            RemoveAction(0, "008");
            RemoveAction(0, "009");
            RemoveAction(0, "010");
          }
          break;
      }
      break;//008
    case "009":
      switch (actionSnowflake) {
        case 0:
          var r = confirm("Are you sure you want to assume this is you?\nThis cannot be reversed.");
          if (r == true) {
            localStorage.you = JSON.stringify({name:"Sam Bill", image:"img/avatars/avatar1.jpg", age:"36", gender:"Male", height:"184cm", set:true});
            RemoveAction(0, "007");
            RemoveAction(0, "008");
            RemoveAction(0, "009");
            RemoveAction(0, "010");
          }
          break;
      }
      break;//009
    case "010":
      switch (actionSnowflake) {
        case 0:
          var r = confirm("Are you sure you want to assume this is you?\nThis cannot be reversed.");
          if (r == true) {
            localStorage.you = JSON.stringify({name:"Harriet Walker", image:"img/avatars/avatar3.jpg", age:"48", gender:"Female", height:"159cm", set:true});
            RemoveAction(0, "007");
            RemoveAction(0, "008");
            RemoveAction(0, "009");
            RemoveAction(0, "010");
          }
          break;
      }
      break;//010
    case "011":
      switch (actionSnowflake) {
        case 0:
          AddMessage("Success!", "The crowbar forced the door open.");
          DoorRemoveKey(0, 3, "011");
          break;
      }
      break;//011
    case "012":
      switch (actionSnowflake) {
        case 0:
          //Get the needed data
          var varRooms = JSON.parse(localStorage.rooms);
          var varRoomNumber = JSON.parse(localStorage.roomNumber);

          //Append to the wallText
          varRooms[varRoomNumber].wallText += " " + prompt("What do you want to write?", "");

          //Save the changed data
          localStorage.rooms = JSON.stringify(varRooms);
          break;
      }
      break;//012
    case "013":
      switch (actionSnowflake) {
        case 0:
          AddMessage("Failure!", "That key does not unlock the door.");
          break;
        case 1:
          AddMessage("Success!", "You unlock the filing cabinet.");
          TaskRemoveKey(7, 1, "013");
          RemoveAction(16, "003");
          RemoveAction(17, "005");
          RemoveAction(1, "016");
          break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
          AddMessage("Failure!", "That key does not unlock the top draw.");
          break;
        case 17:
          AddMessage("Failure!", "That key does not unlock the second locker.");
          break;
      }
      break;//013
    case "014":
      switch (actionSnowflake) {
        case 0:
          alert('The code is: 4582');
          break;
        case 1:
          alert('NEEDS DOING');
          break;
        case 2:
          alert('NEEDS DOING');
          break;
        case 3:
          alert('NEEDS DOING');
          break;
      }
      break;//014
    case "015":
      switch (actionSnowflake) {
        case 0:
          AddMessage("Lick the 20p coin:", "Unfortunately the 20p coin doesn't taste as good as the freddo™ it could have bought a few years ago...");
          break;
      }
      break;//015
    case "016":
      switch (actionSnowflake) {
        case 0:
          AddMessage("Success!", "You unlock the door.");
          DoorRemoveKey(7, 0, "016");
          RemoveAction(15, "003");
          RemoveAction(16, "005");
          RemoveAction(0, "013");
          break;
        case 1:
          AddMessage("Failure!", "That key does not unlock the filing cabinet.");
          break;
        case 2:
          AddMessage("Success!", "You unlock the second locker.");
          TaskRemoveKey(8, 3, "016");
          RemoveAction(17, "003");
          RemoveAction(18, "005");
          RemoveAction(17, "013");
          break;
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
          AddMessage("Failure!", "That key does not unlock the top draw.");
          break;
          break;
      }
      break;//016
    case "017":
      switch (actionSnowflake) {
        case 0:
          //Get the needed data
          var varInventory = JSON.parse(localStorage.inventory);

          //Add the new clothes
          AddItem(varInventory[0].wearing);

          //Get the needed data
          var varInventory = JSON.parse(localStorage.inventory);

          //Save the changed data
          varInventory[0].wearing = "017";
          localStorage.inventory = JSON.stringify(varInventory);

          //Remove the old clothes
          RemoveItem("017");
          break;
        }
      break;//017
    case "018":
      switch (actionSnowflake) {
        case 0:
          AddMessage("Drink the can of Coke:", "Dispite being warm the Coke was still refreshing.");
          RemoveItem("018");
          break;
      }
      break;//018
    //Nothing for "019"
    case "020":
      switch (actionSnowflake) {
        case 0:
          AddMessage("Success!", "The lock breaks off and the door swings open. Now that you can get close you see there is a ladder doing both up and down the lift shaft.");
          alert('NEEDS DOING');
          break;
      }
      break;//020
    //Nothing for "021"
    case "022":
      switch (actionSnowflake) {
        case 0:
          //Get the needed data
          var varInventory = JSON.parse(localStorage.inventory);

          //Add a new bandage and remove the box if needed
          for (var i = 0; i < varInventory.length; i++) {
            if (varInventory[i].snowflake == "022") {
              if (varInventory[i].bandages > 0) {
                AddItem("025");
                //Get the needed data
                var varInventory = JSON.parse(localStorage.inventory);
                varInventory[i].bandages--;
                //Save the changed data
                localStorage.inventory = JSON.stringify(varInventory);
              }
              //Get the needed data
              var varInventory = JSON.parse(localStorage.inventory);
              if (varInventory[i].bandages == 0) {
                RemoveItem("022");
              }
            }
          }
          break;
      }
      break;//022
    //Nothing for "023"
    case "024":
      switch (actionSnowflake) {
        case 0:
          //Get the needed data
          var varInventory = JSON.parse(localStorage.inventory);

          //Add the new clothes
          AddItem(varInventory[0].wearing);

          //Get the needed data
          var varInventory = JSON.parse(localStorage.inventory);

          //Save the changed data
          varInventory[0].wearing = "024";
          localStorage.inventory = JSON.stringify(varInventory);

          //Remove the old clothes
          RemoveItem("024");
          break;
      }
      break;//024
    //Nothing for "025"
  }

  SelectRoom(JSON.parse(localStorage.roomNumber));
}

/*Method to remove an action from an inventory item*/
function RemoveAction(actionID, snowflake)
{
  //Get the needed data
  var varInventory = JSON.parse(localStorage.inventory);
  var varItems = JSON.parse(localStorage.items);

  //Remove the action
  for (var i = 0; i < varInventory.length; i++) {
    if (varInventory[i].snowflake == snowflake) {
      varInventory[i].actions.splice(actionID, 1);
    }
  }
  for (var i = 0; i < varItems.length; i++) {
    if (varItems[i].snowflake == snowflake) {
      varItems[i].actions.splice(actionID, 1);
    }
  }

  //Save the changed data
  localStorage.inventory = JSON.stringify(varInventory);
  localStorage.items = JSON.stringify(varItems);
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
