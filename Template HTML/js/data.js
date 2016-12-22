var rooms = [//All the rooms of the map and their data
  {
    name:"Patient Room 5",//This the header of the webpage
    index:0,
    floorplan:"patientRoom0.png",//This is a top-down floorplan image for the room
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",//This is the paragraph of the webpage
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
      ],
    doors:
    /*Each door in a room has a name which also can act as a description
    this will show above a button to use the door*/
      [
        {
          name:"Ward",//This is the text for the button
          index:0,
          locked:false,//True means the door is locked
          keySnowflakes:[],//This unique ID links to a prerequisite inventory item
          /*Entering a room with an inventory item with this ID,
          will change the locked setting - as will doing a task
          in the same room which gives you the needed item*/
          leadsTo:1//This is the index of the room this door leads to
        }
      ]
  },
  {
    name:"Ward",
    index:1,
    floorplan:"ward0.png",
    description:"The ward is empty, there is no one in sight and the whole hospital is silent.",
    tasks:
      [
      ],
    doors:
      [
        {
          name:"Patient Room 1",
          index:0,
          locked:false,
          keySnowflakes:[],
          leadsTo:3
        },
        {
          name:"Patient Room 2",
          index:1,
          locked:false,
          keySnowflakes:[],
          leadsTo:4
        },
        {
          name:"Patient Room 3",
          index:2,
          locked:false,
          keySnowflakes:[],
          leadsTo:5
        },
        {
          name:"Patient Room 4",
          index:3,
          locked:false,
          keySnowflakes:[],
          leadsTo:6
        },
        {
          name:"Patient Room 5",
          index:4,
          locked:false,
          keySnowflakes:[],
          leadsTo:0
        },
        {
          name:"Reception Area",
          index:5,
          locked:false,
          keySnowflakes:[],
          leadsTo:7
        }
      ]
  },
  {
    name:"Patient Room 1",
    index:3,
    floorplan:"patientRoom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",
    tasks:
      [
      ],
    doors:
      [
        {
          name:"The door name",
          index:0,
          locked:false,
          keySnowflakes:[],
          leadsTo:1
        }
      ]
  }
]
