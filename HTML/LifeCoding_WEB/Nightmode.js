var Body = {
    setColor:function(color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
};
var Link = {
    setIndexColor:function(color){
        var target_a = document.querySelectorAll('a');
        for( var i = 0; i < target_a.length; i++){
            if(target_a[i].className == ''){
                target_a[i].style.color = color;
            }
        }
    },
    setHyperlinkColor:function(color){
        var target_a = document.querySelectorAll('a');
        for( var i = 0; i < target_a.length; i++){
        if(target_a[i].className == 'hyperlink'){
                target_a[i].style.color = color;
            }
        }
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