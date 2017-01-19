$(document).foundation()

$(document).ready(function(){
  $('#btnCalcular').click(function(){
    
    var nombre = $('#txt-nombre').val()
    var cantidad = $('#txt-cantidad').val()
    var multiplicidad = $('#txt-multiplicidad').val()
    var sobrantes = $('#txt-sobrantes').val()
    var moldes = $('#txt-moldes').val()
    var valorResma = $('#txt-valorresma').val()
    var hojasPorResma = $('#txt-hojasporresma').val()

    //Parametros generales
    var par = {
      nombre : $('#txt-nombre').val(),
      cantidad : $('#txt-cantidad').val(),
      multiplicidad : $('#txt-multiplicidad').val(),
      sobrantes : $('#txt-sobrantes').val(),
      moldes : $('#txt-moldes').val(),
      valorResma : $('#txt-valorresma').val(),
      hojasPorResma : $('#txt-hojasporresma').val()
    }    
    
    var calculos = {
      tecnicos : {
        tirajeTeorico : function (cantidad, multiplicidad, moldes) {
          tirajeTeorico =cantidad*multiplicidad/moldes
          return tirajeTeorico
        },
        tirajeReal : function (tirajeTeorico, sobrantes){
          tirajeReal = tirajeTeorico + multiplicidad*sobrantes
          return tirajeReal
        }
        },
      economicos : {
        costoPorHoja : function (valorResma,hojasPorResma){
          costoPorHoja = valorResma/hojasPorResma
          return costoPorHoja
        },
        
      }
    }

    // tirajeTeorico
    tirajeTeorico = calculos.tecnicos.tirajeTeorico(par.cantidad, par.multiplicidad, par.moldes)

    // tiraReal
    tirajeReal = calculos.tecnicos.tirajeReal(tirajeTeorico, par.sobrantes)

    //Costo por hoja
    costoPorHoja = calculos.economicos.costoPorHoja(par.valorResma, par.hojasPorResma)

    var template = '<p>tiraje teórico: ' + tirajeTeorico + '</p>'
    template += '<p>tiraje real: ' + tirajeReal + '</p>'
    template += '<p>Costo por hoja: ' + costoPorHoja + '</p>'
    $('.resultado').html(template)
  })
})
