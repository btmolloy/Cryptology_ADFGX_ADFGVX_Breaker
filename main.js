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
    document.getElementById('submit1').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default form submit action
        const keyword = document.getElementById('keyword1').value;
        const plainText = document.getElementById('plainText1').value;
        console.log('PAGE 1: Keyword:', keyword);
        console.log('Plain Text:', plainText);
        
        const gridInputs = document.querySelectorAll('.grid1 .row .cell input');
        gridInputs.forEach((input, index) => {
            console.log(`Grid input ${index + 1}:`, input.value);
        });
        
    });




        document.getElementById('submit2').addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default form submit action
            const keyword = document.getElementById('keyword2').value;
            const cipherText = document.getElementById('cipherText2').value;
            console.log('PAGE 2: Keyword:', keyword);
            console.log('Cipher Text:', cipherText);
            
            const gridInputs = document.querySelectorAll('.grid2 .row .cell input');
            gridInputs.forEach((input, index) => {
                console.log(`Grid input ${index + 1}:`, input.value);
            });

        });
        document.getElementById('submit3').addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default form submit action
            const keyword = document.getElementById('keyword3').value;
            const plainText = document.getElementById('plainText3').value;
            console.log('PAGE 3: Keyword:', keyword);
            console.log('Plain Text:', plainText);
            
            const gridInputs = document.querySelectorAll('.grid3 .row .cell input');
            gridInputs.forEach((input, index) => {
                console.log(`Grid input ${index + 1}:`, input.value);
            });

        });
        document.getElementById('submit4').addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default form submit action
            const keyword = document.getElementById('keyword4').value;
            const cipherText = document.getElementById('cipherText4').value;
            console.log('PAGE 4: Keyword:', keyword);
            console.log('Cipher Text:', cipherText);
            
            const gridInputs = document.querySelectorAll('.grid4 .row .cell input');
            gridInputs.forEach((input, index) => {
                console.log(`Grid input ${index + 1}:`, input.value);
            });

        });




// --------------------------------------------------RESET BUTTONS BELOW--------------------------------------------------------------
        document.getElementById('reset1').addEventListener('click', function () {
            // Clear the keyword and cipher text inputs
            document.getElementById('keyword1').value = '';
            document.getElementById('plainText1').value = '';

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

            // Clear all the grid inputs
            const gridInputs = document.querySelectorAll('.grid4 .row .cell input');
            gridInputs.forEach(function(input) {
                input.value = '';
            });
        });
// --------------------------------------------------RESET BUTTONS ABOVE--------------------------------------------------------------


    });
