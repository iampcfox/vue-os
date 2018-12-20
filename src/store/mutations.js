import {
    OPEN_WIN,
    CLOSE_WIN,
    MOVE_WIN,
    CLICK_TOOPENWIN
} from './mutations-type'

export default {
    // 放大缩小
    [OPEN_WIN](state, obj) {
        if (obj.isOpen) {
            obj.isOpen = false
            return
        }
        state.windows.filter(w => w.index <= obj.index).map(w => {
            if (w.id === obj.id) {
                w.index = 0
                w.isOpen = true
            } else {
                w.index = w.index + 1
            }
        })
    },
    // 关闭窗口
    [CLOSE_WIN](state, obj) {
        state.windows.splice(state.windows.findIndex(item => item.id === obj.id), 1)
    },
    // 移动窗口调整
    [MOVE_WIN](state, {obj, index}) {
        state.windows.filter(w => w.index <= obj.index).map(w => {
            if (w.id === obj.id) {
                w.index = 0
            } else {
                w.index = w.index + 1
            }
        })
    },
    [CLICK_TOOPENWIN](state, { items, index }) {
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
        this.commit(OPEN_WIN, item)
    },
}