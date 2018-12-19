import {
    OPEN_WIN,
    CLOSE_WIN,
    MOVE_WIN,
    CLICK_TOOPENWIN
} from './mutations-type'

export default {
    [OPEN_WIN](state, v) {

    },
    [CLOSE_WIN](state, v) {

    },
    [MOVE_WIN](state, v) {

    },
    [CLICK_TOOPENWIN](state, {items, index}) {
        let value = items.find(v => v.index === index)
        // console.log(value)
        let item = state.windows.find(f => f.id === value.item.id)
        if (!item) {
            item = {
                id: value.item.id,
                title: value.item.text,
                index: 0,
                isOpen: false,
                full: false,
                type: value.item.type,
                resizable: value.item.resizable,
                width: value.item.width,
                height: value.item.height,
                src: value.item.src,
                theme: value.item.theme,
                url: value.item.url || ''
            }
            state.windows.push(item)
        }
        // this.openWin(item)
    },
}