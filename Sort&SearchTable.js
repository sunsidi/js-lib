var $rows = $('#ROW ID');
$('#SEARCH INPUT ID').keyup(function() {
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

    $rows.show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
});
//SORT THE TABLE WHEN CLICK THE TABLE HEADER
$('TABLE HEADER ID').click(function(){
    var table = $(this).parents('table').eq(0);
    var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()));
    this.asc = !this.asc;
    if (!this.asc){rows = rows.reverse();}
    for (var i = 0; i < rows.length; i++)
        {table.append(rows[i]);}
});
function comparer(index) {
    return function(a, b) {
        var valA = getCellValue(a, index), valB = getCellValue(b, index);
        return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB);
    };
};
function getCellValue(row, index){ 
    return $(row).children('td').eq(index).html(); 
}