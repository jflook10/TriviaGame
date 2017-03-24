// var questionPool = {Q1 : ["Question 1:", "../images/homeaway.jpg", "Answer 1A", "Answer 2A", "Answer 3A", "Answer 4A", "Answer 1A"],
// 					Q2 : ["Question 2:", "../images/instagram.png", "Answer 1B", "Answer 2B", "Answer 3B", "Answer 4B", "Answer 1B"],
// 					Q3 : ["Question 3:", "../images/microsoft.png", "Answer 1C", "Answer 2C", "Answer 3C", "Answer 4C", "Answer 1C"],
// 					Q4 : ["Question 4:", "../images/tch.png", "Answer 1D", "Answer 2D", "Answer 3D", "Answer 4D", "Answer 1D"],
// 					Q5 : ["Question 5:", "../images/underArmor.jpg", "Answer 1E", "Answer 2E", "Answer 3E", "Answer 4E", "Answer 1E"],
// 					Q6 : ["Question 6:", "../images/wwf.jpg", "Answer 1F", "Answer 2F", "Answer 3F", "Answer 4F", "Answer 1F"]};

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
var answers = $(".answers");
var count = 0;

// Use jQuery to run "startTrivia" when we click the "start" button.
$(".startBtn").on("click", startSlideshow);

// Use jQuery to run "reset" when we click the "reset" button.
$(".reset").on("click", stopSlideshow);

//User jquery to catch user responses
$(".response").on("click", catchUserRsp);


function nextImage() {
	$("#imageHolder").html("<img src=" + questionPool[count].image + ">");

	//call nextAnswers to appear on screen at same time as associated image
	nextAnswers();

  	//Increment the count by 1.
  	count++; 



  // TODO: Use a setTimeout to run displayImage after 1 second.
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


//onclick function to capture user responses
 function catchUserRsp(){
 	console.log(this + "TESTING");
	//capture user answer
	userRsp = this.filter(".response").text()
	
	console.log(this + "testing 123");
	//compare user answer to correct answer

	//if correct ...

	//else wrong answer or no answer ...

};




function startSlideshow() {
  //Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 3000);
}

function stopSlideshow() {
  // Put our clearInterval here
  clearInterval(showImage);
  nextImage();
  answers.empty();
}

// This will run the image function as soon as the page loads.
nextImage();


