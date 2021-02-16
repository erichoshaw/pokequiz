// analyze and determine the resultant pokemon
var num_questions = 2

function read_results() {
    var result_array = [];
    var group_name = 'input[name=q';
    var selector;
    var i;
    for (i = 1; i < num_questions + 1; i++) {
        selector = group_name.concat(i.toString()).concat(']');
        result_array.push($(selector).filter(':checked').attr('id'));
    }
    return result_array;
}
