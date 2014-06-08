//dot notation object
/*  var car1 = new Object();
  car1.make = "Honda";
  car1.model = "CRZ";
  car1.year = "2010";
  car1.yearBought = "2011";
  //method
  this.mine = function(make, model){
  	return make, model;
  };
 
  myData = function(){
  	return "I like my " + this.make + " " + this.model;
};

  var car2 = new Object();
  car2.make = "Delorean";
  car2.model = "DMC-12";
  car2.year = "1983";
  //method
  this.mine = function(make, model){
  	return make, model;
  };
  
  car2.myData();
  myData = function(){
  	return "The " + this.make + " reminds me of the movie Back To The Future.";
};


  var car3 = new Object();
  car3.make = "Dodge";
  car3.model = "Viper";
  //method
  this.mine = function(make, model){
  	return make, model;
  };
  
  car3.myData();
  myData = function(){
  	return "The " + this.make + " " + this.model + " is a great car.";
};


  var car4 = new Object();
  car4.make = "Hennessey";
  car4.model = "Venom GT";
  //method
  car4.mine = function(make, model){
  	return make, model;
  };
  
  car4.myData();
  myData = function(){
  	return "I can't afford the " + this.make + " " + this.model + " car.";
};

  var car5 = new Object();
  car5.make = "Pagani";
  car5.model = "Huayra";
  //method
  car5.mine = function(make, model){
  	return make, model;
  };
 
  car5.myData();
  myData = function(){
  	return "The " + this.make + " " + this.model + " reminds me of the old lamborghini body style.";
};
*/
//------------------------------------------------------

//literal notation object
var suv = {
  'make' : 'Honda',
  'model' : 'Pilot',
  'year' : '2009',
  'color' : 'White',
  'yearBought' : 2010,
//method 
  "currentSuvAge" : function(){
  	return this.yearBought - suv.year;
  },
  
  "myData" : function(){
  	return "A few years ago I purchased a " + this.currentSuvAge() + " year old " + this.year + " " + this.make + " " + this.model +".";
  }
};


var corvette= {
  'make' : 'Corvette',
  'model' : 'Stingray',
  'year' : '1969',
  'color' : 'black',
//method 
  "dreamCar" : function(){
  	console.log(this.make);
  },
  
  "myData" : function(){
  	return "I have always wanted a " + this.color + " " + this.year + " " + this.make + " " + this.model;
  }
};

var Jaguar = {
  'make' : 'Jaquar',
  'model' : 'F Coupe',
  'year' : '2015',
  'color' : 'Red',
//method 
  "likeStyle" : function(){
  	return this.model;
  },
  
  "myData" : function(){
  	return "I just started liking the new " + this.model + " " + this.make + "'s";
  }
};

var Lambo = {
  'make' : 'Lamborghini',
  'model' : 'Marcielago',
  'year' : 'Any',
  'color' : 'Red',
//method 
  "topExotic" : function(){
  	return this.make;
  },
  
  "myData" : function(){
  	return "I would love to drive a " + this.color + " "+ this.make + " " + this.model;
  }
};


var Ferrari = {
  'make' : 'Ferrari',
  'model' : 'ANy',
  'year' : 'Any',
  'color' : 'red',
  'yearBought' : 2010,
//method 
  "tvCar" : function(){
  	return this.yearBought - this.year;
  },
  
  "myData" : function(){
  	return "Since the days of Magnum PI, I have loved the way a " + this.make + " looks.";
  }
};


var coolCars = [/*car1, car2, car3, car4, car5, */ suv, corvette, Jaguar, Lambo, Ferrari];
exports.data = coolCars;