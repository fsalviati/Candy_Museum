// Navbar height effect
$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

// Buy Item Section
var $buyButton = document.getElementsByClassName("buy");
var $storeItemPrice = document.getElementsByClassName("store-item-price");
var $itemCount = document.getElementById("item-count");
var amountItems = 0;
var i = 0;
var totalCart = 0;
// Function called when the button buy is clicked, it changes the Amount of Items in the cart
function buyItem() {
    amountItems += 1;
    if (amountItems > 1) {
        console.log(document.getElementById("item-items").innerHTML);
        document.getElementById("item-items").innerHTML = ' items - $';
    }
    document.getElementById("item-count").innerHTML = amountItems;
}
// Function to change the total on the Navbar
function changeTotal(a) {
    totalCart = +totalCart + +$storeItemPrice[a].innerHTML;
    document.getElementById("item-total").innerHTML = totalCart;
}
for (var i in $buyButton) {
    $buyButton[i].onclick = function () {
        buyItem();
        var a = $(this).data('index');
        changeTotal(a);
    };
}

// Function to Filter using the Store Buttons
(function () {
    const buttons = document.querySelectorAll('.btn');
    const storeItems = document.querySelectorAll('.store-item');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;

            storeItems.forEach((item) => {
                if (filter === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            })
        })
    })
})();
// Function to filter using the search bar
(function () {
    const searchBox = document.querySelector('#search-item');
    const storeItems = document.querySelectorAll('.store-item');

    searchBox.addEventListener('keyup', (e) => {
        const searchFilter = e.target.value.toLowerCase().trim();
        //display only items that contain filter input

        storeItems.forEach((item) => {
            if (item.textContent.toLowerCase().includes(searchFilter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        })
    })

})();
