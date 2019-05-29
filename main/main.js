module.exports = function main(inputs) {
    // write your code here...
	var distance = inputs.distance;
	var parkTime = inputs.parkTime;
	var price = 0;
	if(distance<=2){
		price = 6;
	}else if(distance>2 && distance <=8 ){
		price = 6+(distance-2)*0.8;
	}else if(distance>8){
		price = 10.8+(distance-8)*1.2;
	}
	price = price + 0.25*parkTime;
	price = Math.round(price);
    return price;
};
