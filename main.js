import './style.css'
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.data('multiselect', (data, selectedData = []) => ({
  open: false,
  index: -1,
  items: data,
  selected: selectedData,
  get selection() {
    return this.items.filter((item) => this.selected.includes(item.id))
  },
  get hasSelection() {
    return this.selected.length > 0
  },
  incrementIndex() {
    this.index++
    if (this.index >= this.items.length) {
      this.index = this.items.length - 1
    }
    this.updateScroll()
  },
  decrementIndex() {
    this.index--
    if (this.index < -1) {
      this.index = -1
    }
    this.updateScroll()
  },
  updateScroll() {
    this.$refs.panel.scrollTop = this.index * 40
  },
  toggle() {
    if (this.open) {
      return this.close()
    }

    this.open = true
  },
  close(focusAfter) {
    this.open = false

    focusAfter && focusAfter.focus()
  },
  toggleItem(item) {
    if (this.isSelected(item)) {
      this.selected = this.selected.filter((i) => i !== item.id)
    } else {
      this.selected.push(item.id)
    }
  },
  toggleItemByIndex(index) {
    this.toggleItem(this.items[index])
  },
  toggleItemById(id) {
    this.toggleItem(this.items.find((item) => item.id === id))
    this.$refs.button.focus()
  },
  isSelected(item) {
    return this.selected.includes(item.id)
  },
  handleSpace() {
    if (!this.open) {
      this.open = true
      return
    }

    if (this.index === -1) {
      this.close()
      return
    }

    this.toggleItemByIndex(this.index)
  },
  classes(item, i) {
    const classes = ['hover:bg-teal-400']

    if (i === this.index) {
      classes.push('bg-teal-400')
    } else if (this.isSelected(item)) {
      classes.push('bg-teal-200')
    }
    return classes.join(' ')
  },
  get classChevron() {
    if (this.open) {
      return 'rotate-180'
    }

    return 'rotate-0'
  },
}))

Alpine.start()
