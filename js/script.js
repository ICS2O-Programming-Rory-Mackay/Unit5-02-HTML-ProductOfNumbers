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

   // initialize numbers as empty string
  let product = 0
  
	// get user input for min
	let userInt1 = parseInt(document.getElementById('userInt1').value)

	// get user input for max
	let userInt2 = parseInt(document.getElementById('userInt2').value)
  
	// WHILE loop
	for (let counter = 1; counter <= userInt2; counter++) {
    // make number string with comma's
    product = product + userInt1
  }
  // display sequence back to user
	document.getElementById("message").innerHTML = product
} 