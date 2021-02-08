const studioPlates = {};

studioPlates.dragPlates = () => {
    $(function () {
        $(".drag").draggable({
            containment: $('.plate').parent()});
    });
}

studioPlates.init = () => {
    studioPlates.dragPlates();
}

$(function () {
    studioPlates.init();
});