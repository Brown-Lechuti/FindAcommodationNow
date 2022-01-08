// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
/*
var modal = document.getElementById("myModal_"),
body = document.getElementsByTagName("body"),
container = document.getElementById("myContainer"),
btnOpen = document.getElementById("myBtn"), btnClose = document.getElementById("closeModal");
btnOpen.onclick = function ()
{
    modal.className = "Modal is-visuallyHidden", setTimeout(function ()
    { container.className = "MainContainer is-blurred", modal.className = "Modal" }, 100), container.parentElement.className = "ModalOpen"
},
    btnClose.onclick = function ()
    {
        modal.className = "Modal is-hidden is-visuallyHidden", body.className = "", container.className = "container", container.parentElement.className = ""
    }, window.onclick = function (e) { e.target == modal && (modal.className = "Modal is-hidden", body.className = "", container.className = "container", container.parentElement.className = "") };
*/
var mbtn = document.getElementById("applyBtn");
var res1Btn = document.getElementById("res1Btn");
var res2Btn = document.getElementById("res2Btn");
var res3Btn = document.getElementById("res3Btn");
var res4Btn = document.getElementById("res4Btn");
var res5Btn = document.getElementById("res5Btn");
var pillsNav = document.getElementById("pillsNav");
var rowNav = document.getElementById("rowNav");


var picsNav = document.getElementById("picsNav");
var picTitle = document.getElementById("picTitle");

function hideOtherBtns(showingBtn)
{
    
    res1Btn.hidden = true;
    res2Btn.hidden = true;
    res3Btn.hidden = true;
    res4Btn.hidden = true;
    res5Btn.hidden = true;
    showingBtn.hidden = false;
}
function hideContent() {
    res1Btn.hidden = true;
    res2Btn.hidden = true;
    res3Btn.hidden = true;
    res4Btn.hidden = true;
    res5Btn.hidden = true;
    mbtn.hidden = true;

}


function activeTab()
{
    
    var label = $('#_select :selected').text();
    return label;
}

$(document).ready(function () {


    $('#_select').change(function ()// when the user choose a specific res, show the btn for the res
    {
        hideContent();
        var label = $('#_select :selected').val();
        if (label != "0") {
            if (label == "1") {
                hideOtherBtns(res1Btn);
            }
            if (label == "2") {
                hideOtherBtns(res2Btn);
            }
            if (label == "3") {
                hideOtherBtns(res3Btn);
            }
            if (label == "4") {
                hideOtherBtns(res4Btn);
            }
            if (label == "5") {
                hideOtherBtns(res5Btn);
            }

            mbtn.hidden = false;
            mbtn.innerText = "Apply to " + $('#_select :selected').text();
        }
           
    });

});



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

// Get the modal


var modal = document.getElementById("myModal");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var images = document.querySelectorAll('img');
/*for (var i = 0, len = images.length; i < len; i++) {
    images[i].addEventListener('click', openModal(this));
}*/

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

function openModal(img) {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = activeTab();

}