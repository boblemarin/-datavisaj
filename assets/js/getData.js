window.onload = function(){
	// get data from datasrc div element
	var data = document.getElementById("datasrc").innerHTML.split(";");

	// get the visualization div
	window.canvas = document.getElementById("canvas");

	// initialize main data variables
	window.numData = data.length>>1;
	window.girls = 0;
	window.boys = 0;
	window.birthDates = [];
	window.birthStart = 1950;
	window.birthStop = 2012;

	var i,parts,year,n=data.length;

	// pre-populate birth array
	for(i=0;i<(birthStop-birthStart);i++){
		birthDates.push(0);
	}


	for(i=0;i<n;++i){
		if ( i%2 ) {
			// get birth data
			parts = data[i].split("-");
			var year = Number(parts[0])-birthStart;
			birthDates[year]++;
		} else {
			// get gender
			if ( data[i] == "M" ) ++boys;
			else ++girls;
		}
		
	}

	console.log( "Boys:" + boys );
	console.log( "Girls:" + girls );
	console.log("years :");
	console.log(birthDates);

	showData();
};