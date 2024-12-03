let group = $(".group");
let form = $("#command-form");
let prepend = $(".prepend");
let lastCommand = "";
let delay = 500;
$("#browser-info").html(navigator.userAgent);
function bottom() {
  $(".window").animate({ scrollTop: $(document).height() }, 1);
}

$("#help").click(function () {
  $(".commandline").val("help").focus();
});

$(document).keydown(function (e) {
  if (e.keyCode == 38) {
    $(".commandline").val(lastCommand);
  }
});

let search = [
  "about",
  "help",
  "hello",
  "hi",
  "hey",
  "projects",
  "contact",
  "blog",
  "open blog",
  "clear",
  "red",
  "green",
  "rainbow",
  "def",
  "delay 0",
  "delay 100",
  "delay 500",
  "delay def",
  "github",
  "exit",
  "fullscreen",
];

$(function () {
  $(".commandline").on("keyup", function () {
    let val = $.trim(this.value);
    if (val.length < 2) {
      $("#placeholder").html("");
      return;
    }
    if (val) {
      val = val.toLowerCase();
      $.each(search, function (_, obj) {
        if (obj.toLowerCase().indexOf(val) != -1) {
          $("#placeholder").html(obj);
          $(document).keydown(function (e) {
            if (e.keyCode == 39) {
              $(".commandline").val(obj);
            }
          });
        }
      });
    }
  });
});

$(form).submit(function () {
  let input = $(".commandline").val().toLowerCase();
  lastCommand = input;
  if (input == "") {
    return;
  }

  let notfound =
    "<p>>> This command was not found. Please try 'help' to list all commands.</p>";
  let help =
    "<p>>> On this page, you can use the following commands:<br>-hello / hi / hey -> Hello<br>-about -> Detailed Information About Me<br>-projects -> My Projects<br>-contact -> Contact Information<br>-clear -> Clears the Page<br>-green -> Changes Color to Green<br>-red -> Changes Color to Red<br>-rainbow -> Changes Color with Rainbow Effect<br>-def -> Resets Color to Default<br>-delay 0 -> Removes Delay<br>-delay 100 -> Reduces Delay to 100ms<br>-delay def -> Resets Delay to Default<br>-Up Arrow Key -> Recalls Previous Command<br>-exit -> Closes Tab</p>";
  let about =
    "<p>>> I am Trynocs, a Minecraft Plugin Developer, i am currently working on learning Python. I currently only really now Java very well but i hope that changes over time. Feel free to contact me if you have any questions. ('contact')</p>";
  let contact =
    "<br>>> <a href='mailto:info@trynocs.com'>Email: info@trynocs.com</a> <br>";
  let projects =
    "<p><br><a target='_blank' href='https://www.spigotmc.org/resources/hologram-plugin.120233/'>Hologram Plugin</a><br><br><p>AIO by Trynocs (Work in Progress)</p><br><a target='_blank' href='https://www.trynocs.com/'>My Portfolio</a><br> </p>";
  prepend.append("<br>-" + input + "..");
  form.trigger("reset");
  setTimeout(function () {
    switch (input) {
      case "help":
        prepend.append(help);
        break;
      case "projects":
        prepend.append(projects);
        break;
      case "clear":
        prepend.html("");
        break;
      case "about":
        prepend.append(about);
        break;
      case "contact":
        prepend.append(contact);
        break;
      case "def":
        $(".window-inside").css("color", "#aeaeae");
        $(".commandline").css("color", "#aeaeae");
        break;
      case "green":
        $(".window-inside").css("color", "#7FFF00");
        $(".commandline").css("color", "#7FFF00");
        break;
      case "red":
        $(".window-inside").css("color", "#FF0000");
        $(".commandline").css("color", "#FF0000");
        break;
      case "rainbow":
        $(".window-inside").css("color", "transparent");
        $(".commandline").css("color", "transparent");
        $(".window-inside").addClass("rainbow");
        $(".commandline").addClass("rainbow");
        break;
      case "delay 0":
        delay = 0;
        prepend.append("<br>Delay set to 0ms.");
        break;
      case "delay 100":
        delay = 100;
        prepend.append("<br>Delay set to 100ms.");
        break;
      case "delay def":
        prepend.append("<br>Delay reset to 500ms.");
        delay = 500;
        break;
      case "exit":
        prepend.append("<br>Closing console..");
        window.top.close();
        break;
      case "hello":
        prepend.append(
          '<br>Hello dear visitor, I am Trynocs Portfolio. To help you better, you can use the "help" command.'
        );
        break;
      case "hi":
        prepend.append(
          '<br>Hello dear visitor, I am Trynocs Portfolio. To help you better, you can use the "help" command.'
        );
        break;
      case "hey":
        prepend.append(
          '<br>Hello dear visitor, I am Trynocs Portfolio. To help you better, you can use the "help" command.'
        );
        break;
      case "fullscreen":
        toggleFullScreen()
        break;
      default:
        prepend.append(notfound);
    }
    bottom();
  }, delay);
});

$(function () {
  $("#draggable").draggable();
});

function toggleFullScreen() {
    if (!document.fullscreenElement &&    
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
}