    if (window.location.host === "www.khanacademy.org") {
        var locElm = setInterval(locationElm, 250);
        var addDuplicateBadges = setInterval(duplicateBadges, 100);
        var addEditUIInterval = setInterval(addCommentEditUI, 250);
        var deleteNotifs = setInterval(deleteNotif, 50);
        stopNotifOverflow();
        updateNotifs();
        if (url[3] === "computer-programming" || url[3] === "hour-of-code") {
            darkTheme();
            var addDarkToggleButton = setInterval(darkToggleButton, 250);
            var thumbnailInt = setInterval(addThumbnail, 250);
            if(url[4] !== "new") {
                var addFlags = setInterval(addFlagsToProgram, 250),
                    getDates = setInterval(showProgramDates, 250);
                evalFeatures();
                reportButton();
                widenProgram();
                addGuidelines();
            }
        } else if (url[3] === "profile") {
            centerPoints();
            var profileData = setInterval(getProfileData, 250);
            reportUserButton();
            if(url[5] == "discussion" && url[6] == "replies") {
                commentLinkGenerator = new CommentLinker(url[4] /* Username or kaid */);
                commentLinkGenerator.next();
                commentsButtonEventListener();
                var addCommentLinks = setInterval(commentLinks, 100);
            }
        } else if (url[5] === "browse") {
            var programFlags = setInterval(showProgramsFlags, 500);
        }
    }
})();