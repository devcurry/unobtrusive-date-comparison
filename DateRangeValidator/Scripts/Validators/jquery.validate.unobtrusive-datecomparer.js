$(function () {
    jQuery.validator.unobtrusive.adapters.add
        ('datecomparer', ['firstdate', 'seconddate', 'compare'], function (options) {
            var attribs = {
                firstdate: options.params.firstdate,
                seconddate: options.params.seconddate,
                compare: options.params.compare
            };
            options.rules['datecomparercheck'] = attribs;

            if (options.message) {
                $.validator.messages.datecomparercheck = options.message;
            }
        });

    jQuery.validator.addMethod(
        'datecomparercheck',
        function (value, element, params) {
            var result = false;
            if (value && (params['firstdate'] != null && params['seconddate'] != null)) {
                var startdatevalue = $('input[id="' + params['firstdate'] + '"]').datepicker().val();
                var enddatevalue = $('input[id="' + params['seconddate'] + '"]').datepicker().val();
                var dateFormat = $('input[id="' + params['firstdate'] + '"]').datepicker("option", "dateFormat");
                var sDate = moment(startdatevalue, "DD-MMM-YYYY");
                var eDate = moment(enddatevalue, "DD-MMM-YYYY");
                if (params['compare'] == 'GreaterThan') {
                    result = sDate > eDate;
                }
                else if (params['compare'] == 'LessThan') {
                    result = sDate < eDate;
                }
                else if (params['compare'] == 'Equals') {
                    result = sDate == eDate;
                }
            }
            return result;
        }
    );
} (jQuery));   