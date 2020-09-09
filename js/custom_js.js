
$(document).ready(function () {
    var max_fields = 5;
    var wrapper = $("#details_array");
    var add_button = $(".add_field_button");
    var all_set = $("#parent_fieldset");
    var x = 1;
    $(add_button).click(function (e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            var remove_button = '<button class = remove_field style=float:right;margin-bottom:5px;color:white;background:#ff1f6b;cursor:pointer;border:solid #ff1f6b;>Remove Field</button><div style="clear:both;"></div>'
            $(wrapper).append(all_set.html(), remove_button);
        }
    });

    $(wrapper).on("click", ".remove_field", function (e) {
        e.preventDefault();
        $(this).prev('div').remove();
        $(this).remove();
        x--;
    })

});