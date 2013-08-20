function uniforme(a,b)
{
	var rnd=Math.random();
	var result=(b-a)*rnd+a;
	return result;
}
function exponencial(lamda)
{
	var media=1/lamda;
	var rnd=Math.random();
	var log=Math.log(1-rnd);
	var result=-media*log;
	return result;
}
function exponencialMedia(media)
{
	var rnd=Math.random();
	var log=Math.log(1-rnd);
	var result=-media*log;
	return result;
}
function normalConvolucion(mu,g)
{
	var rnd=0;
	var segundoTermino=0;
	for (var i = 0; i < 11; i++) {
		rnd=Math.random();
		segundoTermino+=rnd-g;
	};
	var result=mu+segundoTermino*g;
	return result;
}