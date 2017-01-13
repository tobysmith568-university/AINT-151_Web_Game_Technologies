
function StorePlayerData()
{
	//alert(document.forms[0]['playername'].value);
	localStorage.setItem("playerName", document.forms[0]['playername'].value);
	localStorage.setItem('playerHealth', document.forms[0][1].value);
	localStorage.setItem('playerColour', document.forms[0][2].value);

}
