let num=0
let prioT
$("#btn_prioridade").mouseenter(function(){ 
     $("#btns_P").css({"display": "block"})
})
$("#btn_prioridade").mouseleave(function () { 
   $("#btns_P").css({"display": "none"})
    if(($("#p_alta").prop('checked')==true)){
        $("#btn_prioridade").css("background-color","#ff0000")
      prioT = $('<p id="priorT_'+num+'"></p>').css("background-color","#ff0000").text("Alta") 
}else if($("#p_media").prop('checked')==true){
    $("#btn_prioridade").css("background-color","#ff4500")
    prioT = $('<p id="priorT_'+num+'"></p>').css("background-color","#ff4500").text("Media")  

}else if($("#p_baixa").prop('checked')==true){
    $("#btn_prioridade").css("background-color","#ffff00")
    prioT = $('<p id="priorT_'+num+'"></p>').css("background-color","#ffff00").text("Baixa")  
}  
 });
$("#btn_tarefa").click(()=>{
    if($("#f_tarefa").val()==""){
        alert("  Nenhuma tarefa foi adicionada! \n\nFavor, adicione uma tarefa no campo!")
    }else if( ($("#p_alta").prop('checked')==false)&&
              ($("#p_media").prop('checked')==false)&&
              ($("#p_baixa").prop('checked')==false)) {
      alert("Por favor, escolha o nivel de prioridade de sua tarefa!")    
           }else{
            let lixo =$("<img>").attr("src",'trash.png').attr("alt","Ícone para deletar tarefa")
    let tarefa = $("#f_tarefa").val()
    let ptarefa = $('<p id="nomeT_'+num+'"></p>').text(tarefa); 
    let statusT = $('<p id="statusT_'+num+'" class="pstatus" ></p>').text("Ativa")
    let delT = $('<p id="DelT_'+num+'"></p>').append(lixo)
    $("#ul1").append($('<li id="linha_'+num+'"></li>').append(ptarefa,prioT,statusT,delT))//add a linha no ul 
    num++}
              $("#f_tarefa").val("")
              $("#btn_prioridade").css("background-color","#6d1935");
              $("#p_alta").prop('checked',false)
              $("#p_media").prop('checked',false)
              $("#p_baixa").prop('checked',false)
         }
)
$(document).click((e)=>{  
   let classStyle = e.target.className
    if(classStyle=="pstatus"){
         let idAtiva = ($(e.target).parent())
         idAtiva.find('p:first').css({"text-decoration":"line-through"});
         idAtiva.find('p:eq(1)').css({"background-color":"#ddd"})
         $(e.target).text("concluida")
    }
})
$(document).on("click","img[alt='Ícone para deletar tarefa']",function(){
    (this).closest("li").remove()
    
})

document.getElementById("data").textContent = new Date().getFullYear();

