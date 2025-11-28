$(document).ready(function () {
  
  // Add new item
  $("#button").on("click", function () {
    let inputValue = $("#input").val();

    if (inputValue === "") {
      alert("Please enter an item");
    } else {
      let li = $("<li></li>");
      li.append(inputValue);

      let deleteButton = $("<span></span>");
      deleteButton.addClass("close");
      deleteButton.append(document.createTextNode("X"));
      li.append(deleteButton);

      $("#list").append(li);
      $("#input").val("");
    }
  });

  // Mark as done (double-click)
  $("#list").on("dblclick", "li", function () {
    $(this).toggleClass("strike");
  });

  // Delete item
  $("#list").on("click", ".close", function (e) {
    e.stopPropagation();
    $(this).parent().remove();
  });

  // Make list sortable
  $("#list").sortable();

});
