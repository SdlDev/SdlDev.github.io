var menu_displayed = false;

function toggle_mobile_menu(caller)
{
	if (menu_displayed)
		document.getElementById("mobile_nav").style.maxHeight = "0px";
	else
		document.getElementById("mobile_nav").style.maxHeight = "calc(100% - 64px)";
	//caller.classList.toggle("active");
	menu_displayed = !menu_displayed;
}
