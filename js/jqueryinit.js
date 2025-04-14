$(document).ready(function() {
    // Инициализация плагина после загрузки jQuery и validationEngine
    $("#register-form").validationEngine('attach', {
        promptPosition: "topLeft",
        scroll: false
    });
});