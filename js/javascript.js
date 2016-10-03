$(document).ready(function(){
	
	$('#cs-title-text').text("Gooseman-Cliffe");
	$('#cs-content-text').text("A long standing tradition of tech fests everywhere. This event always draws a crowd. from the biggest Universities to the smallest colleges, gamers from all over are drawn to this event to show off their skills. ");
	
	var footerHTML = "<div class='mdl-mini-footer__center-section'>";
	footerHTML += "<div class='mdl-logo'>Cognizance</div>"
	footerHTML += "<div class='mdl-logo'><a href='http://ibsar.ac.in'>IBSAR Main Page</a></div>";
	footerHTML += "<div class='mdl-logo'><a href='contact.html'>Contact</a></div>";
	footerHTML += "<div class='mdl-logo'>Location: Thapar Complex, Sector 15, CBD Belapur, Navi Mumbai</div>";
	footerHTML += "</div>";
	
	$('footer').addClass('')
	$('footer').html(footerHTML);
	
});

