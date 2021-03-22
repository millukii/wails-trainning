import "core-js/stable";
const runtime = require("@wailsapp/runtime");

// Main entry point
function start() {
  var mystore = runtime.Store.New("QuestionSet");

  // Ensure the default app div is 100% wide/high
  var app = document.getElementById("app");
  app.style.width = "100%";
  app.style.height = "100%";

  // Inject html
  app.innerHTML = `
	<div class='logo'></div>
	<div class='container'>
	<button onClick='window.backend.QuestionSet.NextQuestion()'>
		Next Question
	</button>
	<button onClick='window.backend.QuestionSet.Random()'>
		Random
		</button>
	</div>
	<div class='result'>Question: Current score: <span id='counter'></span></div>
	<div class='container'>
		<input id='newResponse' type="text"/>
		<button id='setvalue'>Set my response</button>
		<button onclick='window.backend.Counter.RandomValue()'>Other responses</button>
	</div>
	`;

  // Connect counter value button to Go method
  document.getElementById("setvalue").onclick = function () {
    let newValue = parseInt(document.getElementById("newResponse").value, 10);
    mystore.set(newValue);
  };

  mystore.subscribe(function (state) {
    document.getElementById("counter").innerText = state;
  });

  mystore.set(0);
}

// We provide our entrypoint as a callback for runtime.Init
runtime.Init(start);
