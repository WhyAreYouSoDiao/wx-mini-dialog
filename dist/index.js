"use strict";Component({properties:{type:{type:String,value:"center"},visible:{type:Boolean,value:!1},confirmText:{type:String,value:"确定"},cancleText:{type:String,value:"取消"},confirmColor:{type:String,value:"#07c160"},cancleColor:{type:String,value:"#666666"},showClose:{type:Boolean,value:!1},title:{type:String,value:""},showTitle:{type:Boolean,value:!0},height:{type:String,value:"320px"},topFix:{type:String,value:""},closeType:{type:String,value:"normal"}},methods:{cancle:function(){this.triggerEvent("cancle")},confirm:function(){this.triggerEvent("confirm")}},options:{multipleSlots:!0}});