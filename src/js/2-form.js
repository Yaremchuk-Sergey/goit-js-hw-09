const formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

// Використовуй метод делегування для відстеження

form.addEventListener('input', event => {
  const { name, value } = event.target;

  if (name in formData) {
    formData[name] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

// Збережених даних при завантаженні сторінки
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
  form.elements.email.value = formData.email;
}

// Обробка сабміту форми
form.addEventListener('submit', event => {
  event.preventDefault();

  // Перевірка на заповненість полів
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Будь ласка, заповніть усі поля');
    return;
  }

  console.log(formData);

  // Очищення: локальне сховище, formData, форма
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});
