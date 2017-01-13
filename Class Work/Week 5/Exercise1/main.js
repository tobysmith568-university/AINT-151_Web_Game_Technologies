var weaponsArray = [
	'Broadsword',
	'Crossbow',
	'Magic staff'
];


function OnLoad()
{
	for(var i = 0; i < weaponsArray.length; i++) {
		//console.log('<option value="' + i + '">' + weaponsArray[i] + '</option>');
		document.forms[0]['weapons'].innerHTML += '<option value="' + i + '">' + weaponsArray[i] + '</option>';
		SelectWeapon();
	}
}


function SelectWeapon()
{
	document.getElementById('currentWeapon').innerHTML = document.forms[0]['weapons'].options[document.forms[0]['weapons'].value].text
}
