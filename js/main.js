function forms(){if($("select").length>0){function t(){$.each($("select"),(function(t,e){var s=t;$(this).hide(),0==$(this).parent(".select-block").length?$(this).wrap("<div class='select-block "+$(this).attr("class")+"-select-block'></div>"):$(this).parent(".select-block").find(".select").remove();var l,a,i="",c="",n=$(this).parent(".select-block"),o="<div class='select-options'><div class='select-options-scroll'><div class='select-options-list'>";"multiple"==$(this).attr("multiple")&&(i="multiple",c="check"),$.each($(this).find("option"),(function(t,e){if(""!=$(this).attr("class")&&null!=$(this).attr("class")){$(this).attr("class")}""!=$(this).attr("value")?o=""!=$(this).attr("data-icon")&&null!=$(this).attr("data-icon")?o+"<div data-value='"+$(this).attr("value")+"' class='select-options__value_"+s+" select-options__value value_"+$(this).val()+"  "+c+"'><div><img src="+$(this).attr("data-icon")+' alt=""></div><div>'+$(this).html()+"</div></div>":o+"<div data-value='"+$(this).attr("value")+"' class='select-options__value_"+s+" select-options__value value_"+$(this).val()+"  "+c+"'>"+$(this).html()+"</div>":"on"==$(this).parent().attr("data-label")&&0==n.find(".select__label").length&&n.prepend('<div class="select__label">'+$(this).html()+"</div>")})),o+="</div></div></div>","search"==$(this).attr("data-type")?(n.append("<div data-type='search' class='select_"+s+" select "+$(this).attr("class")+"__select "+i+"'><div class='select-title'><div class='select-title__arrow ion-ios-arrow-down'></div><input data-value='"+$(this).find('option[selected="selected"]').html()+"' class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"' /></div>"+o+"</div>"),$(".select_"+s).find("input.select-title__value").jcOnPageFilter({parentSectionClass:"select-options_"+s,parentLookupClass:"select-options__value_"+s,childBlockClass:"select-options__value_"+s})):"true"==$(this).attr("data-icon")?n.append("<div class='select_"+s+" select "+$(this).attr("class")+"__select icon "+i+"'><div class='select-title'><div class='select-title__arrow ion-ios-arrow-down'></div><div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'><div><img src="+$(this).find('option[selected="selected"]').attr("data-icon")+' alt=""></div><div>'+$(this).find('option[selected="selected"]').html()+"</div></div></div>"+o+"</div>"):n.append("<div class='select_"+s+" select "+$(this).attr("class")+"__select "+i+"'><div class='select-title'><div class='select-title__arrow ion-ios-arrow-down'></div><div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'>"+$(this).find('option[selected="selected"]').html()+"</div></div>"+o+"</div>"),""!=$(this).find('option[selected="selected"]').val()&&n.find(".select").addClass("focus"),1==n.find(".select-options__value").length&&n.find(".select").addClass("one"),"on"==$(this).attr("data-req")&&$(this).addClass("req"),$(".select_"+s+" .select-options-scroll").niceScroll(".select-options-list",(l=100,a=50,isMobile.any()&&(l=10,a=1),{cursorcolor:"#9B4E7C",cursorwidth:"12px",background:"",autohidemode:!1,bouncescroll:!1,cursorborderradius:"10px",scrollspeed:l,mousescrollstep:a,directionlockdeadzone:0,cursorborder:"0px solid #fff"}))}))}t(),$("body").on("keyup","input.select-title__value",(function(){$(".select").not($(this).parents(".select")).removeClass("active").find(".select-options").slideUp(50),$(this).parents(".select").addClass("active"),$(this).parents(".select").find(".select-options").slideDown(50,(function(){$(this).find(".select-options-scroll").getNiceScroll().resize()})),$(this).parents(".select-block").find("select").val("")})),$("body").on("click",".select",(function(){if(!$(this).hasClass("disabled")&&!$(this).hasClass("one")){$(".select").not(this).removeClass("active").find(".select-options").slideUp(50),$(this).toggleClass("active"),$(this).find(".select-options").slideToggle(50,(function(){$(this).find(".select-options-scroll").getNiceScroll().resize()})),"search"==$(this).attr("data-type")&&($(this).hasClass("active")||searchselectreset(),$(this).find(".select-options__value").show());var t=$.trim($(this).find(".select-title__value").attr("class").replace("select-title__value",""));$(this).find(".select-options__value").show().removeClass("hide").removeClass("last"),""!=t&&$(this).find(".select-options__value."+t).hide().addClass("hide"),$(this).find(".select-options__value").last().hasClass("hide")&&$(this).find(".select-options__value").last().prev().addClass("last")}})),$("body").on("click",".select-options__value",(function(){if($(this).parents(".select").hasClass("multiple"))return $(this).hasClass("active")?($(this).parents(".select").find(".select-title__value span").length>0?$(this).parents(".select").find(".select-title__value").append('<span data-value="'+$(this).data("value")+'">, '+$(this).html()+"</span>"):($(this).parents(".select").find(".select-title__value").data("label",$(this).parents(".select").find(".select-title__value").html()),$(this).parents(".select").find(".select-title__value").html('<span data-value="'+$(this).data("value")+'">'+$(this).html()+"</span>")),$(this).parents(".select-block").find("select").find("option").eq($(this).index()+1).prop("selected",!0),$(this).parents(".select").addClass("focus")):($(this).parents(".select").find(".select-title__value").find('span[data-value="'+$(this).data("value")+'"]').remove(),0==$(this).parents(".select").find(".select-title__value span").length&&($(this).parents(".select").find(".select-title__value").html($(this).parents(".select").find(".select-title__value").data("label")),$(this).parents(".select").removeClass("focus")),$(this).parents(".select-block").find("select").find("option").eq($(this).index()+1).prop("selected",!1)),!1;"search"==$(this).parents(".select").attr("data-type")?($(this).parents(".select").find(".select-title__value").val($(this).html()),$(this).parents(".select").find(".select-title__value").attr("data-value",$(this).html())):($(this).parents(".select").find(".select-title__value").attr("class","select-title__value value_"+$(this).data("value")),$(this).parents(".select").find(".select-title__value").html($(this).html())),$(this).parents(".select-block").find("select").find("option").removeAttr("selected"),""!=$.trim($(this).data("value"))?($(this).parents(".select-block").find("select").val($(this).data("value")),$(this).parents(".select-block").find("select").find('option[value="'+$(this).data("value")+'"]').attr("selected","selected")):($(this).parents(".select-block").find("select").val($(this).html()),$(this).parents(".select-block").find("select").find('option[value="'+$(this).html()+'"]').attr("selected","selected")),""!=$(this).parents(".select-block").find("select").val()?$(this).parents(".select-block").find(".select").addClass("focus"):($(this).parents(".select-block").find(".select").removeClass("focus"),$(this).parents(".select-block").find(".select").removeClass("err"),$(this).parents(".select-block").parent().removeClass("err"),$(this).parents(".select-block").removeClass("err").find(".form__error").remove()),""!=!$(this).parents(".select").data("tags")&&0==$(this).parents(".form-tags").find('.form-tags__item[data-value="'+$(this).data("value")+'"]').length&&$(this).parents(".form-tags").find(".form-tags-items").append('<a data-value="'+$(this).data("value")+'" href="" class="form-tags__item">'+$(this).html()+'<span class="fa fa-times"></span></a>'),$(this).parents(".select-block").find("select").change(),"on"==$(this).parents(".select-block").find("select").data("update")&&t()})),$(document).on("click touchstart",(function(t){$(t.target).is(".select *")||$(t.target).is(".select")||($(".select").removeClass("active"),$(".select-options").slideUp(50,(function(){})),searchselectreset())})),$(document).on("keydown",(function(t){27==t.which&&($(".select").removeClass("active"),$(".select-options").slideUp(50,(function(){})),searchselectreset())}))}$("input,textarea").focus((function(){$(this).val()==$(this).attr("data-value")&&($(this).addClass("focus"),$(this).parent().addClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","password"),$(this).val("")),removeError($(this))})),$("input[data-value], textarea[data-value]").each((function(){""!=this.value&&this.value!=$(this).attr("data-value")||($(this).hasClass("l")&&0==$(this).parent().find(".form__label").length?$(this).parent().append('<div class="form__label">'+$(this).attr("data-value")+"</div>"):this.value=$(this).attr("data-value")),this.value!=$(this).attr("data-value")&&""!=this.value&&($(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).hasClass("l")&&0==$(this).parent().find(".form__label").length&&$(this).parent().append('<div class="form__label">'+$(this).attr("data-value")+"</div>")),$(this).click((function(){this.value==$(this).attr("data-value")&&("pass"==$(this).attr("data-type")&&$(this).attr("type","password"),this.value="")})),$(this).blur((function(){""==this.value&&($(this).hasClass("l")||(this.value=$(this).attr("data-value")),$(this).removeClass("focus"),$(this).parent().removeClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","text")),$(this).hasClass("vn")&&formValidate($(this))}))})),$(".form-input__viewpass").click((function(t){$(this).hasClass("active")?$(this).parent().find("input").attr("type","password"):$(this).parent().find("input").attr("type","text"),$(this).toggleClass("active")}))}$(".wrapper").addClass("loaded"),$(".icon-menu").click((function(t){$(this).toggleClass("active"),$(".menu__body").toggleClass("active"),$("body").toggleClass("lock")})),$(document).ready((function(){$(".slider__body").slick({dots:!0,arrows:!1,accessibility:!1,slidesToShow:1,autoplay:3e3,nextArrow:"<button type='button' class='slick-next'></button>",prevArrow:"<button type='button' class='slick-prev'></button>"})}));