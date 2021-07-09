console.info("salut 1");
	console.warn(new Date());
	console.error("salut 3");
	console.debug(131/2)
	var name = "Alex Radulescu";
	console.info("name:"+ name);

	var age = 12+6;
	console.info ("age:", age);
	var skills= ['html' , "css" , `js`];
	console.info("skills:", skills);

	name="ba";
	console.info("name:"+ name);
	
	var m= document.getElementById("motto");
	console.info("my motto", m); 
	
	

	m.onclick = function () {
		console.info('click pe motto',m.innerText)
		
		if (m.innerText == "Student la facultatea de drept") {
			m.innerHTML = "<strong>student</strong> <i>@fasttrack</i>";
		m.style.color = "#dd44dd"
		} else {
			m.innerHTML = "<strong>Student</strong> <i>la facultatea de drept</i>"
			m.style.color =""
		}

	}
