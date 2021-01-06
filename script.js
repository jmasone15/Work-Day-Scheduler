$(document).ready(function () {
    //get the date with Moment
    console.log(moment().format("dddd, MMMM Do"))
    //put the date on the page
    $("#currentDay").text(moment().format("dddd, MMMM Do"))


    //get current hour
    var currentHour = moment().hours();
    console.log(currentHour)

    //for each loop over the hour blocks
    $(".time-block").each(function () {
        $(this).removeClass("past present future");
        //get the value from the html for the current hour block
        let blockHour = parseInt($(this).attr("id").split("-")[1]);
        console.log(blockHour)
        //check and see if the currentHour > or < blockHour
        //add css styling to the text areas
        if (currentHour === blockHour) {
            $(this).addClass("present");
        } else if (currentHour < blockHour) {
            $(this).addClass("future");
        } else {
            $(this).addClass("past");
        }
    })

    $(".saveBtn").on("click", function() {
        // get nearby values
        var userTask = $(this).siblings(".description").val();
        var timeBlock = $(this).parent().attr("id");
    
        console.log("task = ", userTask);
        console.log("time-slot =", timeBlock);
    
        // save the value in localStorage as time
        localStorage.setItem(timeBlock, JSON.stringify(userTask))
      });
})