//Method to run on page-load
function OnLoad()
{
  //If the browser supports localStorage:
  if (typeof(Storage) !== "undefined") {
    var offerNewGame = true;
    //If no room number exists:
    if (localStorage.roomNumber === undefined){
      localStorage.roomNumber = 0
      offerNewGame = false;
    }
    //If no array of known rooms exists:
    if (localStorage.knownRooms === undefined){
      var theArray = [0, 3, 4, 5, 6];
      localStorage.knownRooms = JSON.stringify(theArray);
      offerNewGame = false;
    }
    //If a game is halfway though
    if (offerNewGame == true){
      document.getElementById("newGame").innerHTML = '<div class="alert alert-warning alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Click <a class="alert-link" onClick="newGame()">here</a> to start a new game.</div>'
    }
  }
  //Else, if the browser doesn't support localStorage:
  else {
    //Redirect them to error.html
    window.location.replace("error.html");
  }
  //Send the player to the current room
	SelectRoom(localStorage.roomNumber);
}

//Method to change the information to the current room
function SelectRoom(roomIndex)
{
  //Save the current room number
  localStorage.roomNumber = roomIndex;
  var theArray = JSON.parse(localStorage.knownRooms);
  theArray.push(roomIndex);
  localStorage.knownRooms = JSON.stringify(theArray);

  //Set the current room information
	document.getElementById('roomTitle').innerHTML = rooms[roomIndex].name;
	document.getElementById('roomText').innerHTML = rooms[roomIndex].description;

  //Set the current room doors
	document.getElementById('roomDoors').innerHTML = "";
	for (var i = 0; i < rooms[roomIndex].doors.length; i++)
	{
    var theClass = "btn btn-info door";
    var theValue = "";

    if (rooms[roomIndex].doors[i].locked == true){
      theClass = theClass + " disabled";
    }

    if (JSON.parse(localStorage.knownRooms).indexOf(rooms[roomIndex].doors[i].leadsTo) == -1){
      theValue = "Unknown Room";
    }
    else{
      theValue = rooms[roomIndex].doors[i].name;
    }

		document.getElementById('roomDoors').innerHTML += '<input type="button" class="' + theClass + '" onClick="SelectRoom(' + rooms[roomIndex].doors[i].leadsTo + ')" value="' + theValue + '"/>';
	}
}

function newGame()
{
  localStorage.removeItem("roomNumber");
  localStorage.removeItem("knownRooms");

  window.location.replace("game.html");
}
