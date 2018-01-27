var name = null;

function one() {
	var name = "The Window";
	var object = {　　　　
		name: "My Object",
		getNameFunc: function() {　　　　　　
			return function() {　　　　　　　　
				return this.name;　　　　　　
			};　　　　
		}　　
	};
	console.log(object.getNameFunc()());
};

window.one();


function two() {
	var name = "The Window";
	var object = {　　　　
		name: "My Object",
		getNameFunc: function() {　　　　　　
			var that = this;　　　　　　
			return function() {　　　　　　　　
				return that.name;　　　　　　
			};　　　
		}　　
	};
	console.log(object.getNameFunc()());
}