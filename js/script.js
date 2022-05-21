// Copyright 2022 Rory Mackay All rights reserved
//
// Created by: Rory Mackay
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays the product of the users two positive integers using addition
 */
function displayProduct () {
	
	// get user input for min
	let userInt1 = parseInt(document.getElementById('userInt1').value)

	// get user input for max
	let userInt2 = parseInt(document.getElementById('userInt2').value)

 // initialize counter
	let counter = userInt1

  // initialize numbers as empty string
  let product = ""
  
	// WHILE loop
	for (counter <= userInt2) {
    // make number string with comma's
    product = product + userInt1 + ", "
    // increment the counter
    counter++
  }
  // display sequence back to user
	document.getElementById("message").innerHTML = product
} 