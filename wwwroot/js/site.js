// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var modal = document.getElementById("myModal"), body = document.getElementsByTagName("body"), container = document.getElementById("myContainer"), btnOpen = document.getElementById("myBtn"), btnClose = document.getElementById("closeModal"); btnOpen.onclick = function () { modal.className = "Modal is-visuallyHidden", setTimeout(function () { container.className = "MainContainer is-blurred", modal.className = "Modal" }, 100), container.parentElement.className = "ModalOpen" }, btnClose.onclick = function () { modal.className = "Modal is-hidden is-visuallyHidden", body.className = "", container.className = "container", container.parentElement.className = "" }, window.onclick = function (e) { e.target == modal && (modal.className = "Modal is-hidden", body.className = "", container.className = "container", container.parentElement.className = "") };
var mbtn = document.getElementById("myBtn");

$(document).ready(function () {

    $('#_select').change(function () {
        var coll = document.getElementsByClassName("collapsible");
        var i;
        var label = $('#_select :selected').text();


        for (i = 0; i < coll.length; i++)
        {
                // here we are gonna loop through the elements
                for (item of coll)
                {
                    // and remove .active class on the button
                    item.classList.remove("active");

                    // here we are checking the next element and making it don't display
                    item.nextElementSibling.style.maxHeight = null;
                }
        }
       
        mbtn.innerText = "Apply to " + label;
        activateClasses();
    });

});

function activateClasses() {

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {

            // here we are gonna loop through the elements
            for (item of coll) {
                // and remove .active class on the button
                item.classList.remove("active");

                // here we are checking the next element and making it don't display
                item.nextElementSibling.style.maxHeight = null;
            }
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
};

function funcPass()
{
    var input_ = document.getElementById("myPass");
    if (input_.type == "password") {
        input_.type = "text";
    }
    else
    {
        input_.type = "password";
    }

}