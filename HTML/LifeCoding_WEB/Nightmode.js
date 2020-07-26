var Body = {
    setColor:function(color){
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor:function(color){
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
};
var Link = {
    setIndexColor:function(color){
        $('a').css('color', color);
    },
    setHyperlinkColor:function(color){
        $('.hyperlink').css('color', color)
    }
};
function nightDayHnadler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
        Body.setColor('white');
        Body.setBackgroundColor('black');
        Link.setIndexColor('white');
        Link.setHyperlinkColor('powderblue');
        self.value = 'day';
    }
    else{
        Body.setColor('black');
        Body.setBackgroundColor('white');
        Link.setIndexColor('black');
        Link.setHyperlinkColor('blue');
        self.value = 'night';
    }
}