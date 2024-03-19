import React, { Component } from 'react'

export class KCommunicate extends Component {
    componentDidMount(){
      (function(d, m){
        var kommunicateSettings = 
            {"appId":"1d5e4c3baadfa32f01a60d5485e87680c","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); 
        s.type = "text/javascript"; 
        s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; 
        h.appendChild(s);
        window.kommunicate = m; 
        m._globals = kommunicateSettings;
    })
    (document, window.kommunicate || {});
    }
  render() {
    return (
      <div>
       hi
      </div>
    )
  }
}

export default KCommunicate
