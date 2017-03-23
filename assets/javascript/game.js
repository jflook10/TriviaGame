// var questionPool = {Q1 : ["Question 1:", "../images/homeaway.jpg", "Answer 1A", "Answer 2A", "Answer 3A", "Answer 4A", "Answer 1A"],
// 					Q2 : ["Question 2:", "../images/instagram.png", "Answer 1B", "Answer 2B", "Answer 3B", "Answer 4B", "Answer 1B"],
// 					Q3 : ["Question 3:", "../images/microsoft.png", "Answer 1C", "Answer 2C", "Answer 3C", "Answer 4C", "Answer 1C"],
// 					Q4 : ["Question 4:", "../images/tch.png", "Answer 1D", "Answer 2D", "Answer 3D", "Answer 4D", "Answer 1D"],
// 					Q5 : ["Question 5:", "../images/underArmor.jpg", "Answer 1E", "Answer 2E", "Answer 3E", "Answer 4E", "Answer 1E"],
// 					Q6 : ["Question 6:", "../images/wwf.jpg", "Answer 1F", "Answer 2F", "Answer 3F", "Answer 4F", "Answer 1F"]};

var questionPool = [ { image: "assets/images/homeaway.jpg",
							A1: "Answer 1A", 
							A2: "Answer 2A", 
							A3: "Answer 3A", 
							A4: "Answer 4A", 
							Correct: "Answer 1A"

						},
					{ image: "assets/images/instagram.png",
							B1: "Answer 1B", 
							B2: "Answer 2B", 
							B3: "Answer 3B", 
							B4: "Answer 4B", 
							Correct: "Answer 1B"

						},
					{ images: "assets/images/tch.png",
							C1: "Answer 1C", 
							C2: "Answer 2C", 
							C3: "Answer 3C", 
							C4: "Answer 4C", 
							Correct: "Answer 1C"
						}			
]


var showImage;
var count = 0;

// Use jQuery to run "startTrivia" when we click the "start" button.
$(".startBtn").on("click", startSlideshow);

// Use jQuery to run "reset" when we click the "reset" button.
$(".reset").on("click", stopSlideshow);

// This function will replace display whatever image it's given

// function displayImage() {
//   $("#imageHolder").html("<img src=" + questionPool[count].image + ">");
//   console.log("displaying is working");
// }

function nextImage() {
	$("#imageHolder").html("<img src=" + questionPool[count].image + ">");
  // TODO: Increment the count by 1.
  console.log(count + " count var");
  count++; 

  // TODO: Use a setTimeout to run displayImage after 1 second.
  //setTimeout(displayImage, 3000);
  console.log("next image is working");

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if(count === questionPool.length ){ 
  	clearInterval(showImage);

  }
}

function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 3000);
}
function stopSlideshow() {

  // TODO: Put our clearInterval here:
  clearInterval(showImage);
}

// This will run the display image function as soon as the page loads.
//displayImage();
nextImage();
// function displayQuestion(){
// 	//not working yet. pulled code from slideshow
//   $("#imageHolder").html("<img src=" + images[count] + " width='400px'>");
//   console.log("displaying is working")
// }
