// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var modal = document.getElementById("myModal"), body = document.getElementsByTagName("body"), container = document.getElementById("myContainer"), btnOpen = document.getElementById("myBtn"), btnClose = document.getElementById("closeModal"); btnOpen.onclick = function () { modal.className = "Modal is-visuallyHidden", setTimeout(function () { container.className = "MainContainer is-blurred", modal.className = "Modal" }, 100), container.parentElement.className = "ModalOpen" }, btnClose.onclick = function () { modal.className = "Modal is-hidden is-visuallyHidden", body.className = "", container.className = "container", container.parentElement.className = "" }, window.onclick = function (e) { e.target == modal && (modal.className = "Modal is-hidden", body.className = "", container.className = "container", container.parentElement.className = "") };



/*
 $(document).ready(function(){

 $('#_select').change(function () {
    //           ↓
    var label = $('#sector_select :selected').parent().attr('label');
    console.log(label);
});

});*/