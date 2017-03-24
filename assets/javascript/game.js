
var questionPool = [{ image: "assets/images/instructions.png"}, 
					
					{ image: "assets/images/homeAway.png",
							1: "The Bird House", 
							2: "HomeAway", 
							3: "Tree House", 
							4: "Air BnB", 
							Correct: "HomeAway"
						},
					{ image: "assets/images/instagram.png",
							1: "Instagram", 
							2: "Captcha", 
							3: "Canva", 
							4: "Photor", 
							Correct: "Instagram"
						},
					{ image: "assets/images/tch.png",
							1: "March of Dimes", 
							2: "Kajima", 
							3: "Texas Children's Hospital", 
							4: "Cigna", 
							Correct: "Texas Children's Hospital"
						}			
];


var showImage;
var showTime;
var seconds;
var minutes = 0;
var answers = $("#answers");
var count = 0;
var time = 3;

// Use jQuery to run "startTrivia" when we click the "start" button.
$(".startBtn").on("click", startSlideshow);

// Use jQuery to run "reset" when we click the "reset" button.
$(".reset").on("click", stopSlideshow);

//User jquery to catch user responses
 $("body").on("click", ".response", catchUserRsp); 


function nextImage() {
	$("#imageHolder").html("<img src=" + questionPool[count].image + ">");

	//call nextAnswers to appear on screen at same time as associated image
	nextAnswers();

  	//Increment the count by 1.
  	count++; 



  //Use a setTimeout to run displayImage after 1 second.
  //setTimeout(displayImage, 3000);
  console.log("next image is working");


  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if(count === questionPool.length ){ 
  	count = 0;
  	clearInterval(showImage);

  };
}


function nextAnswers(){
	//delete old answer selections
	answers.empty();

	//loop through answers at count and display to the screen
	for (var i = 1; i < 5; i++){
		var question = questionPool[count][i];
		var questionTxt = $("<p>").text(question).addClass("response");
		answers.append(questionTxt);
	}

}


//NOT WORKING!!! 

//onclick function to capture user responses
 function catchUserRsp(){
 	console.log($(this).text() + "TESTING");
	// capture user answer
	userRsp = $(this).text()

	//compare user answer to correct answer
	//if correct ...
	if(userRsp === questionPool[count].Correct || userRsp === questionPool[count - 1].Correct){
		alert("YOU GOT IT RIGHT!");
	}else{
		alert("Wrong... boo");
	}
	//else wrong answer or no answer ...

};


function timer(){
	seconds = time;

	if (seconds < 10) {
      seconds = "0" + seconds;
    }

    $(".timeDisplay").empty().html("00:" + seconds);
    
    time--;

	if (time === 0){
	 	time = 3;
	}


}



function startSlideshow() {
  //Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 3000);

  //set interval to loop through timer
  showTime = setInterval(timer, 1000);
}

function stopSlideshow() {
  // Put our clearInterval here
  clearInterval(showImage);
  clearInterval(showTime);
  count = 0;
  nextImage();
  answers.empty();
  $(".timeDisplay").html("00:03");
}

// This will run the image function as soon as the page loads.
nextImage();
timer();

