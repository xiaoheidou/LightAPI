/**
 * Created by tt on 16/8/24.
 */
$(function(){
    $(".api-detail").each(function(){
        var divH = $(this).height(),
            $p = $("p", $(this)).eq(0);
        while ($p.outerHeight() > divH) {
            $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
        };
    });
});