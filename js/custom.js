function loadData(){
	alert("hi");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200){
			var dataObj = JSON.parse(this.responseText);
			document.getElementById("test").innerHTML = dataObj;
		}

		xhttp.open("GET", "Task.JSON", true);
		xhttp.send();
	}
}