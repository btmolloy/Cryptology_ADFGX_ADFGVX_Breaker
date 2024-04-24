    document.addEventListener('DOMContentLoaded', function () {
      const tabs = document.querySelectorAll('#cipherTabs .nav-item .nav-link');
      const buttonGroups = document.querySelectorAll('.button-group');
      const contentDivs = document.querySelectorAll('.content');

      function deactivateAll(elements) {
        elements.forEach(element => element.classList.remove('active', 'active-content'));
      }

      function activate(element, contentId = null) {
        element.classList.add('active');
        if (contentId) {
          const content = document.getElementById(contentId);
          if (content) {
            deactivateAll(contentDivs);
            content.classList.add('active-content');
          }
        }
      }

      function activateFirstButtonOfGroup(buttonGroup) {
        const firstButton = buttonGroup.querySelector('.btn');
        deactivateAll(buttonGroup.querySelectorAll('.btn'));
        activate(firstButton, firstButton.getAttribute('data-target'));
      }

      tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
          e.preventDefault();
          activateTabAndButtons(this);
        });
      });

      function activateTabAndButtons(tab) {
        deactivateAll(tabs);
        deactivateAll(buttonGroups);
        tab.classList.add('active');
        const buttonGroupID = tab.getAttribute('href').slice(1) + '-buttons';
        const buttonGroup = document.getElementById(buttonGroupID);
        buttonGroup.classList.add('active-content');
        activateFirstButtonOfGroup(buttonGroup);
      }

      buttonGroups.forEach(group => {
        const buttons = group.querySelectorAll('.btn');
        buttons.forEach(button => {
          button.addEventListener('click', function () {
            deactivateAll(buttons);
            activate(this, this.getAttribute('data-target'));
          });
        });
      });

      // Initialize the page with the first tab activated and its first button active
      if (tabs.length > 0) {
        tabs[0].click();
      }
   
   
   // --------------------------------------------------SUBMIT 1 BUTTON BELOW--------------------------------------------------------------
   
      document.getElementById('submit1').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default form submit action
        const keyword = document.getElementById('keyword1').value;
        const plainText = document.getElementById('plainText1').value;
        const translateFromSelect = document.getElementById('translateFrom1');
        const translateIntoSelect = document.getElementById('translateInto1')
        const fromValue = translateFromSelect.options[translateFromSelect.selectedIndex].value;
        const intoValue = translateIntoSelect.options[translateIntoSelect.selectedIndex].value;
        
        //console.log(fromValue);
        //console.log(intoValue);
        //console.log('PAGE 1: Keyword:', keyword);
        //console.log('Plain Text:', plainText);
        let num = 1;

        const gridInputs = document.querySelectorAll('.grid1 .row .cell input');
        let gridValues = Array.from(gridInputs).map(input => input.value);
      
        const validatedArray = validateArrayADFGX(gridValues, fromValue, intoValue, num);
        if (validatedArray === false) return;

        const validatedKeyword = validateKeyword(keyword, num);
        if (validatedKeyword === false) return;
        
        const validatedPlainText = validatePlainTextADFGX(plainText, validatedArray, fromValue, intoValue, num);
        if (validatedPlainText === false) return;



        let result = calculateResultADFGXEncrypt(validatedKeyword, validatedPlainText, validatedArray);
        displayResult(result, num);

    });


   // --------------------------------------------------SUBMIT 2 BUTTON BELOW--------------------------------------------------------------


        document.getElementById('submit2').addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default form submit action
            const keyword = document.getElementById('keyword2').value;
            const cipherText = document.getElementById('cipherText2').value;
            const translateFromSelect = document.getElementById('translateFrom2');
            const translateIntoSelect = document.getElementById('translateInto2')
            const fromValue = translateFromSelect.options[translateFromSelect.selectedIndex].value;
            const intoValue = translateIntoSelect.options[translateIntoSelect.selectedIndex].value;
            //console.log('PAGE 2: Keyword:', keyword);
            //console.log('Cipher Text:', cipherText);
            let num = 2;

            const gridInputs = document.querySelectorAll('.grid2 .row .cell input');
            let gridValues = Array.from(gridInputs).map(input => input.value);
        
            const validatedArray = validateArrayADFGX(gridValues, fromValue, intoValue, num);
            if (validatedArray === false) return;

            const validatedKeyword = validateKeyword(keyword, num);
            if (validatedKeyword === false) return;
            
            const validatedADFGXCipherText = validateADFGXCipherText(cipherText, num);
            if (validatedADFGXCipherText === false) return;

            

            let result = calculateResultADFGXDecrypt(validatedKeyword, validatedADFGXCipherText, validatedArray);
            displayResult(result, num);


        });



