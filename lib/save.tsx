import EditorsHelper from "./ReactEditor";

(function () {
  if ((window as any).LiuSynthethicsPluginNuclearReactor === undefined) {
    (window as any).LiuSynthethicsPluginNuclearReactor = function (
      blockId: string
    ) {
      const React = window.React as unknown as typeof import("react");
      const ReactDOM =
        window.ReactDOM as unknown as typeof import("react-dom/client");
      const renderPlant = document.getElementById(`editor-${blockId}`);

      if (renderPlant) {
        const renderPlanted = ReactDOM.createRoot(renderPlant);

        renderPlanted.render(<EditorsHelper blockId={blockId} />);
      }
    };
  }
})();
