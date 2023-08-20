arrow = document.querySelector('.arrow').addEventListener('click', arrowBtn);

function arrowBtn(e) {
    const day = document.getElementById('day'),
        month = document.getElementById('month'),
    year = document.getElementById('year'),
    danger = document.querySelectorAll('.danger'),
    label = document.querySelectorAll('.day');

    const date = new Date().getFullYear(),
            agemonth = new Date().getMonth()+1,
            todayDate = new Date().getDate();
    

            const ageYear = document.querySelector('.age-year');
            const realMonth = document.querySelector('.age-month');
            const realDay = document.querySelector('.age-day');
    

   if(day.value == '') {
    label[0].style.color = 'red';
    danger[0].style.display = 'block';
    realDay.textContent = '';
   } 
   else if(isNaN(day.value) || day.value > 31){
    danger[0].innerHTML = 'Must be a valid day';
    label[0].style.color = 'red';
    danger[0].style.display = 'block';
   }
   else {
    label[0].style.color = 'black';
    danger[0].style.display = 'none';
   }
   
   
   if(month.value == '') {
    label[1].style.color = 'red';
    danger[1].style.display = 'block';
   } 
   else if(isNaN(month.value) || month.value > 12){
    danger[1].innerHTML = 'Must be a valid month';
    label[1].style.color = 'red';
    danger[1].style.display = 'block';
   }
   else {
    label[1].style.color = 'black';
    danger[1].style.display = 'none';
   }


   
   if(year.value == '') {
    label[2].style.color = 'red';
    danger[2].style.display = 'block';
   } 
   else if(isNaN(year.value) || year.value > date){

    danger[2].innerHTML = 'Must be a valid year';
    label[2].style.color = 'red';
    danger[2].style.display = 'block';
   }
   else {
    label[2].style.color = 'black';
    danger[2].style.display = 'none';
   }
   if( agemonth >= month.value  ) {
    ageYear.textContent =date - year.value;
    realMonth.textContent =   agemonth-month.value;
    realDay.textContent =   todayDate-day.value;
   } else {
   
    ageYear.textContent = date - year.value -1;

    realMonth.textContent =  (12 - month.value+ agemonth) ;
    realDay.textContent =   30-day.value+todayDate;
    
   }
   

   
   
}