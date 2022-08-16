var logo = null;
var FNBopenBtn = null;
var FNBcloseBtn = null;
var faqTab = null;
var faqTabBtn = null;
var historyBtn = null;
var historyPanel = null;
var reviewPopOpen = null;
var popClose = null;
var recipePopOpen = null;
var impactPopOpen = null;

$(document).ready(function(){
        init();
        fnbFunc(logo,FNBopenBtn,FNBcloseBtn);
        tabUI(faqTabBtn,faqTab);
        tabUI(historyBtn,historyPanel);
        tabContent(faqEvent);
        mainSlider();
        videoSlider();
        brandSlider();
        popupUI(reviewPopOpen,popClose);
        popupUI(recipePopOpen,popClose);
        popupUI(impactPopOpen,popClose);
        // popupSlider();
        // thumbSlider();
    });
    function init(){
        logo = $("header > div h1 a img");
        FNBopenBtn = $(".fnbOpenBtn");
        FNBcloseBtn = $(".btn_close");
        faqTab = $(".faqMenu > ol");
        faqTabBtn = $(".faqMenu > ul li");
        faqEvent = $(".faqContents > li");
        historyBtn = $(".historySlider li");
        historyPanel = $("[id^=historyPanel]");
        reviewPopOpen = $(".reviewModule > div > a.btnRed");
        popClose = $(".btn_close");
        recipePopOpen = $(".lastContent > ul > li > a");
        impactPopOpen = $(".lastContent > ul > li > a")
    }
    function fnbFunc(logo,openBtn,closeBtn){
        openBtn.click(function(){
            $(".fnbPanel").addClass("active");
            logo.attr("src","images/kellogg_logo_white.png");
            logo.parents("h1").addClass("active");
        });
        closeBtn.click(function(){
            $(".fnbPanel").removeClass("active");
            logo.attr("src","images/kellogg_logo_red.png");
            logo.parents("h1").removeClass("active");
        });
    };
    function popupUI(openBtn,closeBtn){
        openBtn.click(function(){
            var currentPop = $(this).attr("data-panel");
            $("#" + currentPop).addClass("active");
            // console.log(currentPop);
        });
        closeBtn.click(function(){
            $(".popupModule").removeClass("active");
        });
    };
    
    function tabUI(btn,target){
        $(btn).click(function(){
            var currentTab = $(this).attr("data-tabName");
            $(btn).removeClass('active');
            $(this).addClass('active');
            $(target).removeClass('active');
            $("#" + currentTab).addClass('active');
        });
    };

    function tabContent(faqEvent){
        $(faqEvent).click(function(){
            $(faqEvent).removeClass('faqOpen');
            $(this).addClass('faqOpen')
        });
    };

    function mainSlider(){
        $('.mainSlider').bxSlider({
            mode: 'horizontal' ,
            startSlide: 0,
            hideControlOnEnd: false,
            controls: true,            
        });
    };
    function videoSlider(){
        $('.videoSlider').bxSlider({
            stopAutoOnClick: true,
            controls: true,    
            video: true,
            pagerCustom: '.thumbNailPager'
        });
    }
    function brandSlider(){
        $('.brandSlider').bxSlider({
            slideWidth: 500,
            minSlides: 1,
            maxSlides: 3,
            moveSlides: 1,
            pager: false         
        });
    }


