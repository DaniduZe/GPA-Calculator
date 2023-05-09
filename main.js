		var creditcount = 0;
		var gpacount = 0;

		function showGPA (value) {
			document.getElementById("showgpa").innerHTML = "GPA : " + value;
		}

		function calculateGPA (cc,gc){

			var gpa = gc / cc;
			showGPA(gpa);

		}
		
		function itcs() {
			/*alert("You have selected : ");
			document.getElementById("p2").style.color = "blue";
			*/
			var itcsValue = document.querySelector('input[name="itcs"]:checked').value;
			creditcount = creditcount + 3;
			gpacount = gpacount + itcsValue * 3;
			calculateGPA(creditcount,gpacount);

		}

		function pf() {
			var pfValue = document.querySelector('input[name="pf"]:checked').value;
			creditcount = creditcount + 3;
			gpacount = gpacount + pfValue * 3;
			calculateGPA(creditcount,gpacount);
		}

		function mathematics() {
			var mathematicsValue = document.querySelector('input[name="mathematics"]:checked').value;
			creditcount = creditcount + 3;
			gpacount =gpacount+ mathematicsValue * 3;
			calculateGPA(creditcount,gpacount);
		}

		function database() {
			var databaseValue = document.querySelector('input[name="database"]:checked').value;
			creditcount = creditcount + 3;
			gpacount =gpacount+ databaseValue * 3;
			calculateGPA(creditcount,gpacount);
		}

		function computerTech() {

			var computerTechValue = document.querySelector('input[name="computerTech"]:checked').value;
			creditcount = creditcount + 3;
			gpacount =gpacount+ computerTechValue * 3;
			calculateGPA(creditcount,gpacount);
		}

		function objectop() {
			var oopValue = document.querySelector('input[name="objectop"]:checked').value;
			creditcount = creditcount + 3;
			gpacount =gpacount+ oopValue * 3;
			calculateGPA(creditcount,gpacount);
		}


		function compterAN() {

			var compterANValue = document.querySelector('input[name="compterAN"]:checked').value;
			creditcount = creditcount + 3;
			gpacount =gpacount+ compterANValue * 3;
			calculateGPA(creditcount,gpacount);

		}

		function GUIapp() {

			var GUIappValue = document.querySelector('input[name="GUIapp"]:checked').value;
			creditcount = creditcount + 3;
			gpacount =gpacount+ GUIappValue * 3;
			calculateGPA(creditcount,gpacount);

		}

		function operatingSystem() {

			var operatingSystemValue = document.querySelector('input[name="operatingSystem"]:checked').value;
			creditcount = creditcount + 4;
			gpacount =gpacount+ operatingSystemValue * 4;
			calculateGPA(creditcount,gpacount);

		}

		function EADev() {

			var EADevValue = document.querySelector('input[name="EADev"]:checked').value;
			creditcount = creditcount + 3;
			gpacount =gpacount+ EADevValue * 3;
			calculateGPA(creditcount,gpacount);

		}


		function WebAppDev() {

			var WebAppDevValue = document.querySelector('input[name="WebAppDev"]:checked').value;
			creditcount = creditcount + 4;
			gpacount =gpacount+ WebAppDevValue * 4;
			calculateGPA(creditcount,gpacount);

		}

		function softEng() {

			var softEngValue = document.querySelector('input[name="softEng"]:checked').value;
			creditcount = creditcount + 4;
			gpacount =gpacount+ softEngValue * 4;
			calculateGPA(creditcount,gpacount);

		}

		function softEngiProject() {

			var softEngiProjectValue = document.querySelector('input[name="softEngiProject"]:checked').value;
			creditcount = creditcount + 5;
			gpacount =gpacount+ softEngValue * 5;
			calculateGPA(creditcount,gpacount);

		}
