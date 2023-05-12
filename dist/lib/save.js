import EditorsHelper from "./ReactEditor";
(function () {
    if (window.LiuSynthethicsPluginNuclearReactor === undefined) {
        window.LiuSynthethicsPluginNuclearReactor = function (blockId) {
            var React = window.React;
            var ReactDOM = window.ReactDOM;
            var renderPlant = document.getElementById("editor-".concat(blockId));
            if (renderPlant) {
                //@ts-ignore
                var renderPlanted = ReactDOM.createRoot(renderPlant);
                renderPlanted.render(React.createElement(EditorsHelper, { blockId: blockId }));
            }
        };
    }
})();
