// this code will add active class to the parent element
// you can create input label animation with this code and it will be compatible with all devices and browsers
// peer:focus method not working properly time to time
// also this code compatible with auto fill feature

// how to use:
// 1 - coppy the code below to the projects custom.js
// 2 - add data-focus as blank

// HTML Example:
// <div class="group">
//     <label class="group-[&.active]:text-red-500">
//         test
//     </label>
//     <input type="text" data-focus>
// </div>

// Expected Output when you focus input element:
// <div class="group active">
//     <label class="group-[&.active]:text-red-500">
//         test
//     </label>
//     <input type="text" data-focus>
// </div>

// Expected Output when you unfocus and there is value in input element:
// <div class="group active">
//     <label class="group-[&.active]:text-red-500">
//         test
//     </label>
//     <input type="text" data-focus>
// </div>

// Expected Output when you unfocus and there is no value in input element:
// <div class="group">
//     <label class="group-[&.active]:text-red-500">
//         test
//     </label>
//     <input type="text" data-focus>
// </div>

document.querySelectorAll('[data-focus]').forEach(element => {
    element.addEventListener("focusin", function () {
        element.parentElement.classList.add('active');
    });
    element.addEventListener("focusout", function () {
        if (element.value.length > 0) {
        } else {
            element.parentElement.classList.remove('active');
        }
    });

    element.addEventListener('change', function () {
        element.parentElement.classList.add('active');

        if (element.value.length > 0) {
        } else {
            element.parentElement.classList.remove('active');
        }
    })
});