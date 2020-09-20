
// Variable for input button
inputButton = $('.input');

//Add skills
$('#addSkill').on('click', function(e) {
    
    const newSkill = inputButton[0].value;
    const addedSkill = $(`
    <tr>    
        <td><button>X</button></td>
        <td>${newSkill}</td>
    </tr>
    `);

    $('table').append(addedSkill);
    inputButton[0].value = "";
});


// Remove Skills
$('table').on('click', 'button', function() {
    $(this).closest('tr').fadeOut(1000, function() {
        $(this).remove();
    });
});