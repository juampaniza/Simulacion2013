var x, a, m, b;
$("#metodos").change(function(){
	var valor=$("#metodos").val();
	if(valor == "multiplicativo")
	{
		b=0;
		$("#b").hide();
		$(".b").hide();
	}
	if(valor == "mixto")
	{
		$("#b").show();
		$(".b").show();
	}
});
$("div#generar").click(function(){
	var valor=$("#metodos").val();
	if(valor == "mixto")
	{
		b=parseInt($("#b").val());
	}
	a=parseInt($("#a").val());
	x=parseInt($("#x").val());
	m=parseInt($("#m").val());

	for (var i = 0; i<20; i++)
	{
		rnd=generador();
		$("#textarea").append(rnd);
		$("#textarea").append("\n");
	}
	
});
$("#agregar").click(function(){
	rnd=generador();
	$("#textarea").append(rnd);
	$("#textarea").append("\n");
});
//comienza el punto b que genera la cantidad indicada y genera el grafico
$("div#generarb").click(function(){
	var cantidad=parseInt($("#cantidad").val());
	var inter=parseInt($("#intervalos").val());
	var incremento=1/inter;
	var array=[];
	var suma=[];
	suma.length=inter;
	var dataSource=[];
	for (var i = 0; i < suma.length; i++) {
		suma[i]=0
	}

	for (var i = 0; i < inter; i++) 
	{
		array.push(incremento*(i+1));
	}
	for (var i = 0; i < cantidad; i++) {
		var rnd=Math.random();
		for (var j = 0; j < array.length; j++) {
			if(rnd < array[j] & rnd > (array[j]-incremento))
			{
				suma[j]++;
				break;
			}
		}
	}
	for (var i = 0; i < array.length; i++) {
		var elemento={};
		elemento['intervalo']=array[i];
		elemento['fo']=suma[i];
		elemento['fe']=(cantidad/inter);
		
		dataSource.push(elemento);
	}
	var container="#chartContainer";
	graficar(dataSource, container);
});
$("#generarc").click(function(){
	
	b=parseInt($("#bc").val());
	a=parseInt($("#ac").val());
	x=parseInt($("#xc").val());
	m=parseInt($("#mc").val());
	var cantidad=parseInt($("#cantidadc").val());
	var inter=parseInt($("#intervalosc").val());
	var incremento=1/inter;
	var array=[];
	var suma=[];
	suma.length=inter;
	var dataSource=[];

	for (var i = 0; i < suma.length; i++) {
		suma[i]=0
	}

	for (var i = 0; i < inter; i++) 
	{
		array.push(incremento*(i+1));
	}
	for (var i = 0; i < cantidad; i++) {
		var rnd=generador();
		for (var j = 0; j < array.length; j++) {
			if(rnd < array[j] & rnd > (array[j]-incremento))
			{
				suma[j]++;
				break;
			}
		}
	}
	for (var i = 0; i < array.length; i++) {
		var elemento={};
		elemento['intervalo']=array[i];
		elemento['fo']=suma[i];
		elemento['fe']=(cantidad/inter);
		
		dataSource.push(elemento);
	}
	var container="#grafico";
	graficar(dataSource, container);
});
function graficar(dataSource, container){
	$(container).dxChart({
		dataSource: dataSource,
	    commonSeriesSettings: {
	        type: "spline",
	        argumentField: "intervalo"
	    },
	    commonAxisSettings: {
	        grid: {
	            visible: true
	        }
	    },
	    series: [
	        { valueField: "fo", name: "Frecuencia Observada" },
	        { valueField: "fe", name: "Frecuencia Esperada" }
	    ],
	    tooltip:{
	        enabled: true
	    },
	    legend: {
	        verticalAlignment: "bottom",
	        horizontalAlignment: "center"
	    },
	    title: "Frecuencias",
	    commonPaneSettings: {
	        border:{
	            visible: true,
	            bottom: false
	        }
	    }
	});
}
function generador()
{
	var primerTermino, rnd;
	primerTermino=((a*x)+b);
	x=primerTermino%m;
	return rnd=x/m;
}