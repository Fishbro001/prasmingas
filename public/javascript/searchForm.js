// Synchronize range sliders and input fields
const fromInput = document.getElementById('fromInput');
const toInput = document.getElementById('toInput');
const fromSlider = document.getElementById('fromSlider');
const toSlider = document.getElementById('toSlider');

// Update range sliders when input fields change
fromInput.addEventListener('input', function() {
    fromSlider.value = fromInput.value;
});

toInput.addEventListener('input', function() {
    toSlider.value = toInput.value;
});

// Update input fields when range sliders change
fromSlider.addEventListener('input', function() {
    fromInput.value = fromSlider.value;
});

toSlider.addEventListener('input', function() {
    toInput.value = toSlider.value;
});

// Ensure only one transport checkbox is selected at a time
const checkboxes = document.querySelectorAll('.select-only-one');
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
        checkboxes.forEach(cb => {
            if (cb !== checkbox) {
                cb.checked = false;
            }
        });
    });
});