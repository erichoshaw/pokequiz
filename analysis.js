// analyze and determine the resultant pokemon
var num_questions = 8

var attr_map = {
    "openness": 0,
    "adventurousness": 1,
    "creativity": 2,
    "intellectual": 3,
    "extraversion": 4,
    "seriousness": 5,
    "dependability": 6,
    "honesty": 7,
    "chaos": 8,
    "enterprising": 9,
    "sadness": 10,
    "stress": 11,
    "aggression": 12,
    "agreeableness": 13,
    "selflessness": 14,
    "masculinity": 15
}

var ques_attrs = {
    '1': 'openness',
    '2': 'adventurousness',
    '3': 'creativity',
    '4': 'intellectual',
    '5': 'extraversion',
    '6': 'seriousness',
    '7': 'dependability',
    '8': 'honesty'
}

var ques_stats =     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
var attr_collected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function get_q_attr(q_num) {
    return attr_map[ques_attrs[q_num.toString()]]
}

function read_results() {
    var result_array = [];
    var group_name = 'input[name=q';
    var selector;
    var i;
    for (i = 1; i < num_questions + 1; i++) {
        selector = group_name.concat(i.toString()).concat(']');
        result_array.push($(selector).filter(':checked').attr('id').substr(3));
    }
    console.log('result is ' + result_array);
    return result_array;
}

function transform_results(results) {
    var i;
    for (i = 0; i < results.length; i++) {
        results[i] = parseInt(results[i]);
        results[i] = results[i] - 4;
    }
    return results;
}

function apply_results(results) {
    attr_collected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var i;
    for (i = 0; i < results.length; i++) {
        attr_collected[get_q_attr(i + 1)] += results[i]
    }
    return attr_collected
}

function rta() {
    return apply_results(transform_results(read_results()))
}

function analyze() {
    var i;
    var attr_final = [];
    for (i = 0; i < attr_collected.length; i++) {
        attr_final[i] = attr_collected[i] * (50 / 3) * (1 / ques_stats[i]);
    }
    return attr_final;
}