function flash(id, kolor, czas, kolor2, czas2)
{
	document.getElementById(id).style.color = kolor;
	window.setTimeout(`flash("${id}","${kolor2}",${czas2},"${kolor}",${czas})`, czas);
}