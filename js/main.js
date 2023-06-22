/*$(document).ready(function(){
$nav = $('.nav');
$toggleCollaps = $('.toggle-collapse')
});*/
var manuBtn = document.getElementById("manuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

sideNav.style.right == "-250px";
manuBtn.onclick = function(){
	if(sideNav.style.right == "-250px"){
			sideNav.style.right = "0";
			menu.src = "images/closemenu.png";
	}
	else{
			sideNav.style.right = "-250px";
			menu.src = "images/menu.png";
	}
}
/*nav*/
//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
/*slide png*/

/*offerandchesscake*/
function car(){

  var dom=document.getElementById ("car");
   alert("Added to cart")

}
//find us
function getSelectValue (){

  var selectvalue = document.getElementById('citys').value;
  if(selectvalue == "makkah"){
  alert("welcome visit us in makkah");
  }
  else if (selectvalue == "jeddah"){
  alert("welcome visit us in jeddah");
  }
  else if (selectvalue == "taif"){
      alert("welcome visit us in taif");
  }
  else if (selectvalue == "dammam"){
      alert("welcome visit us in dammam");
  }
}

/*coruses*/

