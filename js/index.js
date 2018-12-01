//获取元素
var getElem=function(selector){
    return document.querySelector(selector);
}

var getAllelem=function(selector){
     return document.querySelectorAll(selector);
}

//获取元素样式
var getCls=function(element){
    return element.getAttribute('class');
}

//设置元素样式
var setCls=function(element,Cls){
    return element.getAttribute('class',Cls);
}

//为元素添加样式
var addCls=function(element,Cls){
    var baseCls=getCls(element);
    if(baseCls.indexOf(Cls)===-1){
        setCls(element,baseCls+' '+Cls);
    }

}
//为元素删除样式
var delCls=function(element,Cls){
    var baseCls=getCls(element);
    if(baseCls.indexOf(Cls)!=-1){
        setCls(element,baseCls.split(Cls).join(' '));
    }
}

//测试动画

var screenAnimateElements={
    '.screen-1':[
        '.screen-1__header',
        '.screen-1__phone',
        '.screen-1__shadow'
    ],
    '.screen-2':[
        '.screen-2__header',
        '.screen-2__phone',
        '.screen-2__subheader',
        '.screen-2__point_i_1',
        '.screen-2__point_i_2',
        '.screen-2__point_i_3'

    ],
    '.screen-3':[
        '.screen-3__header',
        '.screen-3__phone',
        '.screen-3__subheader',
        '.screen-3__features'
    ],
    '.screen-4':[
        '.screen-4__header',
        '.screen-4__subheader',
        '.screen-4__type__item_i_1',
        '.screen-4__type__item_i_2',
        '.screen-4__type__item_i_3',
        '.screen-4__type__item_i_4'

    ],
    '.screen-5':[
        '.screen-5__header',
        '.screen-5__bg',
        '.screen-5__subheader',

    ]
};
//设置初始状态
var setScreenAnimateInit=function(screenCls){
    var screen=document.querySelector(screenCls)//获取当前屏的元素
    var animateElements=screenAnimateElements[screenCls];//需要设置动画的元素

    for (var i = 0; i < animateElements.length; i++) {
        var element = document.querySelector(animateElements[i]);
        var baseCls = element.getAttribute('class');
        element.setAttribute('class', baseCls + ' ' + animateElements[i].substr(1)+ '_animate_init');
}
}
//init-done
var playScreenAnimateDone=function(screenCls){
    var screen=document.querySelector(screenCls)//获取当前屏的元素
    var animateElements=screenAnimateElements[screenCls];//需要设置动画的元素
    for (var i = 0; i < animateElements.length; i++) {
        var element = document.querySelector(animateElements[i]);
        var baseCls = element.getAttribute('class');
        element.setAttribute('class', baseCls.replace('_animate_init', '_animate_done'));

    }

}
window.onload=function(){
    for(k in  screenAnimateElements){
        setScreenAnimateInit(k);
    }
}

//滚动动画
window.onscroll=function(){
    var top=document.body.scrollTop;
    // if(top>80){
    //     addCls(getElem('.outline'),'outline_status_in');
    // }else{
    //     delCls(getElem('.outline'),'outline_status_in');
    // }
    switchNavItemsActive(0);
    if(top>1){
        playScreenAnimateDone('.screen-1');
    }
    if(top>800*1-100){
        playScreenAnimateDone('.screen-2');
        switchNavItemsActive(1);
    }
    if(top>800*2-100){
        playScreenAnimateDone('.screen-3');
        switchNavItemsActive(2);
    }
    if(top>800*3-100){
        playScreenAnimateDone('.screen-4');
        switchNavItemsActive(3);
    }
    if(top>800*4-100){
        playScreenAnimateDone('.screen-5');
        switchNavItemsActive(4);
    }
}
//双向定位
    var navitems= getAllelem('.header__nav-item');
    var  outLinenavitems= getAllelem('.outline__item');
    var  switchNavItemsActive=function(index){
        for(var i=0;i<navitems.length;i++){
            delCls(navitems[i],'header_nav_status_active');
        }
         addCls(navitems[index],'header_nav_status_active');

     }
  var  setNavJump=function(i,a){
      var item=a[i];
      item.onclick=function(){
          document.body.scrollTop=i*800;
      }
  }

   for(var i=0;i<navitems.length;i++){

              setNavJump(i,navitems);

   }

  for(var i=0;i<outLinenavitems.length;i++){

    setNavJump(i,outLinenavitems);


 }

 //滑动门
var navTip=getElem('.header__nav-tip');

var setTip=function(index, lib){
        lib[index].onmousemove=function(){
            navTip.style.left=(68*index+40)+"px";
            console.log(index);
        }
    lib[index].onmouseout=function(){
        navTip.style.left=42+"px";
        console.log(index);
    }


}
for(var i=0;i<navitems.length-1;i++){
     setTip(i,navitems);
}


