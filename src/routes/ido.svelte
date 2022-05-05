
<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}
	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 600;
		margin: 0 0 0.5em 0;
	}
	figure {
		margin: 0 0 1em auto;
	}
	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}
	p {
		margin: 1em auto;
	}
	div {
		text-align: center;
		margin: 0 auto;
	}
	
	@media (min-width: 480px) {
		h1 {
			font-size: 2em;
		}
	}
</style>


<svelte:head>
	<title>twitterdoge</title>
</svelte:head>

<h1>IDO is coming soon...</h1>

<figure>
	<img alt='pink' src='pink.png'>
	<figcaption>TwitterDoge × PinkSale</figcaption>
</figure>

<p><a href= "https://www.pinksale.finance/">www.pinksale.finance</a></p>
<p><strong>0x...?</strong></p>

<div>
<SCRIPT language=JavaScript>
tmpDate = new Date();
date = tmpDate.getDate();
month= tmpDate.getMonth() + 1 ;
year= tmpDate.getYear();
document.write(year);
document.write("年");
document.write(month);
document.write("月");
document.write(date);
document.write("日 ");
myArray=new Array(6);
myArray[0]="星期日 "
myArray[1]="星期一 "
myArray[2]="星期二 "
myArray[3]="星期三 "
myArray[4]="星期四 "
myArray[5]="星期五 "
myArray[6]="星期六 "
weekday=tmpDate.getDay();
if (weekday==0 | weekday==6)
{
document.write(myArray[weekday])
}
else
{
document.write(myArray[weekday])
}
</SCRIPT>
</div>
