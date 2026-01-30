/* defines filter function in javascript - allows us to filter restaurant items based on selected category/button */ 
    function filter(cat) {
      let items = document.querySelectorAll('.item'); /* selects all restaurant items in a category */ 
      items.forEach(item => { /* loops through each item */ 
        /* conditional statements */
        if (cat === 'all' || item.classList.contains(cat)) { /*if "all" button pressed or item matches selected category, item will be displayed on webpage */
          item.classList.remove('hidden'); 
        } else {
          item.classList.add('hidden'); /* if prior condition not met, item will be hidden from webpage */ 
        }
      });
    }
