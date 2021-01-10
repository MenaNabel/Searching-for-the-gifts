const src="gift.png";
const empPrizeSrc="empprize.jpg";
const prize="th.jpg";
var noOfClicks = 0;
function validateForm() {
  var x = document.forms["inputForm"]["firstname"].value;
  var y = document.forms["inputForm"]["NOB"].value;
  var yy = Math.ceil(y);
  var yyy = y-yy;
  const isint=(yyy == 0)? true : false;
  console.log(isint);
  if (!(x == "" || y == "" || y <= 0 || y >= 200 || (!(isint)))) {
    return true;
  }
}
function create(containerElement,src,onClick){
	const div = document.createElement("div");
    div.classList.add("col-sm-4");
    const img = document.createElement("img");
    img.src=src;
    img.setAttribute("alt", "Forest");
    img.classList.add("prize");
    img.addEventListener('click', onClick);
    div.append(img);
    containerElement.append(div);
}
class Image {
  constructor(containerElement, src) {
    this.containerElement = containerElement;
    this.src = src;
    this.onClick = this.onClick.bind(this);
    create(this.containerElement,this.src,this.onClick);
  }
  onClick(event) {
  	noOfClicks=noOfClicks+1;
  	const imgg=event.currentTarget;
  	imgg.src=empPrizeSrc;
  	imgg.classList.remove('prize');
  	imgg.classList.add('prizeOnClick');
  	imgg.removeEventListener('click',this.onClick);
  }
}
class prizeImage {
  constructor(containerElement, src) {
    this.containerElement = containerElement;
    this.src = src;
    this.onClick = this.onClick.bind(this);
    create(this.containerElement,this.src,this.onClick);
  }
  onClick(event) {
  	noOfClicks=noOfClicks+1;
  	const imgg=event.currentTarget;
  	imgg.src=prize;
  	imgg.classList.remove('prize');
  	imgg.classList.add('prizeOnClick');
  	const reslDiv=document.querySelector("#div2");
  	const h=document.createElement("h1");
  	h.textContent="You won in "+noOfClicks+" steps...";
  	reslDiv.appendChild(h);
  	imgg.removeEventListener('click',this.onClick);
  	const imgDiv=document.querySelector(".row");
  	imgDiv.remove();
  	const orgDiv=document.querySelector(".container");
  	const img = document.createElement("img");
  	img.src="tenor.gif";
  	img.setAttribute("alt", "Congratulations");
    img.classList.add("result");
    orgDiv.appendChild(img);
    const a=document.createElement("button");
    a.setAttribute("onClick","window.location.href='index.html'");
    a.textContent="Play Again...";
    a.classList.add
    orgDiv.appendChild(a);	
  }
}
const submit=document.getElementById("sb1");
submit.addEventListener('click',onClickSubmitKey);
function onClickSubmitKey() {
   if(!validateForm()){
		alert("You must enter all the values required....!"+"\r\n"+"Hint for (Number of boxes):You must Enter only postive integers more than ZERO and less than 200 ");
	}
   else{
		const form=document.getElementById("inputForm");
		var x=document.getElementById("inputForm");
		firstName=x.elements[0].value;
		numOfBoxes=x.elements[1].value;
		form.remove();
		const information=document.getElementsByTagName("h1")[0];
		information.textContent="Let's Play  " +firstName +" ...!!";
		const reslDiv=document.querySelector("#div2");
		reslDiv.innerHTML='';
		min=0; 
		pIndex=Math.floor((Math.random() * (numOfBoxes)));
		const container = document.querySelector(".row");
		for (var i =0; i < numOfBoxes; i++) {
		   if(i == pIndex){
			   image = new prizeImage(container,src);
		   }	
		   else{
		   	   image = new Image(container,src);
		   }   
		}
		
	}
}
