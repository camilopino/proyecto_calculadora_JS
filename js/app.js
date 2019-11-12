var operando1;
var operando2;
var operando3;
var operando4;
var operando5;
var operando6;
var operacion;
function init()
{
  //inicializacion de variables
  var num1=document.getElementById('1')
  var num2=document.getElementById('2')
  var num3=document.getElementById('3')
  var num4=document.getElementById('4')
  var num5=document.getElementById('5')
  var num6=document.getElementById('6')
  var num7=document.getElementById('7')
  var num8=document.getElementById('8')
  var num9=document.getElementById('9')
  var num0=document.getElementById('0')
  var suma=document.getElementById('mas')
  var resta=document.getElementById('menos')
  var igual=document.getElementById('igual')
  var multiplica=document.getElementById('por')
  var divide=document.getElementById('dividido')
  var on=document.getElementById('on')
  var resultado=document.getElementById('display')
  var masmenos=document.getElementById('sign')
  var punto=document.getElementById('punto')
//funciones de teclas
//numero1
  num1.onclick=function(e)
  {
    if (resultado.textContent!="0"&&resultado.textContent.length<8)
    {
      resultado.textContent=resultado.textContent+"1"
    }else if (resultado.textContent=="0") {
      resultado.textContent="1"
    }
    reduccionTamaño()
  }
  num1.onmouseleave=function()
  {
    tamañoNormal()
  }
  //numero2
  num2.onclick=function(e)
  {
    if (resultado.textContent!="0"&&resultado.textContent.length<8)
    {
      resultado.textContent=resultado.textContent+"2"
    }else if (resultado.textContent=="0") {
      resultado.textContent="2"
    }
    reduccionTamaño()
  }
  num2.onmouseleave=function()
  {
    tamañoNormal()
  }
  //numero3
  num3.onclick=function(e)
  {
    if (resultado.textContent!="0"&&resultado.textContent.length<8)
    {
      resultado.textContent=resultado.textContent+"3"
    }else if (resultado.textContent=="0") {
      resultado.textContent="3"
    }
    reduccionTamaño()
  }
  num3.onmouseleave=function()
  {
    tamañoNormal()
  }
  //numero4
  num4.onclick=function(e)
  {
    if (resultado.textContent!="0"&&resultado.textContent.length<8)
    {
      resultado.textContent=resultado.textContent+"4"
    }else if (resultado.textContent=="0") {
      resultado.textContent="4"
    }
    reduccionTamaño()
  }
  num4.onmouseleave=function()
  {
    tamañoNormal()
  }
  //numero5
  num5.onclick=function(e)
  {
    if (resultado.textContent!="0"&&resultado.textContent.length<8)
    {
      resultado.textContent=resultado.textContent+"5"
    }else if (resultado.textContent=="0") {
      resultado.textContent="5"
    }
    reduccionTamaño()
  }
  num5.onmouseleave=function()
  {
    tamañoNormal()
  }
  //numero6
  num6.onclick=function(e)
  {
    if (resultado.textContent!="0"&&resultado.textContent.length<8)
    {
      resultado.textContent=resultado.textContent+"6"
    }else if (resultado.textContent=="0") {
      resultado.textContent="6"
    }
    reduccionTamaño()
  }
  num6.onmouseleave=function()
  {
    tamañoNormal()
  }
  //numero7
  num7.onclick=function(e)
  {
    if (resultado.textContent!="0"&&resultado.textContent.length<8)
    {
      resultado.textContent=resultado.textContent+"7"
    }else if (resultado.textContent=="0") {
      resultado.textContent="7"
    }
    reduccionTamaño()
  }
  num7.onmouseleave=function()
  {
    tamañoNormal()
  }
  //numero8
  num8.onclick=function(e)
  {
    if (resultado.textContent!="0"&&resultado.textContent.length<8)
    {
      resultado.textContent=resultado.textContent+"8"
    }else if (resultado.textContent=="0") {
      resultado.textContent="8"
    }
    reduccionTamaño()
  }
  num8.onmouseleave=function()
  {
    tamañoNormal()
  }
  //numero9
  num9.onclick=function(e)
  {
    if (resultado.textContent!="0"&&resultado.textContent.length<8)
    {
      resultado.textContent=resultado.textContent+"9"
    }else if (resultado.textContent=="0") {
      resultado.textContent="9"
    }
    reduccionTamaño()
  }
  num9.onmouseleave=function()
  {
    tamañoNormal()
  }
  //numero0
  num0.onclick=function(e)
  {
    if (resultado.textContent!="0"&&resultado.textContent.length<8)
    {
      resultado.textContent=resultado.textContent+"0"
    }else if (resultado.textContent=="0") {
      resultado.textContent="0"
    }
    reduccionTamaño()
  }
  num0.onmouseleave=function()
  {
    tamañoNormal()
  }
  //masmenos

    masmenos.onclick=function() {
      var sign= parseFloat(resultado.textContent)*-1
      resultado.textContent=sign.toString()
      reduccionTamaño()
    }
    masmenos.onmouseleave=function()
    {
      tamañoNormal()
    }
    //punto
    punto.onclick=function()
    {
      var texto= resultado.textContent
      var comprobar= texto.indexOf(".")
      if (comprobar!=-1)
      {
        resultado.textContent=resultado.textContent
      }else {
        resultado.textContent=resultado.textContent+"."
      }
      reduccionTamaño()
    }
    punto.onmouseleave=function()
    {
      tamañoNormal()
    }
    //encendido/C
    on.onclick=function(e)
    {
      resultado.textContent="0"
      reduccionTamaño()
    }
    on.onmouseleave=function()
    {
      tamañoNormal()
    }
//operaciones

  //suma
  suma.onclick=function()
  {
    operando1=resultado.textContent
    operacion="+"
    resultado.textContent=""
    reduccionTamaño()
  }
  suma.onmouseleave=function()
  {
    tamañoNormal()
  }
  //resta
  resta.onclick=function()
  {
    operando1=resultado.textContent
    operacion="-"
    resultado.textContent=""
    reduccionTamaño()
  }
  resta.onmouseleave=function()
  {
    tamañoNormal()
  }
  //multiplicacion
  multiplica.onclick=function()
  {
    operando1=resultado.textContent
    operacion="*"
    resultado.textContent=""
    reduccionTamaño()
  }
  multiplica.onmouseleave=function()
  {
    tamañoNormal()
  }
  //divicion
  divide.onclick=function()
  {
    operando1=resultado.textContent
    operacion="/"
    resultado.textContent=""
    reduccionTamaño()
  }
  divide.onmouseleave=function()
  {
    tamañoNormal()
  }


  igual.onclick=function() {
      switch (operacion) {
        case  operacion="+":
        operando2=resultado.textContent
        var res=parseFloat(operando1) + parseFloat(operando2)
        resultado.textContent=res.toPrecision(7)
        break;
        case  operacion="-":
        operando2=resultado.textContent
        var res=parseFloat(operando1) - parseFloat(operando2)
        resultado.textContent=res.toPrecision(7)
        break;
        case  operacion="*":
        operando2=resultado.textContent
        var res=parseFloat(operando1) * parseFloat(operando2)
        resultado.textContent=res.toPrecision(7)
        break;
        case  operacion="/":
        operando2=resultado.textContent
          var res=parseFloat(operando1) / parseFloat(operando2)
          resultado.textContent=res.toPrecision(7)
        break;
      }
      reduccionTamaño()
    }
    igual.onmouseleave=function()
    {
      tamañoNormal()
    }
    function reduccionTamaño() {
      var reduccion= event.currentTarget;
      reduccion.style="padding:5px"
    }
    function tamañoNormal() {
      var normal= event.currentTarget;
      normal.style="padding:0px"
    }

}
