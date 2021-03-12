
$(document).ready(function () {
  AOS.init({

  });

  // This is to display image in full screen
  $("#img1").click(function (event) {
    let imgSrc = $("#img1").attr("src");
    $("#imgModal").removeClass("mask");
    $("#imgModal").trigger("show.bs.modal", imgSrc);
  });
  $("#img2").click(function (event) {
    let imgSrc = $("#img2").attr("src");
    $("#imgModal").removeClass("mask");
    $("#imgModal").trigger("show.bs.modal", imgSrc);
  });
  $("#img3").click(function (event) {
    let imgSrc = $("#img3").attr("src");
    $("#imgModal").removeClass("mask");
    $("#imgModal").trigger("show.bs.modal", imgSrc);
  });
  $("#img4").click(function (event) {
    let imgSrc = $("#img4").attr("src");
    $("#imgModal").removeClass("mask");
    $("#imgModal").trigger("show.bs.modal", imgSrc);
  });
  $("#img5").click(function (event) {
    let imgSrc = $("#img5").attr("src");
    $("#imgModal").removeClass("mask");
    $("#imgModal").trigger("show.bs.modal", imgSrc);
  });

  // This is to dismiss full screen image window
  $("#imgClose").click(function (event) {
    $("#imgModal").removeClass("show");
    $("#imgModal").addClass("mask");
    $(".modal-backdrop").addClass("mask");
  });
});

