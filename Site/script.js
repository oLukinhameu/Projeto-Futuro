document.addEventListener('DOMContentLoaded', function() {
    const quoteList = document.getElementById('quote-list');
    const quoteForm = document.getElementById('quote-form');

    // Adicionar citação ao enviar o formulário
    quoteForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const quoteInput = document.getElementById('quote');
        const quoteText = quoteInput.value.trim();

        if (quoteText !== '') {
            addQuote(quoteText);
            quoteInput.value = ''; // Limpar o campo de entrada
        }
    });

    // Função para adicionar citação à lista
    function addQuote(quoteText) {
        const li = document.createElement('li');
        li.textContent = quoteText;
        quoteList.appendChild(li);
    }
});
