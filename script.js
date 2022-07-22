const sort = document.querySelector(".sort0");
const sort1 = document.querySelector(".sort1");
const sort2 = document.querySelector(".sort2");
const sort3 = document.querySelector(".sort3");
const sort4 = document.querySelector(".sort4");
const sort5 = document.querySelector(".sort5");
const sort6 = document.querySelector(".sort6");
const sort7 = document.querySelector(".sort7");
const sort8 = document.querySelector(".sort8");
const popUpBtn = document.querySelector(".pop-up");
const closeBtn = document.querySelector(".close-button");
const explaination = document.querySelector(".button-explanation");
const overlay = document.querySelector(".overlay");
const mainSortBtn = document.querySelector(".main-sort");
const sortBtns = document.querySelector(".sort-buttons");

// sort.addEventListener("click", () => {
//   sortTable(0);
//   overlay.classList.remove("active");
//   sortBtns.classList.remove("active");
// });

sort1.addEventListener("click", () => {
  sortTab(0);
  overlay.classList.remove("active");
  sortBtns.classList.remove("active");
});

sort2.addEventListener("click", () => {
  sortTable(1);
  overlay.classList.remove("active");
  sortBtns.classList.remove("active");
});

sort3.addEventListener("click", () => {
  sortTab(1);
  overlay.classList.remove("active");
  sortBtns.classList.remove("active");
});

sort4.addEventListener("click", () => {
  sortTable(2);
  overlay.classList.remove("active");
  sortBtns.classList.remove("active");
});

sort5.addEventListener("click", () => {
  sortTab(2);
  overlay.classList.remove("active");
  sortBtns.classList.remove("active");
});

sort6.addEventListener("click", () => {
  sortTable(3);
  overlay.classList.remove("active");
  sortBtns.classList.remove("active");
});

sort7.addEventListener("click", () => {
  sortTab(3);
  overlay.classList.remove("active");
  sortBtns.classList.remove("active");
});

sort1.addEventListener("click", () => {
  sortTab(0);
  overlay.classList.remove("active");
  sortBtns.classList.remove("active");
});

function sortTable(num) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
    no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
      first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
        one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[num];
      y = rows[i + 1].getElementsByTagName("TD")[num];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function sortTab(num) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
    no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
      first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
        one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[num];
      y = rows[i + 1].getElementsByTagName("TD")[num];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

// Modal window explaining the sort buttons
popUpBtn.addEventListener("click", () => {
  explaination.classList.toggle("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  explaination.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  explaination.classList.remove("active");
  overlay.classList.remove("active");
  sortBtns.classList.remove("active");
});

// hover effect bringing out sort buttons
mainSortBtn.addEventListener("click", () => {
  sortBtns.classList.toggle("active");
  overlay.classList.add("active");
});

// mainSortBtn.addEventListener("click", () => {
//   sortBtns.classList.remove("active");
// });

