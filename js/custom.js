function loadData(){
	alert("hi");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		alert("hi2");
		if(this.readyState == 4 && this.status == 200){
			alert("hi3");
			var dataObj = JSON.parse(this.responseText);
			document.getElementById("test").innerHTML = "dataObj";
		}

		xhttp.open("GET", "Task.JSON", true);
		xhttp.send();
	}
}