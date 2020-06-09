var items = document.getElementsByClassName("item");
var goPre = document.getElementById("btnPre");
var goNext = document.getElementById("btnNext");

var news_items = document.getElementsByClassName("news_item")

var index_now = 0;
var index_pre = 0;

var news_now = 0;
var news_pre = 0;

var goIndex = function () {
    items[index_now].className = "item active";
    items[index_pre].className = "item";
}

goPre.addEventListener('click', function(){
    index_pre = index_now;
    index_now--;
    if (index_now < 0)
        index_now = items.length - 1;
    goIndex();
    console.log(index_now);
});
goNext.addEventListener('click', function(){
    index_pre = index_now;
    index_now++;
    if (index_now == items.length)
        index_now = 0
    goIndex();
});

function next(){
    index_pre = index_now;
    index_now++;
    if (index_now == items.length)
        index_now = 0
    goIndex();
}

var news_goIndex = function () {
    news_items[news_now].className = "news_item news_active";
    news_items[news_pre].className = "news_item";
}

function news_next(){
    news_pre = news_now;
    news_now++;
    if (news_now == news_items.length)
        news_now = 0
    news_goIndex();
}

var auto = setInterval("next()",3000);
var news_auto = setInterval("news_next()",3500);

