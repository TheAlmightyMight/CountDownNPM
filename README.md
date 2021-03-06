<h1> # CountDownNPM. </h1>

<h2> NPM package that allows you to display a count down timer on a web page. </h2>

<h3> Import the package to your project </h3>
<pre>
<code>
import { countDownModule } from "/node_modules/@klimenty/count-down/index.js";
</code>
</pre>

<h3> Create a timer instance and pass it all the necesseary props for your count down.</h3>

<ol>
  <li> End date (string and date object only) </li>
  <li> Days element CSS class selector to display days (string only). </li>
  <li> Hours element CSS class selector to display hours (string only). </li>
  <li> Minutes element CSS class selector to display minutes (string only). </li>
  <li> Seconds element CSS class selector to display seconds (string only). </li>
</ol>

<pre>
<code>
const timer = countDownModule({
  cDate: new Date("June 22, 2022 00:00:00"),
  daysElement: ".time-day",
  hoursElement: ".time-hours",
  minutesElement: ".time-minutes",
  secondsElement: ".time-seconds",
});
</code>
</pre>

<h3> Stop the timer (setTimeout recommended) </h3>
<pre>
<code>
setTimeout(timer.stop(), ms);
</code>
</pre>

<b> Klimenty 2022 </b>
