$('document').ready(function () {

    var maxLength = 140;

    $('textarea').on('focus', function () {
        $(this).addClass('double-height');
        $('#tweet-controls').show();
    });

    $('textarea').on('blur', function () {
        if ($('textarea').val().length === 0) {
            $(this).removeClass('double-height');
            $('#tweet-controls').hide();
        }
    });

    $('#tweet-submit').on('blur', function () {
        $('textarea').removeClass('double-height');
        $('#tweet-controls').hide();
    });


    $('textarea').on('keyup', function () {
        var length = $(this).val().length;
        var remain = maxLength - length;
        $('#char-count').text(remain);
        if (remain > 10) {
            $('#char-count').css('color', 'black');
            $('#tweet-submit').prop('disabled', false);
        } else {
            $('#char-count').css('color', 'red');
            $('#tweet-submit').prop('disabled', false);
            if (remain < 0) {
                $('#tweet-submit').prop('disabled', true);
            }
        }
    });

    $('#tweet-submit').on('click', function () {
        var tweetText = $('.tweet-compose').val();
        var tweetedText = '<div class="tweet"><div class="content"><img class="avatar" src="img/alagoon.jpg" /><strong class="fullname">Drew Larson</strong><span class="username">@drewL</span><p class="tweet-text">' + tweetText + '</p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="img/jennyshen.jpg" /><img src="img/damenleeturks.jpg" /></div></div><div class="time">1:04 PM - 19 Sep 13</div></div><div class="reply"><img class="avatar" src="img/alagoon.jpg" /><textarea class="tweet-compose" placeholder="Reply to @drewL" /></textarea></div></div></div>'
        $('#stream').prepend(tweetedText);
        $('textarea.tweet-compose').val('');
        $('#char-count').text(maxLength);
    });

    $('.tweet').hover(function () {
        $(this).find('.tweet-actions').show();
    }, function () {
        $(this).find('.tweet-actions').hide();
    });

$('.reply').on('click', function() {
    $('.stats').show();
});

});