// --------------------------------------------------SUBMIT 3 BUTTON BELOW--------------------------------------------------------------

        document.getElementById('submit3').addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default form submit action
            const keyword = document.getElementById('keyword3').value;
            const plainText = document.getElementById('plainText3').value;
            //console.log('PAGE 3: Keyword:', keyword);
            //console.log('Plain Text:', plainText);
            let num = 3;
            
            const gridInputs = document.querySelectorAll('.grid3 .row .cell input');
            let gridValues = Array.from(gridInputs).map(input => input.value);
        
            const validatedArray = validateArrayADFGVX(gridValues, num);
            if (validatedArray === false) return;

            const validatedKeyword = validateKeyword(keyword, num);
            if (validatedKeyword === false) return;
            
            const validatedPlainText = validatePlainTextADFGVX(plainText, validatedArray, num);
            if (validatedPlainText === false) return;

          

            let result = calculateResultADFGVXEncrypt(validatedKeyword, validatedPlainText, validatedArray);
            displayResult(result, num);


        });



   // --------------------------------------------------SUBMIT 4 BUTTON BELOW--------------------------------------------------------------

        document.getElementById('submit4').addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default form submit action
            const keyword = document.getElementById('keyword4').value;
            const cipherText = document.getElementById('cipherText4').value;
            //console.log('PAGE 4: Keyword:', keyword);
            //console.log('Cipher Text:', cipherText);
            let num = 4;

            const gridInputs = document.querySelectorAll('.grid4 .row .cell input');
            let gridValues = Array.from(gridInputs).map(input => input.value);
        
            const validatedArray = validateArrayADFGVX(gridValues, num);
            if (validatedArray === false) return;

            const validatedKeyword = validateKeyword(keyword, num);
            if (validatedKeyword === false) return;
            
            const validatedADFGVXCipherText = validateADFGVXCipherText(cipherText, num);
            if (validatedADFGVXCipherText === false) return;

            

            let result = calculateResultADFGVXDecrypt(validatedKeyword, validatedADFGVXCipherText, validatedArray);
            displayResult(result, num);


        });




