var t={name:"mathlive-mathfield",template:'<div class="mathfield" :id="id"><slot></slot></div>',props:{id:{type:String,default:""},value:{type:String,default:""},config:{type:Object,default:()=>({})},onKeystroke:{type:Function,default:function(t,e){return!0}},onMoveOutOf:{type:Function,default:function(t){return!0}},onTabOutOf:{type:Function,default:function(t){return!0}}},install:function(t,e){Object.defineProperty(t.prototype,"$mathlive",{value:e}),t.component("mathlive-mathfield",this)},watch:{value:function(t,e){t!==e&&this.$el.mathfield.$latex(t,{suppressChangeNotifications:!0})},config:{deep:!0,handler:function(t){this.$el.mathfield.$setConfig(t)}}},mounted:function(){this.$nextTick(()=>{this.$mathlive.makeMathField(this.$el,{...this.config,onContentDidChange:t=>{this.$emit("input",this.$el.mathfield.$text())},onFocus:t=>{this.$emit("focus")},onBlur:t=>{this.$emit("blur")},onContentWillChange:t=>{this.$emit("content-will-change")},onSelectionWillChange:t=>{this.$emit("selection-will-change")},onUndoStateWillChange:(t,e)=>{this.$emit("undo-state-will-change",e)},onUndoStateDidChange:(t,e)=>{this.$emit("undo-state-did-change",e)},onVirtualKeyboardToggle:(t,e,i)=>{this.$emit("virtual-keyboard-toggle",e,i)},onReadAloudStatus:(t,e)=>{this.$emit("read-aloud-status",e)},onKeystroke:function(t,e,i){return this.onKeystroke(e,i)},onMoveOutOf:(t,e)=>this.onMoveOutOf(e),onTabOutOf:(t,e)=>this.onTabOutOf(e)})})},methods:{perform:function(t){this.$el.mathfield.$perform(t)},hasFocus:function(){return this.$el.mathfield.$hasFocus()},focus:function(){this.$el.mathfield.$focus()},blur:function(){this.$el.mathfield.$blur()},text:function(t){return this.$el.mathfield.$text(t)},selectedText:function(t){return this.$el.mathfield.$selectedText(t)},insert:function(t,e){this.$el.mathfield.$insert(t,e)},keystroke:function(t,e){return this.$el.mathfield.$keystroke(t,e)},typedText:function(t){this.$el.mathfield.$keystroke(t)},selectionIsCollapsed:function(){return this.$el.mathfield.$selectionIsCollapsed()},selectionDepth:function(){return this.$el.mathfield.$selectionDepth()},selectionAtStart:function(){return this.$el.mathfield.$selectionAtStart()},selectionAtEnd:function(){return this.$el.mathfield.$selectionAtEnd()},select:function(){this.$el.mathfield.$select()},clearSelection:function(){this.$el.mathfield.$clearSelection()}}};export default t;
