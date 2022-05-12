import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import Router  from 'next/router';
import dynamic from "next/dynamic";


const progress = new ProgressBar({
  size:10,
  color:"#FE59SE",
  className:'z-50',
  delay:100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
let something = null
if (typeof window !== 'undefined') {
  console.log('You are on the browser')
something = require('tw-elements');

} else {
  console.log('You are on the server')
}


export default MyApp

