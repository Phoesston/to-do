export function projectForm(){
   const addBtn = document.getElementById('addProjectBtn');
   const formContainer = document.getElementById('addProjectFormContainer');
   const closeBtn = document.getElementById('closeFormBtn');

   if(!addBtn || !formContainer || !closeBtn){
    console.warn('Project form elements not found');
    return;
   }

   addBtn.addEventListener('click', () => {
    formContainer.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    formContainer.classList.add('hidden');
  });
}