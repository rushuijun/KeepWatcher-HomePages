/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function () {
    
    //silder初期化
    $("#ex6").slider();
    $("#ex6").on("slide", function(slideEvt) {
	$("#ex6SliderVal").text(slideEvt.value);
    });
    
    //switch初期化
    var aa = $("[name='onoff-checkbox']").bootstrapSwitch();
    aa.on("");
});
