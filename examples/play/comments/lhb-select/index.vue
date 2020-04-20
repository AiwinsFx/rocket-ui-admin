<template>
  <div
    :class="['select', { 'is-disabled': disabled }]"
    @click.stop="isOpen = !disabled && !isOpen"
    v-clickoutside="handleClose"
  >
    <div>
      <template v-if="!selectItems.length">
        <span class="placeholder">{{ placeholder }}</span>
      </template>

      <template v-else>
        <div v-if="!multiple">{{ selectItems[0].label }}</div>

        <template v-else-if="!collapseTags">
          <span
            v-for="value in selectItems"
            :key="value.key"
            class="select__item__tag c-size-s"
          >
            {{ value.label }}
            <fat-icon
              class="delete-btn"
              name="close"
              :size="8"
              @click.stop="handleDelete(value)"
            />
          </span>
        </template>
        <template v-else>
          <span class="select__item__tag c-size-s">
            {{ selectItems[0].label }}
            <fat-icon
              class="delete-btn"
              name="close"
              :size="8"
              @click.stop="handleDelete(selectItems[0])"
            />
          </span>
          <span v-if="restValueNum" class="select__item__tag c-size-s c-bold">
            +
            {{ restValueNum }}
          </span>
        </template>
      </template>
    </div>

    <!-- <fat-icon v-if="isOpen" class="arrow" name="arrow_drop_up" /> -->

    <div class="select-dropdown" v-show="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'input',
  },
  directives: {
    clickoutside: {
      bind: function(el, binding, vode) {
        function documentHandler(e) {
          if (el.contains(e.target)) {
            return false
          }
          if (binding.expression) {
            binding.value(e)
          }
        }
        el.__vueClickOutSide__ = documentHandler
        document.addEventListener('click', documentHandler)
      },
      unbind: function(el, binding) {
        document.removeEventListener('click', el.__vueClickOutSide__)
        delete el.__vueClickOutSide__
      }
    },
  },
  data() {
    return {
      isOpen: false,
      selectValue: [],
      selectItems: [],
    }
  },
  props: {
    placeholder: { type: String, default: '请选择' }, //占位符
    optionKey: { type: String, default: 'value' }, //作为 value 唯一标识的键名，绑定值为对象类型时必填
    value: { type: [String, Object, Number, Array] }, //绑定的值
    multiple: { type: Boolean, default: false }, //是否多选
    collapseTags: { type: Boolean, default: false }, //是否缩略已选项
    disabled: { type: Boolean, default: false }, //是否禁用
  },
  provide() {
    return {
      fatSelect: this,
    }
  },
  computed: {
    restValueNum() {
      return this.selectItems.length - 1
    },
  },
  watch: {
    value: {
      handler(value) {
        const { multiple } = this
        const init = value ? value : multiple ? [] : ''
        this.selectValue = multiple ? [...init] : init
      },
      immediate: true,
    },
    selectValue: {
      handler(value) {
        this.selectItems = []
      },
    },
  },
  methods: {
    handleClose() {
      this.isOpen = false;
    },
    handleDelete(item) {
      const { value } = item
      this.selectValue = this.selectValue.filter((item) => item !== value)
      this.$emit('input', this.selectValue)
      this.$emit('change', this.selectValue) // 在 Select 值改变时触发
    },
    handleBlur(event) {
      this.isOpen = false
      this.$emit('blur', event) //在 Select 失去焦点时触发
    },
    handleFocus(event) {
      this.$emit('focus', event) //在 Select 获得焦点时触发
    },
  },
}
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  padding: 0 24px 0 12px;
  width: 100%;
  min-height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  // border-radius: 4px;
  font-size: 14px;
  color: #000;
  text-overflow: ellipsis;
  outline: none;
  transition: all 0.2s;
  &:hover {
    color: #000;
    background-color: #f2f2f2;
  }
  &:focus {
    text-overflow: ellipsis;
    border: 1px solid #209cee;
    box-shadow: 0 0 5px 0 rgba(32, 156, 238, 0.5);
  }
  &.is-disabled {
    background-color: rgba(192, 196, 204, 0.25);
    color: #c0c4cc;
    cursor: not-allowed;
    &:focus {
      box-shadow: none;
      border: 1px solid #ccc;
    }
  }
  .placeholder {
    color: #999;
  }
  .select__item__tag {
    position: relative;
    display: inline-flex;
    align-items: center;
    margin: 2px 6px 2px 0;
    padding: 4px 4px;
    height: 1em;
    color: #909399;
    background: #f0f2f5;
    border-radius: 4px;
    .delete-btn {
      margin-left: 4px;
      border-radius: 50%;
      color: #fff;
      background: #c0c4cc;
      cursor: pointer;
    }
  }
  .arrow {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin: auto auto;
    display: inline-block;
    align-items: center;
    width: 14px;
    height: 14px;
  }
  .select-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 5px;
    // padding: 4px 0;
    box-sizing: border-box;
    min-width: 100%;
    max-height: 170px;
    overflow: auto;
    z-index: 2;
    background: #fff;
    border: 1px solid #ddd;
    // border-radius: 4px;
  }
}
</style>
