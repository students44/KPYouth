$(document).ready(function () {

    var index = $(".step.active").index(".step"),
        stepsCount = $(".step").length,
        prevBtn = $(".prev"),
        nextBtn = $(".next");
    var indexList = $(".stepListItem.active").index(".stepListItem"),
        stepsListCount = $(".stepListItem").length;
        addAnotherBtn = $(".add-anotherBtn");
         // Hide previous button if the first step is active on page load
    if (indexList == 0) {
        prevBtn.addClass("d-none");
    }

    //  function for add another button
    
      function toggleAddAnotherButton() {
        if (indexList === 0) { // Personal Information step
            addAnotherBtn.removeClass("d-none");
        } else {
            addAnotherBtn.addClass("d-none");
        }
    }

    toggleAddAnotherButton();

  

    prevBtn.click(function () {
        if (indexList == 1) {
            prevBtn.addClass("d-none");
        }
        nextBtn.removeClass("d-none");
        $('.submit').addClass("d-none");
        indexList--;
        $(".step").removeClass("active").eq(indexList).addClass("active");
        $('.stepListItem').removeClass("active");
        $('.stepListItem').eq(indexList).addClass("active");
        toggleAddAnotherButton(); // Update button visibility
    });

    nextBtn.click(function () {

        nextStep()
    });


    function nextStep() {
        prevBtn.prop("disabled", false);

        indexList++;
        if(indexList > 0){
        prevBtn.removeClass("d-none");
            
        }
        $(".step").removeClass("active").eq(indexList).addClass("active");
        $('.stepListItem').removeClass("active").eq(indexList).addClass("active");
        toggleAddAnotherButton(); // Update button visibility


        if (indexList === 3) {
            $('.next').addClass('d-none');
            $('.submit').removeClass('d-none')
        }

    }

});

// now here duplicate the personal information form
function anotherBtn() {
    // Select the original section to be cloned
    const originalSection = document.getElementById("Partner");
    const clone = originalSection.cloneNode(true);

    // Reset all input values in the cloned section
    const inputs = clone.querySelectorAll("input, textarea, select");
    inputs.forEach(input => {
        input.value = "";
        if (input.type === "file") {
            input.value = null;
        }
    });

    // Append cloned section to the container
    document.getElementById("partnerContainer").appendChild(clone);
}



