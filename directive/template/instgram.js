var ul = $('#gallery');
var url = 'http://api.flickr.com/services/feeds/photos_public.gne?&lat=22.8046&lon=86.2029&radius=7&per_page=10&page=1&format=json&jsoncallback=?';
imgs = '';

$.getJSON(url, function(data) {
    imgs = data;

    $(data.items).each(function(i, item) {
        ul.append($('<li><img src="' + item.media.m.slice(0,-5) + 'b.jpg" /><div class="caption">'+item.title+'</div></li>'))
        if (i == 40) return false
    });
    $('#images div').click(function() {
        $('#images div').removeClass('selected')
        $(this).addClass('selected')
    });
})



<ul id="gallery">
</ul>