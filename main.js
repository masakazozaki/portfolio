var svg = Snap('#sampleSVG02'),
    eFaceBefore = svg.select('#before'),
    eFaceAfter = svg.select('#after'),
    dFaceBefore = eFaceBefore.attr('d'),
    dFaceAfter = eFaceAfter.attr('d'),
    fnAnimation = function () {
        eFaceBefore.animate({
            'd': dFaceAfter
        }, 4000, function () {
            this.animate({
                'd': dFaceBefore
            }, 4000, function () {
                fnAnimation();
            });
        });
    };
fnAnimation();
