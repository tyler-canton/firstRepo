import 'bootstrap'
import Cookies from 'js-cookie';
import './sass/main.scss'

// Global module
var fixMenuModule = (function (jQ) {

	function readyMenu(targetEl) {
		jQ(function () {


			jQ(window).on('scroll', function () {

				// Cookie check to add menu back
<<<<<<< HEAD
				if (jQ(window).scrollTop() < 20) {

					if (Cookies.get('menuFixed')) {
						Cookies.remove('menuFixed');
						jQ(targetEl).fadeIn();
					}
				}
				
=======
				if (Cookies.get('menuFixed')) {
					Cookies.remove('menuFixed');
					jQ(targetEl).fadeIn();
				}

>>>>>>> 2168429f82d429df9c9090b0a6bcb723116bff6c
				if (jQ(window).scrollTop() > 100) {
					jQ(targetEl).addClass('fixed');
				}
				else {
					jQ(targetEl).removeClass('fixed');
				}
			});

			// Hide menu and set cookie
			jQ('#closeEyebrow').on("click", function () {
				jQ(targetEl).fadeOut();
				Cookies.set('menuFixed', 'true');
			});
		});
	}

	function _funcDebug(msg, bug) {
		console.log(`DEBUG: ${msg} `, bug);
	}

	return {
		init: function (targetEl) {
			readyMenu(targetEl);
		}
	};

}(jQuery));

/**
 * @param {string} - Targeted element to fix to top of screen
 */
fixMenuModule.init('.eyebrow');
