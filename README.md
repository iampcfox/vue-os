# vue-os

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

    // this.addWinEvent(
    //   ...[
    //     null,
    //     "mousedown",
    //     function(e) {
    //       let elem = that.getParentNode(e);
    //       // console.log(elem)
    //       if (that.el && elem !== undefined) {
    //         instace = {};
    //         let mouseX = elem.pageX;
    //         let mouseY = elem.pageY;
    //         let elX = that.el.offsetLeft;
    //         let elY = that.el.offsetTop;

    //         // console.log(that.el.style.zIndex)
    //         that.elZIndex = that.el.style.zIndex;
    //         that.el.style.zIndex = parseInt(that.elZIndex) + 1;

    //         //  计算出偏移量
    //         instace.offSetX = mouseX - elX;
    //         instace.offSetY = mouseY - elY;

    //         that.drag = true;

    //         // console.log(instace);
    //       }
    //     },
    //     false
    //   ]
    // );

    // // document.onmousedown = function(e) {
    // //   let elem = that.getParentNode(e);
    // //   // console.log(elem)
    // //   if (that.el && elem !== undefined) {
    // //     instace = {};
    // //     let mouseX = elem.pageX;
    // //     let mouseY = elem.pageY;
    // //     let elX = that.el.offsetLeft;
    // //     let elY = that.el.offsetTop;

    // //     // console.log(that.el.style.zIndex)
    // //     that.elZIndex = that.el.style.zIndex;
    // //     that.el.style.zIndex = parseInt(that.elZIndex) + 1;

    // //     //  计算出偏移量
    // //     instace.offSetX = mouseX - elX;
    // //     instace.offSetY = mouseY - elY;
    // //     that.drag = true

    // //     document.onmousemove = function(e) {
    // //       if (instace) {
    // //         let elem = that.getParentNode(e);

    // //         // console.log(that.el)

    // //

    // //         let mouseX = elem.pageX;
    // //         let mouseY = elem.pageY;

    // //         //  计算元素移动坐标
    // //         var moveX = mouseX - instace.offSetX;
    // //         var moveY = mouseY - instace.offSetY;

    // //         //  计算最大移动坐标
    // //         var maxX =
    // //           document.documentElement.clientWidth - that.el.offsetWidth;
    // //         var maxY =
    // //           document.documentElement.clientHeight - that.el.offsetHeight;

    // //         // console.log(instace)
    // //         //  设置元素的坐标
    // //         that.el.style.left = Math.max(0, Math.min(maxX, moveX)) + "px";
    // //         that.el.style.top = Math.max(0, Math.min(maxY, moveY)) + "px";
    // //       }
    // //     };

    // // console.log(instace);
    // // }
    // // };

    // this.addWinEvent(
    //   ...[
    //     null,
    //     "mousemove",
    //     function(e) {
    //       if (instace) {
    //         let elem = that.getParentNode(e);

    //         //设置捕获范围
    //         if (that.el.setCapture) {
    //           that.el.setCapture();
    //         } else if (window.captureEvents) {
    //           window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
    //         }

    //         let mouseX = elem.pageX;
    //         let mouseY = elem.pageY;

    //         //  计算元素移动坐标
    //         var moveX = mouseX - instace.offSetX;
    //         var moveY = mouseY - instace.offSetY;

    //         //  计算最大移动坐标
    //         var maxX =
    //           document.documentElement.clientWidth - that.el.offsetWidth;
    //         var maxY =
    //           document.documentElement.clientHeight - that.el.offsetHeight;

    //         // console.log(instace)
    //         //  设置元素的坐标
    //         that.el.style.left = Math.max(0, Math.min(maxX, moveX)) + "px";
    //         that.el.style.top = Math.max(0, Math.min(maxY, moveY)) + "px";
    //       }
    //     },
    //     false
    //   ]
    // );

    // this.addWinEvent(...[null, "mouseout", function(e) {console.log("鼠标移出去了")}, false]);

    // this.addWinEvent(
    //   ...[
    //     null,
    //     "mouseup",
    //     function(e) {
    //       instace = false;
    //       // document.releaseCapture()
    //       // that.el = null;
    //     },
    //     false
    //   ]
    // );



    getParentNode(e) {
      let that = this;
      let el = e.target;
      let elem = e;

      let parentEl = el.parentNode;
      console.log(parentEl.className);
      if (parentEl.className == "header") {
        try {
          var thisWindow = parentEl.parentNode;
          that.el = thisWindow;
          return elem;
        } catch (err) {
          console.log("鼠标不在窗口上");
        }
      } else {
        return false;
      }
    }
