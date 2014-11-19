'use strict';

(function () {

	var drinks = [
		{
			"id": "guava_juice",
			"name": "Guava Juice",
			"price": 120,
			"image": "/images/guava.png",
			"description": "Juice from guava",
			"info": {
				"vitamins": ["C", "A", "E"],
				"kcal": 113,
				"density": "Thick",
				"flavor": "Sour"
			},
			"rate": {
				"rate": 4.8,
				"based": 10,
				"ratings": {
					"one": 0,
					"two": 0,
					"three": 0,
					"four": 2,
					"five": 8
				}
			},
			"comments": ["Tasty!", "Awesome!", "Give me two!"],
			"ingredients": ["Guava"]
		},
		{
			"id": "mango_juice",
			"name": "Mango Juice",
			"price": 140,
			"image": "/images/mango.png",
			"description": "Juice from Mango",
			"rate": {
				"rate": 4.1,
				"based": 4829,
				"ratings": {
					"one": 566,
					"two": 175,
					"three": 360,
					"four": 762,
					"five": 2966
				}
			}
		},
		{
			"id": "papaya_juice",
			"name": "Papaya Juice",
			"price": 120,
			"image": "/images/papaya.png",
			"description": "Juice from papaya",
			"rate": {
				"rate": 3.3,
				"based": 10,
				"ratings": {
					"one": 1,
					"two": 1,
					"three": 4,
					"four": 2,
					"five": 2
				}
			}
		},
		{
			"id": "kiwi_juice",
			"name": "Kiwi Juice",
			"price": 140,
			"image": "/images/kiwi.png",
			"description": "Juice from Kiwi"
		},
		{
			"id": "orange_juice",
			"name": "Orange Juice",
			"price": 140,
			"image": "/images/orange.png",
			"description": "Juice from Orange"
		},
		{
			"id": "watermelon_juice",
			"name": "Watermelon Juice",
			"price": 140,
			"image": "/images/watermelon.jpg",
			"description": "Juice from Watermelon"
		},
		{
			"id": "apple_juice",
			"name": "Apple Juice",
			"price": 140,
			"image": "/images/apple.png",
			"description": "Juice from Apple"
		},
		{
			"id": "banana_juice",
			"name": "Banana Juice",
			"price": 100,
			"image": "/images/banana.png",
			"description": "Juice from Banana"
		},
		{
			"id": "beetroot_juice",
			"name": "Beetroot Juice",
			"price": 100,
			"image": "/images/beetroot.png",
			"description": "Juice from Beetroot"
		},
		{
			"id": "lime_juice",
			"name": "Lime Juice",
			"price": 100,
			"image": "/images/lime.png",
			"description": "Juice from Lime"
		},
		{
			"id": "lemon_juice",
			"name": "Lemon Juice",
			"price": 100,
			"image": "/images/lemon.png",
			"description": "Juice from Lemon"
		},
		{
			"id": "passion_fruit_juice",
			"name": "Passion Fruit Juice",
			"price": 120,
			"image": "/images/passion_fruit.png",
			"description": "Juice from Passion Fruit"
		}
	];

	var ingredients = [
		{
			"id": "guava",
			"name": "Guava",
			"image": "/images/guava.png",
			"description": "Guava",
			"info": {
				"vitamins": ["C", "A", "E"],
				"kcal": 113,
				"density": "Thick",
				"flavor": "Sour"
			}
		},
		{
			"id": "mango",
			"name": "Mango",
			"image": "/images/mango.png",
			"description": "Mango"
		},
		{
			"id": "papaya",
			"name": "Papaya",
			"price": 120,
			"image": "/images/papaya.png",
			"description": "papaya"
		},
		{
			"id": "kiwi",
			"name": "Kiwi",
			"image": "/images/kiwi.png",
			"description": "Kiwi"
		},
		{
			"id": "orange",
			"name": "Orange",
			"image": "/images/orange.png",
			"description": "Orange"
		},
		{
			"id": "watermelon",
			"name": "Watermelon",
			"image": "/images/watermelon.jpg",
			"description": "Watermelon"
		},
		{
			"id": "apple",
			"name": "Apple",
			"image": "/images/apple.png",
			"description": "Apple"
		},
		{
			"id": "banana",
			"name": "Banana",
			"image": "/images/banana.png",
			"description": "Banana"
		},
		{
			"id": "beetroot",
			"name": "Beetroot",
			"image": "/images/beetroot.png",
			"description": "Beetroot"
		},
		{
			"id": "lime",
			"name": "Lime",
			"image": "/images/lime.png",
			"description": "Lime"
		},
		{
			"id": "lemon",
			"name": "Lemon",
			"image": "/images/lemon.png",
			"description": "Lemon"
		},
		{
			"id": "passion_fruit",
			"name": "Passion Fruit",
			"image": "/images/passion_fruit.png",
			"description": "Passion Fruit"
		}
	];

	localStorage.setItem('drinks', JSON.stringify(drinks));
	localStorage.setItem('ingredients', JSON.stringify(ingredients));

	angular.element(document).ready(function () {
		angular.bootstrap(document, ['avm']);
	});
})();