// This is to handle modal initializations and to add contents of the modal dynamically
$("#prjModal").on("show.bs.modal", function (event) {
  let eventSrc = $(event.relatedTarget);

  // Check the source to identify the project and add its contents
  if (eventSrc.data("prjname") === "gesture") {
    let modal = $(this);
    let img1Text = `A gesture based stand-alone windows application to control mouse input to the system. The interface allows dynamic training of new images for face recognition using Principal Component Analysis (PCA). It also provides some customizations like adjusting the sensitivity of the input. The interface consistently accepts inputs from the kinect sensor while keeping track of the connection status which is notified on the bottom of the app window.`;
    let img2Text = `The gestures are trained using a GUI provided by Microsoft Kinect called 'Kinect Gesture Builder'. The tool captures depth data provided by the Kinect sensor and maps it to geometric dimensions of different joints of a skeleton frame. It then makes use of this frame to distinguish amongst the different gestures made by the user. A number of variations of a single gesture is performed to train a robust model with good enough confidence. Once a satisfactory accuracy is reached, the gesture can be saved and used in the application.`;
    // Add a title to the modal
    modal
      .find("#prjModalLabel")
      .text("Gesture Recognition App with Microsoft Kinect V2");

    // Add first image
    modal.find("#img1Mask").removeClass("mask");
    // Add image description here
    modal.find("#imgDesc1").text(img1Text);
    // Configure source of frist image here
    modal.find("#img1").attr("src", "./images/gesture1.png");

    // Add another image
    modal.find("#img2Mask").removeClass("mask");
    // Add image description here
    modal.find("#imgDesc2").text(img2Text);
    // Configure source of frist image here
    modal.find("#img2").attr("src", "./images/gesture2.png");

    modal.find("#vid1Mask").addClass("mask")
    modal.find("#vid2Mask").addClass("mask")
    modal.find("#vid3Mask").addClass("mask")
    modal.find("#vid4Mask").addClass("mask")
    modal.find("#img3Mask").addClass("mask")
    modal.find("#img4Mask").addClass("mask")
    modal.find("#img5Mask").addClass("mask")
    modal.find("#vid1Mask").addClass("mask")

    modal.find("#prjLink").attr("href", "https://github.com/AdarshVijayakumar/C---Gesture-Recognition-for-Interactive-Systems---using-Kinect-V2");


  }

  else if (eventSrc.data("prjname") === "vending"){
    let modal = $(this);
    let img1Text = `This is the MDA EFSM state diagram which I've designed to implement the situation of 2 vending machines having their specific resposibilities of disposing various drinks with different additives. The final state diagram has 3 states: no cups, idle and coin inserted. The different meta events and the corresponding meta actions that can take place at different states are clearly shown in the state diagram. Next, this state diagram will be implemented in Java with 3 design patterns.`;
    let img2Text = `The complete class diagram of the system including the 3 design patterns is shown here. VM1 and VM2 classes forms the input processor and it is connected to MDA EFSM MOdel which is based on State pattern. This MDA EFSM class is connected to the Output processor which is based on strategy pattern. The respective functionalities of VM1 & VM2 are managed by Abstract factory pattern. Detailed working of each design pattern is shown below. `;
    let img3Text = 'The state pattern is a behavioural software design pattern that allows an object to alter its behaviour when its internal state changes, therefore we can say this is the solution to the problem of how to make behaviour depend on state. The answer to this can briefed as in below points: 1) Define a "context" class to present a single interface to the outside world. 2) Define a State abstract base class. 3) Represent the different "states" of the state machine as derived classes of the state base class. 4) Maintain a pointer to the current "state" in the "context" class. So here, different states in the state diagram are the different state classes grouped under the umbrella of 1 main abstract state class';
    let img4Text = " The Strategy pattern is a behavioural software design pattern that enables selecting an algorithm at runtime. Instead of implementing a single algorithm directly, code recieves run-time instructions as to which in a family of algorithms to use. Here in our project we've used this pattern to implement the output processor. The different meta actions of 2 vending machines are grouped under the respective common parent class. ";
    let img5Text = "The Abstract Factory Pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes. In our system we have VM1 class and VM2 class that does the specific functions of vending machines 1 and 2 respectively. So we group these VM1 and VM2 classes under the parent Abstract Factory class.";
    // Add a title to the modal
    modal
      .find("#prjModalLabel")
      .text("Implementing the MDA EFSM state diagram in Java using: State, strategy and Abstract Factory Software Design Patterns");

    // Add first image
    modal.find("#img1Mask").removeClass("mask");
    // Add image description here
    modal.find("#imgDesc1").text(img1Text);
    // Configure source of frist image here
    modal.find("#img1").attr("src", "./images/mda.png");

    // Add another image
    modal.find("#img2Mask").removeClass("mask");
    // Add image description here
    modal.find("#imgDesc2").text(img2Text);
    // Configure source of frist image here
    modal.find("#img2").attr("src", "./images/classh.png");

    // Add third image
    modal.find("#img3Mask").removeClass("mask");
    // Add image description here
    modal.find("#imgDesc3").text(img3Text);
    // Configure source of frist image here
    modal.find("#img3").attr("src", "./images/state.png");

    // Add third image
    modal.find("#img4Mask").removeClass("mask");
    // Add image description here
    modal.find("#imgDesc4").text(img4Text);
    // Configure source of frist image here
    modal.find("#img4").attr("src", "./images/strategy.png");

    // Add image
    modal.find("#img5Mask").removeClass("mask");
    // Add image description here
    modal.find("#imgDesc5").text(img5Text);
    // Configure source of frist image here
    modal.find("#img5").attr("src", "./images/abstract.png");

    modal.find("#vid1Mask").addClass("mask")
    modal.find("#vid2Mask").addClass("mask")
    modal.find("#vid3Mask").addClass("mask")
    modal.find("#vid4Mask").addClass("mask")
    modal.find("#prjLink").attr("href", "https://github.com/AdarshVijayakumar/Design-and-Implementation-of-Vending-Machine-Components-using-MDA---EFSM");
    //ToDo: Add more images here upto 5
  }

  else if (eventSrc.data("prjname") === "probe"){
    let modal = $(this);
    let img1Text = `The input files are the LinkData csv file and ProbePoints csv file which are too large and contain thousands of probe data collected from a particular area of Germany. The main python file to run is the MatchingProbeData.py. The output files are discussed below.`;
    let img2Text = `When the main python file MatchingProbeData.py is run one intermediate file of matched points is created in csv format. This intermediate csv file which is shown here in the picture contains the probe points that were matched to the link data given in the input csv file.`;
    let img3Text = 'This is the final output csv file. This will contain the slopes calculated for the points in intermediate file (which has points which were matched to link data input csv file).';
    let img4Text = "This is the output in the console, when we run the main python file MatchingProbeData.py We can see here that the calculated slope and the surveyed slope are printed to the console output.";

    // Add a title to the modal
    modal
      .find("#prjModalLabel")
      .text("Probe Data Analysis for Road Slope - Details and Screenshots from the Project");

    // Add first image
    modal.find("#img1Mask").removeClass("mask");
    // Add image description here
    modal.find("#imgDesc1").text(img1Text);
    // Configure source of frist image here
    modal.find("#img1").attr("src", "./images/probe1.png");

    // Add another image
    modal.find("#img2Mask").removeClass("mask");
    // Add image description here
    modal.find("#imgDesc2").text(img2Text);
    // Configure source of frist image here
    modal.find("#img2").attr("src", "./images/probe2.png");

    // Add third image
    modal.find("#img3Mask").removeClass("mask");
    // Add image description here
    modal.find("#imgDesc3").text(img3Text);
    // Configure source of frist image here
    modal.find("#img3").attr("src", "./images/probe3.png");

    // Add third image
    modal.find("#img4Mask").removeClass("mask");
    // Add image description here
    modal.find("#imgDesc4").text(img4Text);
    // Configure source of frist image here
    modal.find("#img4").attr("src", "./images/probe4.png");

    modal.find("#img5Mask").addClass("mask")
    modal.find("#vid1Mask").addClass("mask")
    modal.find("#vid2Mask").addClass("mask")
    modal.find("#vid3Mask").addClass("mask")
    modal.find("#vid4Mask").addClass("mask")
    modal.find("#prjLink").attr("href", "https://github.com/AdarshVijayakumar/Probe-Data-Analysis-for-Road-Slope");
    //ToDo: Add more images here upto 5
  }

  else if (eventSrc.data("prjname") === "hired") {
    let modal = $(this);
    const vid1Text = `This is the complete demonstration of the project. All the features implemented in this project is listed below.`;
    let img1Text = 'All the features implemented are listed here. And also instructions to deploy and run the project is shown here. Click the below link to go to the project code.';
    const vid1Src = "https://www.youtube.com/embed/cjrPzpu7lz8"

    modal
      .find("#prjModalLabel")
      .text("Social and Professional Networking Web Application - Project Demonstration");

    // Add first image
    modal.find("#img1Mask").removeClass("mask");
    // Add image description here
    modal.find("#imgDesc1").text(img1Text);
    // Configure source of frist image here
    modal.find("#img1").attr("src", "./images/hired1.png");


    // Add first image
    modal.find("#vid1Mask").removeClass("mask");
    modal.find("#vid1").attr("src", vid1Src);
    // Add image description here
    modal.find("#vidDesc1").text(vid1Text);
    // Configure source of frist image here

    modal.find("#vid2Mask").addClass("mask")
    modal.find("#vid3Mask").addClass("mask")
    modal.find("#vid4Mask").addClass("mask")
    modal.find("#img2Mask").addClass("mask")
    modal.find("#img3Mask").addClass("mask")
    modal.find("#img4Mask").addClass("mask")
    modal.find("#img5Mask").addClass("mask")

    modal.find("#prjLink").attr("href", "https://github.com/AdarshVijayakumar/Social-and-Professional-Networking-Web-Application");
    //ToDo: Add more images here upto 5
  }

  else if (eventSrc.data("prjname") === "employee") {
    let modal = $(this);
    const vid1Text = `This is the demonstration of my project Employee Tracker: A Java Spring MVC Web Application.`;

    const vid1Src = "https://www.youtube.com/embed/ZRpwXXfvXIw"

    modal
      .find("#prjModalLabel")
      .text("Employee Tracker: A Spring MVC Web Application - Project Demonstration");

    // Add first image
    modal.find("#vid1Mask").removeClass("mask");
    modal.find("#vid1").attr("src", vid1Src);
    // Add image description here
    modal.find("#vidDesc1").text(vid1Text);
    // Configure source of frist image here

    modal.find("#img1Mask").addClass("mask")
    modal.find("#vid2Mask").addClass("mask")
    modal.find("#vid3Mask").addClass("mask")
    modal.find("#vid4Mask").addClass("mask")
    modal.find("#img2Mask").addClass("mask")
    modal.find("#img3Mask").addClass("mask")
    modal.find("#img4Mask").addClass("mask")
    modal.find("#img5Mask").addClass("mask")

    modal.find("#prjLink").attr("https://github.com/AdarshVijayakumar/Employee-Tracker-A-Java-Spring-MVC-Web-Application");
    //ToDo: Add more images here upto 5
  }

  else if (eventSrc.data("prjname") === "bestdeal") {
    let modal = $(this);
    const vid1Text = `The intent is to build servlet-based web application that will allow customers to place orders online from BestDeal website. The store has a StoreManager, Customers, and Salesmen. The StoreManager can Add/Delete/Update products. Salesman can create Customer accounts and can
Add/Delete/Update customers’ orders. Retailer offers warranty. The customer must be able to create an account online, place an order online, check the status of the order, or cancel the order. These features are demonstrated in this video. To see the code click see project below.`;
    const vid2Text = `In this part, the Data Analytics link is added that is accessible only to the Store Manager. The Data Analytics link will allow the store manager to perform different analytical queries. Provide a Trending (Data Visualization) button that shows a Bar Chart for the total number of submitted reviews of every product for top 3 most liked products in every city.`;
    const vid3Text = `In this the web application is extended for the online retailer to add the following features: 1) Inventory Report 2) Sales Report which are accessible only to the store manager.`;
    const vid4Text = `In this part it is extended to add the two following features: 1) Deal Match Guarantee 2) Recommendation feature. The Recommendation feature: Based on the history of the user purchases and after the user makes a purchase, the enterprise web application shall make three product recommendations for the logged in user.`;
    const vid1Src = "https://www.youtube.com/embed/cy-B3MeJR18"
    const vid2Src = "https://www.youtube.com/embed/k-HLNPmybSc"
    const vid3Src = "https://www.youtube.com/embed/dSCBvzehAWY"
    const vid4Src = "https://www.youtube.com/embed/BQM1e0m2__8"

    modal
      .find("#prjModalLabel")
      .text("E - Commerce Web Application: Best Deal. Project Demonstration");

    // Add first image
    modal.find("#vid1Mask").removeClass("mask");
    modal.find("#vid1").attr("src", vid1Src);
    // Add image description here
    modal.find("#vidDesc1").text(vid1Text);
    // Configure source of frist image here

    // Add first image
    modal.find("#vid2Mask").removeClass("mask");
    modal.find("#vid2").attr("src", vid2Src);
    // Add image description here
    modal.find("#vidDesc2").text(vid2Text);
    // Configure source of frist image here

    // Add first image
    modal.find("#vid3Mask").removeClass("mask");
    modal.find("#vid3").attr("src", vid3Src);
    // Add image description here
    modal.find("#vidDesc3").text(vid3Text);
    // Configure source of frist image here

    // Add first image
    modal.find("#vid4Mask").removeClass("mask");
    modal.find("#vid4").attr("src", vid4Src);
    // Add image description here
    modal.find("#vidDesc4").text(vid4Text);
    // Configure source of frist image here

    modal.find("#img1Mask").addClass("mask")
    modal.find("#img2Mask").addClass("mask")
    modal.find("#img3Mask").addClass("mask")
    modal.find("#img4Mask").addClass("mask")
    modal.find("#img5Mask").addClass("mask")

    modal.find("#prjLink").attr("href", "https://github.com/AdarshVijayakumar/E-Shopping-Online-Store-Web-Application");
    //ToDo: Add more images here upto 5
  }

  //ToDo: Add an else if here to add contents of another project
});

// This is to handle fullscreen modal initializations and dynamically change the source of the image that it displays
$("#imgModal").on("show.bs.modal", function (event, imgSrc) {
  let modal = $(this);
  modal.find("#imgFullscreen").attr("src", imgSrc);
});

$("#prjModal").on("hidden.bs.modal", function(event){
  let modal = $(this);
  modal.find("#vid1").attr("src", "");
  // modal.find("#vid1").attr("src", "");
})

// Smooth scroll for links with hashes
$("a.smooth-scroll").click(function (event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000,
        function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            // Checking if the target was focused
            return false;
          } else {
            $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        }
      );
    }
  }
});
