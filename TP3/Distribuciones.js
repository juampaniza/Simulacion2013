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
function normalConvolucion(mu, g)
{
	var rnd=0;
	var segundoTermino=0;
	for (var i = 0; i < 11; i++) {
		rnd=Math.random();
		segundoTermino+=rnd-g;
	}
	var result=mu+segundoTermino*g;
	return result;
} 
function normalBoxMuller(mu, g)
{
	var rnd1,rnd2;
	rnd1=Math.random();
	rnd2=Math.random();
	var x1,x2;
	x1=Math.squr(-2*(Math.log(rnd1)))*Math.cos(rnd2);
	x2=Math.squr(-2*(Math.log(rnd1)))*Math.sin(rnd2);
	var z1,z2;
	z1=mu+x1*g;
	z2=mu+x2*g;
	var result=[];
	result.push(z1);
	result.push(z2);
	return result;
}