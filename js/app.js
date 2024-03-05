(() => {
  let allItems = ["Study Web Development Coures"];

document.getElementsByClassName("lists")[0].innerHTML = allItems;
  function populateTotalItems (count) {
      const totalElement = document.getElementById("total");
      totalElement.innerText = count;
  }

  function addNewItem(event) {
      event.preventDefault();

      const inputElement = document.querySelector("input");
      let newItem = inputElement.value;
  
      if(newItem) {
          allItems.unshift(newItem);
          populateItems(allItems.slice(0, 5));
          populateTotalItems(allItems.length);
          inputElement.value = "";
      }
      else {
          inputElement.classList.add("error-input");
      }
      toggleViewButton();
  }


  function populateItems(allItems) {
      const listsElement = document.getElementsByClassName("lists")[0];
      
      const allElements = [] ;
      allItems.forEach((item) => {
          allElements.push(`<div>
              <span>${item}</span>
              <input class="check-item" type="checkbox" >
          </div>`);
      });
      listsElement.innerHTML = allElements.join("");
      handleCheckbox();
  }
  function handleCheckbox() {
    const checkItems = document.querySelectorAll(".check-item");
    checkItems.forEach((checkItem) => {
      checkItem.addEventListener("click", () => {
        checkItem.parentElement.remove();

        const delElement = checkItem.parentElement;
        const delItem = delElement.querySelector("span").innerText;
        allItems = allItems.filter((item) => item !== delItem);
        populateTotalItems(allItems.length);

      })
    })
  }

  document.querySelector("input").addEventListener("focus", () => {
      const inputElement = document.querySelector("input");
      inputElement.classList.remove("error-input");
  });
  document.getElementById("add_new_btn").addEventListener("click", addNewItem);
 
  
  document.getElementById("view-all").addEventListener("click", () => {
    const viewAll = document.getElementById("view-all");
    if (viewAll.innerText === "View All") {
      viewAll.innerText = "View Less"
    populateItems(allItems);
    } else {
      viewAll.innerText = "View All"
      populateItems(allItems.slice(0, 5));
    }

  });

  function toggleViewButton() {
    if(allItems.length > 5){
      document.getElementById("view-all").style.display = "inline";
    } else{
      document.getElementById("view-all").style.display = "none";
    }
  }

  toggleViewButton();
  populateItems(allItems);
})();

