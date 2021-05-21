import React, { Fragment, useEffect, useRef } from 'react'
import $ from 'jquery';

const WebResource = () => {
    const listRef = useRef();
    useEffect(() => {


        // Now Attach All Third Party Scripts.
        let jQuery = document.createElement("script");
        let popper = document.createElement("script");
        let bootstrap = document.createElement("script");
        let modernizr = document.createElement("script");
        let themePunchTools = document.createElement("script");
        let themePunchSlider = document.createElement("script");
        let isotopeImage = document.createElement("script");
        let isotope = document.createElement("script");
        let magnific = document.createElement("script");
        let wayPoint = document.createElement("script");
        let wayPointSticky = document.createElement("script");
        let countTo = document.createElement("script");
        let parallax = document.createElement("script");
        let morphext = document.createElement("script");
        let rexExt = document.createElement("script");
        let revExtVideo = document.createElement("script");
        let revExtSlide = document.createElement("script");
        let revExtLayer = document.createElement("script");
        let template = document.createElement("script");

        // Hook Sources.
        jQuery.src = `${process.env.PUBLIC_URL}/vendor/jquery.min.js`;
        popper.src = `${process.env.PUBLIC_URL}/vendor/popper.min.js`;
        bootstrap.src = `${process.env.PUBLIC_URL}/vendor/bootstrap.min.js`;

        modernizr.src = `${process.env.PUBLIC_URL}/vendor/modernizr.js`;
        themePunchTools.src = `${process.env.PUBLIC_URL}/vendor/rs-plugin-5/js/jquery.themepunch.tools.min.js?rev=5.0`;
        themePunchSlider.src = `${process.env.PUBLIC_URL}/vendor/rs-plugin-5/js/jquery.themepunch.revolution.min.js?rev=5.0`;
        isotopeImage.src = `${process.env.PUBLIC_URL}/vendor/isotope/imagesloaded.pkgd.min.js`;
        isotope.src = `${process.env.PUBLIC_URL}/vendor/isotope/isotope.pkgd.min.js`;
        magnific.src = `${process.env.PUBLIC_URL}/vendor/magnific-popup/jquery.magnific-popup.min.js`;
        wayPoint.src = `${process.env.PUBLIC_URL}/vendor/waypoints/jquery.waypoints.min.js`;
        wayPointSticky.src = `${process.env.PUBLIC_URL}/vendor/waypoints/sticky.min.js`;
        countTo.src = `${process.env.PUBLIC_URL}/vendor/jquery.countTo.js`;
        parallax.src = `${process.env.PUBLIC_URL}/vendor/jquery.parallax-1.1.3.js`;
        morphext.src = `${process.env.PUBLIC_URL}/vendor/morphext/morphext.min.js`;
        rexExt.src = `${process.env.PUBLIC_URL}/vendor/owlcarousel2/owl.carousel.min.js`;
        revExtVideo.src = `${process.env.PUBLIC_URL}/vendor/rs-plugin-5/js/extensions/revolution.extension.video.min.js`;
        revExtSlide.src = `${process.env.PUBLIC_URL}/vendor/rs-plugin-5/js/extensions/revolution.extension.slideanims.min.js`;
        revExtLayer.src = `${process.env.PUBLIC_URL}/vendor/rs-plugin-5/js/extensions/revolution.extension.layeranimation.min.js`;
        template.src = `${process.env.PUBLIC_URL}/vendor/template.js`;



        // Persist order of Loading.
        jQuery.async = true;
        popper.async = true;
        bootstrap.async = true;
        modernizr.async = false;
        themePunchTools.async = false;
        themePunchSlider.async = false;
        isotopeImage.async = false;
        isotope.async = false;
        magnific.async = false;
        wayPoint.async = false;
        wayPointSticky.async = false;
        countTo.async = false;
        parallax.async = false;
        morphext.async = false;
        rexExt.async = false;
        revExtVideo.async = false;
        revExtSlide.async = false;
        revExtLayer.async = false;
        template.async = false;


        // Append to index.html
        document.body.appendChild(jQuery);
        document.body.appendChild(popper);
        document.body.appendChild(modernizr);
        document.body.appendChild(themePunchTools);
        document.body.appendChild(themePunchSlider);
        document.body.appendChild(isotopeImage);
        document.body.appendChild(isotope);
        document.body.appendChild(magnific);
        document.body.appendChild(wayPoint);
        document.body.appendChild(wayPointSticky);
        document.body.appendChild(countTo);
        document.body.appendChild(bootstrap);
        document.body.appendChild(parallax);
        document.body.appendChild(morphext);
        document.body.appendChild(rexExt);
        document.body.appendChild(revExtVideo);
        document.body.appendChild(revExtSlide);
        document.body.appendChild(revExtLayer);
        document.body.appendChild(template);

        // Do Clean ups
        return () => {
            document.body.removeChild(jQuery);
            document.body.removeChild(popper);
            document.body.removeChild(bootstrap);
            document.body.removeChild(modernizr);
            document.body.removeChild(themePunchTools);
            document.body.removeChild(themePunchSlider);
            document.body.removeChild(isotopeImage);
            document.body.removeChild(isotope);
            document.body.removeChild(magnific);
            document.body.removeChild(wayPoint);
            document.body.removeChild(wayPointSticky);
            document.body.removeChild(countTo);
            document.body.removeChild(parallax);
            document.body.removeChild(morphext);
            document.body.removeChild(rexExt);
            document.body.removeChild(revExtVideo);
            document.body.removeChild(revExtSlide);
            document.body.removeChild(revExtLayer);
            document.body.removeChild(template);
        };
    }, []);

    return (
        <Fragment>

        </Fragment>
    );
};

export default WebResource
