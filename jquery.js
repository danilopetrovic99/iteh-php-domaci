$(function () {
    pretraziZivotinje();
});

function pretraziZivotinje() {

    $(document).on('keydown', '#input-pretraga', function () {

        let ime_tip = this.value;

        $.ajax(
            {
                url: 'pretrazi.php',
                method: 'post',
                data: { POST_ime_tip: ime_tip },
                success: function (rez) {
                    {
                        $('#pretrazi-sort-tbl-body').html(rez);
                    }
                }
            }
        )
    })
}