// --------------------------------------------------RESET BUTTONS BELOW--------------------------------------------------------------
        document.getElementById('reset1').addEventListener('click', function () {
            // Clear the keyword and cipher text inputs
            document.getElementById('keyword1').value = '';
            document.getElementById('plainText1').value = '';
            document.getElementById('resultText1').textContent = '';
            resetDropdownToInitial('translateFrom1');
            resetDropdownToInitial('translateInto1');

            // Clear all the grid inputs
            const gridInputs = document.querySelectorAll('.grid1 .row .cell input');
            gridInputs.forEach(function(input) {
                input.value = '';
            });
        });
        document.getElementById('reset2').addEventListener('click', function () {
            // Clear the keyword and cipher text inputs
            document.getElementById('keyword2').value = '';
            document.getElementById('cipherText2').value = '';
            document.getElementById('resultText2').textContent = '';
            resetDropdownToInitial('translateFrom2');
            resetDropdownToInitial('translateInto2');


            // Clear all the grid inputs
            const gridInputs = document.querySelectorAll('.grid2 .row .cell input');
            gridInputs.forEach(function(input) {
                input.value = '';
            });
        });
        document.getElementById('reset3').addEventListener('click', function () {
            // Clear the keyword and cipher text inputs
            document.getElementById('keyword3').value = '';
            document.getElementById('plainText3').value = '';
            document.getElementById('resultText3').textContent = '';

            // Clear all the grid inputs
            const gridInputs = document.querySelectorAll('.grid3 .row .cell input');
            gridInputs.forEach(function(input) {
                input.value = '';
            });
        });
        document.getElementById('reset4').addEventListener('click', function () {
            // Clear the keyword and cipher text inputs
            document.getElementById('keyword4').value = '';
            document.getElementById('cipherText4').value = '';
            document.getElementById('resultText4').textContent = '';

            // Clear all the grid inputs
            const gridInputs = document.querySelectorAll('.grid4 .row .cell input');
            gridInputs.forEach(function(input) {
                input.value = '';
            });
        });




// --------------------------------------------------RESET BUTTONS ABOVE--------------------------------------------------------------



        



document.getElementById('copyResult1').addEventListener('click', function () {
  const resultText = document.getElementById('resultText1').textContent;
  navigator.clipboard.writeText(resultText).then(() => {
    // You can add some notification to show the text was copied.
    //alert("Copied to clipboard!");
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });
});

document.getElementById('copyResult2').addEventListener('click', function () {
  const resultText = document.getElementById('resultText2').textContent;
  navigator.clipboard.writeText(resultText).then(() => {
    // You can add some notification to show the text was copied.
    //alert("Copied to clipboard!");
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });
});



document.getElementById('copyResult3').addEventListener('click', function () {
  const resultText = document.getElementById('resultText3').textContent;
  navigator.clipboard.writeText(resultText).then(() => {
    // You can add some notification to show the text was copied.
    //alert("Copied to clipboard!");
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });
});


document.getElementById('copyResult4').addEventListener('click', function () {
  const resultText = document.getElementById('resultText4').textContent;
  navigator.clipboard.writeText(resultText).then(() => {
    // You can add some notification to show the text was copied.
    //alert("Copied to clipboard!");
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });
});







    });
    
    // --------------------------------------------------ACTUALL CALCULATIONS BELOW--------------------------------------------------------------

    //NOTES: ALL KEYWORDS PASSED WILL BE a-z ALL LOWER CASE AND ATLEAST SOMETHING, NO EMPTY STRINGS AND NO SPACES
    
    // ALL PLAINTEXT LETTERS WILL BE LOWER CASE AND NUMBERS WILL BE NORMAL AND ATLEAST SOMETHING, NO EMPTY STRINGS. ALSO PLAINTEXT WILL BE MADE UP OF CHARACTERS IN ARRAY. ALSO THERE WILL BE NO SPACES IN STRING

    // ALL CIPHERTEXT LETTERS WILL BE LOWER CASE AND WILL BE ADFGX or ADFGVX. ALSO THERE WILL BE NO SPACES IN STRING. (You will have to make sure there are an even amount of CT)

    
    // EVERY GRIDVALUES ARRAY WILL BE FILLED, IF A USERS DOES NOT FULLY FILL THE ARRAY, "*" WILL BE FILLED IN FOR IT. ALSO THERE WILL BE NO SPACES IN ARRAY INPUT
    
    // ALL ERROR CHECKING HAS ALREADY BEEN COMPLETED.*

    // AN IMPORTANT THING TO REMEMBER WHILE COMPARING STRINGS IS I AND J ARE ON THE SAME GRID CELL

    // Error checking also checks for no input from user so the past variable SHOULD... contain something.*


    // --------------------------------------------------ADFGXEncrypt BELOW--------------------------------------------------------------

    function calculateResultADFGXEncrypt(keyword, plainText, gridValues) {
      console.log(gridValues.length);
      console.log(gridValues)

      CTSTRING = mapPlaintextToGrid(gridValues, plainText)
      //console.log(CTSTRING)

      const encryptedText = createColumnarTranspositionCipher(CTSTRING, keyword);
      // Return the calculated result as a string
      //console.log(keyword)
      //console.log(plainText)
      //console.log(gridValues)
      return encryptedText; 
  }


  function mapPlaintextToGrid(grid, plaintext) {
    const locations = [];
    for (let i = 0; i < plaintext.length; i++) {
        const letter = plaintext[i];
        const index = findLetterIndex(grid, letter);
        const position = getIndexPosition(index);
        locations.push(`${position.row}${position.column}`);  // Append position code to the array
    }
    const resultString = locations.join('');  // Join all position codes into a single string
    //console.log(resultString);
    return resultString;  // Returning the string if needed elsewhere
}

