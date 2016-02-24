var edxCapa = function() {

    return {

        init: function() {
            edxCapa.setupPanels();
            edxCapa.listenForToggle();
        },

        setupPanels: function() {
            $('.tab-panels .panel').each(function() {
                $(this)
                    .removeClass('is-active')
                    .hide();
            });

            $('.tabs .toggle').each(function() {
                $(this)
                    .removeClass('is-active')
                    .removeAttr('aria-pressed', 'false');
            });

            edxCapa.turnOnToggle($('.tabs .toggle')[0]);
            edxCapa.turnOnPanel($('.tab-panels .panel')[0]);
        },

        listenForToggle: function() {
            $('.tabs').on('click', '.toggle', function() {
                var panel = $(this).data('panel');

                edxCapa.turnOnToggle($(this));
                edxCapa.turnOnPanel($('#' + panel));
                edxCapa.sendFocusTo($('#' + panel));
            });
        },

        turnOffToggles: function() {
            $('.tabs .toggle').each(function() {
                $(this)
                    .attr('aria-pressed', 'false')
                    .removeClass('is-active');
            });
        },

        turnOnToggle: function(el) {
            edxCapa.turnOffToggles();

            $(el)
                .addClass('is-active')
                .attr('aria-pressed', 'true');
        },

        turnOffPanels: function() {
            $('.tab-panels .panel').each(function() {
                $(this)
                    .removeClass('is-active')
                    .hide();
            });
        },

        turnOnPanel: function(panel) {
            edxCapa.turnOffPanels();

            $(panel)
                .addClass('is-active')
                .show();
        },

        sendFocusTo: function(panel) {
            $(panel).focus();
        }
    }
}();
