// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function () {
  AOS.init({
    // uncomment below for on-scroll animations to played only once
    // once: true
  }); // initialize animate on scroll library

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

    //ToDo: Add more images here upto 5
  }

  // else if (eventSrc.data("prjname") === "E-commerce"){
  //
  //
  // }

  //ToDo: Add an else if here to add contents of another project
});

// This is to handle fullscreen modal initializations and dynamically change the source of the image that it displays
$("#imgModal").on("show.bs.modal", function (event, imgSrc) {
  let modal = $(this);
  modal.find("#imgFullscreen").attr("src", imgSrc);
});

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
