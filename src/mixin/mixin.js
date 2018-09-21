const all= {
  methods: {
    addWinEvent(el, event, func, beal) {
      let elem = el || document;
      let bl = beal || true;
      let events = event;
      // let that = this;
      // console.log(elem)

      let ev = elem.addEventListener(
        events,
        function (e) {
          func(e);
        },
        bl
      );

      return ev;
    }
  }
}

export {all}