//Init
let projects = [];
$(document).ready(function () {
    //Load projects
    projects.push(new ProjectCard("Just Scannit","Project for M7","Semi functional website build with react,features some pages, with simulated register and login in localstorage","https://youtu.be/zsj_LKY01YA","sources\\jsi.png","https://github.com/JClosaInscastellet/JustScanIt"));
    //Add to dom
    projects.forEach(element => {
        $(".projectDiv").append(element.returnDom());
    });
    //Set main page
    setMainPage();

    //Menu
    $(".nav-link").filter(function () {
        if ($(this).text() == "Projects") {
            $(this).addClass("active");
        }

    });
    

});

//Menu Items Apaerance
$(".navbar .nav-link").on("click", function () {
    $(".navbar .nav-link").removeClass("active");
    $(this).addClass("active");
    if ($(this).text() == "Projects") {
        setMainPage();
    }else if ($(this).text() == "Curriculum") {
        setCurriculum()
    }
    

});


function setMainPage() {
    $(".projectDiv").show();
    $(".curriculumDiv").hide();
    $(".contactDiv").hide();
    console.log("Main page loaded");   
}
function setCurriculum(){
    $(".projectDiv").hide();
    $(".curriculumDiv").show();
    $(".contactDiv").hide();
}