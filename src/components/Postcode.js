import React from 'react';
import { Text, View } from 'react-native'
import WebView from 'react-native-webview';

const html = `
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
	<style> html, body { width: 100%; height: 100%; margin:0px; padding: 0px; background-color: #ececec; } </style>
</head>
<body>
	<div id="layer" style="width:100%; min-height: 100%;"></div>
	<script type="text/javascript">
    function callback() {
			var element_layer = document.getElementById('layer');
			daum.postcode.load(function(){
				new daum.Postcode({
					...window.options,
					oncomplete: function(data) {
						window.ReactNativeWebView.postMessage(JSON.stringify(data));
					},
					onresize: function(size) {
						document.getElementById('layer').style.height = size.height + 'px';
					},
					onclose: function(state) {
						callback();
					},
					width : '100%',
					height: '100%',
				}).embed(element_layer);
			});
    }
		function initOnReady(options) {
    	window.options = options;
			var s = document.createElement('script');
			s.type = 'text/javascript'; s.src = 'https://ssl.daumcdn.net/dmaps/map_js_init/postcode.v2.js?autoload=false';
			s.onreadystatechange = callback; s.onload = callback;
			var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    }
	</script>
</body>
</html>
`;


const Postcode = (props) => {
	const { jsOptions, onSelected, ...otherProps } = props;
	const injectedJavaScript = `initOnReady(${JSON.stringify(jsOptions)});void(0);`;

	const onMessage = ({ nativeEvent }) => {
		try {
			nativeEvent.data && onSelected && onSelected(JSON.parse(nativeEvent.data));
		}
		catch (e) {
		}
	}

	return (
		<WebView
			{...otherProps}
			source={{ html, baseUrl: 'https://github.com' }}
			onMessage={onMessage}
			injectedJavaScript={injectedJavaScript}
			mixedContentMode={"compatibility"}
			onLoad={props.onLoad}
			// useWebKit={true}
			onShouldStartLoadWithRequest={() => true}
		/>
	);

};

export default Postcode;