function getIndexPosition(index) {
    const labels = ['A', 'D', 'F', 'G', 'X'];  // Labels for rows and columns
    let column = labels[Math.floor(index / 5)];  // Determine column by dividing index by number of rows
    let row = labels[index % 5];  // Determine row by modulus operation
    return { row, column };
}

function findLetterIndex(grid, letter) {
    const index = grid.indexOf(letter);
    if (index === -1) {
        throw new Error(`The letter '${letter}' is not in the array.`);
    }
    return index;
}

function createColumnarTranspositionCipher(text, keyword) {
  // Normalize text and keyword
  keyword = keyword.replace(/[^A-Z]/gi, '').toUpperCase();

  // Create the grid dimensions
  const columns = keyword.length;
  const rows = Math.ceil(text.length / columns);
  const grid = [];

  // Populate the grid with the text
  for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
          const charIndex = i * columns + j;
          row.push(charIndex < text.length ? text[charIndex] : ''); // Fill with empty string if out of text length
      }
      grid.push(row);
  }

  // Map the keyword to column indices
  const sortedKeyword = keyword.split('').map((letter, index) => ({ letter, index }))
      .sort((a, b) => a.letter.localeCompare(b.letter));
  const columnIndexOrder = sortedKeyword.map(item => item.index);

  // Extract columns based on sorted keyword indices
  let ciphertext = '';
  for (const index of columnIndexOrder) {
      for (let row = 0; row < rows; row++) {
          if (grid[row][index] !== '') {
              ciphertext += grid[row][index];
          }
      }
  }

  return ciphertext;
}
    // --------------------------------------------------ADFGXEncrypt ABOVE--------------------------------------------------------------

    // --------------------------------------------------ADFGXDecrypt BELOW--------------------------------------------------------------


    function calculateResultADFGXDecrypt(keyword, cipherText, gridValues) {

      const transposedCT = reverseColumnarTransposition(cipherText, keyword);
      const final = decodeCipherText(transposedCT, gridValues);
      // Return the calculated result as a string
      //console.log(keyword)
      //console.log(cipherText)
      //console.log(gridValues);
      return final; 
  }





  function reverseColumnarTransposition(cipherText, keyword) {
    // 1. Determine the number of columns and rows
    const keywordLength = keyword.length;
    const rows = Math.ceil(cipherText.length / keywordLength);
    let multiDimensionalArray = Array.from({ length: keywordLength }, () => new Array(rows).fill(''));

  // Calculate padding and mark the padding positions with 'X'
  const padding = cipherText.length % keywordLength;
  if (padding !== 0) {
    let paddingAmount = keywordLength - padding;
    for (let i = 0; i < paddingAmount; i++) {
      multiDimensionalArray[(keywordLength - 1) - i][rows - 1] = 'X';
    }
  }


   
    // Create an array of keyword characters with their indexes
    let sortedKeywordIndexes = keyword.split('')
        .map((char, index) => ({ char, index }))
        .sort((a, b) => a.char.localeCompare(b.char) || a.index - b.index);
  
    // Fill the arrays with the ciphertext
    let cipherIndex = 0;
    for (const { index } of sortedKeywordIndexes) {
        for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
            if (multiDimensionalArray[index][rowIndex] === '') {
                if (cipherIndex < cipherText.length) {
                    multiDimensionalArray[index][rowIndex] = cipherText.charAt(cipherIndex);
                    cipherIndex++;
                }
            }
        }
    }

    let finalString = '';
    const rowsfinal = multiDimensionalArray[0].length;
  
    // Loop through each index in the row
    for (let rowIndex = 0; rowIndex < rowsfinal; rowIndex++) {
        // Loop through each column array
        for (let arrayIndex = 0; arrayIndex < multiDimensionalArray.length; arrayIndex++) {
            if (multiDimensionalArray[arrayIndex][rowIndex] !== 'X') {
                finalString += multiDimensionalArray[arrayIndex][rowIndex];
            }
        }
    }

    return finalString;
}


