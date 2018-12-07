     const passGeneratorBtn = document.querySelector('button.password');
     const passLength = document.querySelector('.length');
     const spnNewPassword = document.querySelector('.newPassword');
     const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

     const newPassword = () => {
         const codeLength = passLength.value * 1
         let code = "";
         // if (codeLength = "") alert('wprowadź liczbę');
         if (isNaN(codeLength)) alert('wprowadź liczbę');

         // console.log(codeLength);
         for (let i = 0; i < codeLength; i++) {
             const index = Math.floor(Math.random() * chars.length)
             code += chars[index];
         }
         spnNewPassword.innerHTML = code;
         console.log(code)

     }

     passGeneratorBtn.addEventListener('click', newPassword)