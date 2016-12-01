var rooms = [//All the rooms of the map and their data
  {
    name:"The room name",//This the header of the webpage
    index:0,
    floorplan:"image.png",//This is a top-down floorplan image for the room
    description:"The room description"//This is the paragraph of the webpage
    tasks:
    /*Each task in a room will have a small description in a paragraph
    and then a few words on a button to show it's action*/
      [
        {
          name:"The task name 001",//This is the text for the button
          index:0,//This index, along with the current room index, links to the actions in RunTask()
          enabled:true,//False means the task's button is disabled
          keySnowflake:["001"],//This unique ID links to a prerequisite inventory item
          /*Entering a room with an inventory item with this ID, will change the
          enabled setting - as will doing another task n the same room which gives you the needed item*/
          results:[["The task description for task 001", 100]]//This is the text for the small paragraph
        },
        {
          name:"The task name 002",
          index:1,
          enabled:true,
          keySnowflake:["002"],
          results:[["The task description for task 002", 100]]
        },
        {
          name:"The task name 003",
          index:2,
          enabled:true,
          keySnowflake:["003"],
          results:[["The task description for task 003", 100]]
        }
      ]
    doors:
    /*Each door in a room has a name which also can act as a description
    this will show above a button to use the door*/
      [
        {
          name:"The door name",//This is the text for the button
          index:0,
          locked:true,//True means the door is locked
          keySnowflake:["004"],//This unique ID links to a prerequisite inventory item
          /*Entering a room with an inventory item with this ID,
          will change the locked setting - as will doing a task
          in the same room which gives you the needed item*/
          leadsTo:1//This is the index of the room this door leads to
        },
        {
          name:"The door name",
          index:1,
          locked:false,
          keySnowflake:["005", "006"],
          leadsTo:2
        }
      ]
  }
]

var inventory = [//All the items in the player's inventory and their data
  {
    name:"The item name",//This is the name of the item
    snowflake:"004",//This is checked when you enter a room
    /*Any tasks or doors with this as their keySnowflake which are
    also disabled/locked then become enabled/unlocked*/
    description:"The description for the item"//Possible uses could be tooltips
  }
]

function RunTask(roomIndex, taskIndex) {
  /*When a task button is clicked this method will run.
  This method uses the index of the current room and
  the task clicked on to figure out which action to do*/
  switch (roomIndex)
  {
    case 0:
      switch (taskIndex)
      {
        case 0:
          /*Do stuff*/
          break;
        case 1:
          /*Do stuff*/
          break;
        case 3:
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
}

function UseDoor(roomIndex, doorIndex) {
  /*When a door button is clicked this method will run.
  This method uses the the index of the current room and
  the door clicked on figure out the data of the new room*/

  /*
  newRoomIndex = rooms[roomIndex].doors[doorIndex].leadsTo
  newRoomName = room[newRoomIndex].name
  newRoomDescription = room[newRoomIndex].description
  */

  /*
  clearAllTasks();
  for (var task in rooms[newRoomIndex].tasks)
  {
    MakeTask(rooms[newRoomIndex].tasks[task]);
  }
  */

  /*
  clearAllDoors();
  for (var door in rooms[newRoomIndex].doors)
  {
    MakeDoor(rooms[newRoomIndex].doors[door]);
  }
  */
}

function clearAllTasks() {
  /*
  taskElement.innerHTML == "";
  */
}

function clearAllDoors() {
  /*
  doorElement.innerHTML == "";
  */
}

function MakeTask(task) {
  /*
  taskElement.innerHTML += <button stuff=task.stuff>task.name</button>;
  */
}

function MakeDoor(door) {
  /*
  doorElement.innerHTML += door.name;
  doorElement.innerHTML += <button stuff=o.stuff>Go through door</button>;
  */
}

function updateInventory() {
  /*
  inventoryElement.innerHTML = <ul>\n;
  for (var item in inventory)
  {
    inventoryElement.innerHTML *= <li>inventory[item.name]</li>\n;
  }
  inventoryElement.innerHTML = </ul>;
  */
}
