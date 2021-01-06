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
        //grab the user inputs that they put in
        var userTask = $(this).siblings(".description").val();
        var timeBlock = $(this).parent().attr("id");

        //console log the info
        console.log("task = ", userTask);
        console.log("time-slot =", timeBlock);

        // save the user inputs and change them to strings
        localStorage.setItem(timeBlock, JSON.stringify(userTask))
      });

      //access the user's tasks after refresh
      $('#hour-9 .description').val(JSON.parse(localStorage.getItem("hour-9")));
      $('#hour-10 .description').val(JSON.parse(localStorage.getItem("hour-10")));
      $('#hour-11 .description').val(JSON.parse(localStorage.getItem("hour-11")));
      $('#hour-12 .description').val(JSON.parse(localStorage.getItem("hour-12")));
      $('#hour-13 .description').val(JSON.parse(localStorage.getItem("hour-13")));
      $('#hour-14 .description').val(JSON.parse(localStorage.getItem("hour-14")));
      $('#hour-15 .description').val(JSON.parse(localStorage.getItem("hour-15")));
      $('#hour-16 .description').val(JSON.parse(localStorage.getItem("hour-16")));
      $('#hour-17 .description').val(JSON.parse(localStorage.getItem("hour-17")));
});