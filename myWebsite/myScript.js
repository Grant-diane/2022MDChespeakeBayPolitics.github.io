var count = 0;
function myFunction() {
  count = count + 1;
  if (count % 2 == 0) {
  document.getElementById("demo").innerHTML = "Back to a Paragraph.";
  } else {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
  }
}