function decodeCipherText(cipherText, grid) {
  const labels = ['A', 'D', 'F', 'G', 'X']; // Labels for rows and columns

  cipherText = cipherText.toUpperCase(); 
  //console.log("cipherText: " + cipherText);

  let decodedString = '';

  // Process two characters at a time
  for (let i = 0; i < cipherText.length; i += 2) {
      const rowChar = cipherText[i];
      const colChar = cipherText[i + 1];


      // Find the row and column numbers
      const row = labels.indexOf(rowChar);
      const col = labels.indexOf(colChar);

      //console.log("Row: " + row + " | Col: " + col);



      // Convert row and column back to index in the grid
      const gridIndex = col * 5 + row;
      decodedString += grid[gridIndex];
  }

  //console.log(decodedString);
  return decodedString;
}



      // --------------------------------------------------ADFGXDecrypt ABOVE--------------------------------------------------------------


    function calculateResultADFGVXEncrypt(keyword, plainText, gridValues) {
      // Your calculation logic here...
      // Return the calculated result as a string
      console.log(keyword)
      console.log(plainText)
      console.log(gridValues)
      return "Calculated Result 3"; 
  }


    function calculateResultADFGVXDecrypt(keyword, cipherText, gridValues) {
      // Your calculation logic here...
      // Return the calculated result as a string
      console.log(keyword)
      console.log(cipherText)
      console.log(gridValues)

      return "Calculated Result 4"; 
  }


  // --------------------------------------------------ACTUALL CALCULATIONS ABOVE--------------------------------------------------------------
  // --------------------------------------------------ERROR CHECKING BELOW--------------------------------------------------------------


  function displayResult(result, num) {
    const resultText = document.getElementById('resultText'+ num);
    resultText.style.color = 'black'; // Set the color back to default if needed
    resultText.style.fontWeight = 'bold'; // Set the font weight back to default if needed
    resultText.textContent = result;
}

  function displayError(message, num) {
    const resultContainer = document.getElementById('resultText' + num);
    resultContainer.style.color = 'red';
    resultContainer.style.fontWeight = 'bold';
    resultContainer.textContent = message;
  }

  function validateArrayADFGX(gridArray, fromValue, intoValue, num) {
    let unique = new Set();
    let processedArray = gridArray.map(value => {
        let char = value.toLowerCase();
        if (char === '' || char === ' ') {
            return '*';  // Replace empty or space with '*'
        }
        if (unique.has(char)) {
            displayError('Duplicate letters found in the array.', num);
            return false;
        }
        unique.add(char);
        return char;
    });

    if (processedArray.includes(false)) {
        return false;
    }

    // Check if both fromValue and intoValue are in the grid
    let fromValueLower = fromValue.toLowerCase();
    let intoValueLower = intoValue.toLowerCase();
    let fromExists = processedArray.includes(fromValueLower);
    let intoExists = processedArray.includes(intoValueLower);

    if (fromExists && intoExists) {
        displayError('Both translation values are present in the grid.', num);
        return false;
    } else if (fromExists) {
        // If fromValue is in the grid, replace it with intoValue in the processedArray
        processedArray = processedArray.map(char => char === fromValueLower ? intoValueLower : char);
    }

    return processedArray;
}

  function validateArrayADFGVX(gridArray, num) {
    let unique = new Set();
    let processedArray = gridArray.map(value => {
      let char = value.toLowerCase();
      if (char === '' || char === ' ') {
        return '*';
      }
      if (unique.has(char)) {
        displayError('Duplicate letters found in the array.', num);
        return false;
      }
      unique.add(char);
      return char;
    });
    if (processedArray.includes(false)) {
      return false;
    }
    return processedArray;
  }


  function validateADFGVXCipherText(cipherText, num) {
    let processedCipherText = cipherText.toLowerCase().replace(/\s+/g, '');
    
    if (processedCipherText === "") {
      displayError('Please enter Cipher Text.', num);
      return false;
    }
    if (!/^[adfgvx]+$/.test(processedCipherText)) {
      displayError('Cipher Text for ADFGVX must only contain the letters A, D, F, G, V, X.', num);
      return false;
    }
    return processedCipherText;
  }

  function validateADFGXCipherText(cipherText, num) {
    let processedCipherText = cipherText.toLowerCase().replace(/\s+/g, '');
    if (processedCipherText === "") {
      displayError('Please enter Cipher Text.', num);
      return false;
    }
    if (!/^[adfgx]+$/.test(processedCipherText)) {
      displayError('Cipher Text for ADFGX must only contain the letters A, D, F, G, X.', num);
      return false;
    }
    
    return processedCipherText;
  }
  function validatePlainTextADFGVX(plainText, gridArray, num) {
    // Convert to lowercase, remove spaces and punctuation
    let processedPlainText = plainText.toLowerCase().replace(/[\s+\.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  
    // Check each character
    if (processedPlainText === "") {
      displayError('Please enter Plain Text.', num);
      return false;
    }
    for (let char of processedPlainText) {
      if (!gridArray.includes(char) && !/[\d\W_]/.test(char)) {
        displayError(`Character "${char}" in plain text is not found in the grid.`, num);
        return false;
      }
    }
    return processedPlainText;
  }


  function validatePlainTextADFGX(plainText, gridArray, fromValue, intoValue,  num) {
    // Convert to lowercase, remove spaces and punctuation
    let processedPlainText = plainText.toLowerCase().replace(/[\s+\.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  
    // Ensure fromValue is in lowercase for comparison
    let fromValueLower = fromValue.toLowerCase();

    // Replace all occurrences of fromValue with intoValue
    processedPlainText = processedPlainText.split('').map(char => 
        char === fromValueLower ? intoValue.toLowerCase() : char
    ).join('');    

    // Check each character
    if (processedPlainText === "") {
      displayError('Please enter Plain Text.', num);
      return false;
    }
    for (let char of processedPlainText) {
      if (!gridArray.includes(char) && !/[\d\W_]/.test(char)) {
        displayError(`Character "${char}" in plain text is not found in the grid.`, num);
        return false;
      }
    }
    return processedPlainText;
  }
  function validateKeyword(keyword, num) {
    let processedKeyword = keyword.toLowerCase().replace(/\s+/g, '');
    
    if (processedKeyword === "") {
      displayError('Please enter Keyword.', num);
      return false;
    }
    if (!/^[a-z]+$/.test(processedKeyword)) {
      displayError('Keyword must only contain letters from a-z.', num);
      return false;
    }
    return processedKeyword;
  }

  function resetDropdownToInitial(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const defaultValue = dropdown.getAttribute('data-default-value');
    dropdown.value = defaultValue;
}