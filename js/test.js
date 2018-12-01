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
function setScreenAnimate(screenCls){
   var screen=document.querySelector(screenCls)//获取当前屏的元素
    var animateElements=screenAnimateElements[screenCls];//需要设置动画的元素

    var isSetAnimateClass=false;//是否有初始化元素样式
    var isElementsDone=false;
    screen.onclick=function() {
        if (isSetAnimateClass === false) {
            for (var i = 0; i < animateElements.length; i++) {
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class', baseCls + ' ' + animateElements[i].substr(1) + '_animate_init');

            }
            isSetAnimateClass = true;
            return ;
        }
        if (isElementsDone === false) {
            for (var i = 0; i < animateElements.length; i++) {
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class', baseCls.replace('_animate_init', '_animate_done'));

            }
            isElementsDone = true;
            return ;

        }
        //done-init
        if (isElementsDone === true) {
            for (var i = 0; i < animateElements.length; i++) {
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class', baseCls.replace('_animate_done', '_animate_init'));

            }
            isElementsDone =false;
            return ;
        }
      }

    }

for(k in  screenAnimateElements){
    setScreenAnimate(k);
}
setScreenAnimate('.screen-1');
setScreenAnimate('.screen-2');
setScreenAnimate('.screen-3');
setScreenAnimate('.screen-4');
setScreenAnimate('.screen-5');